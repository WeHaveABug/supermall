<template>
    <div class="toast">
        <transition class="toasttrans">
            <div class="toast-div" v-show="isShow">{{message}}</div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Toast',
    data () {
        return {
            message: '',
            isShow: false
        }
    },
    methods: {
        show(msg, delay=1000) {
            this.isShow = true;
            this.message = msg;
            setTimeout(() => {
                this.isShow = false;
            }, delay);
        }
    }
}
</script>

<style scoped>

.toast-div {
    z-index: 999;
    
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 8px 10px;
    
    background-color: rgba(0,0,0,.75);
    color: #fff;
    border-radius: 15px;
}

.toast-enter,
.toast-leave-to {
  opacity: 0;
}
.toast-enter-active {
  transition: opacity 1s;
}
.toast-leave-active {
  transition: opacity 1s;
}
</style>