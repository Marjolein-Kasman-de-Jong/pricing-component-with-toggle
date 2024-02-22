import './button.css';

function Button({ buttonText }) {
    return (
        <button>{buttonText.toUpperCase()}</button>
    )
}

export default Button;