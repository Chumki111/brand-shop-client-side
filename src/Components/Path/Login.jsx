
import { useContext } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import { FcGoogle} from 'react-icons/fc';
import Swal from "sweetalert2";

const Login = () => {
    const {signInUser,signInGoogle} = useContext(AuthContext)
    const location = useLocation();
    const navigate= useNavigate()
    const handleLogin = e =>{
        e.preventDefault()
       
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
       
        

        
   
    signInUser(email,password)
    .then(result =>{
        console.log(result.user)
       
        Swal.fire({
            title: 'Success!',
            text: 'login successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        navigate(location?.state ? location.state : '/')
       
       
    })
    .catch(error =>{
        console.error(error)
        Swal.fire({
            title: 'Error!',
            text: 'email and password does not match with register email and password',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
  
        
     })

    }

    const handleGoogle =() =>{
        signInGoogle()
        .then(result =>{
            console.log(result.user)
            navigate(location?.state ? location.state : '/')
        })
        .catch(error =>{
            console.error(error)
        })
    }

    return (
        <div>
              <div className="flex justify-center items-center">
           
                <div className="card flex-shrink-0 w-full max-w-sm md:max-w-lg lg:max-w-lg border bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h2 className="text-3xl font-semibold mb-4">Login your account</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input type="email" placeholder="UserName or Email" className="py-4 border-b " name="email" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input type="password" placeholder="Password" className="py-4 border-b " name="password" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-[#FBBF24]">Login</button>
                        </div>

                        <div className="text-center mt-4">

                            <p className=" text-base">Dont’t Have An Account ? <Link to='/register' className=""><button className=" btn-link text-[#FBBF24]">Create an Account</button></Link></p>
                        </div>


                        <div className="divider">OR</div>
                   <div className="text-center">
                   <button  onClick={handleGoogle} className="btn  capitalize rounded-full w-9/12">
                        <FcGoogle className="text-2xl mr-10"></FcGoogle>
                      <span> Continue With Google
                    </span>
                    </button>
                       </div>
                    </form>

                </div>

               </div>
          

        </div>

      
    );
};

export default Login;