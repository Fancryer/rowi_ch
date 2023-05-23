export default function ChatLobby()
{
    const getChatrooms=(login:string)=>
    {
        let chatrooms;
        let user=fetch
        (
            `http://192.168.43.37:8080/users`
        ).then
         (
             (response)=>
             {
                 if(!response.ok) throw new Error(`HTTP error: ${response.status}`);
                 return response.json() as unknown as Array<object>;
             }
         ).then
         (
             text=>
             {
                 chatrooms=text

             });
        return chatrooms;
    }

    return <div>
        {getChatrooms("3")}
    </div>;
}