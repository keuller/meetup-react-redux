
const Snackbar = Vue.extend({
    template: `
        <div class='mdl-snackbar mdl-js-snackbar' aria-hidden='true'>
            <div class='mdl-snackbar__text'></div>
        </div>
    `,
    
    props: {
        timeout: { type: Number }
    },
    
    methods: {
        show(msg) {
            let _timeout = this.timeout || 2000,
                _el = this.$el
            _el.classList.add('mdl-snackbar--active')
            _el.setAttribute('aria-hidden', 'false')
            setTimeout(this.hidden, _timeout)
            _el.children[0].innerText = msg
        },
        
        hidden() {
            this.$el.classList.remove('mdl-snackbar--active')
            this.$el.setAttribute('aria-hidden', 'true')
        }
    }
})

Vue.component('mdl-snackbar', Snackbar)
