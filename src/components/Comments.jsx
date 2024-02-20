import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "../constant/youtube";
import { Avatar } from "@mui/material";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { formatDistanceToNow } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { like } from "../app/slice/appSlice";
function Comments({ videoId }) {
  const [comment, setComment] = useState([]);
  const Allcomment = async () => {
    const { data } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}&key=${API_KEY}`
    );
    console.log(data.items);
    setComment(data.items);
  };
  useEffect(() => {
    Allcomment();
  }, [videoId, API_KEY]);
  const formatRelativeTime = (dateTimeString) => {
    const publishedAt = new Date(dateTimeString);
    return formatDistanceToNow(publishedAt, { addSuffix: true });
  };
  const dispatch = useDispatch();
  const like = useSelector((state) => state.app.likes);
  return (
    <div className="ml-4 m-2">
      <h1 className="text-2xl font-semibold">Comments</h1>
      {comment.map((item, index) => (
        <div key={index} className=" flex p-2 h-auto w-[56%] ">
          <Avatar
            alt="Remy Sharp"
            src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
            sx={{ width: 45, height: 45, margin: 1 }}
          />
          <div className="">
            <div className="flex gap-3">
              <h1 className="font-bold">
                {item.snippet.topLevelComment.snippet.authorDisplayName}
              </h1>
              <h1 className="font-normal">
                {formatRelativeTime(
                  item.snippet.topLevelComment.snippet.publishedAt
                )}
              </h1>
            </div>

            <h1>{item.snippet.topLevelComment.snippet.textOriginal}</h1>
            <div className="flex gap-3 p-2 item-center">
              <SlLike
                onClick={() => {
                  dispatch(like());
                }}
                className="cursor-pointer"
              />
              {like}
              <SlDislike className="cursor-pointer" />
              <button>Reply</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comments;
