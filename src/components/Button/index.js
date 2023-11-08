import './style.css'

const Button = ({name, onClick}) => {
    return <button className='submitBtn' onClick={onClick}>{name}</button>
}

export default Button