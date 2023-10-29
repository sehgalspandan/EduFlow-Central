import React from "react";

const WebsiteGuide = () => {
  return (
    <div className="max-w-screen mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-4xl font-semibold mb-6 text-center text-teal-500">Getting Started with Our Website</h2>

      <div className="flex items-center justify-between mb-8">
        <div className="w-1/4 text-center">
          <div className="bg-teal-500 text-white rounded-full h-16 w-16 flex items-center justify-center mb-2">
            <span className="text-2xl">1</span>
          </div>
          <p className="font-semibold text-teal-500">Enter chapter name</p>
          <p className="text-gray-700">Please provide the name of the chapter for which you need solutions. </p>
        </div>

        <div className="w-1/4 text-center">
          <div className="bg-teal-500 text-white rounded-full h-16 w-16 flex items-center justify-center mb-2">
            <span className="text-2xl">2</span>
          </div>
          <p className="font-semibold text-teal-500">Select your Class</p>
          <p className="text-gray-700">Select the class in which you are in.</p>
        </div>

        <div className="w-1/4 text-center">
          <div className="bg-teal-500 text-white rounded-full h-16 w-16 flex items-center justify-center mb-2">
            <span className="text-2xl">3</span>
          </div>
          <p className="font-semibold text-teal-500">Select your subject</p>
          <p className="text-gray-700">Select the subject of which the chapter is</p>
        </div>

        <div className="w-1/4 text-center">
          <div className="bg-teal-500 text-white rounded-full h-16 w-16 flex items-center justify-center mb-2">
            <span className="text-2xl">4</span>
          </div>
          <p className="font-semibold text-teal-500">Get Results</p>
          <p className="text-gray-700">Get the most relevant results</p>
        </div>
      </div>

      <p className="text-center text-gray-700">
        Enjoy your learning journey with us! If you have any questions, click on the &quot;Contact&quot; button in the navigation bar {":)"}
      </p>
    </div>
  );
};

export default WebsiteGuide;
