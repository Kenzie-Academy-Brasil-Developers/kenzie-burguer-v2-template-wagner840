import * as Yup from 'yup';

export const loginSchemaForm = Yup.object().shape({
  email: Yup.string()
    .required('O email é obrigatório')
    .email('O email é inválido'),
  password: Yup.string().required('A senha é obrigatória'),
});
