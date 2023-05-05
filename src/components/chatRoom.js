import { useEffect, useState, Fragment } from 'react'

export default function ChatRoom({ socket, userName, roomId, userId }) {

    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: roomId,
                author: userName,
                userId: userId,
                message: currentMessage,
                time:
                    new Date(Date.now()).getHours() +
                    ":" +
                    new Date(Date.now()).getMinutes(),
            };

            await socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("");
            console.log(document.getElementById('chatBody').scrollHeight)
            setTimeout(() => {
                document.getElementById('chatBody').scrollTop = document.getElementById('chatBody').scrollHeight
            }, 100)

        }
    };

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data]);
            setTimeout(() => {
                document.getElementById('chatBody').scrollTop = document.getElementById('chatBody').scrollHeight
            }, 100)
        });
    }, [socket]);

    return (
        <>
            <div className="flex items-center justify-center bg-blue-600 w-full max-w-xl bg-white shadow-xl rounded-t-lg overflow-hidden py-4">
                <h1 className="text-white">Room ID: <span className='font-bold'>1234</span>
                </h1>
            </div>
            <div id="chatMain" className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden" style={{borderTopRightRadius:0,borderTopLeftRadius:0}}>
                <div className="flex flex-col flex-grow h-0 p-4 overflow-auto" id="chatBody">
                    {messageList.map((messageContent, key) => {
                        return (
                            <Fragment key={key}>
                                {
                                    messageContent.author === userName && messageContent.userId === userId ?
                                        <div className="flex w-full mt-2 space-x-3 max-w-xs">
                                            <div className="flex items-center justify-center font-bold h-10 w-10 rounded-full bg-gray-300">
                                                <span>{(messageContent.author.split('')[0]).toUpperCase()}</span>
                                            </div>
                                            <div>
                                                <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                                    <p className="text-sm">{messageContent.message}</p>
                                                </div>
                                                {/* <span className="text-xs text-gray-500 leading-none">{new Date(messageContent.time).getHours()}:{new Date(messageContent.time).getMinutes()}</span> */}
                                                <span className="text-xs text-gray-500 leading-none">{messageContent.time}</span>
                                            </div>
                                        </div>
                                        :
                                        <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                                            <div>
                                                <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                                                    <p className="text-sm">{messageContent.message}</p>
                                                </div>
                                                {/* <span className="text-xs text-gray-500 leading-none">{new Date(messageContent.time).getHours()}:{new Date(messageContent.time).getMinutes()}</span> */}
                                                <span className="text-xs text-gray-500 leading-none">{messageContent.time}-{messageContent.author}</span>
                                            </div>
                                            <div className="flex items-center justify-center font-bold h-10 w-10 rounded-full bg-gray-300">
                                                <span>{(messageContent.author.split('')[0]).toUpperCase()}</span>
                                            </div>
                                        </div>
                                }
                            </Fragment>
                        )
                    })}
                </div>
                <div className="bg-gray-300 p-4">
                    <input className="flex items-center h-10 w-full rounded px-3 text-sm" type="text" placeholder="Type your message…"
                        value={currentMessage}
                        onChange={(event) => {
                            setCurrentMessage(event.target.value);
                        }}
                        onKeyPress={(event) => {
                            event.key === "Enter" && sendMessage();
                        }}
                    />
                </div>
            </div>
        </>
    )
}