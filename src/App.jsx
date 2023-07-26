import './App.css'
import PostForm from './components/PostForm/PostForm'

import PostsList from './components/PostsList/PostsList'

function App() {

  const saludo = 'Hola lucas! canaliza el chi';

  return (
    <div>
      <PostForm/>
      <PostsList/>
    </div>
  )
}

export default App
