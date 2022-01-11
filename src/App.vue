<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive exclude="Detail">
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <main-tar-bar />
  </div>
</template>

<script>
import MainTarBar from "components/content/maintarbar/MainTarBar";

export default {
  name: "App",
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
