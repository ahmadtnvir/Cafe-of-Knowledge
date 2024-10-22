import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog, handleBookmarkBtn, handleMarkAsReadBtn }) => {
//   console.log(blog);
  const {
    cover_photo,
    author_img,
    author_name,
    published_date,
    reading_time,
    title,
    hashtags,
  } = blog;
  return (
    <div className="mb-10">
      <img className="rounded-lg" src={cover_photo} alt="" />
      <div className="flex justify-between items-center mt-[34px] mb-[18px]">
        <div className="flex justify-start items-center gap-6">
          <img src={author_img} alt="" />
          <div className="text-start">
            <h4 className="text-2xl font-bold">{author_name}</h4>
            <h4>{published_date}</h4>
          </div>
        </div>
        <div className="flex gap-4">
          <p>{reading_time} minutes read</p>
          <button onClick={() => handleBookmarkBtn(title)}>
            {/* <img
              src="https://img.icons8.com/?size=24&id=82461&format=png"
              alt=""
            /> */}
            <CiBookmark />
          </button>
        </div>
      </div>
      <div className="mb-[16px]">
        <h2 className="text-start text-3xl font-bold">{title}</h2>
      </div>
      <div className="flex gap-4">
        {hashtags.map((hashtag, idx) => (
          <a key={idx} href={`/hashtag/${hashtag}`}>
            #{hashtag}
          </a>
        ))}
      </div>
      <div className="text-start mt-[21px] mb-[18px]">
        <a onClick={()=> handleMarkAsReadBtn(title, reading_time)} className="text-purple-700 underline" href="#">
          Mark as read
        </a>
      </div>
      <hr />
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

Blog.propTypes = {
  blog: PropTypes.shape({
    cover_photo: PropTypes.string.isRequired,
    author_img: PropTypes.string.isRequired,
    author_name: PropTypes.string.isRequired,
    published_date: PropTypes.string.isRequired,
    reading_time: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    hashtags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  handleBookmarkBtn: PropTypes.func.isRequired,
  handleMarkAsReadBtn: PropTypes.func.isRequired,
};

export default Blog;
