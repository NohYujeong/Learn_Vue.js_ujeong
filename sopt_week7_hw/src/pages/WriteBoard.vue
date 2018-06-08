<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 offset-sm3>
                <h2>글작성</h2>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12>
                <form @submit.prevent="onUploadBoard">
                    <v-layout row wrap>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field name="title" label="제목" id="title" v-model="title" required></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field name="description" label="글" id="description" v-model="description" multi-line required></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 offset-sm3>
                            <input type="file" :multiple="false" @change="onFileChange">
                        </v-flex>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-btn type="submit" color="success">
                                글쓰기
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

export default {
    data() {
        return {
            title: '',
            description: '',
            file: null
        }
    },
    methods : {
        onUploadBoard() {
            const data = new FormData()
            const user_idx = window.localStorage.getItem('user_idx')
            data.append('user_idx',user_idx)
            data.append('board_title', this.title)
            data.append('board_content',this.description)
            data.append('photo',this.file)
            for (var value of data.values()) {
            console.log(value); 
            }
            this.$store.dispatch('writeBoard',data)
            this.$store.dispatch('getAllBoards')
            this.$router.push('/')
        },
        onFileChange (event) {
            this.file = event.target.files[0]
        }
    }

}
</script>

<style>

</style>
