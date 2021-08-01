import React, {useState} from 'react'
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import './MessageSender.css'
import { useStateValue } from './StateProvider';
import firebase from 'firebase';
import db from './firebase';

function MessageSender() {
    const [{user} , dispatch] = useStateValue()
    const [input, setInput] = useState('')
    const [imageUrl, setimageUrl] = useState('')
    const handleSubmit= e =>{
        e.preventDefault();

        // sombe clever db stuff
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image:imageUrl
        })
        setInput('');
        setimageUrl('');
    }

    return (
        <div className='messageSender'>
            <div className='messageSender__top'>
                <Avatar src={user.photoURL}/>
                <form>
                    <input
                    value = {input}
                    onChange = { (e) => setInput(e.target.value)}
                    className='messageSender__input'
                    placeholder={`¿Qué estás pensando? ${user.displayName}`}/>
                    <input
                    value={imageUrl}
                    onChange={e => setimageUrl(e.target.value)}
                    placeholder='imagen URl (Opcional)'/>
                    <button onClick={handleSubmit} type='submit'>
                        Submit
                    </button>
                </form>
            </div>
            <div className='messageSender__bottom'>
                <div className='messageSender__option'>
                    <VideocamIcon style={{color: 'red'}} />
                    <h3>Video en vivo</h3>
                </div>
                <div className='messageSender__option'>
                    <PhotoLibraryIcon style={{color: 'green'}} />
                    <h3>Foto/Video</h3>
                </div>
                <div className='messageSender__option'>
                    <InsertEmoticonIcon style={{color: 'orange'}} />
                    <h3>Sentimiento/actividad</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
