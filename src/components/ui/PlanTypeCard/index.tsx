import './PlanTypeCard.scss'
import home from '../../../assets/images/home.png';

interface PlanProps {
    name: string;
    price: number;
    description: string[];
}

const PlanTypeCard = ({ name, price, description }: PlanProps) => {

    return (
        <div className='plan-type-card'>
            <div className="plan-type-content">
                <div className="plan-type-content--header">
                    <div className="top">
                        <h3 className='title'>{name}</h3>
                        <div className="image">
                            <img src={home} alt="home" />
                        </div>
                    </div>
                    <div className="pricing">
                        <span className="subtitle">COSTO DEL PLAN</span>
                        <span className="price"><strong>${price} al mes</strong></span>
                    </div>
                </div>
                <hr />
                <ul>
                    {description.map((des) => (
                        <li key={des}>{des}</li>
                    ))}
                </ul>
            </div>
            <button className="plan-type-button">
                Seleccionar Plan
            </button>
        </div>
    )
}

export default PlanTypeCard