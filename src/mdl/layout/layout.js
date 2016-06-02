const Layout = Vue.extend({
    template: '<div class={{this.getClasses()}}><slot></slot></div>',
    props: {
        'fixed': { type: Boolean }
    },
    
    methods: {
        getClasses() {
            let _cls = 'mdl-layout mdl-js-layout'
            if (this.fixed) _cls += ' mdl-layout--fixed-header'
            return _cls
        }
    }
})

Vue.component('layout', Layout)
