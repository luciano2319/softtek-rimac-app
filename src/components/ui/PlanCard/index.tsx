import React from 'react'
import './PlanCard.scss'

const PlanCard = ({ children, value, handlePlanSelected, isSelected }) => {
  
  return (
    <button className={ `plan-card  ${isSelected && 'selected'}` } onClick={() => handlePlanSelected(value)}>
      <div className='plan-card--header'>
        <input type="checkbox" checked={isSelected} />
      </div>
      { children }
    </button>
  )
}

export default PlanCard