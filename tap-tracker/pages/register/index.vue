<template>
  <v-container>
    <v-form>
      <v-text-field v-model="email" label="Email" type="email" hint="Enter your Email"></v-text-field>
      <v-text-field v-model="password1" label="Password" type="password" hint="Enter your password"></v-text-field>
      <v-text-field
        v-model="password2"
        label="Confirm Password"
        type="password"
        hint="Enter your password again"
      ></v-text-field>
      <v-btn color="success" @click="onSignUp">Sign up</v-btn>
    </v-form>
  </v-container>
</template>
<script>
import AuthenticationService from '@/service/AuthenticationService'
export default {
  data() {
    return {
      email: '',
      password1: '',
      password2: ''
    }
  },
  methods: {
    async onSignUp() {
      const response = await AuthenticationService.register({
        email: this.email,
        password1: this.password1,
        password2: this.password2
      })

      console.log(response.data)
    }
  }
}
</script>
