import { ButtonContainer } from './styles'

const Button = ({label, variant="primary", onClick}) => {
    return (
      <ButtonContainer onClick={onClick} type="button" variant={variant}>{label} </ButtonContainer>
    );
  }
  
  export default Button;