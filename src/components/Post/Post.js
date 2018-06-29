import React from "react";
import PropTypes from "prop-types";

import Article from "../Main/Article";
import PostHeader from "./PostHeader";
import Content from "../Main/Content";
import PostFooter from "./PostFooter";

const Post = props => {
  const { post, author, slug, facebook } = props;
  const frontmatter = (post || {}).frontmatter;
  const title = (frontmatter || {}).title;
  const subTitle = (frontmatter || {}).subTitle;
  const category = (frontmatter || {}).category;
  const date = ((post || {}).fields || {}).prefix;
  const html = (post || {}).html;
  const htmlAst = (post || {}).htmlAst;

  //console.log(htmlAst);

  return (
    <Article>
      <PostHeader title={title} subTitle={subTitle} date={date} category={category} />
      <Content html={html} />
      <PostFooter author={author} post={post} slug={slug} facebook={facebook} />
    </Article>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  facebook: PropTypes.object.isRequired
};

export default Post;
