import React from "react";
import blogImg from "@/assets/images/blogImg.png";
import Image from "next/image";

const BlogPost = () => {
  return (
    <>
      <div className="blogPost_cont">
        <div className="blogPostBox">
          <div className="blogPostImage">
            <Image src={blogImg} alt="blogImg" />
          </div>
          <div className="blogPostContent">
            <div className="blogPostContentHeading">
              <h2>The dos and don'ts of internal communication.</h2>
            </div>
            <div className="blogPostContenttext">
              <p>
                Effective internal communication is key to any organization’s
                success. It brings employees together, boosts collaboration, and
                keeps morale high. To achieve this, follow these essential
                practices.
              </p>
            </div>
            <div className="blogPostBtn">
              <button className="blg_btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
