import React, { useState, useEffect } from "react";
import News from "./News";
import { useSelector } from "react-redux";

const NewsBox = () => {
  const darkMode = useSelector((state) => state.dark.dark)
  const [news, setNews] = useState([]);
  const query = useSelector((state) => state.query.value);
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(1);

  const API = "https://api.worldnewsapi.com/search-news";
  const API_KEY = "992a9659aa054fe8b51bb1bbada1eaed";

  function handleClick(i) {
    setPage(i + 1);
  }
  const fetchNews = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&from=2024-06-03&sortBy=publishedAt&apiKey=${API_KEY}`
      );
      const data = await response.json();
      setNews(data.articles);
      setPages(news.length / 10);
    } catch (e) {
      console.log("Error API");
    }
  };

  useEffect(() => {
    fetchNews();
    setPage(1);
  }, [query]);

  return (
    <>
      <div className={`transition-all duration-300 ease-in-out ${darkMode? "bg-[#1b1c1e] text-[#b1c1e1] ": "bg-[#f1f1f1] text-[#183B56]"} p-9 px-12 flex flex-wrap justify-around w-full gap-4`}>
        {news.length == 0 ? (
          <>No Results Found</>
        ) : (
          news.map(
            (newsItem, index) =>
              index > (page - 1) * 10 &&
              index < page * 10 && <News key={index} newsItem={newsItem} />
          )
        )}
      </div>
      <div className={`transition-all duration-300 ease-in-out pageSection w=full h-[40px] flex gap-7 ${darkMode? "bg-[#1f1f1f] text-[#b1c1e1] ": "bg-[#f1f1f1] text-[#183B56]"}k items-center justify-center`}>
        {Array.from({ length: news.length / 10 }, (_, i) => (
          <li
            onClick={() => {
              handleClick(i);
            }}
            className={`list-none ${
              page == i + 1 ? "text-blue-700" : ""
            } cursor-pointer text-lg font-semibold`}
            key={i + 1}
          >
            {i + 1}
          </li>
        ))}
      </div>
    </>
  );
};

export default NewsBox;
