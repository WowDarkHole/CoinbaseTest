import React from 'react';
import styles from '../styles/Button.module.css';

const TabComponent = () => {
  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        <li className="mr-2">
          <a
            href="#"
            className={`${styles.tabBtnActive} active`}
            aria-current="page"
          >
            Dashboard
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className={styles.tabBtnNormal}
          >
            Profile
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className={styles.tabBtnNormal}
          >
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TabComponent;
