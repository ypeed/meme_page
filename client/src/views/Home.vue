<template>
  <div class="bg-gray-100">
    <Navbar></Navbar>
    <Posts></Posts>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Posts from '../components/Posts'

export default {
  data() {
    return {

    }
  },
  components: {
    Navbar,
    Posts
  }
}
</script>

<style scoped>
</style>