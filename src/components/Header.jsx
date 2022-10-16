import styled from "styled-components"
import darkImg from '../assets/icon-moon.svg'
import moonImg from '../assets/icon-sun.svg'

const Header = ({isWhite, setIsWhite}) => {

  const changeColorHandler = ()=>{
    setIsWhite(prev=>!prev)
  }
  return (
    <HeaderContainer isWhite={isWhite}>
      <Heading isWhite={isWhite}>devfinder</Heading>    
      
      <DarkContainer >
         <h2>{isWhite ? "Dark" : "Light"}</h2>
        <img src={isWhite ? darkImg : moonImg} alt="moon-image" onClick={changeColorHandler}/>
      </DarkContainer>


    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
 width:100%;
 height:38px;
 display:flex;
 justify-content:space-between;
 align-items:center;
`
const Heading = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 39px;
  color: #222731;
  margin:0;
  color:${props=>props.isWhite ? "#222731" : "#FFFFFF"}
`
const DarkContainer = styled.div`
  display:flex;
  align-items:center;
  gap:16px;
   height:20px;
    h2{
      margin:0;
      font-family: 'Space Mono';
      font-style: normal;
      font-size: 13px;
      text-align: right;
      letter-spacing: 2.5px;
      color: #697C9A;
    }
    img{
        cursor:pointer;
    }
  `