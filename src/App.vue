<template>
  <div id="app">
 
    <ry-header></ry-header>
    <ry-home></ry-home>
    <ry-footer></ry-footer>
  </div>
</template>

<script>
import RyHeader from './components/header.vue';
import RyHome from './components/home.vue';
import RyFooter from './components/footer.vue';

export default {
  name: 'app',
  components:{RyHeader,RyHome,RyFooter}
} 
</script>

<style>
@import  "assets/css/bootstrap.min.css";
@import  "assets/css/icon/iconfont.css";
@import  "assets/css/ry-header.css";
@import  "assets/css/base.css";
@import  "assets/css/swiper.css";
</style>
