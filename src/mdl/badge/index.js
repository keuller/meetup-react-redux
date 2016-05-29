
const Badge = (props) => {
    return (
        <div className='material-icons mdl-badge mdl-badge--overlap' data-badge={props.value}>{props.children}</div>
    )
}

export default Badge
