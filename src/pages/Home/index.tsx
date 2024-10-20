import React, { useState } from 'react'

import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import FormInputText from '../../components/ui/FormInputText';
import FormInputDropdown from '../../components/ui/FormInputDropdown';
import FormCheckbox from '../../components/ui/FormCheckbox';
import { documentTypes } from '../../shared/constants';
import { DocumentTypes } from '../../shared/enums';
import { User } from '../../shared/interfaces';
import { userSchema } from '../../shared/schemas';
import { getUser } from '../../api';

import image from '../../assets/images/family.png';
import './Home.scss';

interface FormValues {
  documentType: string;
  documentNumber: string;
  cellphone: string;
  checkPrivacyPolicies: boolean;
  checkComercialPolicies: boolean;
}

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User>();

  const { handleSubmit, control } = useForm<FormValues>({
    resolver: yupResolver(userSchema),
    defaultValues: {
      documentType: DocumentTypes.DNI,
      checkComercialPolicies: false,
      checkPrivacyPolicies: false,
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    
    const userInfo = await getUser();
    if (userInfo) setUser({...data, ...userInfo});

    setIsLoading(false);
  };

  return (
    <section className='home-container'>
      <div className="image">
        <img src={image} alt="familia" />
      </div>
      <aside className='form-container'>
        <span className="tag"><strong>Seguro Salud Flexible</strong></span>
        <h2 className="title">Creado para ti y tu<br/>familia</h2>
        <h4 className="subtitle">Tú eliges cuánto pagar. Ingresa tus datos, cotiza<br/>y recibe nuestra asesoría 100% online.</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInputDropdown name='documentType' label='Tipo Doc.' control={control} options={documentTypes} sx={{ mb:2, maxWidth: 250 }} />
          <FormInputText name='documentNumber' label='Número de documento' control={control} sx={{ mb:2, maxWidth: 250 }}  />
          <FormInputText name='cellphone' label='Celular' control={control} sx={{ mb:2, maxWidth: 450, display: 'block' }}  />
          <FormCheckbox name='checkPrivacyPolicies' label='Acepto la Política de Privacidad' control={control} sx={{ display: 'block' }}  />
          <FormCheckbox name='checkComercialPolicies' label='Acepto la Política de Comunicaciones Comerciales' control={control} sx={{ display: 'block' }}  />
          <p className='terms'>Aplican Términos y condiciones</p>
          <Button
            type='submit'
            variant='contained'
            sx={{ display: 'block', borderRadius: 50, mt: 2, background: 'black', padding: 2, fontFamily: 'Poppins' }}
          >
            Cotizar aquí
          </Button>
        </form>
      </aside>
    </section>
  )
}

export default Home