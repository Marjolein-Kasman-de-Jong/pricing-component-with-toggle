import './plan.css';
import Button from '../button/Button';

function Plan({ plan, checked }) {
    return (
        <article className={`plan ${(plan.plan).toLowerCase()}`}>
            <h2>{plan.plan}</h2>
                {checked ? 
                    <p className="price"><span>$</span>{plan.price.monthly}</p> 
                    : 
                    <p className="price"><span>$</span>{plan.price.annually}</p>
                }
            <p className="info storage">
                {`${plan.storage} Storage`}
            </p>
            <p className='info users'>
                {`${plan.users} Users Allowed`}
            </p>
            <p className="info send">
                {`Send up to ${plan.send} GB`}
            </p>
            <Button buttonText='learn more' />
        </article>
    )
}

export default Plan;