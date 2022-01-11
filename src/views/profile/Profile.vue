<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <template v-slot:center> 个人中心 </template>
    </nav-bar>
    <scroll class="content" :pull-up-load="true" :probe-type="3">
      <user-info />
      <account-info />
      <normal-list-view />
    </scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import UserInfo from "./childComps/UserInfo";
import AccountInfo from "./childComps/AccountInfo";
import NormalListView from "./childComps/NormalListView";

export default {
  name: "Profile",
  components: {
    NavBar,
    Scroll,
    UserInfo,
    AccountInfo,
    NormalListView,
  },
};
</script>

<style scoped>
#profile {
  background-color: #f2f2f2;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
  max-width: 740px;
  margin: 0 auto;
}
</style>
