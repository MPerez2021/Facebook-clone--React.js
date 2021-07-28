import React from 'react'
import { Avatar } from '@material-ui/core';
import './MessageSender.css'
function MessageSender() {

    const handleSubmit= e =>{
        e.preventDefault();
    }

    return (
        <div className='messageSender'>
            <div className='messageSender__top'>
                <Avatar />
                <form>
                    <input className='messageSender__input'
                    placeholder='¿Qué estás pensando?'/>
                    <input placeholder='imagen URl (Opcional)'/>
                    <button onClick={handleSubmit} type='submit'>
                        Submit
                    </button>
                </form>
            </div>
            <div className='messageSender__bottom'></div>
        </div>
    )
}

export default MessageSender
