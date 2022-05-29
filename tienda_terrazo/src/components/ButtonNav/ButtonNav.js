const ButtonNav = (props) => {
    return <button onClick={props.handleClick} style ={{color: 'white', background: '#07C3E6', fontSize: 20, padding: 5}}>{props.label}</button>
}

export default ButtonNav