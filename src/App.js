import "./App.css";

import { Chart } from "@antv/g2";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductTable from "./components/ProductTable";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  //Note React 18 useEffect Renders Twice bug with react
  useEffect(() => {
    if (data.length) {
      renderChart();
    }
  }, [data]);

  const getData = async () => {
    const response = await axios("https://dummyjson.com/products?limit=100");
    setData(response.data.products);
  };

  const renderChart = () => {
    const chart = new Chart({
      container: "productChart",
      autoFit: true,
      height: 400,
      padding: [40, 100, 80, 80],
    });

    chart.data(data);
    chart.scale("price", {
      ticks: [0, 499, 999, 1499, 2000],
    });
    chart.coordinate("polar");
    chart.legend(false);
    chart.axis("price", {
      grid: {
        alignTick: true,
        line: {
          style: {
            lineDash: [0, 0],
          },
        },
      },
    });
    chart
      .point()
      .adjust("jitter")
      .position("price*type")
      .color("price")
      .shape("circle")
      .style({
        fillOpacity: 0.85,
      });
    chart.render();
  };

  return (
    <div className="App">
      <h1>Charts</h1>
      <div id="productChart"></div>
      {data && <ProductTable data={data} />}
    </div>
  );
}

export default App;
