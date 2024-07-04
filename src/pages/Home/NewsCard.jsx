import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
  const { title, image_url,details,_id} = news;
  return (
    <div className='border mb-7'>
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
        <div className='mt-8'>
        {
            details.length >200 ? <p>{details.slice(0, 200)}... <Link to ={`/news/${_id}`} className='block text-blue-600 font-bold'>Read More</Link> </p> : <p>{details}</p>
        }
        </div>
        
      </div>
    </div>
  );
};

NewsCard.propTypes = {
    news: PropTypes.object.isRequired
}

export default NewsCard;
