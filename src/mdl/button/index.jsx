import { Component } from 'react'
import { findDOMNode } from 'react-dom'

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

function rippleEnabled(props) {
    if (props['ripple']) return true
    return false 
}

export class Button extends Component {
    constructor(props) {
        super(props)
    }
    
    onBlur(ev) {
        if (ev) {
            findDOMNode(this).blur()
        }
    }
    
    render() {
        let _cls = buttonClasses(this.props)
        if (!rippleEnabled(this.props)) {
            return (<button className={_cls} {...this.props}>{this.props.children}</button>)
        }
        return (
            <button className={_cls} {...this.props}>
                {this.props.children}
                <span className={RIPPLE_CONTAINER}>
                    <span className={RIPPLE} onMouseUp={this.onBlur}></span>
                </span>
            </button>
        )
    }
}

export const LinkButton = (props) => {
    let _cls = buttonClasses(props)
    return (<a className={_cls} {...props}>{props.children}</a>)
}

export const IconButton = (props) => {
    let _cls = 'mdl-button mdl-js-button mdl-button--icon'
    if (props['colored']) _cls += ' mdl-button--colored'
    let _icon = 'mdi mdi-' + props.icon
    return (<button className={_cls} {...props}><i className={_icon}></i></button>)
}
