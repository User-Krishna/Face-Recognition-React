import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { Link } from "react-router-dom";

const accounts = [
  {
    id: "374ed1e4-481b-4074-a26e-6137657c6e35",
    fullName: "Ankur Singh",
    picture: "374ed1e4-481b-4074-a26e-6137657c6e35/1.jpg",
  },
  {
    id: "43332f46-89a4-435c-880e-4d72bb51149a",
    fullName: "Krishna Das",
    picture: "43332f46-89a4-435c-880e-4d72bb51149a/1.jpg",
  },
  {
    id: "b8476d8d-bd7e-405f-aa66-9a22a9727930",
    fullName: "Binod Subedi",
    picture: "b8476d8d-bd7e-405f-aa66-9a22a9727930/1.jpg",
  },
  {
    id: "88421e2c-ca7a-4332-815f-6e12824e2d05",
    fullName: "Sophia Smith",
    picture: "88421e2c-ca7a-4332-815f-6e12824e2d05/1.jpg",
  },
  {
    id: "0c2f5599-9296-4f94-97d5-e773043188ae",
    fullName: "Bidhak Subedi",
    picture: "0c2f5599-9296-4f94-97d5-e773043188ae/1.jpg", // Add the complete path here
  },
];



function UserSelect() {
  const [selected, setSelected] = useState(accounts[0]);
  const [errorMessage, setErrorMessage] = useState(null);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-8"
      style={{
        backgroundImage: `url("src/pages/face1.jpg")`, // Correct relative path to public folder
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-4xl font-extrabold text-white text-center mb-8 drop-shadow-lg">
        Select a User to Log In
      </h1>
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl overflow-hidden p-6 md:p-8 lg:p-10 transition-transform transform hover:scale-105">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Select a user</RadioGroup.Label>
          <div className="space-y-4">
            {accounts.map((account) => (
              <RadioGroup.Option key={account.id} value={account}>
                {({ checked }) => (
                  <div
                    className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all transform ${
                      checked
                        ? "bg-pink-600 text-white shadow-md scale-105"
                        : "bg-gray-100 text-gray-700"
                    } hover:bg-blue-700 hover:shadow-lg`}
                  >
                    <img
                      src={account.picture}
                      alt={account.fullName}
                      className="w-12 h-12 rounded-full border-2 border-pink-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "default-avatar.jpg"; // Path to a default avatar image
                      }}
                    />
                    <span className="text-lg font-semibold">{account.fullName}</span>
                  </div>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
        <Link
          to="/login"
          state={{ account: selected }}
          className="mt-6 w-full flex items-center justify-center rounded-full bg-pink-600 px-5 py-3 text-lg font-semibold text-white shadow-lg transition-all transform hover:bg-pink-700 hover:scale-105"
        >
          Continue
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-2 h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </Link>
        {errorMessage && (
          <p className="text-red-600 text-center text-sm mt-2">{errorMessage}</p>
        )}
      </div>
    </div>
  );
}

export default UserSelect;
