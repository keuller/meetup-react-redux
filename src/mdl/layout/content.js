const Content = Vue.extend({
    template: '<main class="mdl-layout__content"><slot></slot></main>'
})
    
Vue.component('content', Content)