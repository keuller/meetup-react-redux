
const Badge = Vue.extend({
    template: '<div class="material-icons mdl-badge mdl-badge--overlap" data-badge={{value}}><slot></slot></div>',
    props: {
        value: { type: String }
    }
})

Vue.component('badge', Badge)
