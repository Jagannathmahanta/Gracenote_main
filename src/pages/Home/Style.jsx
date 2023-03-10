import styled from "styled-components";
import img from '../../assets/home-background.png'

export const Container = styled.main`
min-height: calc(100vh-70px);
padding: 0 calc(3.5vw + 5px );
position: relative;
color:white;
&:before{
background-image: url("/images/home-background.png") center center / cover
no-repeat fixed;
content:"";
position: absolute;
top:0;
left:0;
right:0;
bottom:0;
z-index:-1;
}
`;