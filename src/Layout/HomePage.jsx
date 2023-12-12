import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import axios from "axios";


const HomePage = () => {
    const { user } = useAuth()
    const [counts , setCounts]= useState(1)
    const [roomCode, setRoomCode] = useState('')
    const navigate = useNavigate()

    const handelSubmit = (ev) => {
        ev.preventDefault()
        navigate(`room/${roomCode}`)
    };
    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(function (response) {
               setCounts(response?.data.count)
            })
    }, [])
    
    return (
        <div>
            <div className=" mt-5 ml-20">
                <p>Total User: <span className=" text-yellow-500">{counts}</span></p>
            </div>
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
        </div>
    );
};

export default HomePage;