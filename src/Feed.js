import React, { useEffect, useState } from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
import db from './firebase'
function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy('timestamp','desc').onSnapshot(snapshot=>
            setPosts(snapshot.docs.map(contenido =>({
                documento: contenido.data(),
                id: contenido.id
            })))
        );
    }, []);
    


    return (
        <div className='feed'>
            {/* Story Reel */}
            <StoryReel />
            {/* MessageSender */}
            <MessageSender/>

           {posts.map(post =>(
               <Post 
                key={post.id}
                profilePic={post.documento.profilePic}
                message={post.documento.message}
                timestamp={post.documento.timestamp}
                username={post.documento.username}
                image={post.documento.image}
               />
           ))}
        </div>
    )
}

export default Feed
