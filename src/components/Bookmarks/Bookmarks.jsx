import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks }) => {
  // console.log(bookmarks);
  return (
    <div className="p-8 bg-[#1111110D] rounded-lg">
      <h1 className="text-3xl mb-4">Bookmarked Blogs: {bookmarks.length}</h1>
      <div>
        {bookmarks.map((bookmark, i) => (
          <Bookmark key={i} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired, // PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Bookmarks;
