import { useContext, useEffect, useRef, useState } from "react";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublick from "../Hooks/useAxiosPublick";
import SocailLogin from "../Components/SocailLogin";
import img from "../assets/others/authentication2.png"
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Signup = () => {
    const {createUser,updateUserProfile}=useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate=useNavigate();
    const axiosPublic=useAxiosPublick();
  const {
    register,
    handleSubmit,
    // watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>{ 
    console.log(data)
    const email=data.email;
    const password=data.password;
    createUser(email,password)
  

    .then((result) =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      const name=data.name;
      const photo=data.photoURL;
      updateUserProfile(name,photo)
    
      // create user and send to database
      const userInfo={
        name,
        email
      }
      axiosPublic.post('/users',userInfo)
      .then((res) =>{
        console.log('User profile updated');
        if (res.data) {
          console.log('user added to the database');
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User Created Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/');
        }
      });
     
    })
    .catch((error) =>{
      console.log(error.message);
    })

    

};

  const captcharef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const handleValidateCaptcha = () => {
    const userCapthaValue = captcharef.current.value;
    if (validateCaptcha(userCapthaValue) == true) {
      setDisabled(false);
      // alert('Captcha Matched');
    } else {
      // alert('Captcha Does Not Match');
      setDisabled(true);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div>
          <Helmet>
        <title>Bistro Boss | Signup</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-100 w-full">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <div className="text-center lg:text-center">
            <h1 className="text-5xl font-bold mb-9">Signup Here</h1>
            <img src={img} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-300">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
             <div className="grid grid-cols-2 gap-4">
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  name="name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600 mt-2">
                    Name is required !
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo Url"
                  className="input input-bordered"
                  name="name"
                  {...register("photourl", { required: true })}
                />
                {errors.photourl && (
                  <span className="text-red-600 mt-2">
                    photourl is required !
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600 mt-2">
                   Email is required !
                  </span>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={!showPassword ? "password" : "text"}
                  name="password"
                  {...register(
                    "password",
                    { required: true,
                      minLength: 6, 
                      maxLength: 99,
                      // eslint-disable-next-line no-useless-escape
                      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
                    }
                  )}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600 mt-2">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600 mt-2">Please minimum enter 6 charecter</p>
                )}
                {errors.password?.type === "max" && (
                  <p className="text-red-600">Please maximum enter 20 charecter</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">Please enter at least a symbol, upper and lower case letters and a number</p>
                )}
                <div onClick={() => setShowPassword(!showPassword)} className="absolute top-[50px] right-3">
                {showPassword ?  <button> <FaEye></FaEye></button> : <button><FaEyeSlash></FaEyeSlash></button>}
                 
                 
                  
                </div>
              </div>
             </div>
              <div className="form-control">
                <LoadCanvasTemplate />
                <input
                  type="text"
                  ref={captcharef}
                  placeholder="Type captcha"
                  className="input input-bordered my-5"
                  required
                  name="captcha"
                  onBlur={handleValidateCaptcha}
                />
              </div>
              <div className="form-control">
                <input disabled={disabled} className="btn btn-primary text-white" type="submit" value={'Sign up'} />
              </div>
            </form>
            <p className="text-center">
              Already Have an Account ?{" "}
              <a className="text-red-600 underline" href="login">
                Please Login
              </a>{" "}
            </p>
            <div className="divider"></div> 
            <SocailLogin></SocailLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
