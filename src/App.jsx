import "./App.css";
import PostForm from "./components/PostForm/PostForm";

import PostsList from "./components/PostsList/PostsList";

function App() {
  const saludo = "Hola lucas! pruebo la rama feature";

  return (
    <div>
      <h3>Mi chi está canalizado</h3>
      <PostForm />
      <PostsList />
    </div>
  );
}

export default App;
