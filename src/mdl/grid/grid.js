const Grid = Vue.extend({
    template: '<div class={{this.getClasses()}}><slot></slot></div>',
    
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
})

Vue.component('grid', Grid)
