import styled from "styled-components"
import searchImg from '../assets/icon-search.svg'

const Search = () => {
  
    const submitHandler = (e)=>{
        e.preventDefault()
    }
  return (
    <FormContainer onSubmit={submitHandler}>
      <label htmlFor="search">
       <img src={searchImg} alt="Search Image"/>
       <input type="search" id="search" placeholder="Search GitHub username..."/>
       <button>Search</button>
      </label>
    </FormContainer>
  )
}

export default Search

const FormContainer = styled.form` 
    display:flex;
    align-items:center; 
    background: #FEFEFE;
    box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
    border-radius: 15px;
    justify-content:center;
    height:60px;
    
    input{
      border:none;
      outline:none;
      font-family:'Space Mono', monospace;
      font-style: normal;
      color: #222731;
      width:184px;
      font-size:11.1px;
    }
    label{
      display:flex;
      align-items:center;
      gap:7px;
    }
    img{
      cursor:pointer;
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