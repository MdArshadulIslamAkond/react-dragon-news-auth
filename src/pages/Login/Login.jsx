import { Link, useLocation, useNavigate} from "react-router-dom";
import Navbar from "../shared/Navebar/Navbar";
import { useContext, useRef } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { sendEmailVerification } from "firebase/auth";

const Login = () => {
    const {signIn, loading, forgetPassword} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef(null);
    if(loading) return <p>Loading...</p>;
    const handleLogin = (e)=>{
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        // sign in
        signIn(email, password)
        .then((result) => {
            console.log("User signed in successfully!", result.user);
            if (!result.user.emailVerified){
              alert('Please verify your email address');
              sendEmailVerification(result.user)
              .then(()=>{
                alert("Please check your email and verify your account");
              });
            }
            // Navigate after login
            navigate(location?.state ? location.state : "/");
            
        })
        .catch((error) => {
            console.error("Error signing in with email and password:", error);
            
        });


    }
    const handleForgetPassword = () => {
      console.log(emailRef.current)
      const email = emailRef.current.value;
      if (!email) {
        console.log("Please provide email", emailRef.current.value);
        return;
      } else if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
      ) {
        console.log("please write a valid email address");
        return;
      }
      // reset password
      forgetPassword(email)
      .then(() => {
        alert("Please check your Email");
      })
      .catch((error) => {
        console.error("Error sending password reset email:", error);
        
      })
    }
  return (
    <div>
      <Navbar />
      <div className="">
        <h2 className="text-3xl my-10 text-center">Login your account</h2>
        <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto bg-base-200">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              ref={emailRef}
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="font-bold text-center">
            Dont’t Have An Account ? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
      {/* <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"></div>
        </div>
      </div> */}
    </div>
  );
};

export default Login;
