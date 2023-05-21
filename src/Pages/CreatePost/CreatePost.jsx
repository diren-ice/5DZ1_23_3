import {useState, useEffect} from "react";
import axios from "axios";

const CreatePost = () => {
        const [postsCreate, setPostsCreate] = useState([]);
        const [newPost, setNewPost] = useState('')
       useEffect(() => {
    axios.post('https://jsonplaceholder.typicode.com/posts').then((response) => {
      setPostsCreate(response.data);
    });
  }, []);

           const createAddPost = () => {
        setPostsCreate(() => {
            return [ { id: postsCreate.length + 1 , title: newPost, completed: false  } ]
        })
        setNewPost('')
    }
    console.log(newPost, postsCreate)

     const changePostsText = (event) => {
        setNewPost(event.target.value);
    }
    return (
           <>
       <div>
          <input placeholder={'Добавить'} name={'add'} value={newPost} onChange={changePostsText}/>
      <button onClick={createAddPost}>Create Post</button>
           <p>{newPost}</p>
        </div>
           </>
        )

}

export default CreatePost