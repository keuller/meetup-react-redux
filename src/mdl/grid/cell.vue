<template>
    <div class={{this.getClasses()}}><slot></slot></div>
</template>

<script>
    export default {
        props: {
            'size': { type: String }
        },
        
        methods: {
            getClasses() {
                let _cls = 'mdl-cell'
                _cls += ' mdl-cell--' + (this.size ? this.size : '1') + '-col'
                if (this.stretch) _cls += ' <mdl-cell-stret></mdl-cell-stret>ch'
                if (this.top) _cls += ' mdl-cell--top'
                if (this.middle) _cls += ' mdl-cell--middle'
                if (this.bottom) _cls += ' mdl-cell--bottom'
                if (this['mobile-size']) _cls += ' mdl-cell--'+ this['mobile-size'] +'-col-phone'
                if (this['tablet-size']) _cls += ' mdl-cell--'+ this['tablet-tablet'] +'-col-tablet'
                if (this['desktop-size']) _cls += ' mdl-cell--'+ this['desktop-tablet'] +'-col-desktop'
                if (this['mobile-hide']) _cls += ' mdl-cell--hide-phone'
                if (this['tablet-hide']) _cls += ' mdl-cell--hide-tablet'
                if (this['desktop-hide']) _cls += ' mdl-cell--hide-desktop'
                return _cls
            }
        }
    }
</script>
