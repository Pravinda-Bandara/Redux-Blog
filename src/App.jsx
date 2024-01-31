
import './App.css'
import {PostsList} from "./features/post/PostsList.jsx";
import AddPostForm from "./features/post/AddPostForm.jsx";
import {Header} from "./component/Header.jsx";

function App() {
  return (
      <>
          <Header/>
          <AddPostForm/>
          <PostsList/>
      </>
  )
}

export default App
