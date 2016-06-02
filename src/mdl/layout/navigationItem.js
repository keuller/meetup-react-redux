
const NavigationItem = Vue.extend({
    template: '<a href="" class="mdl-navigation__link" @click.prevent="clickHandler()"><slot>&nbsp;</slot></a>',
    
    props: {
        event: { type: String }
    },
    
    methods: {
        clickHandler() {
            if (this.event) this.$dispatch(this.event)
        }
    }
})

Vue.component('navigation-item', NavigationItem)
