import React from 'react'
import './PlanTypeCard.scss'

interface PlanProps {
    name: string;
    price: number;  
    description: string[]; 
}

const PlanTypeCard = ({ name, price, description }: PlanProps) => {

    return (
        <div className='plan-type-card'>
            <div className="plan-type-card--header">
                <h3 className='title'>{ name }</h3>
                <div className="image">

                </div>
            </div>
            <div className="plan-type-card--price">
                <span className="subtitle">COSTO DEL PLAN</span>
                <span className="price"><strong>${ price } al mes</strong></span>
            </div>
            <hr />
            <ul>
                {description.map((des) => (
                    <li key={des}>{des}</li>
                ))}
            </ul>
            <button className="plan-type-card--button">
                Seleccionar Plan
            </button>
        </div>
    )
}

export default PlanTypeCard