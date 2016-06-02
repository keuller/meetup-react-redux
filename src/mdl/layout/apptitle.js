
const AppTitle = Vue.extend({
    template: `<span class='mdl-layout-title'>{{value}}</span>`,
    props: {
        'value': { type: String }
    }
})

Vue.component('app-title', AppTitle)
