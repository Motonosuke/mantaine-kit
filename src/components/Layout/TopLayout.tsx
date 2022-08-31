import type { CustomLayout } from 'next';

import { Box } from 'components/mantine-parts/Miscellaneous';

export const TopLayout: CustomLayout = (page) => {
  return (
    <Box mt={20} mx="auto">
      {page}
    </Box>
  );
};
