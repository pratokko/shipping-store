<template>
  <div class="bg-sky-500" style="height: 800px">
    <NavBar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
  export default {
    components: {
      NavBar,
      Footer
    }
    
  }
</script>