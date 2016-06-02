
const Icon = Vue.extend({
    template: '<div class={{this.getClasses()}}></div>',
    props: {
        value: { type: String }
    },
    methods: {
        getClasses() {
            return 'mdi mdi-' + this.value
        }
    }
})

Vue.component('icon', Icon)
