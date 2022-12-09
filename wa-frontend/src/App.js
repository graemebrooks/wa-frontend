import logo from './logo.svg';
import './App.css';
import TeamTable from './components/teamTable';
import ScrollingImageList from './components/ScrollingImageList';
import StarField from './components/StarField';
import ChickenNuggets from './components/ChickenNuggets';
import DraggableCircle from './components/DraggableCircles';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import Navbar from './components/navbar';

import styled from 'styled-components';

//

const StyledDiv = styled.div`
  background-color: #efe1ba;
  height: 100%;

`;

function App() {
  return (
    
    <StyledDiv className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TeamTable />
        <StarField />
        <DraggableCircle />
        <ChickenNuggets />
        <ScrollingImageList />
      </header> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      
      {/* <Route path="/about" component={About} /> */}
    </StyledDiv>
  );
}

export default App;
