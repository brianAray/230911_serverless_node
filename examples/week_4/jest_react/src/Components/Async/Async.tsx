import React, { useEffect, useState } from 'react'

function Async() {

    // if you are working with typescript and you want to use state to store requests
    // make sure to set the generic for the useState hook
    let [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, []);

  return (
    <div>
        <ul>
            {
                posts.map((post) => (<li key={post.id}>{post.title}</li>))
            }
        </ul>
    </div>
  )
}

export default Async