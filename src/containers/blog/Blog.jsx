
import React from "react";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./Import";
import Articles from "../../components/article/Articles";

const Blog = () => {
  return (
    <div className="gpt3__blog section__margin">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot happening,We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container__groupA">
          <Articles
            imgUrl={blog01}
            date="sep 30,2023"
            title="GPT-3 and Open AI is the future.Let ua explore how it is."
          />
        </div>
        <div className="gpt3__blog-container__groupB">
          <Articles
            imgUrl={blog02}
            date="sep 30,2023"
            title="GPT-3 and Open AI is the future.Let ua explore how it is."
          />
          <Articles
            imgUrl={blog03}
            date="sep 30,2023"
            title="GPT-3 and Open AI is the future.Let ua explore how it is."
          />
          <Articles
            imgUrl={blog04}
            date="sep 30,2023"
            title="GPT-3 and Open AI is the future.Let ua explore how it is."
          />
          <Articles
            imgUrl={blog05}
            date="sep 30,2023"
            title="GPT-3 and Open AI is the future.Let ua explore how it is."
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
