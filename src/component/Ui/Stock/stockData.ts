import bitcoin from "@/assets/coinsymbol/1.png";
import ethereum from "@/assets/coinsymbol/2.png";
import Tether from "@/assets/coinsymbol/3.png";
import BNB from "@/assets/coinsymbol/4.png";
import Solana from "@/assets/coinsymbol/5.png";
import USD from "@/assets/coinsymbol/6.png";
import XRP from "@/assets/coinsymbol/7.png";

const cryptoData = [
  {
    image: bitcoin,
    symbol: "BTC-USD",
    name: "Bitcoin USD",
    price: 59060.15,
    change: -3689.65,
    changePercent: -5.88,
    marketCap: "1.166T",
    volume: "43.056B",
    volumeInCurrency24h: "42.501B",
  },
  {
    image: ethereum,
    symbol: "ETH-USD",
    name: "Ethereum USD",
    price: 2462.04,
    change: -216.05,
    changePercent: -8.07,
    marketCap: "296.180B",
    volume: "21.047B",
    volumeInCurrency24h: "20.666B",
  },
  {
    image: Tether,
    symbol: "USDT-USD",
    name: "Tether USDt USD",
    price: 1.0003,
    change: -0.0001,
    changePercent: -0.0095,
    marketCap: "118.070B",
    volume: "71.293B",
    volumeInCurrency24h: "70.352B",
  },
  {
    image: BNB,
    symbol: "BNB-USD",
    name: "BNB USD",
    price: 536.49,
    change: -16.62,
    changePercent: -3.01,
    marketCap: "78.292B",
    volume: "1.930B",
    volumeInCurrency24h: "1.912B",
  },
  {
    image: Solana,
    symbol: "SOL-USD",
    name: "Solana USD",
    price: 144.95,
    change: -12.11,
    changePercent: -7.71,
    marketCap: "67.568B",
    volume: "3.147B",
    volumeInCurrency24h: "3.066B",
  },
  {
    image: USD,
    symbol: "USDC-USD",
    name: "USD Coin USD",
    price: 1.0,
    change: -0.0001,
    changePercent: -0.0148,
    marketCap: "34.430B",
    volume: "7.667B",
    volumeInCurrency24h: "7.567B",
  },
  {
    image: XRP,
    symbol: "XRP-USD",
    name: "XRP USD",
    price: 0.571,
    change: -0.0193,
    changePercent: -3.2687,
    marketCap: "32.077B",
    volume: "1.605B",
    volumeInCurrency24h: "1.557B",
  },
];

export const stockData = () => {
  return cryptoData;
};
