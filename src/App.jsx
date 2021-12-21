import React from 'react'
import styled from 'styled-components';
import Home from './components/Home';
import { centerIt } from './globalStyle';
import Navbar from './UI/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CreateBlog from './components/CreateBlog';
import ErrorPage from './components/ErrorPage';

const MainContainer = styled.div`
width: 100vw;
height: 100vh;
${centerIt};
`;

const Content = styled.div`
margin-top: 100px;
width: 70%;
height: 80%;
`


const App = () => {
  return (
    <Router>
    <MainContainer>
      <Navbar />
      <Content>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/create' element={<CreateBlog />}/>
          <Route path='*' element={<ErrorPage />}/>

        </Routes>
      </Content>
    </MainContainer>
    </Router>
  )
}


export default App
