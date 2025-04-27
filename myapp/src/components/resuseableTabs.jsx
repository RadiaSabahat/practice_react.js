export default function Tabs({children, buttons, buttonContainer}){
    //for shortcut we can simply write the first alphabet of the prop capital 
   const ButtonContainer = buttonContainer
   return <>
<ButtonContainer ButtonContainer>{ buttons}</ButtonContainer>
{children}
</>
};