import React from 'react';

function NotFound() {
  return (
    <div className="min-h-screen bg-[#fff8f0] flex flex-col items-center justify-center text-center px-4 mt-5">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkn2gdN7l3E6gNYQq1g7GujsO6DdNx6a4WdA&s" // A cute noodle bowl illustration
        alt="Noodle Not Found"
        className="w-40 h-40 mb-6"
      />
      <h1 className="text-4xl font-bold text-[#d35400] mb-2">Oops! Page Not Found</h1>
      <p className="text-lg text-[#6c5b7b] mb-6">
        The noodle strand you're looking for doesn't seem to be in the bowl 🍜
      </p>
      <a
        href="/"
        className="bg-[#d35400] text-white px-6 py-2 rounded-full hover:bg-[#e67e22] transition duration-300"
      >
        Go Back Home
      </a>
    </div>
  );
}

export default NotFound;
