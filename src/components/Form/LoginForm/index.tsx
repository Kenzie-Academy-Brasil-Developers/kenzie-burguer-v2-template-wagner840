import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';

interface iLoginFormProps {
  name: string;
  register: unknown;
  submit: any;
}
const LoginForm = ({ submit, register, name }: iLoginFormProps) => (
  <StyledForm onSubmit={submit}>
    <Input register={register} name='email' />
    <Input register={register} name='password' />
    <StyledButton $buttonSize='default' $buttonStyle='green'>
      Entrar
    </StyledButton>
  </StyledForm>
);

export default LoginForm;
