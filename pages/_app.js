import '../styles/globals.css';
import DashboardLayout from './dashboardLayout';

const MyApp = ({ Component, pageProps }) => (
  <DashboardLayout>
    <Component {...pageProps} />
  </DashboardLayout>
);

export default MyApp;
