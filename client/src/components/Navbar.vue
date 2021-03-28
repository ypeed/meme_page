<template>
  <nav class="bg-white border border-gray-200">
    <div class=" max-w-5xl mx-auto">
      <div class="flex justify-between">

        <div>
          <router-link to="/" class="flex items-center py-3 px-3 text-gray-800">
            <svg class="h-8 w-8 mr-2 text-pink-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span class="text-gray-900 text-base font-semibold">MEME PAGE</span>
          </router-link>
        </div>

        <div class="hidden md:flex items-center space-x-1">
          <a class="py-3 px-2 text-gray-900 font-medium cursor-default">Hi, {{ user }}</a>
          <router-link to="/" class="py-3 px-2">
            <svg class="h-7 w-7 text-gray-700 hover:text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </router-link>
          <router-link to="/liked" class="py-3 px-2">
            <svg class="h-7 w-7 text-gray-700 hover:text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </router-link>
          <router-link to="/bookmark" class="py-3 px-2">
            <svg class="h-7 w-7 text-gray-700 hover:text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </router-link>
          <a @click="signout()" class="py-3 px-2" href="/login">
            <svg class="h-7 w-7 text-gray-700 hover:text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </a>
        </div>

        <div class="md:hidden flex items-center">
          <button @click="isShow = !isShow" class="mr-3">
            <svg class="h-7 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

        <div v-show="isShow" class="md:hidden">
          <router-link to="/" class="block py-2 px-4 text-sm hover:bg-gray-100" href="/">Home</router-link>
          <router-link to="/liked" class="block py-2 px-4 text-sm hover:bg-gray-100">Liked memes</router-link>
          <router-link to="/bookmark" class="block py-2 px-4 text-sm hover:bg-gray-100">Bookmarks</router-link>
          <a @click="signout()" class="block py-2 px-4 text-sm hover:bg-gray-100">Sign out</a>
        </div>

    </div>
  </nav>
</template>

<script>
import * as fb from '../firebase'

export default {
  data() {
    return {
      user: "",
      color: "",
      isShow: false,
    }
  },
  async created() {
      let user = fb.auth.currentUser;
      const userProfile = await fb.usersCollection.doc(user.uid).get();
      this.user = userProfile.data().name
  },
  methods: {
      signout() {
        fb.auth.signOut().then(() => {
          this.$router.push('/login');
        }).catch(error => {
          alert(error.message);
          this.$router.push('/');
        }) 
      }
  }
}
</script>

<style>

</style>