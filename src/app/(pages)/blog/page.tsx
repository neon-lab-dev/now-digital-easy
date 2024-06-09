"use client";
import React, { useState } from "react";

const Blog = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <>
      <div className="blog_first_container">
        <div className="blog_content">
          <div className="blog_heading">
            <h2>Blog</h2>
          </div>
          <div className="blog_desp">
            <p>
              Discover expert tips and best practices on the SearchAds.com Blog
              for maximizing app visibility and driving growth. Join our
              community of app developers and marketers today!
            </p>
          </div>
        </div>
      </div>

      <div className="blog_tab_cont">
        <div className="tab_contianer">
          <div className="bloc_tabs">
            <div
              className={
                toggleState === 1 ? "blog_tab active-blog_tab" : "blog_tab"
              }
              onClick={() => toggleTab(1)}
            >
              All
            </div>

            <div
              className={
                toggleState === 2 ? "blog_tab active-blog_tab" : "blog_tab"
              }
              onClick={() => toggleTab(2)}
            >
              News & Products Announcements
            </div>

            <div
              className={
                toggleState === 3 ? "blog_tab active-blog_tab" : "blog_tab"
              }
              onClick={() => toggleTab(3)}
            >
              Advanced Tips
            </div>
          </div>
          <div className="content_blog_tabs">
            <div
              className={
                toggleState === 1
                  ? "content_blog content_blog-active"
                  : "content_blog"
              }
            >
              <h2>Content 1</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
                quidem?
              </p>
            </div>

            <div
              className={
                toggleState === 2
                  ? "content_blog content_blog-active"
                  : "content_blog"
              }
            >
              <h2>Content 2</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
                quas dolores id, laborum, voluptatibus ut quaerat asperiores
                voluptatem nisi, ipsam veniam. Odit ut aspernatur aliquam ad eum
                inventore nulla veniam maiores! Ullam sint aliquid, beatae
                corporis ratione rem delectus voluptas! Perspiciatis delectus
                aliquid, cum quod alias aliquam neque! Odit, quos!
              </p>
            </div>

            <div
              className={
                toggleState === 3
                  ? "content_blog content_blog-active"
                  : "content_blog"
              }
            >
              <h2>Content 3</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                obcaecati, vel atque eos consequatur quidem sed dignissimos
                magnam, nostrum numquam ex! Blanditiis magnam dolorum rem
                necessitatibus, consectetur inventore tenetur facilis aliquid
                sit unde sed ullam vero nihil repellendus. Possimus dolorem illo
                ipsa autem nesciunt repellat repellendus repudiandae facere
                temporibus accusamus unde, exercitationem necessitatibus facilis
                rem eligendi porro ratione eius, laboriosam quibusdam maiores
                tempora ea dignissimos voluptas officia! Ipsa error dolore,
                voluptatem corrupti aut soluta illum vel iure consequuntur animi
                praesentium perferendis nisi alias maiores deserunt quasi
                inventore ad corporis impedit cum eaque harum quibusdam ipsam
                sapiente. Impedit, dicta. Sequi, officia!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
