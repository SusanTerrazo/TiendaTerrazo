import './ButtonNav.css'
const ButtonNav = (props) => {
    return <button className="ButtonNav" onClick={props.handleClick}>{props.label}</button>
}

export default ButtonNav