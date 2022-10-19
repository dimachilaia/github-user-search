import { useState } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Loading from './components/Loading/Loading'
import Search from './components/Search'
import SearchUsers from './components/SearchUsers'

const App = () => {
 const [isWhite, setIsWhite] = useState(true)
 const [search, setSearch] = useState('dimachilaia')
 const [loading, setLoading] = useState(false)
 const [noResult, setNoResult] = useState(false)

  return (
   <FullContainer isWhite={isWhite}>
     <Main >
        <Header isWhite={isWhite} setIsWhite={setIsWhite}/>
        <Search isWhite={isWhite} setSearch={setSearch} search={search} noResult={noResult}/>
        {loading && <Loading/>}
         <SearchUsers search={search} isWhite={isWhite} setLoading={setLoading} setNoResult={setNoResult} noResult={noResult}/>
      </Main>
    </FullContainer>
  )
}

export default App

const FullContainer = styled.div`
   background-color: ${props => props.isWhite ? '#F6F8FF' : '#141D2F'};
   transition-duration:0.9s;
   padding: 31px 24px 0 24px;
   display:flex;
   align-items:center;
   height:100vh;
   flex-direction:column;
   
   @media screen and (min-width: 1024px) {
     height:122vh;
    }
`

const Main = styled.div `
  width:100%;
  max-width:375px;
      margin:0 auto;

   @media screen and (min-width: 768px) {
     width:100%;
     max-width:600px;
    }

    @media screen and (min-width: 1024px) {
     width:100%;
     max-width:750px;
    }

`