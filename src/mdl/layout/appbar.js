
const AppBar = Vue.extend({
    template: `<header class='mdl-layout__header'>
        <div class='mdl-layout__header-row'><slot></slot></div>
    </header>`
})

Vue.component('app-bar', AppBar)
