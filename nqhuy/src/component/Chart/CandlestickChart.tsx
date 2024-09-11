import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const yearToTimestamp = (year: number) => new Date(`${year}-01-01`).getTime();

interface SeriesData {
  x: number;
  y: [number, number, number, number];
}

const seriesData: { data: SeriesData[] }[] = [
  {
    data: [
      { x: yearToTimestamp(2018), y: [6629.81, 6650.5, 6623.04, 6633.33] },
      { x: yearToTimestamp(2019), y: [6632.01, 6643.59, 6620, 6630.11] },
      { x: yearToTimestamp(2020), y: [6632.01, 6643.59, 6620, 6630.11] },
      { x: yearToTimestamp(2021), y: [6632.01, 6643.59, 6620, 6630.11] },
      { x: yearToTimestamp(2023), y: [6630.71, 6648.95, 6623.34, 6635.65] },
      { x: yearToTimestamp(2023), y: [6635.65, 6651, 6629.67, 6638.24] },
      { x: yearToTimestamp(2024), y: [6638.24, 6640, 6620, 6624.47] },
      { x: yearToTimestamp(2024), y: [6624.53, 6636.03, 6621.68, 6624.31] },
      { x: yearToTimestamp(2025), y: [6624.61, 6632.2, 6617, 6626.02] },
      { x: yearToTimestamp(2025), y: [6627, 6627.62, 6584.22, 6603.02] }, 
    ]
  }
];

const options: ApexOptions = {
  chart: {
    type: 'candlestick',
    height: 350
  },
  title: {
    text: 'CandleStick Chart',
    align: 'left'
  },
  xaxis: {
    type: 'datetime',
    labels: {
      format: 'yyyy'
    }
  },
  yaxis: {
    tooltip: {
      enabled: true
    }
  }
};

const ApexChart: React.FC = () => {
  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={seriesData}
        type="candlestick"
        height={350}
      />
    </div>
  );
};

export default ApexChart;
