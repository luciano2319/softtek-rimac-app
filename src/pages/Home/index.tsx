import { useState } from 'react'

import { Button, CircularProgress } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import FormInputText from '../../components/ui/FormInputText';
import FormInputDropdown from '../../components/ui/FormInputDropdown';
import FormCheckbox from '../../components/ui/FormCheckbox';
import { documentTypes } from '../../shared/constants';
import { DocumentTypes } from '../../shared/enums';
import { useUserContext } from '../../shared/hooks';
import { userSchema } from '../../shared/schemas';
import { getUser } from '../../api';

import image from '../../assets/images/family.png';
import './Home.scss';
import { useNavigate } from 'react-router-dom';

interface FormValues {
  documentType: string;
  documentNumber: string;
  cellphone: string;
  checkPrivacyPolicies: boolean;
  checkComercialPolicies: boolean;
}

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useUserContext();

  const { handleSubmit, control } = useForm<FormValues>({
    resolver: yupResolver(userSchema),
    defaultValues: {
      documentType: DocumentTypes.DNI,
      documentNumber: '',
      cellphone: '',
      checkComercialPolicies: false,
      checkPrivacyPolicies: false,
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    
    const userInfo = await getUser();
    if (userInfo) {
      setUser({...data, ...userInfo});
      navigate('/plans');
    }

    setIsLoading(false);
  };

  return (
    <section className='home-container'>
      <div className="image">
        <img src={image} alt="familia" />
      </div>
      <aside className='form-container'>
        <div className='mobile-container'>
          <div>
            <span className="tag"><strong>Seguro Salud Flexible</strong></span>
            <h2 className="title">Creado para ti y tu familia</h2>
          </div>
          <div className="mobile-image">
            <picture>
              <img src={image} alt="familia" />
            </picture>
          </div>
        </div>
        <hr />
        <h4 className="subtitle">Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría 100% online.</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='input-group'>
            <FormInputDropdown name='documentType' label='Tipo Doc.' control={control} options={documentTypes} sx={{ mb:2, maxWidth: 120 }} />
            <FormInputText name='documentNumber' label='Número de documento' control={control} sx={{ mb:2, width: '100%' }}  />
          </div>
          <FormInputText name='cellphone' label='Celular' control={control} sx={{ mb:2, maxWidth: 450, display: 'block' }}  />
          <FormCheckbox name='checkPrivacyPolicies' label='Acepto la Política de Privacidad' control={control} sx={{ display: 'block' }}  />
          <FormCheckbox name='checkComercialPolicies' label='Acepto la Política de Comunicaciones Comerciales' control={control} sx={{ display: 'block' }}  />
          <p className='terms'>Aplican Términos y condiciones</p>
          <Button
            type='submit'
            variant='contained'
            sx={{ display: 'block', borderRadius: 50, mt: 2, background: 'black', padding: 2, fontFamily: 'Poppins' }}
            disabled={isLoading}
          >
            {isLoading && <CircularProgress size={15} color='inherit' />} <span>Cotizar aquí</span>
          </Button>
        </form>
      </aside>
    </section>
  )
}

export default Home