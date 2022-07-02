import styled from'styled-components';


export const Section = styled.section`
width: 100vw;
height: 100%;
max-width:100%;
`
export const Container = styled.div`
display:flex;
flex-direction:row;
justify-content: center;
height: 100%;
width: 90%;
max-width:1600px;
margin:5rem auto;
margin-top: 150px;
@media(max-width:767px){
    flex-direction: column;
}
`
export const LeftContainer = styled.div`
width:50%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
width: 100%;
padding-right: 0px;
}

`
export const RightContainer = styled.div`
width:50%;
padding-right: 50px;
display: flex;
flex-direction: row;
justify-content: space-between;
@media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
flex-direction: column;
justify-content: center;
width: 100%;
padding-right: 0px;
}
`
export const TestimonialDescription = styled.p``
export const TestimonialFirstContent = styled.div`
@media(max-width:767px){
    display:flex;
    overflow-x:scroll;
    flex-direction: row;


}
&::-webkit-scrollbar{
    display: none;
}
`
export const TestimonialAvatarImage = styled.img`
width:75px;
height:75px;
border-radius:50%;
@media(max-width:768px){
    width:50px;
    height:50px;
}
`
export const Testimonial = styled.div`
background-color: #7770a4;
margin-bottom: 30px;
padding: 20px;
border-radius:10px;
margin: 15px 15px;
color:#fff;
min-width:250px;
`
export const TestimonialAvatar = styled.div`
display: flex;
flex-direction: row;
align-items:center;
margin-bottom: 20px;
`
export const TestimonialAvatarName = styled.h1`
margin-left:20px;
font-size:18px;
@media(max-width:767px){
    margin-left:15px;
}
`
export const LeftContainerContent = styled.div`
padding:20px;
@media(max-width:767){
    padding: 50px;
}
`
export const TesimonialSecondContent = styled.div`
margin-top:15%;
margin-left: 50px;
@media(max-width:767px){
    display:flex;
    overflow-x:scroll;
    flex-direction: row;
}
&::-webkit-scrollbar{
    display: none;
}
`
export const LeftContainerTitle = styled.h4`
font-size:32px;
`
export const LeftContainerMainHeading = styled.h1`
width:60%;
font-size:64px;
@media(max-width:767px){
    font-size:30px;
    width:100%;
}
`
export const LeftContainerButton = styled.button`
padding:10px 20px;
border:none;
background-color:transparent;
border: 1px solid #000;
outline:none;
margin-top: 25px;
font-size: 18px;
`
