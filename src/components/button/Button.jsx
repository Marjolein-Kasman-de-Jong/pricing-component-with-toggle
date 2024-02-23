import './button.css';

function Button({ buttonText }) {
    return (
        <button className='rect-button'>{buttonText.toUpperCase()}</button>
    )
}

export default Button;