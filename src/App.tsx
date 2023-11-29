import './App.scss'
import {HomePage} from './pages/HomePage';
import {Route, Routes} from 'react-router-dom';
import {CreateTodoPage} from './pages/CreateTodoPage';
import {Layout} from './components/layout';
import {EditTodoPage} from './pages/EditTodoPage';
import { DataRoute } from './data/routes';

function App() {

  return (
     <Routes>
       <Route path={DataRoute.Home} element={<Layout><HomePage /></Layout>} />
       <Route path={DataRoute.CrateTodo} element={<Layout><CreateTodoPage /></Layout>} />
       <Route path={DataRoute.EditTodo} element={<Layout><EditTodoPage /></Layout>} />
     </Routes>
  )
}

export default App
