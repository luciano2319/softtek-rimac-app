import { useEffect, useState } from 'react'
import { useUserContext } from '../../shared/hooks';
import PlanCard from '../../components/ui/PlanCard';
import { PLANS_ENDPOINT, plans as planLists } from '../../shared/constants';

import './Plans.scss'
import PlanTypeCard from '../../components/ui/PlanTypeCard';
import { useNavigate } from 'react-router-dom';
import { List, PlanType } from '../../shared/interfaces';

const Plans = () => {

  const navigate = useNavigate();
  const { user } = useUserContext();
  const [plans, setPlans] = useState<List[]>();
  const [planSelected, setPlanSelected] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const response = await fetch(PLANS_ENDPOINT);
        const { list: plans }: PlanType = await response.json();


        const [day, month, year] = user.birthDay.split('-').map(Number);
        const birthDate = new Date(year, month - 1, day);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();

        const filteredPlans = plans.filter((plan) => age <= plan.age)

        setPlans(filteredPlans);
      }
    }

    fetchData();
  }, []);

  const handlePlanSelected = (plan: number) => {
    setPlanSelected(plan);
  }

  const goBack = () => {
    navigate(-1);
  }

  return (
    <section className="plans">
      <div className="breadcrum">

      </div>
      <div className="plans-container">
        <div className="arrow">
          <button onClick={goBack}>Volver</button>
        </div>
        <div className="plans-cards">
          <h1>{ user.name } ¿Para quién deseas cotizar?</h1>
          <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
          <div className='plans-cards-container'>
            {planLists.map((plan) => (
              <PlanCard key={plan.value} value={plan.value} handlePlanSelected={handlePlanSelected} isSelected={planSelected === plan.value}>
                <h4>{ plan.title }</h4>
                <p>{ plan.description }</p>
              </PlanCard>
            ))}
          </div>
        </div>

        <div className='plans-cards-types'>
          {
            planSelected && plans!.map(({ name, price, description }) => (
              <PlanTypeCard key={name} price={planSelected === 1 ? price : +(price * 0.95).toFixed(2)} description={description} name={name} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Plans