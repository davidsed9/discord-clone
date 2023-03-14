import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from "./SidebarChannel";
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
// import { InfoOutlined } from "@mui/icons-material";
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import { Avatar } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { auth } from "./features/firebase";



function Sidebar() {
    const user = useSelector(selectUser);
    
   
    return (
    <div>
    { user !== null ? (
        
        <div className="sidebar">
        <div className="sidebar__top">
            <h3>Clever Programmer</h3>
            <ExpandMoreIcon />
        </div>

        <div className="sidebar__channels">
            <div className="sidebar__channelsHeader">
                <div className="sidebar__header">
        <ExpandMoreIcon />
            <h4>Text Channels</h4>
                </div>

                <AddIcon className="sidebar__addChannel"/>
            </div>
            <div className="sidebar__channelsList">
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            </div>
        </div>
        <div className="sidebar__voice">
            <SignalCellularAltIcon
            className="sidebar__voiceIcon"
            fontSize="large"
            />
        <div className="sidebar__voiceInfo">
            <h3>Voice Connected</h3>
            <p>Stream</p>
        </div>

        <div className="sidebar__voiceIcons">
            <InfoIcon />
            <CallIcon />
        </div>
        </div>
        <div className="sidebar__profile">
            <Avatar onClick={() => auth.signOut()} src= {user.photo} />
                <div className="sidebar__profileInfo">
                 <h3>{user.displayName !== null && (<p>{user.displayName}</p>)}</h3>
                    <p>#{user.uid !== null && (<p>{user.uid.substring (0, 5)}</p>)}</p>
            </div>

            <div className="sidebar__profileIcons">
                <MicIcon />
                <HeadsetIcon />
                <SettingsIcon />
            </div>

        </div>
    </div>
    ):(
        null
    )}
 </div>
    );
   

       

}


export default Sidebar;