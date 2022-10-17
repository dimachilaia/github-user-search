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
    <Main isWhite={isWhite}>
        <Header isWhite={isWhite} setIsWhite={setIsWhite}/>
        <Search isWhite={isWhite} setSearch={setSearch} search={search} noResult={noResult}/>
        {loading && <Loading/>}
         <SearchUsers search={search} isWhite={isWhite} setLoading={setLoading} setNoResult={setNoResult} noResult={noResult}/>
    </Main>
  )
}

export default App

const Main = styled.div `
 height:100vh;
 background-color: ${props => props.isWhite ? '#F6F8FF' : '#141D2F'};
 transition-duration:0.9s;
 padding: 31px 24px 0 24px;
`