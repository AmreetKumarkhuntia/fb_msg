import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "../../components/navbar/navbar";
import Conversation from "../../components/conversation/conversations";
import ChatWindow from "../../components/conversation/chatwindow";
import UserProfile from "../../components/userprofile/userprofile";


const Home = () => {
    const history = useHistory();

    if(!useSelector(state=>state.user.login)){
        history.push("/login");
    }

    return (
        <>
            <Navbar></Navbar>
            <div className="home-container">
                <div className="homebox-container">
                    <Conversation></Conversation>
                    <ChatWindow></ChatWindow>
                    <UserProfile></UserProfile>
                </div>
            </div>
        </>
    )
}

export default Home;