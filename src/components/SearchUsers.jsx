import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const SearchUsers = ({search, isWhite, setLoading}) => {
  const [searchedUser, setSearchedUser] = useState([])
  const createdAt = searchedUser?.created_at?.split('T')[0].split('-')
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

 useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true)
      const { data } = await axios?.get(`https://api.github.com/users/${search}`)
      setSearchedUser(data)
      setLoading(false)
      console.log(searchedUser)
    } catch(error) {
     console.log(error.message)
    }
  }
  fetchData();
}, [search])

  return (
    <UsersStyledComponent isWhite={isWhite}>
      <MainContainer>
        <img src={searchedUser.avatar_url}/>
        <Container>
          <Name isWhite={isWhite}>{searchedUser.name ? searchedUser.name : ''}
          <p>@{searchedUser.login}</p>
          </Name>
          <span >Joined {createdAt && createdAt[2]} {createdAt && months[createdAt[1] - 1]} {createdAt && createdAt[0]}</span>
        </Container>
        </MainContainer>
        

        <Info isWhite={isWhite}>
          <div>
             <p>Repos</p>
             <p>{searchedUser.public_repos}</p>
          </div>

          <div>
           <p>Followers</p>
           <p>{searchedUser.followers}</p>
        </div>

        <div>
         <p>Following</p>
         <p>{searchedUser.following}</p>
      </div>
      </Info>
    </UsersStyledComponent>
  )
}

export default SearchUsers

const UsersStyledComponent = styled.div`
 margin-top:20px;
 border-radius:15px;
 box-shadow:rgb(70 96 187 / 20%) 0px 16px 30px -10px;
 background: ${props => props.isWhite ? '#FEFEFE' : '#1E2A47' };
 transition:0.9s;
 padding:32px 24px;
 align-items:center;
`

const MainContainer = styled.div`
 display:flex;
 align-items:center;
 gap:19px;
 img{
      max-width:70px;
      height:78px;
      border-radius:50%;
    }
`
const Container = styled.div`
  display:flex;
  flex-direction:column;
    p{
      font-size: 12.5px;
      color: #0079FF;
    }
    span{
      font-size: 12.5px;
      color: #697C9A;
    }
`
const Name = styled.div`
  font-size: 15.2px;
  color:${props=>props.isWhite ? "#2B3442" : "#FFFFFF"};
`

const Info = styled.div`
  margin-top:23px;
  display:flex;
  justify-content:space-between;
  padding: 18px 14px;
  background: ${props => props.isWhite ? '#F6F8FF' : '#141D2F' };
  color: ${props => props.isWhite ? '#2B3442' : '#FFFFFF' };
  transition:0.9s;
  border-radius: 10px;
  text-align:center;

 
`