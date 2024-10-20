import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { useUserContext } from '../../shared/hooks';
import { PLANS_ENDPOINT, plans as planLists } from '../../shared/constants';
import { List, PlanType } from '../../shared/interfaces';
import PlanCard from '../../components/ui/PlanCard';
import PlanTypeCard from '../../components/ui/PlanTypeCard';

import './Plans.scss'

const Plans = () => {

  const navigate = useNavigate();
  const { user } = useUserContext();
  const [plans, setPlans] = useState<List[]>();
  const [planSelected, setPlanSelected] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(PLANS_ENDPOINT);
      const { list: plans }: PlanType = await response.json();


      const [day, month, year] = user.birthDay.split('-').map(Number);
      const birthDate = new Date(year, month - 1, day);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();

      const filteredPlans = plans.filter((plan) => age <= plan.age)

      setPlans(filteredPlans);
    }

    if (user) fetchData();
    else {
      navigate('/')
    }
  }, []);

  const handlePlanSelected = (plan: number) => {
    setPlanSelected(plan);
  }

  const goBack = () => {
    navigate(-1);
  }

  return (
    <section className="plans">
      <div className="breadcrumb">
      </div>
      <div className="plans-container">
        <div className="arrow">
          <button onClick={goBack}>Volver</button>
        </div>
        <div className="plans-cards">
          <h1>{user?.name} ¿Para quién deseas cotizar?</h1>
          <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
          <div className='plans-cards-container'>
            {planLists.map((plan) => (
              <PlanCard key={plan.value} value={plan.value} handlePlanSelected={handlePlanSelected} isSelected={planSelected === plan.value}>
                <img className='card-image' src={plan.image} alt="person" />
                <h4 className='card-title'>{plan.title}</h4>
                <p className='card-description'>{plan.description}</p>
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