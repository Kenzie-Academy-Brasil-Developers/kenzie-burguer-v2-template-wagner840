import * as Yup from 'yup';

export const registerSchemaForm = Yup.object().shape({
  email: Yup.string()
    .required('O email é obrigatório')
    .email('O email é inválido'),
  password: Yup.string()
    .required('A senha é obrigatória')
    .min(6, 'A senha deve ter no mínimo 6 caracteres'),

  confirmPassword: Yup.string()
    .required('A confirmação de senha é obrigatória')
    .oneOf([Yup.ref('password')], 'As senhas precisam estar iguais'),
  name: Yup.string().required('O nome é obrigatório'),
});
