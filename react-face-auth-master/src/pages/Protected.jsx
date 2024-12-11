import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Protected() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("faceAuth")) {
      navigate("/login");
    }

    const { account } = JSON.parse(localStorage.getItem("faceAuth"));
    setAccount(account);
  }, []);

  if (!account) {
    return null;
  }

  return (
    <div
      className="bg-white flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage: "url('/src/pages/log.jpg')", // Path to your background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center mb-6">
        {/* Header text */}
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-6">
          You have successfully logged in!
        </h2>

        {/* Profile picture with spinning border */}
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 border-8 border-t-red-500 border-b-yellow-500 rounded-full animate-spin-slow"></div>
          <img
            className="mx-auto object-cover h-72 w-72 rounded-full border-4 border-white"
            src={account?.type === "CUSTOM" ? account.picture : `${account.picture}`}
            alt={account.fullName}
          />
        </div>

        {/* User name */}
        <h1
          className="block text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800"
          style={{
            lineHeight: "1.5",
          }}
        >
          {account?.fullName}
        </h1>
      </div>

      {/* Button for navigation */}
      <div
        onClick={() => {
          localStorage.removeItem("faceAuth"); // Remove authentication details
          window.location.href = "http://localhost:8080/MiniProject/landing.html"; // Redirect to landing.html
        }}
        className="flex gap-2 mt-8 cursor-pointer py-3 px-6 rounded-full bg-gradient-to-r from-red-400 to-red-600 hover:from-red-600 hover:to-yellow-500 transition-all"
      >
        <span className="text-white">Get Back to Work</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
          />
        </svg>
      </div>

      {/* Add the CSS directly within the component */}
      <style jsx>{`
        @keyframes rotate-border {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: rotate-border 5s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Protected;
