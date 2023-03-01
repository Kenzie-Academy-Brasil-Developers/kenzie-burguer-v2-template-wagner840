import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { BaseSyntheticEvent } from 'react';
import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';

interface iRegisterFormProps {
  register: UseFormRegister<any>;
  submit: (
    e?: BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  errors?: FieldErrors<any>;
}
const RegisterForm = ({ submit, register, errors }: iRegisterFormProps) => (
  <StyledForm onSubmit={submit}>
    <Input register={register} name='name' />
    {errors?.name && (
      <div>
        {Object.values(errors.name).map((error, index) => (
          <span key={index}>{error.message}</span>
        ))}
      </div>
    )}

    <Input register={register} name='email' />
    {errors?.email && (
      <div>
        {Object.values(errors.email).map((error, index) => (
          <span key={index}>{error.message}</span>
        ))}
      </div>
    )}

    <Input register={register} name='password' />
    {errors?.password && (
      <div>
        {Object.values(errors.password).map((error, index) => (
          <span key={index}>{error.message}</span>
        ))}
      </div>
    )}

    <Input register={register} name='confirmPassword' />
    {errors?.confirmPassword && (
      <div>
        {Object.values(errors.confirmPassword).map((error, index) => (
          <span key={index}>{error.message}</span>
        ))}
      </div>
    )}

    <StyledButton type='submit' $buttonSize='default' $buttonStyle='gray'>
      Cadastrar
    </StyledButton>
  </StyledForm>
);

export default RegisterForm;
