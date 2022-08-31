import type { CustomNextPage } from 'next';

import { MainLayout } from 'components/Layout';
import { Box } from 'components/mantine-parts/Miscellaneous/Box';
import { Text } from 'components/mantine-parts/Typography';

const Home: CustomNextPage = () => {
  return (
    <Box>
      <Text>Top Page</Text>
    </Box>
  );
};

Home.getLayout = MainLayout;
export default Home;
