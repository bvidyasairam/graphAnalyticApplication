import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Bar, Line } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const [Data, setData] = useState({})
  const [valueForDispatch, setValueForDispatch] = useState(0)
  const [graphData, setGraphData] = useState([])
  const value = useSelector((state) => state.rA)

  useEffect(() => {
    console.log("Change")
    setGraphData(value)
    const data = {
      labels: ["January", "February"],
      datasets: [{
        label: "My First dataset",
        backgroundColor: "black",
        borderColor: "black",
        data: [graphData.Xvalue, graphData.Yvalue],
      }]
    }
    setData(data)

  }, [value])


  return (
    <>
      <Bar
        data={Data}
        width={100}
        height={450}
        options={{ maintainAspectRatio: false }}
      />
      <input type="number" onChange={(e) => { setValueForDispatch(e.target.value) }} />
      <button onClick={() => dispatch({ type: "reducerAIncrease", data: valueForDispatch })}>Increase Yaxis January</button>
      <button onClick={() => dispatch({ type: "reducerBIncrease", data: valueForDispatch })}>Increase Yaxis February</button>
      <button onClick={() => dispatch({ type: "reducerADecrease", data: valueForDispatch })}>Decrease Yaxis January</button>
      <button onClick={() => dispatch({ type: "reducerBDecrease", data: valueForDispatch })}>Decrease Yaxis February</button>
    </>
  );
}

export default App;
