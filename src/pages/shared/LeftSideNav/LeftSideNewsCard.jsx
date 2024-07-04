/* eslint-disable react/prop-types */

const LeftSideNewsCard = ({news}) => {
    const {title, image_url, author} = news;
    const{published_date} =author;
    // console.log(published_date.length);
    return (
        <div className="p-4">
            <img src={image_url} alt="" />
            <div className="font-bold text-2xl">
            {title}
            </div>
            <div>
                <span className="text-md me-2">Sports</span>{published_date}
            </div>
        </div>
    );
};

export default LeftSideNewsCard;