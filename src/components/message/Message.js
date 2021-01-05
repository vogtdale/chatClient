import React from 'react'
import ReactEmoji from 'react-emoji'

const Message = ({message: {user, text}, name}) => {
    let isSentByCurentUser = false

    const trimmedName = name.trim().toLowerCase()

    // eslint-disable-next-line no-undef
    if(user === trimmedName) {
        isSentByCurentUser = true
    }

    return (
        isSentByCurentUser 
        ? (
            <div className="d-flex justify-content-end ">
                <p className="d-flex pr-1" >{trimmedName}</p>
                <div className="d-flex bg-primary">
                    <p className="d-flex text-white p-2">{ReactEmoji.emojify(text) }</p>
                </div>
                

            </div>
        ) 
        : 
        (
            <div className="d-flex justify-content-start p-3">
                
                <div className="d-flex">
                    <p style={{color: "red"}} className="d-flex bg-light ">{ ReactEmoji.emojify(text) } </p>
                </div>
                <p style={{color: "red"}} className="d-flex p-10 ml-1 "> {user}</p>
            </div>
        )
    )


}

export default Message