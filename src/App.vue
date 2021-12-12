<template>
  <NavBar />
</template>

<script>
import NavBar from './components/NavBar.vue'
import SignUp from './views/SignUp.vue'
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: { NavBar, SignUp, Home },
  data() {
    return{
      title: 'My First Vue App'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
