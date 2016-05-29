
export const Grid = (props) => {
    let _cls = 'mdl-grid'
    if (props.noSpacing) _cls += ' mdl-grid--no-spacing'
    return (
        <div className={_cls}>{props.children}</div>
    )
}

export const Cell = (props) => {
    let _cls = 'mdl-cell'
    _cls += ' mdl-cell--' + (props.size ? props.size : '1') + '-col'
    if (props.stretch) _cls += ' <mdl-cell-stret></mdl-cell-stret>ch'
    if (props.top) _cls += ' mdl-cell--top'
    if (props.middle) _cls += ' mdl-cell--middle'
    if (props.bottom) _cls += ' mdl-cell--bottom'
    if (props['mobile-size']) _cls += ' mdl-cell--'+ props['mobile-size'] +'-col-phone'
    if (props['tablet-size']) _cls += ' mdl-cell--'+ props['tablet-tablet'] +'-col-tablet'
    if (props['desktop-size']) _cls += ' mdl-cell--'+ props['desktop-tablet'] +'-col-desktop'
    if (props['mobile-hide']) _cls += ' mdl-cell--hide-phone'
    if (props['tablet-hide']) _cls += ' mdl-cell--hide-tablet'
    if (props['desktop-hide']) _cls += ' mdl-cell--hide-desktop'
    return (
        <div className={_cls}>{props.children}</div>
    )
}
