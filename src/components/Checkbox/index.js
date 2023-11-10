import './style.css'

const Checkbox = ({checked, toggle, title}) => {    

    const handleChange = () => {
        toggle(title)
    }

    return <input
     className='checkbox'
      type='checkbox'
      checked={checked}       
        onChange={handleChange}
         />
}

export default Checkbox