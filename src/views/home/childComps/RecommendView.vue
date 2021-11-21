<template>
    <div class="recommend">
        <div 
        class="recommend-item" 
        v-for = "(item, index) in recommends" 
        :key = "index"
        >
            <a :href = "item.link">
                <img :src = "item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "RecommendView",
    props: {
        recommends: {
            type: Array,
            default() {
                return []
            }
        }
}
}

</script>

<style scoped>
    .recommend{
        display: flex;
        width: 100%;
        text-align: center;
        font-size: 12px;
        padding: 15px 0 30px;
        border-bottom: 8px solid #eee;
    }

    .recommend-item{
        flex: 1;
        /* text-align: center;
        padding-top: 0.42rem;
        padding-bottom: 0.84rem;
        border-bottom: 0.42rem solid #eee;
        font-size: 0.7rem;  */
    }

    .recommend-item img{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin-bottom: 10px;
    }
</style>