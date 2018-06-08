<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-text>
                        <v-container fluid>
                            <form @submit.prevent="onSignUp">
                                <v-layout row wrap>
                                    <v-flex xs12>
                                        <v-text-field
                                        name="email"
                                        label="Email"
                                        id="email"
                                        type="email"
                                        v-model="email"
                                        required>
                                        </v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap>
                                    <v-flex xs12>
                                        <v-text-field
                                        name="password"
                                        label="Password"
                                        id="password"
                                        type="password"
                                        v-model="password"
                                        required></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap>
                                    <v-flex xs12>
                                        <v-text-field
                                        name="confirmPassword"
                                        label="Confirm Password"
                                        id="confirmPassword"
                                        type="password"
                                        v-model="confirmPassword"
                                        :rules="[checkPassword]"
                                        required></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap>
                                    <v-flex xs12>
                                        <v-btn type="submit" color="success">
                                            Sign UP
                                        </v-btn>
                                    </v-flex>
                                </v-layout>
                            </form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            confirmPassword: ''
        }
    },
    computed: {
        checkPassword () {
            return this.password !== this.confirmPassword ? '비밀번호가 일치하지 않습니다.' : true
        }
    },
    methods: {
        onSignUp () {
            const object = {
                user_id: this.email,
                user_pw: this.password
            }
            this.$store.dispatch('signUp',object)
            this.$router.push('/SignIn')
        }
    }
}
</script>

<style>

</style>
