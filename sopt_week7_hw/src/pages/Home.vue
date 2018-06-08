<template>
    <v-container grid-list-lg>
        <v-layout row wrap v-for="board in boards" :key="board.board_idx">
            <v-flex xs12 sm10 md8 lg10 offset-sm1 offset-md2>
                <v-card>
                    <v-container fluid>
                        <v-card-media v-if="board.board_photo" contain height="300" :src="board.board_photo">

                        </v-card-media>
                        <v-card-title primary-title>
                            <div>
                                <router-link :to="{ name: 'detailBoard', params: { board_id: board.board_idx }}">{{board.board_title}}</router-link>
                                <div>{{board.board_content}}</div>
                            </div>
                        </v-card-title>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data() {
        return {

        }
    },
    methods:{},
    computed: {
        ...mapGetters ({
            boards: 'allBoards'
        }
        )
    },
    created () {
        if(this.boards.length === 0 ) {
            this.$store.dispatch('getAllBoards')
        }
    }

}

</script>

<style>

</style>
