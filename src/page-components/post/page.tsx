import React, { FC } from 'react';

import { Box } from 'components/mantine-parts/Miscellaneous/Box';
import { useFetchPosts } from 'features/posts';
import { PostContainer } from 'features/posts/components/post-container';

export const PostPage: FC = () => {
  const { data } = useFetchPosts();

  return (
    <Box>
      <PostContainer data={data} />
    </Box>
  );
};
