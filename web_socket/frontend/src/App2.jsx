import React, { useEffect, useState } from "react";

const App2 = () => {
  const [rows, setRows] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  console.log(sortAsc,"sort asc")

  useEffect(() => {
    const ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data,"data..........");
      const newRow = {
        symbol: data.s,
        price: data.p,
        time: new Date(data.T).toLocaleTimeString(),
      };
      setRows((prev) => [newRow, ...prev].slice(0, 20));
    };

    // ws.onmessage = (event) => {
    //   const data = JSON.parse(event.data);
    //   console.log(data, "data..........");

    //   const newRow = {
    //     symbol: data.s,
    //     price: Number(data.p),
    //     time: new Date(data.T).toLocaleTimeString(),
    //   };

    //   setRows((prev) => {
    //     const index = prev.findIndex((row) => row.symbol === newRow.symbol);

    //     if (index !== -1) {
    //       const updated = [...prev];
    //       updated[index] = newRow;
    //       return updated;
    //     }

    //     return [...prev, newRow];
    //   });
    // };

    return () => ws.close();
  }, []);

  const filterRows = rows.filter((row) =>
    row.symbol.toLowerCase().includes(filterText.toLowerCase())
  );
  console.log(filterRows, "filter rows");

  const sortedRows = [...filterRows].sort((a, b) =>
    sortAsc ? a.price - b.price : b.price - a.price
  );

  console.log(sortedRows,"sorted by rows")

  return (
    <div style={{ padding: "20px" }}>
      <h1>Live BTC Price</h1>

      <input
        type="text"
        placeholder="Filter by symbol (e.g. BTC)"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <button onClick={() => setSortAsc((prev) => !prev)}>
        Sort Price {sortAsc ? "UP" : "DOWN"}
      </button>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {/* {rows.map((row, index) => ( */}
          {/* {filterRows.map((row, index) => ( */}
          {sortedRows.map((row, index) => (
            <tr key={row.symbol}>
              <td>{row.symbol}</td>
              <td>{row.price}</td>
              <td>{row.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App2;
