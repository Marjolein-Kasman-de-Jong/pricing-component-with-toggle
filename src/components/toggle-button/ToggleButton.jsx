import './toggle-button.css';

function ToggleButton({checked, toggleChecked}) {
    return (
        <label className='toggle-button'>
            <input type="checkbox" onClick={() => toggleChecked(!checked)}/>
            <span className="slider"></span>
        </label>
    )
}

export default ToggleButton;