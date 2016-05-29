import { findDOMNode } from 'react-dom'

const Input = React.createClass({
    getInitialState() {
        return { valid:true, value: (this.props.defaultValue || '') }
    },
    
    getState() {
        return this.state
    },
    
    focus() {
        findDOMNode(this).firstChild.focus()
    },
    
    checkDirty() {
        let input = findDOMNode(this).firstChild
        if (input.value && input.value.length > 0) {
            findDOMNode(this).classList.add('is-dirty')
        } else {
            findDOMNode(this).classList.remove('is-dirty')
        }
    },
    
    onInput(ev) {
        this.checkDirty()
        this.setState({ value: ev.target.value })
    },
    
    onFocus() {
        findDOMNode(this).classList.add('is-focused')
    },
    
    onBlur(ev) {
        ev.stopPropagation()
        findDOMNode(this).classList.remove('is-focused')
        if (this.props['required'] && ev.target.value.length == 0) {
            this.setState({ valid: false})
        } else {
            this.setState({ valid: true })
        }
        if (this.props.onBlur) this.props.onBlur(ev)
    },
    
    componentDidUpdate() {
        this.checkDirty()
    },
    
    render() {
        let _cls = 'mdl-textfield mdl-js-textfield is-upgraded'
          , _stl = { 'width': '100%' }
        if (this.props['floating-label']) _cls += ' mdl-textfield--floating-label'
        if (!this.state.valid) _cls += ' is-invalid'
        if (this.props['defaultValue']) _cls += ' is-dirty'
        return (
            <div className={_cls} style={_stl}>
                <input onBlur={this.onBlur} 
                    onFocus={this.onFocus} 
                    onInput={this.onInput} 
                    className='mdl-textfield__input' {...this.props} />
                <label className='mdl-textfield__label'>{this.props.label}</label>
                {this.props['errorMessage'] ? <span className='mdl-textfield__error'>{this.props.errorMessage}</span> : null}
            </div>
        )
    }
})

export default Input
