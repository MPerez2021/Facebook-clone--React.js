import React from 'react'
import './Sidebar.css'
import './SidebarRow.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow src='https://st2.depositphotos.com/2931363/6511/i/600/depositphotos_65116237-stock-photo-happy-young-man-in-shirt.jpg' 
            title='Mateo Pérez'/>        
            <SidebarRow Icon={LocalHospitalIcon} title='Centro de información COVID-19'/>
            <SidebarRow Icon={EmojiFlagsIcon} title='Páginas'/>
            <SidebarRow Icon={PeopleIcon} title='Amigos'/>
            <SidebarRow Icon={ChatIcon} title='Messenger'/>
            <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
            <SidebarRow Icon={VideoLibraryIcon} title='Videos'/>
            <SidebarRow Icon={ExpandMoreIcon} title='Marketplace'/>
        </div>
    )
}

export default Sidebar
