
export const Layout = (props) => {
    let _cls = 'mdl-layout mdl-js-layout'
    if (props.fixed) _cls += ' mdl-layout--fixed-header'
    return (<div className={_cls}>{props.children}</div>)
}

export const AppBar = (props) => {
    return (
        <header className='mdl-layout__header'>
            <div className='mdl-layout__header-row'>{props.children}</div>
        </header>
    )
}

export const AppTitle = (props) => {
    return (
        <span className='mdl-layout-title'>{props.value}</span>
    )
}

export const Content = (props) => {
    return (
        <main className='mdl-layout__content'>{props.children}</main>
    )
}

export const LayoutSpacer = (props) => {
    return (<span className='mdl-layout-spacer'></span>)
}