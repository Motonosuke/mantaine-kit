import type { CustomLayout } from 'next';

import { Box } from 'components/mantine-parts/Miscellaneous';

export const MainLayout: CustomLayout = (page) => {
  return (
    <Box mt={20} mx="auto">
      {page}
    </Box>
  );
};
