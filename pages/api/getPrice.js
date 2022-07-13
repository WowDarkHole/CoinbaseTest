import axios from 'axios';

export const GetBTCUSD = () => {
  axios
    .get(
      'https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=02A4E559-6CCE-4E55-9E7C-F0E11BD108F8'
    )
    .then((response) => {
      console.log(response);
    });
};
