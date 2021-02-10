<template>
    <div class="hex hexagon-container" :style="containerStyles">
        <div class="hex hexagon-content flex-center-all" :style="contentStyles">
                <slot></slot>
        </div>
    </div>
</template>



<script>
export default {
    props: ['styles', 'border'],
    computed: {
        contentStyles(){
            // TODO: do this with css variables maybe
            const styles =  {...this.styles, position: 'absolute'};
            styles.height = `calc(${styles.height} - ${this.border.size * 2}px)`;
            styles.width = `calc(${styles.width} - ${this.border.size * 2}px)`;
            styles.top = this.border.size + 'px';
            styles.left = this.border.size + 'px';
            return styles;
        },
        containerStyles(){
            const styles = {...this.styles, position: 'relative'};
            styles.color = styles.background;
            styles.background = this.border.color;
            return styles;
        }
    }
}
</script>


<style>

.hex{
    clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
}

.hexagon-content {
    transition: color 0.5s, background-color 0.5s;
}


.hexagon-content:hover {
    background: inherit !important;
    color: inherit !important;
}
</style>