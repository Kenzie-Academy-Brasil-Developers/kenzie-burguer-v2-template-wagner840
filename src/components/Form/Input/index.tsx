import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface iInputProps {
  register: any;
  name: string;
}
const Input = ({ register, name }: iInputProps) => (
  <fieldset>
    <StyledTextField label={name} type='text' name={name} {...register(name)} />
    <StyledParagraph fontColor='red'>Erro</StyledParagraph>
  </fieldset>
);

export default Input;
