<template>
<div v-if="showLoginForm" class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <div>
      <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 mt-6 text-center text-5xl font-extrabold">MEME PAGE</h1>
      <h2 class="mt-6 text-center text-2xl font-bold text-gray-800">
        Log in to your account
      </h2>
    </div>
    <form class="mt-8 space-y-6" @submit.prevent>
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address1" class="sr-only">Email address</label>
          <input v-model="LoginForm.email" id="email-address1" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm" placeholder="Email address">
        </div>
        <div>
          <label for="password1" class="sr-only">Password</label>
          <input v-model="LoginForm.password" id="password1" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm" placeholder="Password">
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="text-sm">
          <p>
            Don't have an account? 
            <a @click="toggleForm()" href="#" class="font-medium text-pink-600 hover:text-pink-500">
              Create One
            </a>
          </p>
        </div>

        <div class="text-sm">
          <a href="#" class="font-medium text-pink-600 hover:text-pink-500">
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <button @click="login()"  :disabled="errorMsg != ''" type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-400 hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Log in
        </button>
      </div>
      <div>
        <p class="mt-6 text-center text-pink-600">
          {{ errorMsg }}
        </p>
      </div>
    </form>
  </div>
</div>


<div v-else class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <div>
      <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 mt-6 text-center text-5xl font-extrabold">MEME PAGE</h1>
      <h2 class="mt-6 text-center text-2xl font-bold text-gray-800">
        Sign up for free
      </h2>
    </div>
    <form @submit.prevent class="mt-8 space-y-6">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="name" class="sr-only">Name</label>
          <input v-model="RegisterForm.name" id="name" name="name" type="text" autocomplete="name" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm" placeholder="Name">
        </div>
        <div>
          <label for="email-address2" class="sr-only">Email address</label>
          <input v-model="RegisterForm.email" id="email-address2" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm" placeholder="Email address">
        </div>
        <div>
          <label for="password2" class="sr-only">Password</label>
          <input v-model="RegisterForm.password" id="password2" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm" placeholder="Password">
        </div>
      </div>

      <div class="flex items-center justify-center">
        <div class="text-sm">
            <a @click="toggleForm()" href="#" class="font-medium text-pink-600 hover:text-pink-500">
              Back to Login
            </a>
        </div>
      </div>

      <div>
        <button @click="register()" :disabled="errorMsg != ''"  prevent type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-400 hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Sign up
        </button>
      </div>
      <div>
        <p class="mt-6 text-center text-pink-600">
          {{ errorMsg }}
        </p>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import * as fb from "../firebase";
import AuthService from "../services/AuthService";

export default {
  data() {
    return {
      LoginForm: {
        email: "",
        password: ""
      },
      RegisterForm: {
        name: "",
        email: "",
        password: ""
      },
      showLoginForm: true,
      errorMsg: "",
    }
  },
  methods: {
    async login() {
      if(this.LoginForm.email == "" || this.LoginForm.password == ""){
        return
      }
      console.log('LOGING')
      const respose = await AuthService.register({ email: this.LoginForm.email, password: this.LoginForm.password})
      if(respose.data.res === "200 - OK"){
        fb.auth.signInWithEmailAndPassword(this.LoginForm.email, this.LoginForm.password)
          .then(() => {
            this.$router.push('/');
          })
          .catch((error) => {
            this.errorMsg = error.message
          });

      }else{
        this.errorMsg = "Invalid input"
      }
    },

    async register() {
      if(this.RegisterForm.email == "" || this.RegisterForm.password == "" || this.RegisterForm.name == ""){
        return
      }
      console.log("test")
      const respose = await AuthService.register({ email: this.RegisterForm.email, password: this.RegisterForm.password})
      if(respose.data.res === "200 - OK"){
        try{
          const { user } = await fb.auth.createUserWithEmailAndPassword(
            this.RegisterForm.email,
            this.RegisterForm.password
          );

          await fb.usersCollection.doc(user.uid).set({
            name: this.RegisterForm.name,
          });

          this.$router.push('/');
        }catch(error){
          this.errorMsg = error.message
        }

      }else if(respose.data.res === "401 - email"){
        console.log("email not valid")
      }else if(respose.data.res === "401 - password"){
        console.log("password not valid")
      }
    },

    toggleForm() {
      this.showLoginForm = !this.showLoginForm;
    },
  },
  watch:{
    "LoginForm.email": function(newValue) {
      //eslint-disable-next-line
      let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      let valid = res.test(String(newValue).toLowerCase());
      if(!valid){
        this.errorMsg = "Email is not correct"
      }else{
        this.errorMsg = ""
      }
    },
    "LoginForm.password": function(newValue) {
      //eslint-disable-next-line
      let lenght = /^.*(?=.{8,100}).*$/;
      let low = /^.*(?=.*[a-z]).*$/
      let upper = /^.*(?=.*[A-Z]).*$/
      let dig = /^.*(?=.*\d).*$/

      if(!lenght.test(String(newValue))){
        this.errorMsg = "Password must be least 8 char long"
      }else if(!low.test(String(newValue))){
        this.errorMsg = "Password must contain at least one lowercase char"
      }else if(!upper.test(String(newValue))){
        this.errorMsg = "Password must contain at least one upperercase char"
      }else if(!dig.test(String(newValue))){
        this.errorMsg = "Password must contain at least one digit"
      }else{
        this.errorMsg = ""
      }
    },
    "RegisterForm.password": function(newValue) {
      //eslint-disable-next-line
      let lenght = /^.*(?=.{8,100}).*$/;
      let low = /^.*(?=.*[a-z]).*$/
      let upper = /^.*(?=.*[A-Z]).*$/
      let dig = /^.*(?=.*\d).*$/

      if(!lenght.test(String(newValue))){
        this.errorMsg = "Password must be least 8 char long"
      }else if(!low.test(String(newValue))){
        this.errorMsg = "Password must contain at least one lowercase char"
      }else if(!upper.test(String(newValue))){
        this.errorMsg = "Password must contain at least one upperercase char"
      }else if(!dig.test(String(newValue))){
        this.errorMsg = "Password must contain at least one digit"
      }else{
        this.errorMsg = ""
      }
    },
    "RegisterForm.email": function(newValue) {
      //eslint-disable-next-line
      let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      let valid = res.test(String(newValue).toLowerCase());
      if(!valid){
        this.errorMsg = "Email is not correct"
      }else{
        this.errorMsg = ""
      }
    },
  }
}
</script>

<style>
</style>