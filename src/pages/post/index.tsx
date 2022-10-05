import { CustomNextPage } from 'next';
import React from 'react';

import { TopLayout } from 'components/Layout';
import { PostPage } from 'page-components/post';

const Post: CustomNextPage = (props) => {
  return <PostPage {...props} />;
};

Post.getLayout = TopLayout;
export default Post;
