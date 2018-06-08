<template>
    <v-container grid-list-lg>
        <v-layout row wrap>
            <v-flex xs12 sm10 md8 lg10 offset-sm1 offset-md2>
                <v-card>
                    <v-container fluid>
                        <v-card-media v-if="board.board_photo" contain height="300" :src="board.board_photo">
                        </v-card-media>
                        <v-card-title primary-title>
                            <div align="center">
                                <span class="headline">{{board.board_title}}</span><br>
                                <span class="grey--text">{{board.board_writetime}}</span><br>
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
            board: 'detailBoard'
        }
        )
    },
    created(){
        const id = this.$route.params.board_id
        this.$store.dispatch('getDetailBoard',id)
    }

}

</script>

<style>

</style>
