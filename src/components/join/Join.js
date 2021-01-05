import React, {useState} from "react";
import {Link} from "react-router-dom"

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("")

    return (
    <div className="container ">
      <div className="jumbotron mt-5">
        <div className="card center-align">
          <div className="card-header">
            <h1>Join Chat Room</h1>
          </div>
          <div className="card-body">
            <input
              type="text"
              className="center-align w-50"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              type="text"
              className="center-align w-50"
              placeholder="Room"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            />
            <br/>
            <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                <button type="submit" className="btn-large deep-blue mt-3">Sign in</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
