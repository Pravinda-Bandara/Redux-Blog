
import './App.css'
import {PostsList} from "./features/post/PostsList.jsx";
import AddPostForm from "./features/post/AddPostForm.jsx";

function App() {
  return (
    <>
        <AddPostForm/>
      <PostsList/>
    </>
  )
}

export default App
