import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [openForm, setOpenForm] = useState(false);
  const [update, setUpdate] = useState([]);

  return (
    <div>
      <h2 className="text-4xl font-bold m-6 border-b-2 border-blue-600 pb-4">
        My Profile
      </h2>
      <div className="m-10">
        <div className="max-w-2xl bg-blue-100 shadow-sm rounded-md">
          <div className="flex justify-around p-8">
            <div>
              <div className="w-36 h-36 mb-12">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={
                    user?.photoURL
                      ? user?.photoURL
                      : "https://cdn.dribbble.com/users/35310/screenshots/3062471/man-with-beard-and-glasses.png?compress=1&resize=400x300&vertical=top"
                  }
                  alt=""
                />
              </div>
              <button
                className="bg-blue-600 px-6 py-2 font-bold text-lg text-white rounded-full"
                onClick={() => setOpenForm(!openForm)}
              >
                Edit profile
              </button>
            </div>

            {openForm ? (
              <div>
                <form className="flex flex-col justify-end">
                  <input
                    type="text"
                    name="education"
                    placeholder="Education"
                    className="border focus:border-blue-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-xs mx-14 rounded-full mb-4 px-6 py-3"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    className="border focus:border-blue-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-xs mx-14 rounded-full mb-4 px-6 py-3"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="border focus:border-blue-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-xs mx-14 rounded-full mb-4 px-6 py-3"
                  />
                  <input
                    type="text"
                    name="link"
                    placeholder="LinkedIn Profile Link"
                    className="border focus:border-blue-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-xs mx-14 rounded-full mb-4 px-6 py-3"
                  />
                  <input
                    className="w-full max-w-xs mx-14 rounded-full mb-4 text-lg  font-bold py-3 cursor-pointer bg-blue-600 border-0 px-10 text-white"
                    type="submit"
                    value="Update Profile"
                  />
                </form>
              </div>
            ) : (
              <div>
                <div className="mb-4">
                  <p className=" font-medium text-gray-600">Full Name</p>
                  <h2 className="text-left text-lg font-medium">
                    {user.displayName}
                  </h2>
                </div>
                <div className="mb-4">
                  <p className="font-medium text-gray-600">Email</p>
                  <h2 className="text-left text-lg font-medium">
                    {user.email}
                  </h2>
                </div>
                <div className="mb-4">
                  <p className="font-medium text-gray-600">Education</p>
                  <h2 className="text-left text-lg font-medium">
                    {update.education}
                  </h2>
                </div>
                <div className="mb-4">
                  <p className="text-lg font-medium text-gray-600">Address</p>
                  <h2 className="text-left text-xl font-medium">
                    {update.address}
                  </h2>
                </div>
                <div className="mb-4">
                  <p className="font-medium text-gray-600">Phone</p>
                  <h2 className="text-left text-lg font-medium">
                    {update.phone}
                  </h2>
                </div>
                <div className="mb-4">
                  <p className="font-medium text-gray-600">
                    LinkedIn Profile Link
                  </p>
                  <h2 className="text-left text-lg font-medium">
                    {update.link}
                  </h2>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
