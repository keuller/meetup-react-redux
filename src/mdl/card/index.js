
const Card = Vue.extend({
    template: '<div class={{this.getClasses()}} style="width:100%;"><slot></slot></div>',
    
    props: {
        'customClassName': { type: String },
        'shadow': { type: Boolean }
    },
    
    methods: {
        getClasses() {
            let _cls = 'mdl-card'
            if (this['shadow']) _cls += ' mdl-shadow--2dp'
            if (this['customClassName']) _cls += (' ' + this['customClassName'])
            return _cls
        }
    }
})

const CardTitle = Vue.extend({
    template: '<div class={{this.getClasses()}}><slot></slot></div>',
    
    props: {
        'customClassName': { type: String }
    },
    
    methods: {
        getClasses() {
            let _cls = 'mdl-card__title'
            if (this['expanded']) _cls += ' mdl-card--expanded'
            if (this['customClassName']) _cls += (' ' + this['customClassName'])
            return _cls
        }
    }
})

const CardTitleText = Vue.extend({
    template: '<div class="mdl-card__title-text"><slot></slot></div>'
})

const CardContent = Vue.extend({
    template: '<div class="mdl-card__supporting-text"><slot></slot></div>'
})

const CardActions = Vue.extend({
    template: '<div class="mdl-card__actions mdl-card--border"><slot></slot></div>'
})

Vue.component('card', Card)
Vue.component('card-title', CardTitle)
Vue.component('card-title-text', CardTitleText)
Vue.component('card-content', CardContent)
Vue.component('card-actions', CardActions)
