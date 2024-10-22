import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import TotalTime from "./components/TotalTime/TotalTime";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const handleBookmarkBtn = (data) => {
    setBookmarks([...bookmarks, data]);
  };

  const handleMarkAsReadBtn = (title,time) => {
    setTotalTime(totalTime + time);
    setBookmarks(bookmarks.filter((bookmark) => bookmark !== title));
  };
  return (
    <div>
      <header className="mb-8">
        <Header></Header>
        <hr />
      </header>
      <main className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        <Blogs
          handleBookmarkBtn={handleBookmarkBtn}
          handleMarkAsReadBtn={handleMarkAsReadBtn}
        ></Blogs>
        <div>
          <TotalTime totalTime={totalTime}></TotalTime>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
