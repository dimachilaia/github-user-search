import styled from "styled-components"
import searchImg from '../assets/icon-search.svg'

const Search = ({isWhite,setSearch}) => {
  
    const submitHandler = (e)=>{
        e.preventDefault()
        setSearch(e.target.search.value)
    }

  return (
    <FormContainer onSubmit={submitHandler} isWhite={isWhite}>
      <label htmlFor="search">
       <img src={searchImg} alt="Search"/>
       <input type="search" id="search" placeholder="Search GitHub username..." defaultValue="dimachilaia"/>
       </label>
       <button type="submit">Search</button>
    </FormContainer>
  )
}

export default Search

const FormContainer = styled.form` 
    margin-top:24px;
    display:flex;
    align-items:center; 
    box-shadow:${props=>props.isWhite ? "0px 16px 30px -10px " : ""};
    border-radius: 15px;
    justify-content:center;
    height:60px;
    background: ${props => props.isWhite ? '#FEFEFE' : '#1E2A47' };
    transition:0.9s;

    label{
      display:flex;
      align-items:center;
      gap:7px;
    }
    img{
      cursor:pointer;
    }
    input{
      border:none;
      outline:none;
      font-family:'Space Mono';
      font-style: normal;
      width:184px;
      font-size:11.1px;
      background-color: ${props => props.isWhite ? '#FFFFFF' : '#1E2A47'};
      transition:0.9s;
      color:${props=>props.isWhite ? "#4B6A9B" : "#FFFFFF"};

                &::-ms-clear { display: none; width : 0; height: 0; }
                &::-ms-reveal { display: none; width : 0; height: 0; }
                &::-webkit-search-decoration,
                &::-webkit-search-cancel-button,
                &::-webkit-search-results-button,
                &::-webkit-search-results-decoration { display: none; }

    &::placeholder {
      font-size: 11.5px;
      line-height: 25px;
      color: ${props => props.isBlack ? '#FFFFFF' : '#4B6A9B'};
    }
    &:focus {
      outline: none;
    }
  }


    button{
       width:80px;
       height:46px;
       background-color:#0079FF;
       border-radius: 10px;
       border:none;
       font-weight: 700;
       font-size: 14px;
       text-align: center;
       color: #FFFFFF;
       cursor:pointer
    }
    button:hover{
      background-color:#60ABFF;
    }
`
