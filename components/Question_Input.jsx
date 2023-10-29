"use client";

import React, { useState } from "react";

function QuestionInput() {
  const [inputValue, setInputValue] = useState("");
  const [classValue, setClassValue] = useState("");
  const [subjectValue, setSubjectValue] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClassChange = (event) => {
    setClassValue(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubjectValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputValue);
    console.log(classValue);
    console.log(subjectValue);

    const query = `${inputValue} solutions "${classValue}" "${subjectValue}"`;
    console.log(query);
    const API_KEY = process.env.NEXT_PUBLIC_SEARCH_API_KEY;
    const SEARCH_ENGINE_ID = process.env.NEXT_PUBLIC_SEARCH_ENGINE_ID;

    const data = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${query}&alt=json`
    ).then((res) => res.json());
    console.log(data);
    const titles = data.items.map((result) => result.title);
    const links = data.items.map((result) => result.link);
    const displayLinks = data.items.map((result) => result.displayLink);
    //limit to 5 results
    const limitedTitles = titles.slice(0, 10);
    const limitedLinks = links.slice(0, 10);
    const limitedDisplayLinks = displayLinks.slice(0, 10);

    const limitedResults = limitedTitles.map((title, index) => {
      return {
        title,
        displayLink: limitedDisplayLinks[index],
        link: limitedLinks[index],
      };
    });
    setResults(limitedResults);
  };

  return (
    <div className="max-w-screen-sm mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <label htmlFor="questionInput" className="block text-gray-700 text-sm font-bold mb-2">
            Chapter Name
          </label>
          <input
            id="questionInput"
            type="text"
            className="w-full border p-2 rounded focus:outline-none focus:border-teal-500"
            placeholder="Enter Chapter Name"
            value={inputValue}
            onChange={handleInputChange}
            style={{ color: "black" }}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="classDropdown" className="block text-gray-700 text-sm font-bold mb-2">
            Select Class
          </label>
          <select
            id="classDropdown"
            className="w-full border p-2 rounded focus:outline-none focus:border-teal-500"
            value={classValue}
            onChange={handleClassChange}
          >
            <option value="class" disabled>Select Class</option>
            <option value=""></option>
            <option value="class 1">Class 1</option>
            <option value="class 2">Class 2</option>
            <option value="class 3">Class 3</option>
            <option value="class 4">Class 4</option>
            <option value="class 5">Class 5</option>
            <option value="class 6">Class 6</option>
            <option value="class 7">Class 7</option>
            <option value="class 8">Class 8</option>
            <option value="class 9">Class 9</option>
            <option value="class 10">Class 10</option>
            <option value="class 11">Class 11</option>
            <option value="class 12">Class 12</option>
            {/* Add other class options */}
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="subjectDropdown" className="block text-gray-700 text-sm font-bold mb-2">
            Select Subject
          </label>
          <select
            id="subjectDropdown"
            className="w-full border p-2 rounded focus:outline-none focus:border-teal-500"
            value={subjectValue}
            onChange={handleSubjectChange}
          >
            <option value="subject" disabled>Select Subject</option>
            <option value=""></option>
            <option value="maths">Maths</option>
            <option value="science">Science</option>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="social science">Social Science</option>
            <option value="sanskrit">Sanskrit</option>
            <option value="computer">Computer</option>
          </select>
        </div>

        <button
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          type="submit"
        >
          Search
        </button>
      </form>

      <div className="mt-6">
        <ul className="flex flex-col">
          {results.map((result, index) => (
            <li key={index} className="mb-4">
              <a
                href={result.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline text-lg font-semibold"
              >
                {result.title}
              </a>
              <p className="text-gray-500">{result.displayLink}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default QuestionInput;
