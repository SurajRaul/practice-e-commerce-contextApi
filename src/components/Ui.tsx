import React from "react";

const Ui = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md p-6 text-center space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">Congratulations!</h2>

      <p className="text-gray-700 font-medium">
        You have purchased Blindbox #3
      </p>

      <img
        src="your-image-url.jpg"
        alt="Blindbox"
        className="rounded-lg w-full object-cover"
      />

      <div className="flex justify-center gap-4 pt-2">
        <button className="px-4 py-2 rounded-md bg-purple-100 text-black font-medium hover:bg-purple-200 transition">
          Go to my blind boxes
        </button>
        <button className="px-6 py-2 rounded-md bg-black text-white font-semibold hover:bg-gray-800 transition">
          Ok
        </button>
      </div>
    </div>
  );
};

export default Ui;
