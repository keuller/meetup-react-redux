import { findDOMNode } from 'react-dom'

const Snackbar = React.createClass({
    show(msg) {
        let _timeout = this.props.timeout || 2000
        findDOMNode(this).classList.add('mdl-snackbar--active')
        findDOMNode(this).setAttribute('aria-hidden', 'false')
        setTimeout(this.hidden, _timeout)
        findDOMNode(this).firstChild.innerText = msg
    },
    
    hidden() {
        findDOMNode(this).classList.remove('mdl-snackbar--active')
        findDOMNode(this).setAttribute('aria-hidden', 'true')
    },
    
    render() {
        let _cls = 'mdl-snackbar mdl-js-snackbar'
        if (this.props.top) _cls += ' mdl-snackbar--top'
        return (
            <div className={_cls} aria-hidden='true'>
                <div className='mdl-snackbar__text'></div>
            </div>
        )
    }
})

export default Snackbar