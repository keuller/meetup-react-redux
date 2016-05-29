
export const Card = (props) => {
    let _cls = 'mdl-card'
      , _stl = { 'width': '100%' }
    if (props.shadow) _cls += ' mdl-shadow--2dp'
    if (props['customClassName']) _cls += (' ' + props['customClassName'])
    return (
        <div className={_cls} style={_stl}>{props.children}</div>
    )
}

export const CardTitle = (props) => {
    let _cls = 'mdl-card__title'
    if (props['expanded']) _cls += ' mdl-card--expanded'
    if (props['customClassName']) _cls += (' ' + props['customClassName'])
    return (
        <div className={_cls}>{props.children}</div>
    )
}

export const CardTitleText = (props) => {
    return (<div className='mdl-card__title-text'>{props.children}</div>)
}

export const CardContent = (props) => {
    return (<div className='mdl-card__supporting-text'>{props.children}</div>)
}

export const CardActions = (props) => {
    return (
        <div className='mdl-card__actions mdl-card--border'>{props.children}</div>
    )
}

export const CardMenu = (props) => {
    return (<div className='mdl-card__menu'>{props.children}</div>)
}
