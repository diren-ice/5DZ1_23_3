import './App.css'
import {Routes, Route} from "react-router-dom";
import CreatePost from "./Pages/CreatePost/CreatePost.jsx";
import PostList from "./Pages/PostList/PostList.jsx";
import Layout from "./components/Layout/Layout.jsx";


function App() {

  return (
        <>
 <Routes>
        <Route path='/' element={<Layout/>}>
            <Route path='newPost' element={<CreatePost/>} />
            <Route path='posts' element={<PostList/>} />
        </Route>
      </Routes>
          </>
  )
}

export default App
