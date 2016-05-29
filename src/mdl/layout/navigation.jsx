
export const Navigation = (props) => {
    return (<nav className='mdl-navigation'>{props.children}</nav>)
}

export const NavigationItem = (props) => {
    return (<a className='mdl-navigation__link' {...props}>{props.children}</a>)
}
