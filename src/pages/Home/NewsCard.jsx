import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoStar } from "react-icons/io5";
import { TiEye } from "react-icons/ti";
import { FaRegBookmark } from "react-icons/fa6";
import { SiHubspot } from "react-icons/si";

const NewsCard = ({ news }) => {
  const { title, image_url,details,_id, rating, total_view, author} = news;
  const{published_date} =author;
  return (
    <div className='border mb-7'>
        <div className='flex justify-between p-4 items-center bg-zinc-300'>
            <div className='flex'>
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className='w-10 rounded-full'>
                <img src={author.img} alt="" />
                </div>
                </div>
                <div className='ms-4'>
                <p>{author.name}</p>
                {published_date}
                {/* {published_date.length > 9 ? <p>{published_date.slice(0, 9)}</p> : published_date} */}
                </div>
            </div>
            <div className='flex space-x-2'>
            <FaRegBookmark />
            <SiHubspot />
            </div>
        </div>
      <div className="card bg-base-100 p-4 rounded-none">
        <div className="card-body ps-0">
          <h2 className="card-title">{title}</h2>
          
        </div>
        <figure className=''>
          <img
          className='w-full '
            src={image_url}
            alt=""
          />
        </figure>
        <div className='mt-8 mb-6'>
        {
            details.length >200 ? <p>{details.slice(0, 200)}... <Link to ={`/news/${_id}`} className='block text-blue-600 font-bold'>Read More</Link> </p> : <p>{details}</p>
        }
        </div>
        <hr />
        <div className='mt-6 flex justify-between'>
            <div className='flex items-center'>
            <IoStar className='text-amber-600' />
            <IoStar className='text-amber-600' />
            <IoStar className='text-amber-600' />
            <IoStar className='text-amber-600' />
            <IoStar className='me-2 text-amber-600' />
            {rating.number}
            </div>
            <div className='flex'>
            <TiEye className='text-2xl me-2' />
            {total_view}
            </div>

        </div>
        
      </div>
    </div>
  );
};

NewsCard.propTypes = {
    news: PropTypes.object.isRequired
}

export default NewsCard;
