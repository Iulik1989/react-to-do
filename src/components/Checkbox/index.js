import './style.css'

const Checkbox = ({value, toggle}) => {

    const handleChange = () => {
        toggle(!value)
    }

    return <input
     className='checkbox'
      type='checkbox'
       value={value}
        onChange={handleChange}
         />
}

export default Checkbox