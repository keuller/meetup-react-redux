
const Input = Vue.extend({
    template: `
        <div class={{this.getClasses()}} style="width:100%">
            <input type={{type}} v-on:blur='blurHandler'
                v-on:focus='focusHandler'
                v-on:input='inputHandler' 
                class='mdl-textfield__input'></input>
            <label class='mdl-textfield__label'>{{fieldLabel}}</label>
            <span v-if='errorMessage !== undefined' class='mdl-textfield__error'>{{errorMessage}}</span>
        </div>
    `,
    
    props: {
        'fieldLabel': { type: String },
        'maxLength': { type: String },
        'required': { type: Boolean },
        'type': { type: String },
        'floatingLabel': { type: Boolean },
        'defaultValue': { type: String },
        'errorMessage': { type: String }
    },
    
    methods: {
        getClasses() {
            let _cls = 'mdl-textfield mdl-js-textfield is-upgraded'
            if (this['floatingLabel']) _cls += ' mdl-textfield--floating-label'
            //if (!this.state.valid) _cls += ' is-invalid'
            if (this['defaultValue']) _cls += ' is-dirty'
            return _cls
        },
        
        value() {
            return this.$el.children[0].value
        },
        
        checkDirty() {
            let input = this.$el.children[0]
            if (input.value && input.value.length > 0) {
                this.$el.classList.add('is-dirty')
            } else {
                this.$el.classList.remove('is-dirty')
            }
        },
        
        blurHandler() {
            let val = this.$el.children[0].value
            this.$el.classList.remove('is-focused')
            if (this.required && val.length < 1) 
                this.$el.classList.add('is-invalid')
            else
                this.$el.classList.remove('is-invalid')
            //console.log()
        },
        
        focusHandler() {
            //this.$el.children[0].focus()
            this.$el.classList.add('is-focused')
        },
        
        inputHandler() {
            this.checkDirty()
        }
    }
})

Vue.component('mdl-input', Input)
