import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navebar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BrakingNews from "./BrakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      <Header />
      <BrakingNews/>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border">
            <LeftSideNav news={news}/>
        </div>
        {/* nwes container */}
        <div className="md:col-span-2 border">
            {
              news.map(aNews=><NewsCard key={aNews._id} news={aNews}></NewsCard>)
            }
        </div>
        <div className="border">
            <RightSideNav/>
        </div>
      </div>
    </div>
  );
};

export default Home;
