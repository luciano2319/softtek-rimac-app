import * as yup from 'yup';
import { DocumentTypes } from '../enums';

export const userSchema = yup.object({
    documentType: yup
        .string(),
    cellphone: yup
        .string()
        .matches(/^\+?\d+$/, 'El celular solo debe contener números y el símbolo +')
        .max(20, 'Solo puede ingresar un máximo de 20 caracteres')
        .required('El celular es obligatorio'),
    documentNumber: yup
        .string()
        .when('documentType', {
            is: (val: DocumentTypes) => val === DocumentTypes.DNI,
            then: (schema) => schema
                .matches(/^\d+$/, 'El documento solo debe contener números')
                .max(8, 'Solo puede ingresar un máximo de 8 dígitos'),
            otherwise: (schema) => schema
                .matches(/^[a-zA-Z0-9]+$/, 'El documento solo debe contener letras y números')
                .max(16, 'Solo puede ingresar un máximo de 16 caracteres'),
        })
        .required('El documento es obligatorio'),
    checkPrivacyPolicies: yup
        .boolean()
        .required('Debe leer y aceptar las políticas de privacidad')
        .oneOf([true], 'Debe leer y aceptar las políticas de privacidad'),
});