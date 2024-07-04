import { FaGoogle, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const RightSideNav = () => {
  const {signInWithGoogle} = useContext(AuthContext)
  const handleGoogleSignIn =()=>{
    signInWithGoogle()
     .then(result=>{
       console.log(result.user);
     })
     .catch(error=>{
       console.error(error);
     })
  }
  
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h3 className="text-3xl">Login With</h3>
        <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
          <FaGoogle />
          Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Login with Github
        </button>
      </div>
      <div className="p-4 mb-6">
        <h3 className="text-3xl font-semibold mb-4">Find Us On</h3>
        <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
        <CiFacebook className="mr-3" />
        Facebook
        </a>
        <a className="p-4 flex text-lg items-center border-x " href="">
        <FaTwitter className="mr-3 text-sky-500" />
        Twitter
        </a>
        <a className="p-4 flex text-lg items-center border rounded-b-lg " href="">
        <FaInstagram className="mr-3 text-orange-600" />
        Instagram
        </a>
        
      </div>
      {/* q zone */}
      <div className="p-4 space-y-3 mb-6">
        <h3 className="text-3xl">Q Zone</h3>
       <img src={qZone1} alt="" />
       <img src={qZone2} alt="" />
       <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
