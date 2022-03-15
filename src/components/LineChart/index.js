import Chartjs from "chart.js";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { countInArray } from "../../utils/genFunc.utils";

const chartConfig = (objectId, points) => ({
  type: "line",
  data: {
    labels: objectId !== null && objectId.length > 0 ? objectId : [],
    datasets: [
      {
        label: "Votes",
        data: points !== null && points.length > 0 ? points : [],
        backgroundColor: ["rgba(255, 159, 64, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  },
});
const LineChart = (props) => {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  const [objectId, setObjectId] = useState([]);
  const [points, setPoints] = useState([]);
  const newsVotes = useSelector((state) => state.votes);

  useEffect(() => {
    const myitemVote = (objid) => {
      // console.log("abarvotes", newsVotes.votes);
      let voteCount;
      if (newsVotes.votes.includes(objid)) {
        voteCount = countInArray(newsVotes.votes, objid);
      } else {
        voteCount = 0;
      }
      return voteCount;
    };

    setObjectId(props.data.map((obj) => obj.objectID));
    setPoints(props.data.map((obj) => myitemVote(obj.objectID)));
  }, [props.data, newsVotes]);

  console.log(chartInstance);
  // console.log("mera ID", objectId);
  // console.log("mera points", points);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(
        chartContainer.current,
        chartConfig(objectId, points)
      );
      setChartInstance(newChartInstance);
    }
  }, [objectId, points, props.data, newsVotes.votes]);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default LineChart;
