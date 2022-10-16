import { useState } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Search from './components/Search'
import SearchUsers from './components/SearchUsers'

const App = () => {
 const [isWhite, setIsWhite] = useState(true)

  return (
    <Main isWhite={isWhite}>
        <Header isWhite={isWhite} setIsWhite={setIsWhite}/>
        <Search isWhite={isWhite}/>
        <SearchUsers/>
    </Main>
  )
}

export default App

const Main = styled.div `
 height:100vh;
 background-color: ${props => props.isWhite ? '#F6F8FF' : '#141D2F'};
 padding: 31px 24px 0 24px;
`