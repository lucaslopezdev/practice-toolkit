import './App.css'
import PostForm from './components/PostForm/PostForm'

import PostsList from './components/PostsList/PostsList'

function App() {

  const saludo = 'Hola lucas! pruebo la rama feature';

  return (
    <div>
      <h1>Canaliza el chi maestro</h1>
      <PostForm/>
      <PostsList/>
    </div>
  )
}

export default App
