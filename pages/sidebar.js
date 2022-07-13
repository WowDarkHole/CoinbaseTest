import React from 'react';
import styles from '../styles/SideBar.module.css';
import Image from 'next/image';
import Logo from '../src/img/logo.png';

const SideBar = () => {
  return (
    <aside className="w-20" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-white rounded h-screen">
        <a href="#" className="">
          <Image
            src={Logo}
            className="block lg:hidden w-auto"
            width={60}
            height={60}
            alt="Coinbase Test"
          />
        </a>
        <ul className="space-y-2 py-10">
          <li>
            <a href="#" className={styles.sideButton}>
              <svg
                className={styles.sideButtonSvg}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              {/* <span className="ml-3">Dashboard</span> */}
            </a>
          </li>
          <li>
            <a href="#" className={styles.sideButton}>
              <svg
                className={styles.sideButtonSvg}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="#" className={styles.sideButton}>
              <svg
                className={styles.sideButtonSvg}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="#" className={styles.sideButton}>
              <svg
                className={styles.sideButtonSvg}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              {/* <span className="flex-1 ml-3 whitespace-nowrap">Users</span> */}
            </a>
          </li>
          <li>
            <a href="#" className={styles.sideButton}>
              <svg
                className={styles.sideButtonSvg}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                ></path>
              </svg>
              {/* <span className="flex-1 ml-3 whitespace-nowrap">Products</span> */}
            </a>
          </li>
          <li>
            <a href="#" className={styles.sideButton}>
              <svg
                className={styles.sideButtonSvg}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clipRule="evenodd"
                ></path>
              </svg>
              {/* <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span> */}
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
