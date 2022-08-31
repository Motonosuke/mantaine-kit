import type { CustomLayout } from 'next';

import { Box } from 'components/mantine-parts/Miscellaneous';

export const FormLayout: CustomLayout = (page) => {
  return <Box mt={10}>{page}</Box>;
};
