import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { loginSchemaForm } from './loginSchemaForm';
import { StyledLoginPage } from './style';
import LoginForm from '../../components/Form/LoginForm';
import IllustrationBox from '../../components/IllustrationBox';
import { StyledButtonLink } from '../../styles/button';
import { StyledContainer, StyledGridBox } from '../../styles/grid';
import { StyledParagraph, StyledTitle } from '../../styles/typography';
import { UserContext } from '../../providers/UserContext';

const LoginPage = () => {
  const { loginUser } = useContext(UserContext);
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(loginSchemaForm),
  });

  function onSubmit(data: unknown) {
    loginUser(data);
  }

  return (
    <StyledLoginPage>
      <StyledContainer>
        <div className='flexGrid'>
          <div className='left'>
            <StyledGridBox className='formBox'>
              <StyledTitle tag='h2' $fontSize='three'>
                Login
              </StyledTitle>
              <LoginForm
                submit={handleSubmit(onSubmit)}
                register={register}
                name=''
              />
              <StyledParagraph textAlign='center' fontColor='gray'>
                Crie sua conta para saborear muitas delícias e matar sua fome!
              </StyledParagraph>
              <StyledButtonLink
                to='/register'
                $buttonSize='default'
                $buttonStyle='gray'
              >
                Cadastrar
              </StyledButtonLink>
            </StyledGridBox>
          </div>
          <div className='right'>
            <IllustrationBox />
          </div>
        </div>
      </StyledContainer>
    </StyledLoginPage>
  );
};

export default LoginPage;
