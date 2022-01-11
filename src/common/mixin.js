import BackTop from "components/content/backTop/BackTop"

export const backTopMinxin = {
    components: {
        BackTop
    },
    data() {
        return {
            isshow: false
        }
    },
    methods: {
        backTop() {
            this.$refs.scroll.scrollTo(0, 0, 300);
        },

    }
}