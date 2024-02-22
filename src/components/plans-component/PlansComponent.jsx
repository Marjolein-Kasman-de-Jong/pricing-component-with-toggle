import './plans-component.css';
import plans from '../../constants/plans';
import Plan from '../plan/Plan';

function PlansComponent({ checked }) {
    return (
        <section className='plans-component'>
            {
                plans.map((plan) => <Plan key={plan.plan} plan={plan} checked={checked} />)
            }
        </section>
    )
}

export default PlansComponent;