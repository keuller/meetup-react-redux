
const Navigation = Vue.extend({
    template: "<nav class='mdl-navigation'><slot></slot></nav>"
}) 

Vue.component('navigation', Navigation)
