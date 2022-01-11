<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name: "Scroll",
    props: {
        probeType: {
            type: Number,
            default: 1
        },
        pullUpLoad: {
            type: Boolean,
            default: true
        },
        observeDOM: {
            type: Boolean,
            default: false,
        },
    },
    data () {
        return {
            scroll: null
        }
    },
    mounted () {
        // 1. 创建BSscroll对象
        this.scroll = new BScroll(this.$refs.wrapper,
        {
            observeDOM: true, // 该配置是新版本需要添加的
            click: true,
            observeImage: true,
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad,
            taps: true,
            mouseWheel: true
            
        })
        // 2.监听滚动的区域
        if (this.probeType != 0) {
            this.scroll.on('scroll', (position) => {
            // console.log(position);
            this.$emit('scroll', position)
        })
        }
        

        // console.log(this.scroll.refresh);
        // 3.监听上拉事件
        if (this.pullUpLoad){
            this.scroll.on('pullingUp', () => {
            this.$emit('pullingUp')
            this.scroll.finishPullUp()
        }) 
        }
        
    },
    methods: {
        scrollTo(x, y, time=300) {
            this.scroll.scrollTo(x, y, time)
        },
        // refresh() {
        //     // console.log(111);
        //     this.scroll && this.scroll.refresh()
        // }
    }
}
</script>
