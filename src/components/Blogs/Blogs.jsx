import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmarkBtn, handleMarkAsReadBtn}) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogs = await fetch("blogs.json");
        const data = await blogs.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
      }
    };
    fetchBlogs();
  }, []);
  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-2">
      {/* <h1 className="text-3xl border">Blogs: {blogs.length}</h1> */}
      <div>
        {
          blogs.map((blog) => <Blog key={blog.id} handleBookmarkBtn={handleBookmarkBtn} handleMarkAsReadBtn={handleMarkAsReadBtn} blog={blog}></Blog>)
        }
      </div>
    </div>
  );
};

Blogs.propTypes = {
  handleBookmarkBtn: PropTypes.func.isRequired,
  handleMarkAsReadBtn: PropTypes.func.isRequired
}

export default Blogs;
