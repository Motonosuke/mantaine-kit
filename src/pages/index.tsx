import type { CustomNextPage } from 'next';

import { MainLayout } from 'components/Layout';
import { HomePage } from 'page-components/home';

const Home: CustomNextPage = (props) => {
  return <HomePage {...props} />;
};

Home.getLayout = MainLayout;
export default Home;
