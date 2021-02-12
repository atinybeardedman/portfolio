<template>
    <div class="hex hexagon-container" :style="containerStyles">
        <div class="hex hexagon-content flex-center-all">
                <slot></slot>
        </div>
    </div>
</template>



<script>
export default {
    props: ['styles', 'border', 'sizes'],
    computed: {
        containerStyles(){
            const styles = {};
            styles['--hexagonSize'] = this.sizes.default;
            styles['--hexagonMobileSize'] = this.sizes.mobile;
            styles['--borderSize'] = this.border.size;
            styles['--hexColor'] = this.styles.background;
            styles['--fontColor'] = this.styles.color;
            styles['--borderColor'] = this.border.color;
            return styles;
        }
    }
}
</script>


<style>

.hex{
    clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
}

.hexagon-container {
    position:relative;
    background: var(--borderColor);
    width: var(--hexagonSize);
    height: var(--hexagonSize);
    background: var(--borderColor);
}

.hexagon-content {
    transition: color 0.5s, background-color 0.5s;
    height: calc(var(--hexagonSize) - calc(var(--borderSize) * 2));
    width: calc(var(--hexagonSize) - calc(var(--borderSize) * 2));
    top: var(--borderSize);
    left: var(--borderSize);
    background: var(--hexColor);
    color: var(--fontColor);
    position: absolute;
}


.hexagon-content:hover {
    background: inherit !important;
    color: inherit !important;
}

@media screen and (max-width: 600px){
    .hexagon-container {
        --hexagonSize: var(--hexagonMobileSize) !important;
        
    }
}
</style>