import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';

interface iRegisterFormProps {
  register: unknown;
  submit: any;
}

const RegisterForm = ({ submit, register }: iRegisterFormProps) => (
  <StyledForm onSubmit={submit}>
    <Input register={register} name='name' />
    <Input register={register} name='email' />
    <Input register={register} name='password' />
    <Input register={register} name='confirmPassword' />

    <StyledButton type='submit' $buttonSize='default' $buttonStyle='gray'>
      Cadastrar
    </StyledButton>
  </StyledForm>
);

export default RegisterForm;
