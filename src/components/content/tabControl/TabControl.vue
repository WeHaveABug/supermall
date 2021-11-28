<template>
    <div class="tab-control">
        <!-- 填充文字：只是文字个数不确定,没必要搞插槽 -->
        <div
         v-for="(item, index) in titles"
         :key="index"
         class="tab-control-item"
         :class="{active: index === currentIndex}"
         @click="itemClick(index)"
         >
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "TabControl",
    // props: [Array]
    props: {
        titles: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data () {
        return {
            currentIndex: 0
            // 标记
        }
    },
    methods: {
        itemClick(index) {
            this.currentIndex = index
            this.$emit('tabClick', index)
            // 把这个自定义的点击事件给发射出去

            
        }
    }
}
</script>

<style scoped>
    .tab-control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    }

    .tab-control-item {
        flex: 1;
    }
    .tab-control-item span {
        padding: 5px;
    } 
    .active {
        color: var(--color-high-text);
        
    }
    .active span {
        border-bottom: 3px solid var(--color-tint);
    }
</style>