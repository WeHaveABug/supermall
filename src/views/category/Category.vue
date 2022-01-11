<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <template v-slot:center>商品分类</template>
    </nav-bar>
    <category-list
      :categories="categories"
      @categoryClick="categoryClick"
      class="category"
    />
    <scroll
      class="content1"
      :pull-up-load="true"
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3"
    >
      <category-list-item :subcategoryList="subcategoryList" />
      <tab-control :titles="titles" @tabClick="tabClick" ref="tabControl" />
      <goods-list :goods="categoryDetailList" />
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
// 公共组件导入
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

// 子组件导入
import CategoryList from "./childComps/CategoryList";
import CategoryListItem from "./childComps/CategoryListItem";

// 网络模块相关导入
import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "network/category";

export default {
  name: "Category",
  components: {
    NavBar,
    Scroll,
    TabControl,
    CategoryList,
    CategoryListItem,
    GoodsList,
    BackTop,
  },
  data() {
    return {
      categories: [],
      currentIndex: 0,
      titles: ["流行", "新款", "精选"],
      subcategoryList: [],
      categoryDetailList: [],
      isShowBackTop: false,
    };
  },
  created() {
    this.getCategory();
  },
  methods: {
    // 请求分类列表数据
    getCategory() {
      getCategory().then((res) => {
        // console.log(res);
        this.categories = res.data.category.list;
        this.$nextTick(() => {
          this.getSubcategory(this.categories[0].maitKey);
          this.getCategoryDetail(this.categories[0].miniWallkey, "pop");
        });
      });
    },
    // 请求分类详情数据
    categoryClick({ maitKey, index }) {
      this.currentIndex = index;
      this.getSubcategory(maitKey);
      // 每次切换分类初始化tabControl的下标
      this.$refs.tabControl.currentIndex = 0;
      // 请求对应的推荐列表
      this.getCategoryDetail(
        this.categories[this.currentIndex].miniWallkey,
        "pop"
      );
    },
    // 请求右侧分类菜单数据
    getSubcategory(key) {
      getSubcategory(key).then((res) => {
        this.subcategoryList = res.data.list;
      });
    },
    // 请求分类商品数据
    getCategoryDetail(key, type) {
      getCategoryDetail(key, type).then((res) => {
        this.categoryDetailList = res;
      });
    },
    tabClick(index) {
      const typeList = ["pop", "new", "sell"];
      // 切换类型数据
      this.getCategoryDetail(
        this.categories[this.currentIndex].miniWallkey,
        typeList[index]
      );
    },
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(createpositon) {
      this.isShowBackTop = -createpositon.y > 800;
    },
  },
};
</script>

<style scoped>
.nav-bar {
  color: #fff;
  background-color: var(--color-tint);
}

.content1 {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 14%;
  right: 0;
  overflow: hidden;
  max-width: 550px;
  margin: 0 auto;
}
.category {
  max-width: 740px;
  /* margin: 0 auto; */
  position: relative;
}
</style>