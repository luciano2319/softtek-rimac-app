import './PlanCard.scss'
interface PlanCardProps {
  children: React.ReactNode; 
  value: any;
  handlePlanSelected: (plan: any) => void;
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