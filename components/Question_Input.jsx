"use client";

import React, { useState } from "react";


function QuestionInput() {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputValue);
    const API_KEY = process.env.NEXT_PUBLIC_SEARCH_API_KEY;
    const SEARCH_ENGINE_ID = process.env.NEXT_PUBLIC_SEARCH_ENGINE_ID;

    const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${inputValue}&alt=json`).then(res => res.json());
    console.log(data);
    const titles = data.items.map(result => result.title);
    const links = data.items.map(result => result.link);
    const displayLinks = data.items.map(result => result.displayLink);
    //limit to 5 results
    const limitedTitles = titles.slice(0, 5);
    const limitedLinks = links.slice(0, 5);
    const limitedDisplayLinks = displayLinks.slice(0, 5);

    const limitedResults = limitedTitles.map((title, index) => {
      return {
        title,
        displayLink: limitedDisplayLinks[index],
        link: limitedLinks[index]
      }
    }
    );
    setResults(limitedResults);

   

  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto px-4 mt-6">
      <div className="flex items-center  border-b-2 border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Ask a question"
          aria-label="Question input"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
        >
          Search
        </button>
      </div>
      <ul>
      <div className="flex  flex-wrap -mx-4">
      <div className="flex flex-col">
  {results.map((result, index) => (
    <div key={index} className="mb-6">
      <a
        href={result.link}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 hover:underline text-lg font-semibold"
      >
        {result.title}
      </a>
      <p className="text-gray-500">{result.displayLink}</p>
    </div>
  ))}
</div>

</div>



      
      </ul>
    </form>
  );
}

export default QuestionInput;