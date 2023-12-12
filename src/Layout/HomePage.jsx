import { useState } from "react";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
    const [roomCode, setRoomCode] = useState('')
    const navigate = useNavigate()

    const handelSubmit = (ev) => {
        ev.preventDefault()
        navigate(`room/${roomCode}`)
    };
    return (
        <div className="text-center my-5">
            <form onSubmit={handelSubmit}>
                <div className=" mb-5">
                    <label className=" block" >Input room code</label>
                    <input type="text" placeholder="Room code"
                        onChange={(e) => setRoomCode(e.target.value)}
                        className="input input-bordered input-success w-full max-w-xs" />
                </div>
                <button className="btn btn-success" type="submit">Enter Room</button>
            </form>
        </div>
    );
};

export default HomePage;