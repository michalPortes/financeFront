import { Route, Routes } from 'react-router-dom';
import Menu from './routes/menu/menu.component';  
import Home from  './routes/home/home.component';
import Bills from './routes/bills/bills.component';
import Categories from './routes/categories/categories.component';
import Launch from './routes/launch/launch.component';

import './App.css';

const App = () => {
  return (
    <div className='App App-header'>
      <Routes>
        <Route exact path="/" element={<Menu />}>
          <Route exact index element={<Home />} />
          <Route exact path="/bills" element={<Bills />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route exact path="/launch" element={<Launch />} />
        </Route>
      </Routes>
    </div>
  )
};

export default App;
