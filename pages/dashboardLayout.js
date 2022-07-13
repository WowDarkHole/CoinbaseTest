import Head from 'next/head';
import Navbar from './navbar.js';
import Sidebar from './sidebar.js';

const DashboardLayout = ({ children }) => {
  return (
    <div id="dashboard-layout">
      <Head>
        <title>Coinbase Test</title>
      </Head>
      <div className="flex">
        <Sidebar />
        <div className="w-full border-l-2 border-black-800">
          <Navbar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
