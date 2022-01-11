<template>
  <div class="category-detail">
    <div
      class="category-detail-item"
      v-for="(item, index) in subcategoryList"
      :key="index"
    >
      <a :href="item.link">
        <img :src="item.image" />
        <p>{{ item.title }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryListItem",
  props: {
    subcategoryList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.category-detail {
  display: flex;
  flex-wrap: wrap; /* 超出部分换行处理 */
  justify-content: space-between;
  width: 100%;
  padding-top: 10px;
}
.category-detail-item {
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 80px;
  height: 100px;
  margin-bottom: 5px;
}
.category-detail-item img {
  width: 65px;
  margin-bottom: 5px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.category-detail-item p {
  font-size: 14px;
  text-align: center;
}
</style>