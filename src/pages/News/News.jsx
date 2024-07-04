import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Navbar from "../shared/Navebar/Navbar";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

const News = () => {
  const [newsDetails, setNewsDetails] = useState({});
  const { id } = useParams();
  const news = useLoaderData();
  // console.log(typeof id);
  useEffect(() => {
    setNewsDetails(news.find((news) => news._id === id));
    // console.log(details)
  }, [id, news]);

  console.log(newsDetails);
  const {title, image_url, details} = newsDetails;
  return (
   
    <div>
      <Header />
      <Navbar />
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h2 className="text-5xl">News Details</h2>
          <div className="card bg-base-100 p-4">
            <figure>
              <img
                src={image_url}
                alt="Shoes"
              />
            </figure>
            <div className="card-body p-0 pt-4">
              <h2 className="card-title">{title}</h2>
              <p>{details}</p>
              <div className="card-actions">
                <Link to ="/"><button className="btn rounded-none btn-error"> <FaArrowLeft /> All news in this category</button></Link>
                
              </div>
            </div>
          </div>
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default News;
