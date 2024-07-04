import { Link } from "react-router-dom";
import Navbar from "../shared/Navebar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
    const {createUser, loading} = useContext(AuthContext);
    if(loading){
        return <div>Loading...</div>
    }
    const handleRegister = (e)=>{
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        const checked = form.get('checkbox');

        console.log(name, photo, email, password, checked);

        if(!checked){
            alert('Please agree to the terms and conditions');
            return;
        }

        // create user
        createUser(email, password)
        .then((result)=>{
            console.log("User created successfully:", result.user);
        })
        .catch(error=>{
            console.error("Error creating user:", error);
        })
    }

    return (
        <div>
             <Navbar />
      <div className="">
        <h2 className="text-3xl my-10 text-center">Register your account</h2>
        <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto bg-base-200">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              name="name"
              type="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter your photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
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
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control">
            <label className="label justify-start">
            <input
            name="checkbox"
                type="checkbox"
                className="checkbox"
                
              />
              <span className="checkbox-label ms-2">
                I agree to the terms and conditions
              </span>
            </label>
           
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          <p className="font-bold text-center">
            Already Have An Account ? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
        </div>
    );
};

export default Register;