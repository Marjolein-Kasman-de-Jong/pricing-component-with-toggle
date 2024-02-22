import './main.css';
import ToggleButtonComponent from '../toggle-button-component/ToggleButtonComponent';
import PlansComponent from '../plans-component/PlansComponent';

function Main({ checked, toggleChecked }) {
    return (
        <main>
            <ToggleButtonComponent options={['Annually', 'Monthly']} checked={checked} toggleChecked={toggleChecked} />
            <PlansComponent checked={checked} />
        </main>
    )
}

export default Main;