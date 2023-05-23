import React from 'react';
import './App.css';
import {RegisterPage} from "./RegisterPage";
import {LoginPage} from "./LoginPage";
import {ChatClient} from "./ChatClient";
import ChatLobby from "./ChatLobby";

let showLogin=true;

const App=({socket}:{socket:WebSocket})=>
{
    let id=localStorage.getItem("ID");

    function goToChats()
    {
        showLogin=false;
    }

    return <RegisterPage socket={socket} goToChats={goToChats}/>//(//showLogin
           //?(id==null?<RegisterPage socket={socket} goToChats={goToChats}/>:<LoginPage socket={socket}/>)
           // //:
           // <ChatLobby/>);
}

function getChatrooms(id="")
{
    fetch
    (
        `http://192.168.43.37:8080/getChat`,
        {
            method:"POST",
            mode:"no-cors",
            headers:
                {
                    'Access-Control-Allow-Origin':'*',
                    'Content-Type':'application/json;charset=utf-8'
                }
        }
    ).then
     (
         (response)=>
         {
             if(!response.ok)
             {
                 throw new Error(`HTTP error: ${response.status}`);
             }
             return response.text();
         }
     )
     .then((text)=>
           {
               console.log(text)
           })
     .catch((error)=>
            {
                alert(`Could not fetch verse: ${error}`);
            })
}

export default App;