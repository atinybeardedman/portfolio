<template>
<transition name="fade">
    <div @click="close" class="modal flex-center-all" v-show="show">
        <button @click.stop.prevent="close" class="close-button">
            <span></span><span></span>
        </button>
        <div class="container">
            <header>
                <slot name="header"></slot>
            </header>
            <div class="modal-content">
                <slot></slot>
            </div>
            <footer>
                <slot name="footer"></slot>
            </footer>
        </div>
    </div>
</transition>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        show: {
            default: false,
            required: true
        }
    },
    methods: {
        close(){
            this.$emit("update:show", false);
        }
    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}

.modal {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.7);
}

.close-button{
    position: fixed;
    top:1em;
    left:1em;
    z-index: 2;
    background: none;
    border: none;
    outline: none;
}

.close-button:hover {
    cursor: pointer
}

.close-button span {
  display: block;
  width: 32px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: #cdcdcd;
  border-radius: 3px;
}

.close-button span:first-child {
  transform: translateY(5px) rotate(45deg)
}

.close-button span:last-child {
  transform: translateY(-4px) rotate(-45deg)
}
</style>