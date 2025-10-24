import React, { useEffect, useState } from "react";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  console.log(profileData, "profile data");

  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem("user"));
    console.log(storeData, "storedataprofile");
    setProfileData(storeData);
  }, []);

  return (
    <div className="mt-10 h-120">
      <div className="p-3 w-1/4 border bg-white">
        <h1>PROFILE</h1>

        <div className="flex items-center justify-between mb-2"></div>
        <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
          {profileData?.userName}
        </p>
        <p className="mb-3 text-sm font-normal">
          <a href="#" className="hover:underline">
            {profileData?.email}
          </a>
        </p>
        {/* <p className="mb-4 text-sm">
          Open-source contributor. Building{" "}
          <a
            href="#"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            flowbite.com
          </a>
          .
        </p> */}
        <ul className="flex text-sm">
          <li className="me-2">
            <a href="#" className="hover:underline">
              <span className="font-semibold text-gray-900 dark:text-white">
                799
              </span>
              <span>Following</span>
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              <span className="font-semibold text-gray-900 dark:text-white">
                3,758
              </span>
              <span>Followers</span>
            </a>
          </li>
        </ul>
        <div>
          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
