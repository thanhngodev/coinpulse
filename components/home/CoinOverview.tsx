import Image from "next/image";

const CoinOverview = () => {
  return (
    <div id="coin-overview">
      {/* <CandlestickChart data={coinOHLCData} coinId="bitcoin"> */}
      <div className="header pt-2">
        <Image
          src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
          alt={""}
          width={56}
          height={56}
        />
        <div className="info">
          <p>
            {/* {coin.name} / {coin.symbol.toUpperCase()} */}
            Bitcoin / BTC
          </p>
          <h1>
            {/* {formatCurrency(coin.market_data.current_price.usd)} */}
            $100,000.00
          </h1>
        </div>
      </div>
      {/* </CandlestickChart> */}
    </div>
  );
};

export default CoinOverview;
