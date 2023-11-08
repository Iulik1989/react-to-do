import './style.css'

const Input = ({value, setValue, placeholder = 'To do name'}) => {

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return <input className='input' value={value} onChange={handleChange} placeholder={placeholder} />
}

export default Input