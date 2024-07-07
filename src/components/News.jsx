import React from "react";
import moment from "moment-timezone";


const formatDateToIST = (dateString) => {
  return moment(dateString).tz("Asia/Kolkata").format("YYYY-MM-DD hh:mm:ss A");
};
const News = ({ newsItem }) => {
  if (!newsItem.urlToImage) return <></>;
  return (
    <div className="flex flex-col gap-2 w-[360px] h-[400px] border-black border-2  items-center  rounded-md">
      <img
        className="w-full h-[180px] border rounded-md"
        src={newsItem.urlToImage}
        alt=""
      />
      <div className="px-2 flex flex-col gap-2">
        <h2 className="font-semibold text-lg ">
          {newsItem.title.length < 100 ? newsItem.title : `${newsItem.title.slice(0, 100)}...`}
          
        </h2>
        <h4 className="text-xs font-semibold ">
          {formatDateToIST(newsItem.publishedAt)}
        </h4>
        <p className="font-semibold ">
          {newsItem.description.slice(0, 100)}...
        </p>
      </div>
    </div>
  );
};

export default News;
