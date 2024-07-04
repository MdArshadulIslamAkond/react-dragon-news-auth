import { useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Navbar from "../shared/Navebar/Navbar";

const News = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            <Header/>
            <Navbar/>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-5xl">News Details</h2>
                </div>
                <div>
                    <RightSideNav/>
                </div>
            </div>
            <h2 className="tesxt-3xl">News Details</h2>
        </div>
    );
};

export default News;