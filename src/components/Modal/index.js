import Icon from '../Icon'
import './style.css'

const Modal = ({children ,isOpen, setIsOpen}) => {

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <div className={isOpen ? 'container active' : 'container'}>
            <div className='wrapper'>
                <div
                 onClick={closeModal}
                  className='iconWrraper
                  '>
                    <Icon className={'ri-close-circle-line'} />
                    </div>
                {children}
            </div>
        </div>
    )

}

export default Modal