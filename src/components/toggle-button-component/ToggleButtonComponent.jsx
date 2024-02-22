import './toggle-button-component.css';
import ToggleButton from '../toggle-button/ToggleButton';

function ToggleButtonComponent({ options, checked, toggleChecked }) {
    return (
        <section className='toggle-button-component'>
            <p className='option'>{options[0]}</p>
            <ToggleButton checked={checked} toggleChecked={toggleChecked} />
            <p className='option'>{options[1]}</p>
        </section>
    )
}

export default ToggleButtonComponent;