import axios from "axios"
import { useEffect, useState } from "react"


const PostList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => setPosts(response.data))
    }, [])

    return (
        <div><h4>Posts</h4>
            <ul>
                {posts.map( p =>
                    <li key={p.id}>{p.title}</li>
                )}

            </ul>

        </div>
    )
}
export default PostList