"use client";

import React from "react";
import { useState } from "react";
import Select from "react-select";
import { IoIosSearch } from "react-icons/io";
import MySlider from "../_components/Select";
import ReactApexChart from "react-apexcharts";

const colourOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

var options = {
  series: [44, 55, 41, 17, 15],
  chart: {
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 90,
      offsetY: 10,
    },
  },
  grid: {
    padding: {
      bottom: -80,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

const dat = [
  { name: "wuejnfsd", value: 11 },
  { name: "wuejnfsd", value: 12 },
  { name: "wuejnfsd", value: 12 },
  { name: "wuejnfsd", value: 13 },
  { name: "wuejnfsd", value: 34 },
  { name: "wuejnfsd", value: 3 },
  { name: "wuejnfsd", value: 45 },
  { name: "wuejnfsd", value: 34 },
  { name: "wuejnfsd", value: 35 },
  { name: "wuejnfsd", value: 23 },
  { name: "wuejnfsd", value: 24 },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: "0.5rem",
    paddingTop: "0.5rem",
    borderWidth: "1px",
    outlineStyle: "none",
    width: "340px",
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
    background: "#23262b",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#41DFE2" : "#23262b",
    color: state.isSelected ? "#23262b" : "white",
    "&:hover": {
      backgroundColor: "#41DFE2",
      color: "#23262b",
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "#23262b" : "white",
  }),
  input: (provided, state) => ({
    ...provided,
    color: "white",
  }),
};

var ptions = {
  series: [
    {
      data: [
        [1327359600000, 30.95],
        [1327446000000, 31.34],
        [1327532400000, 31.18],
        [1327618800000, 31.05],
        [1327878000000, 31.0],
        [1327964400000, 30.95],
        [1328050800000, 31.24],
        [1328137200000, 31.29],
        [1328223600000, 31.85],
        [1328482800000, 31.86],
        [1328569200000, 32.28],
        [1328655600000, 32.1],
        [1328742000000, 32.65],
        [1328828400000, 32.21],
        [1329087600000, 32.35],
        [1329174000000, 32.44],
        [1329260400000, 32.46],
        [1329346800000, 32.86],
        [1329433200000, 32.75],
        [1329778800000, 32.54],
        [1329865200000, 32.33],
        [1329951600000, 32.97],
        [1330038000000, 33.41],
        [1330297200000, 33.27],
        [1330383600000, 33.27],
        [1330470000000, 32.89],
        [1330556400000, 33.1],
        [1330642800000, 33.73],
        [1330902000000, 33.22],
        [1330988400000, 31.99],
        [1331074800000, 32.41],
        [1331161200000, 33.05],
        [1331247600000, 33.64],
        [1331506800000, 33.56],
        [1331593200000, 34.22],
        [1331679600000, 33.77],
        [1331766000000, 34.17],
        [1331852400000, 33.82],
        [1332111600000, 34.51],
        [1332198000000, 33.16],
        [1332284400000, 33.56],
        [1332370800000, 33.71],
        [1332457200000, 33.81],
        [1332712800000, 34.4],
        [1332799200000, 34.63],
        [1332885600000, 34.46],
        [1332972000000, 34.48],
        [1333058400000, 34.31],
        [1333317600000, 34.7],
        [1333404000000, 34.31],
        [1333490400000, 33.46],
        [1333576800000, 33.59],
        [1333922400000, 33.22],
        [1334008800000, 32.61],
        [1334095200000, 33.01],
        [1334181600000, 33.55],
        [1334268000000, 33.18],
        [1334527200000, 32.84],
        [1334613600000, 33.84],
        [1334700000000, 33.39],
        [1334786400000, 32.91],
        [1334872800000, 33.06],
        [1335132000000, 32.62],
        [1335218400000, 32.4],
        [1335304800000, 33.13],
        [1335391200000, 33.26],
        [1335477600000, 33.58],
        [1335736800000, 33.55],
        [1335823200000, 33.77],
        [1335909600000, 33.76],
        [1335996000000, 33.32],
        [1336082400000, 32.61],
        [1336341600000, 32.52],
        [1336428000000, 32.67],
        [1336514400000, 32.52],
        [1336600800000, 31.92],
        [1336687200000, 32.2],
        [1336946400000, 32.23],
        [1337032800000, 32.33],
        [1337119200000, 32.36],
        [1337205600000, 32.01],
        [1337292000000, 31.31],
        [1337551200000, 32.01],
        [1337637600000, 32.01],
        [1337724000000, 32.18],
        [1337810400000, 31.54],
        [1337896800000, 31.6],
        [1338242400000, 32.05],
        [1338328800000, 31.29],
        [1338415200000, 31.05],
        [1338501600000, 29.82],
        [1338760800000, 30.31],
        [1338847200000, 30.7],
        [1338933600000, 31.69],
        [1339020000000, 31.32],
        [1339106400000, 31.65],
        [1339365600000, 31.13],
        [1339452000000, 31.77],
        [1339538400000, 31.79],
        [1339624800000, 31.67],
        [1339711200000, 32.39],
        [1339970400000, 32.63],
        [1340056800000, 32.89],
        [1340143200000, 31.99],
        [1340229600000, 31.23],
        [1340316000000, 31.57],
        [1340575200000, 30.84],
        [1340661600000, 31.07],
        [1340748000000, 31.41],
        [1340834400000, 31.17],
        [1340920800000, 32.37],
        [1341180000000, 32.19],
        [1341266400000, 32.51],
        [1341439200000, 32.53],
        [1341525600000, 31.37],
        [1341784800000, 30.43],
        [1341871200000, 30.44],
        [1341957600000, 30.2],
        [1342044000000, 30.14],
        [1342130400000, 30.65],
        [1342389600000, 30.4],
        [1342476000000, 30.65],
        [1342562400000, 31.43],
        [1342648800000, 31.89],
        [1342735200000, 31.38],
        [1342994400000, 30.64],
        [1343080800000, 30.02],
        [1343167200000, 30.33],
        [1343253600000, 30.95],
        [1343340000000, 31.89],
        [1343599200000, 31.01],
        [1343685600000, 30.88],
        [1343772000000, 30.69],
        [1343858400000, 30.58],
        [1343944800000, 32.02],
        [1344204000000, 32.14],
        [1344290400000, 32.37],
        [1344376800000, 32.51],
        [1344463200000, 32.65],
        [1344549600000, 32.64],
        [1344808800000, 32.27],
        [1344895200000, 32.1],
        [1344981600000, 32.91],
        [1345068000000, 33.65],
        [1345154400000, 33.8],
        [1345413600000, 33.92],
        [1345500000000, 33.75],
        [1345586400000, 33.84],
        [1345672800000, 33.5],
        [1345759200000, 32.26],
        [1346018400000, 32.32],
        [1346104800000, 32.06],
        [1346191200000, 31.96],
        [1346277600000, 31.46],
        [1346364000000, 31.27],
        [1346709600000, 31.43],
        [1346796000000, 32.26],
        [1346882400000, 32.79],
        [1346968800000, 32.46],
        [1347228000000, 32.13],
        [1347314400000, 32.43],
        [1347400800000, 32.42],
        [1347487200000, 32.81],
        [1347573600000, 33.34],
        [1347832800000, 33.41],
        [1347919200000, 32.57],
        [1348005600000, 33.12],
        [1348092000000, 34.53],
        [1348178400000, 33.83],
        [1348437600000, 33.41],
        [1348524000000, 32.9],
        [1348610400000, 32.53],
        [1348696800000, 32.8],
        [1348783200000, 32.44],
        [1349042400000, 32.62],
        [1349128800000, 32.57],
        [1349215200000, 32.6],
        [1349301600000, 32.68],
        [1349388000000, 32.47],
        [1349647200000, 32.23],
        [1349733600000, 31.68],
        [1349820000000, 31.51],
        [1349906400000, 31.78],
        [1349992800000, 31.94],
        [1350252000000, 32.33],
        [1350338400000, 33.24],
        [1350424800000, 33.44],
        [1350511200000, 33.48],
        [1350597600000, 33.24],
        [1350856800000, 33.49],
        [1350943200000, 33.31],
        [1351029600000, 33.36],
        [1351116000000, 33.4],
        [1351202400000, 34.01],
        [1351638000000, 34.02],
        [1351724400000, 34.36],
        [1351810800000, 34.39],
        [1352070000000, 34.24],
        [1352156400000, 34.39],
        [1352242800000, 33.47],
        [1352329200000, 32.98],
        [1352415600000, 32.9],
        [1352674800000, 32.7],
        [1352761200000, 32.54],
        [1352847600000, 32.23],
        [1352934000000, 32.64],
        [1353020400000, 32.65],
        [1353279600000, 32.92],
        [1353366000000, 32.64],
        [1353452400000, 32.84],
        [1353625200000, 33.4],
        [1353884400000, 33.3],
        [1353970800000, 33.18],
        [1354057200000, 33.88],
        [1354143600000, 34.09],
        [1354230000000, 34.61],
        [1354489200000, 34.7],
        [1354575600000, 35.3],
        [1354662000000, 35.4],
        [1354748400000, 35.14],
        [1354834800000, 35.48],
        [1355094000000, 35.75],
        [1355180400000, 35.54],
        [1355266800000, 35.96],
        [1355353200000, 35.53],
        [1355439600000, 37.56],
        [1355698800000, 37.42],
        [1355785200000, 37.49],
        [1355871600000, 38.09],
        [1355958000000, 37.87],
        [1356044400000, 37.71],
        [1356303600000, 37.53],
        [1356476400000, 37.55],
        [1356562800000, 37.3],
        [1356649200000, 36.9],
        [1356908400000, 37.68],
        [1357081200000, 38.34],
        [1357167600000, 37.75],
        [1357254000000, 38.13],
        [1357513200000, 37.94],
        [1357599600000, 38.14],
        [1357686000000, 38.66],
        [1357772400000, 38.62],
        [1357858800000, 38.09],
        [1358118000000, 38.16],
        [1358204400000, 38.15],
        [1358290800000, 37.88],
        [1358377200000, 37.73],
        [1358463600000, 37.98],
        [1358809200000, 37.95],
        [1358895600000, 38.25],
        [1358982000000, 38.1],
        [1359068400000, 38.32],
        [1359327600000, 38.24],
        [1359414000000, 38.52],
        [1359500400000, 37.94],
        [1359586800000, 37.83],
        [1359673200000, 38.34],
        [1359932400000, 38.1],
        [1360018800000, 38.51],
        [1360105200000, 38.4],
        [1360191600000, 38.07],
        [1360278000000, 39.12],
        [1360537200000, 38.64],
        [1360623600000, 38.89],
        [1360710000000, 38.81],
        [1360796400000, 38.61],
        [1360882800000, 38.63],
        [1361228400000, 38.99],
        [1361314800000, 38.77],
        [1361401200000, 38.34],
        [1361487600000, 38.55],
        [1361746800000, 38.11],
        [1361833200000, 38.59],
        [1361919600000, 39.6],
      ],
    },
  ],
  chart: {
    id: "area-datetime",
    type: "area",
    height: 350,
  },
  annotations: {
    yaxis: [
      {
        y: 30,
        // borderColor: "#999",
      },
    ],
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 0,
    style: "hollow",
  },
  xaxis: {
    type: "datetime",
    min: new Date("01 Mar 2012").getTime(),
    tickAmount: 6,
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 100],
    },
  },
};
const Page = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onSelect(selectedValue);
  };
  const onCountrySelect = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
  };
  const halfIndex = Math.ceil(dat.length / 2);

  const a = dat.slice(0, halfIndex);
  const b = dat.slice(halfIndex);
  const [chartData, setChartData] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: "donut",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10,
        },
      },
      grid: {
        padding: {
          bottom: -80,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });
  return (
    <div className="w-full min-h-screen bg-[#040404] md:px-32 sm:px-24 px-10 pt-[6rem] flex flex-col gap-10">
      <div className="bg-[#010101] px-10 py-7 text-white border-2 border-[#777777] rounded-[14px]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 flex-col gap-10">
          <div className="flex flex-col gap-3 justify-start items-start">
            <p className="text-white md:text-lg text-base font-semibold">
              Country
            </p>
            <Select
              classNamePrefix="select"
              defaultValue={colourOptions[0]}
              isSearchable={true}
              name="color"
              className="basic-single"
              options={colourOptions}
              styles={customStyles}
            />
          </div>
          <div className="flex flex-col gap-3 justify-start items-start">
            <p className="text-white md:text-lg text-base font-semibold">
              Time Period
            </p>
            <select
              id="timeRange"
              value={selectedOption}
              onChange={handleSelectChange}
              className="w-full bg-[#23262b] border-t-white border-r-white border-l-white border-b-[#41DFE2] border rounded-[6px] outline-none pt-6 px-4 pb-2 text-xl"
            >
              <option value="Last 1 day">Last 1 day</option>
              <option value="Last 5 days">Last 5 days</option>
              <option value="Last 10 days">Last 10 days</option>
              <option value="Last 30 days">Last 30 days</option>
            </select>
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center">
            <button className="bg-[#41DFE2] px-10 text-black text-lg py-2 font-bold rounded-[14px] cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 w-[90%]">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="text-white flex flex-col gap-5 w-full">
        <div className="flex md:flex-row flex-col gap-6 w-full justify-center items-start">
          <div className="bg-[#010101] px-10 py-7 text-white border-2 border-[#777777] rounded-[14px] flex flex-col gap-6 lg:w-[50%] w-[90%]">
            <div className="flex sm:flex-row flex-col gap-20 justify-between items-center w-full">
              <div className="flex flex-col justify-start items-start">
                <h1 className="lg:text-lg text-base">Emission by Port</h1>
                <p className="text-sm text-[#A4A4A4]">MTCO2e</p>
              </div>
              <div className="flex flex-row gap-1 justify-center w-[40%] items-center border border-t-white border-b-[#68EDFF] border-r-white border-l-white rounded-[6px] px-5 py-2">
                <input
                  type="text"
                  className="placeholder:text-[#68EDFF] bg-transparent outline-none w-[90%]"
                  placeholder="Search"
                />
                <IoIosSearch className="text-lg cursor-pointer" />
              </div>
            </div>
            <div className="flex sm:flex-row gap-3 sm:gap-7 w-full">
              <div className="h-[100px] overflow-y-scroll w-[50%] pr-4 border-r-[#FFFFFF] flex flex-col gap-2 scrollable-element">
                {a.map((d, index) => (
                  <div
                    key={index}
                    className="flex flex-row gap-4 justify-around items-center w-full"
                  >
                    <div className="text-[#68EDFF]">{d.name}</div>
                    <div className="w-[40%] flex flex-col justify-center items-center">
                      <MySlider value={d.value} />
                    </div>
                    <div>{d.value}</div>
                  </div>
                ))}
              </div>
              <div className="h-[100px] overflow-y-scroll w-[50%] scrollable-element pr-4 flex flex-col gap-2 ">
                {b.map((d, index) => (
                  <div
                    key={index}
                    className="flex flex-row gap-4 justify-around items-center w-full"
                  >
                    <div className="text-[#68EDFF]">{d.name}</div>
                    <div className="w-[40%] flex flex-col justify-center items-center">
                      <MySlider value={d.value} />
                    </div>
                    <div>{d.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] w-[90%]">
            <div>
              <div>
                <p>Ships</p>
                <p>3,440</p>
                <div>
                  <p>Total Number of Ships</p>
                  <img src="/click.svg" alt="click" />
                </div>
              </div>
              <div>
                <ReactApexChart
                  options={chartData.options}
                  series={chartData.series}
                  type="donut"
                />
              </div>
            </div>
            <div className="w-[100px] h-30px flex flex-row">
              <div className="w-[50px] text-[#68EDFF] select-none bg-[#68EDFF] h-30px overflow-hidden">
                eksdjn
              </div>
              <div className="w-[30px] select-none text-[#4DB949] bg-[#4DB949] h-30px overflow-hidden">
                kershdznx
              </div>
              <div className="w-[30px] select-none text-[#FF8393] bg-[#FF8393] h-30px overflow-hidden">
                kershdznx
              </div>
            </div>
          </div>
        </div>
        <div>
          <div></div>
          <div>
            <div>
              <h1>Carbon Emission Analysis</h1>
              <ReactApexChart
                options={ptions}
                series={ptions.series}
                type="area"
                height={350}
              />
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(/abc.png)` }}
          className="bg-cover bg-no-repeat bg-center px-10 py-7 text-white border-2 border-[#777777] rounded-[14px] flex flex-col justify-start gap-6"
        >
          <div className="flex sm:flex-row justify-between items-center w-full">
            <div className="flex flex-col gap-1">
              <p className="lg:text-lg">Carbon Emission</p>
              <p className="lg:text-4xl md:text-2xl text-lg text-[#41DFE2]">
                134,821
              </p>
              <div className="flex flex-row gap-3 justify-center items-center">
                <p className="text-sm text-[#A4A4A4]">Total Carbon Emission</p>
                <img src="/click.svg" alt="click" className="w-[20px]" />
              </div>
            </div>
            <div>MTCO2e</div>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
            <div className="w-full h-full flex flex-col gap-3">
              <div className="bg-[#0A0D25] flex flex-col gap-3 px-4 justify-center items-center py-5">
                <p className="lg:text-xl md:text-lg text-base">408,183</p>
                <p className="text-[#A4A4A4] lg:text-base text-sm">
                  kueajgfsbc
                </p>
              </div>
              <div className="bg-[#0A0D25] flex flex-col gap-3 px-4 justify-center items-center py-5">
                <p className="lg:text-xl md:text-lg text-base">408,183</p>
                <p className="text-[#A4A4A4] lg:text-base text-sm">
                  kueajgfsbc
                </p>
              </div>
            </div>
            <div className="bg-[#0A0D25] flex flex-col gap-3 px-4 justify-center items-center py-5">
              <p className="lg:text-xl md:text-lg text-base">408,183</p>
              <p className="text-[#A4A4A4] lg:text-base text-sm">kueajgfsbc</p>
            </div>
            <div className="w-full h-full flex flex-col gap-3">
              <div className="bg-[#0A0D25] flex flex-col gap-3 px-4 justify-center items-center py-5">
                <p className="lg:text-xl md:text-lg text-base">408,183</p>
                <p className="text-[#A4A4A4] lg:text-base text-sm">
                  kueajgfsbc
                </p>
              </div>
              <div className="bg-[#0A0D25] flex flex-col gap-3 px-4 justify-center items-center py-5">
                <p className="lg:text-xl md:text-lg text-base">408,183</p>
                <p className="text-[#A4A4A4] lg:text-base text-sm">
                  iauhrsjn dgvbcj
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
