import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { Welcome } from './component/Welcome';
import { Counter } from './component/Counter';
import { ShowGitHubUser } from './component/ShowGitHubUser';
import { NotFound } from './component/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Welcome name="June" age="26" />} />
        <Route path='/contatore' element={<Counter />} />
        <Route path='/utenti/:username' element={<ShowGitHubUser />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/userlist' element={<GitHubUserList/>}/>
      </Routes>
      
      <Link to={"/contatore"}> Counter </Link>
      <Link to={"/"}> Welcome </Link>
      <Link to={"/utenti/juneladedja"}> ShowGitHubUser </Link>
      
    </>
  );
}

export default App;