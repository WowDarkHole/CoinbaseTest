import React, { useState } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useEffect } from 'react';
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

import { Config } from '../config';

import styles from '../styles/Button.module.css';

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    line: {
      tension: 0,
      borderWidth: 2,
      borderColor: 'rgba(240, 190, 68, 1)',
      backgroundColor: 'rgba(240,92,68, 0.3)',
    },
    point: {
      radius: 0,
      hitRadius: 0,
    },
  },
  scales: {
    xAxis: {
      display: false,
    },
    yAxis: {
      display: false,
    },
  },
};

const CryptoStatusView = () => {
  const [labelTexts, setLabelTexts] = useState([]);
  const [rateData, setRateData] = useState([]);

  const data = {
    labels: labelTexts,
    datasets: [
      {
        data: rateData,
      },
    ],
  };

  const insertNewData = (time, rate) => {
    const AR = rateData;
    AR.push(rate);
    setLabelTexts([...labelTexts, time]);
    setRateData([...rateData, rate]);
  };

  const GetBTCUSD = async () => {
    try {
      const response = await axios.get(
        `https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=${Config.API_KEY}`
      );
      insertNewData(
        new Date(response.data.time).getTime(),
        Math.round(response.data.rate)
      );
      setLabelTexts([...labelTexts, time]);
      setRateData([...rateData, rate]);
    } catch (error) {
      console.log();
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      GetBTCUSD();
    }, 1000);
    return clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 m-4">
      <div className="col-span-2 rounded-md border-2 p-1">
        <Line data={data} width="100" height="40" options={options} />
      </div>
      <div className="col-span-1">
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li className="mr-2" role="presentation">
              <button
                className="inline-block p-4 rounded-t-lg border-b-2"
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Profile
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className={styles.tabBtn}
                id="dashboard-tab"
                data-tabs-target="#dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="false"
              >
                Dashboard
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className={styles.tabBtn}
                id="settings-tab"
                data-tabs-target="#settings"
                type="button"
                role="tab"
                aria-controls="settings"
                aria-selected="false"
              >
                Settings
              </button>
            </li>
          </ul>
        </div>
        <div id="myTabContent">
          <div
            className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{' '}
              <strong className="font-medium text-gray-800 dark:text-white">
                Profile tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
          <div
            className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
            id="dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{' '}
              <strong className="font-medium text-gray-800 dark:text-white">
                Dashboard tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
          <div
            className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
            id="settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{' '}
              <strong className="font-medium text-gray-800 dark:text-white">
                Settings tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoStatusView;
