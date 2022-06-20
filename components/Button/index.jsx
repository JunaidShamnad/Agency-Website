import { ButtonStyled } from './Button.elements'

const Button = ({children}) => {
  return (
    <ButtonStyled>
        {children}
    </ButtonStyled>
  )
}

export default Button