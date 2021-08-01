import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';
import { auth, provider } from "./firebase";
import { Button } from '@material-ui/core';
import { initialState } from './Reducer';
import { actionTypes } from './Reducer'
import firebase from 'firebase'
function Header() {
    const [{ user }, dispatch] = useStateValue()
    const logOut = () => {
        auth.signOut().then(() => {      
            dispatch({
                type: actionTypes.LOGOUT
            })
            console.log('Deslogueado');
        })        
    }

    return (
        <div className='header'>
            <div className='header__left'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" />
                <div className='header__input'>
                    <SearchIcon />
                    <input placeholder='Buscar Facebook' type='text' />
                </div>
            </div>
            <div className='header__center'>
                <div className='header__options
                header__options--active'>
                    <HomeIcon fontSize='large' />
                </div>
                <div className='header__options'>
                    <FlagIcon fontSize='large' />
                </div>
                <div className='header__options'>
                    <SubscriptionsOutlinedIcon fontSize='large' />
                </div>
                <div className='header__options'>
                    <StorefrontOutlinedIcon fontSize='large' />
                </div>
                <div className='header__options'>
                    <SupervisedUserCircleOutlinedIcon fontSize='large' />
                </div>
            </div>
            <div className='header__right'>
                <div className='header__info'>
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayname}</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
                <Button type='submit' onClick={logOut}>
                    Cerrar Sesión
                </Button>

            </div>
        </div>

    )
}

export default Header
