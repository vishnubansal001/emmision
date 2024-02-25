"use client";

import React from "react";
import { useState } from "react";
import Select from "react-select";

const colourOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingBottom: '0.5rem',
    paddingTop: '0.5rem',
    borderWidth: '1px',
    outlineStyle: 'none',
    width: '300px',
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
    background: '#23262b',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#41DFE2' : '#23262b',
    color: state.isSelected ? '#23262b' : 'white',
    '&:hover': {
      backgroundColor: '#41DFE2',
      color: '#23262b',
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#23262b' : 'white',
  }),
  input: (provided, state) => ({
    ...provided,
    color: 'white',
  }),
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
  return (
    <div className="w-full min-h-screen bg-[#040404]">
      <div
        style={{ backgroundImage: `url(/map.png)` }}
        className="bg-no-repeat bg-center w-full min-h-screen bg-cover md:px-32 sm:px-24 px-10 pt-[8rem]"
      >
        <div className="bg-[#010101] inline-block px-10 py-7 text-white border-2 border-[#777777] rounded-[14px]">
          <div className="grid md:grid-cols-2 grid-cols-1 flex-col gap-10">
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
          </div>
          <div className="w-full flex flex-col justify-center items-center pt-10">
            <button className="bg-[#41DFE2] px-10 text-black text-lg py-2 font-bold rounded-[14px] cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
