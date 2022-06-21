import { PrimaryButtonStyled, SecondaryButtonStyled,TeritaryButtonStyled,QuaternaryButtonStyled } from "./Button.elements"
 const MainButton = ({children}) => {
  return (
    <>
    <PrimaryButtonStyled>{children}</PrimaryButtonStyled>

    </>
  )
}
export const SecondButton = ({children}) => {
  return (
    <>

    <SecondaryButtonStyled>{children}</SecondaryButtonStyled>

    </>
  )
}
export const ThirdButton = ({children}) => {
  return (
    <>
    
    <TeritaryButtonStyled>{children}</TeritaryButtonStyled>

    </>
  )
}
export const FourthButton = ({children}) => {
  return (
    <>
    <QuaternaryButtonStyled>{children}</QuaternaryButtonStyled>
    </>
  )
}

export default MainButton