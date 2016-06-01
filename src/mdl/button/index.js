
const RIPPLE_CONTAINER = 'mdl-button__ripple-container'
    , RIPPLE = 'mdl-ripple is-animating'
    
function buttonClasses(props) {
    let _cls = 'mdl-button mdl-js-button'
    if (props['success']) _cls += ' mdl-button--success'
    if (props['primary']) _cls += ' mdl-button--primary'
    if (props['fab']) _cls += ' mdl-button--fab'
    if (props['ripple']) _cls += ' mdl-js-ripple-effect'
    if (props['colored']) _cls += ' mdl-button--colored'
    if (props['raised']) _cls += ' mdl-button--raised'
    if (props['expanded']) _cls += ' mdl-expanded'
    if (props['accent']) _cls += ' mdl-color--accent'
    return _cls
}

const Button = Vue.extend({
    template: '<button type="button" v-on:click.prevent="clickHandler" class={{this.getClasses()}}><slot></slot></button>',
    
    props: {
        'event': { type: String },
        'flat': { type: Boolean },
        'fab' : { type: Boolean },
        'raised' : { type: Boolean },
        'colored': { type: Boolean },
        'success': { type: Boolean },
        'primary': { type: Boolean },
        'expaded': { type: Boolean },
        'accent' : { type: Boolean }
    },
    
    methods: {
        getClasses() {
            return buttonClasses(this)
        },
        
        clickHandler(ev) {
            if (this.event) this.$dispatch(this.event)
        }
    }
})

const LinkButton = Vue.extend({
    template: '<a v-on:click.prevent="clickHandler" class={{this.getClasses()}}><slot></slot></a>',
    
    props: {
        'event': { type: String },
        'flat': { type: Boolean },
        'fab' : { type: Boolean },
        'raised' : { type: Boolean },
        'colored': { type: Boolean },
        'success': { type: Boolean },
        'primary': { type: Boolean },
        'expaded': { type: Boolean },
        'accent' : { type: Boolean }
    },
    
    methods: {
        getClasses() {
            return buttonClasses(this)
        },
        
        clickHandler() {
            if (this.event) this.$dispatch(this.event)
        }
    }
})

Vue.component('mdl-button', Button)
Vue.component('link-button', LinkButton)

// export const IconButton = (props) => {
//     let _cls = 'mdl-button mdl-js-button mdl-button--icon'
//     if (props['colored']) _cls += ' mdl-button--colored'
//     let _icon = 'mdi mdi-' + props.icon
//     return (<button className={_cls} {...props}><i className={_icon}></i></button>)
// }
