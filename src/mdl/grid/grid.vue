<template>
    <div class={{this.getClasses()}}><slot></slot></div>
</template>

<script>
    export default {
        props: {
            'noSpacing': { type: Boolean }
        },
        
        methods: {
            getClasses() {
                let _cls = 'mdl-grid'
                if (this.noSpacing) _cls += ' mdl-grid--no-spacing'
                return _cls
            }
        }
    }
</script>
