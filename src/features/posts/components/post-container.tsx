import React from 'react';

import { Box } from 'components/mantine-parts/Miscellaneous/Box';
import { Posts } from 'features/posts';

interface Props {
  data: Posts | undefined;
}

export const PostContainer: React.VoidFunctionComponent<Props> = ({ data }) => {
  return (
    <Box>
      PostContainer
      <>
        {data?.map((post) => (
          <li key={post.id}>{post.body}</li>
        ))}
      </>
    </Box>
  );
};
