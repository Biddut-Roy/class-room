import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";





const GoogleLogin = () => {
    const { googleEntry } = useAuth()
    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const path = location.pathname
    const parts = path.split("/");
    const pathName = parts.length > 1 ? parts[1] : null;
    const handelGoogleLogin = () => {
        googleEntry()
            .then((result) => {
                const userData = {
                    name: result.user?.displayName,
                    email: result.user?.email

                }
                navigate(from, { replace: true });
                            Swal.fire({
                                title: `${pathName} successfully `,
                                showClass: {
                                    popup: `
                                    animate__animated
                                    animate__fadeInUp
                                    animate__faster
                                  `
                                },
                                hideClass: {
                                    popup: `
                                    animate__animated
                                    animate__fadeOutDown
                                    animate__faster
                                  `
                                }
                            });
                axios.post("http://localhost:5000/users", userData)
                    .then(() => {

                        // if (result.data) {
                            
                        // }

                    });

            })
    }

    return (
        <div onClick={handelGoogleLogin} className=" flex flex-col justify-center items-center w-1/3 mx-auto text-center my-5">
            <p>Please Enter and join Class Room</p>
            <button className="btn flex">
                <FcGoogle />
                Google
            </button>
        </div>
    );
};

export default GoogleLogin;