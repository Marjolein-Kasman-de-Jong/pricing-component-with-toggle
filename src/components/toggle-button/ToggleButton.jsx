import './toggle-button.css';

function ToggleButton({checked, toggleChecked}) {
    console.log(checked)
    return (
        <button className='toggle-button' tabIndex='0' onClick={() => toggleChecked(!checked)}>
            <input type="checkbox" checked={checked} readOnly={true} />
            <span className="slider"></span>
        </button>
    )
}

export default ToggleButton;