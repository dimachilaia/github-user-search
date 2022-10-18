import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import mapImage from '../assets/icon-location.svg'
import websiteImage from '../assets/icon-website.svg'
import twitterImage from '../assets/icon-twitter.svg'
import githubImage from '../assets/icon-company.svg'

const SearchUsers = ({search, isWhite, setLoading, noResult, setNoResult}) => {
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
        setNoResult(false)
        console.log(searchedUser)
    } catch(error) {
        console.log(error.message)
        setNoResult(true)
        setLoading(false)
    }
  }
  fetchData();
}, [search,setNoResult])

  return (
    (
      !noResult ? <UsersStyledComponent isWhite={isWhite}>
       <MainContainer>
        <img src={searchedUser.avatar_url} alt="searcheduser"/>
        <Container>
          <Name isWhite={isWhite}>{searchedUser.name ? searchedUser.name : ''}
          <p>@{searchedUser.login}</p>
          </Name>
          <div>
           <span>Joined {createdAt && createdAt[2]} {createdAt && months[createdAt[1] - 1]} {createdAt && createdAt[0]}</span>
          </div>
        </Container>
        </MainContainer> 

        <Info isWhite={isWhite}>
          <div>
             <Repos isWhite={isWhite}>Repos</Repos>
             <p>{searchedUser.public_repos}</p>
          </div>

          <div>
          <Repos isWhite={isWhite}>Followers</Repos>
           <p>{searchedUser.followers}</p>
        </div>

        <div>
        <Repos isWhite={isWhite}>Following</Repos>
         <p>{searchedUser.following}</p>
      </div>
      </Info>


        <StaticInformation>
         <StaticDiv>
           <img src={mapImage} alt="mapImage"/>
           <StaticParagraph StaticParagraph isWhite={isWhite}>{searchedUser.location}</StaticParagraph>
         </StaticDiv>

          <StaticDiv>
            <img src={websiteImage} alt="websiteImage"/>
            <StaticParagraph isWhite={isWhite}>{searchedUser.html_url}</StaticParagraph>
            </StaticDiv>

         <StaticDiv>
           <img src={twitterImage} alt="twitterImage"/>
           <StaticParagraph isWhite={isWhite}>{searchedUser.twitter_username ? searchedUser.twitter_username : 'Not Available'}</StaticParagraph>
        </StaticDiv>

         <StaticDiv>
            <img src={githubImage} alt="githubImage"/>
            <StaticParagraph isWhite={isWhite}>{searchedUser.company ? searchedUser.company : 'Not Available'}</StaticParagraph>
         </StaticDiv>

        </StaticInformation>

      </UsersStyledComponent> : <NotFound>
        <p>User Not Found</p>
      </NotFound>
     )
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
    
    @media screen and (min-width: 768px) {
     display:flex;
     img{
      padding:10px 20px;
      max-width:120px;
      height:120px;
     }
  }
`
const Container = styled.div`
  
    p{
      font-size: 12.5px;
      color: #0079FF;
    }
    span{
      font-size: 12.5px;
      color: #697C9A;
    }

    @media screen and (min-width: 768px) {
      p{
        font-size:15px;
      }
     }

     @media screen and (min-width: 1024px) {
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:90px;
     }
     span{
      font-size:15.05px;
     }
`
const Name = styled.div`
  font-size: 15.2px;
  color:${props=>props.isWhite ? "#2B3442" : "#FFFFFF"};

  @media screen and (min-width: 768px) {
     font-size:30px;
     }

     @media screen and (min-width: 1024px) {
     font-size:35px;
     }
`

const Info = styled.div`
  margin-top:23px;
  display:flex;
  justify-content:space-between;
  padding: 18px 14px;
  background: ${props => props.isWhite ? '#F6F8FF' : '#141D2F' };
  color: ${props => props.isWhite ? '#2B3442' : '#FFFFFF' };
  transition:0.9s;
  height:70px;
  border-radius: 10px;
  text-align:center;

  @media screen and (min-width: 768px) {
       display:flex;
       justify-content:space-around;
       width:488px;
       margin:0 auto;
       margin-top:20px;
       align-items:center;
       p{
        line-height: 33px;
        font-style: normal;
        font-size: 18px;
       }
     }
     
  @media screen and (min-width: 1024px) {
     width:638px;
    p{
        font-size: 20px;
       }
  }
  
    `

const Repos = styled.p`
 font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  text-align: center;
  color: ${props => props.isWhite ? '#2B3442' : '#FFFFFF' };
`


const NotFound = styled.div`
p{
 color:red;
 text-align:center;
 display:flex;
 align-items:center;
 justify-content:center;
}
`
const StaticInformation = styled.div`
@media screen and (min-width: 768px) {
     padding:10px 20px;
  }
`
const StaticDiv = styled.div`
  display:flex;
  gap:20px;
  align-items:center;

  img{
      width:13.75px;
      height:20px;
  }
`

const StaticParagraph = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    color: ${props => props.isWhite ? '#2B3442' : '#FFFFFF' };
    font-style:italic;
    font-weight:bold;

    @media screen and (min-width: 768px) {
     font-size:15px;

  }
`