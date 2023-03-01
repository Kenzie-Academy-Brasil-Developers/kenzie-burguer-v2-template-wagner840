import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useContext } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { StyledRegisterPage } from './style';
import { registerSchemaForm } from './registerSchemaForm';
import RegisterForm from '../../components/Form/RegisterForm';
import IllustrationBox from '../../components/IllustrationBox';

import { StyledContainer, StyledGridBox } from '../../styles/grid';
import { StyledTitle } from '../../styles/typography';
import { UserContext } from '../../providers/UserContext';

const RegisterPage = () => {
  const { registerUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchemaForm),
  });

  function onSubmit(formData: unknown) {
    registerUser(formData);
  }

  return (
    <StyledRegisterPage>
      <StyledContainer>
        <div className='flexGrid'>
          <div className='left'>
            <IllustrationBox />
          </div>
          <div className='right'>
            <StyledGridBox className='formBox'>
              <header>
                <StyledTitle tag='h1' $fontSize='three'>
                  Cadastro
                </StyledTitle>
                <Link to='/'>Retornar para o login</Link>
              </header>

              <RegisterForm
                submit={handleSubmit(onSubmit)}
                register={register}
                errors={errors}
              />
            </StyledGridBox>
          </div>
        </div>
      </StyledContainer>
    </StyledRegisterPage>
  );
};

export default RegisterPage;
