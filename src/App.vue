<template>
  <div id="app">
    <router-view></router-view>

    <main-tar-bar class="tabbar"></main-tar-bar>
  </div>
</template>

<script>
import MainTarBar from "components/content/maintarbar/MainTarBar";

export default {
  name: "app",
  components: {
    MainTarBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
#app {
  max-width: 740px;
  margin: 0 auto;
}
</style>
