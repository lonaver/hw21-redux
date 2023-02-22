import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ref } from "../../helper/helper";

import "./Post.css";

const Post = ({
  author,
  content,
  imagePost,
  datePost,
  countComment,
  countLook,
  countLikes,
  countDownload,
}) => {
  const postData = useSelector((state) => state.postData);
  const dispatch = useDispatch();

  const onChangeCount = (e) => {
    const card = postData.find(
      (elem) => elem.author.nickname === e.currentTarget.dataset.value
    );
    const NewPostEl = { ...card };
    let isPostChange = false;
    if (e.target.classList.contains("comment")) {
      isPostChange = true;
      e.target.classList.toggle("plus");
      e.target.classList.contains("plus") ? countComment++ : countComment--;
      NewPostEl.countComment = countComment;
    }
    if (e.target.classList.contains("look")) {
      isPostChange = true;
      e.target.classList.toggle("plus");
      e.target.classList.contains("plus") ? countLook++ : countLook--;
      NewPostEl.countLook = countLook;
    }
    if (e.target.classList.contains("likes")) {
      isPostChange = true;
      e.target.classList.toggle("plus");
      e.target.classList.contains("plus") ? countLikes++ : countLikes--;
      NewPostEl.countLikes = countLikes;
    }
    if (e.target.classList.contains("download")) {
      isPostChange = true;
      e.target.classList.toggle("plus");
      e.target.classList.contains("plus") ? countDownload++ : countDownload--;
      NewPostEl.countDownload = countDownload;
    }
    if (isPostChange) {
      dispatch({ type: "CHANGE", add_newPost: NewPostEl });
    }
  };

  return (
    <div
      className={`post`}
      onClick={onChangeCount}
      data-value={author.nickname}
    >
      <div className="post_header">
        <div className="thumb_photo">
          <img src={author.photoNick} alt="card author"></img>
        </div>
        <p className="header_name">{author.name}</p>

        <div className="header_date">{datePost}</div>
      </div>
      <h4 className="post_title">{content}</h4>
      <div className="block">
        <div className="post_image">
          <img src={imagePost} alt="card context"></img>
        </div>

        <form name="form_chat" className="form_chat">
          <div className="chat_comment">
            <label for="comment" className="chat_area">
              Comment
            </label>
            <textarea
              name="comment"
              rows="12"
              placeholder="Welcome"
              id="comment"
            ></textarea>
          </div>
          <button type="button" className="btn">
            WOW!
          </button>
        </form>
      </div>
      <div className="wrapper">
        <button type="button" className="wrapper_link comment">
          {countComment}
        </button>
        <button type="button" className="wrapper_link look">
          {countLook}
        </button>
        <button type="button" className="wrapper_link likes">
          {countLikes}
        </button>
        <button type="button" className="wrapper_link download">
          {countDownload}
        </button>
      </div>
    </div>
  );
};

export default Post;
