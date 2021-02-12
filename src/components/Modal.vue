<template>
<transition name="fade">
    <div @click="close" class="modal flex-center-all" v-show="show">
       <transition name="scale">
        <div @click.stop class="container modal-container" v-show="show">
            <header>
                <slot name="header"></slot>
            </header>
            <div class="modal-content">
                <slot></slot>
            </div>
        </div>
       </transition>
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

.scale-enter-active, .scale-leave-active {
  transition: transform .3s;
}

.scale-enter, .scale-leave-to {
    transform: scale(0.2);
}

.modal {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.7);
    z-index:2;
}

.modal-container {
    min-width: 50vw;
    max-width: 90vw;
    background: #eee;
    color: #6923CC;
    border-radius: 4px;
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