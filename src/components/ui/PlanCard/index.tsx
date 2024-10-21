import './PlanCard.scss'
interface PlanCardProps {
  children: React.ReactNode; 
  value: any; // Define el tipo de la prop 'value'
  handlePlanSelected: (plan: any) => void; // Define el tipo de la prop 'handlePlanSelected'
  isSelected: boolean; 
}

const PlanCard = ({ children, value, handlePlanSelected, isSelected }: PlanCardProps) => {
  
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