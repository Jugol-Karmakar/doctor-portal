import React, { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);

  const [currentUser, setCurrentUser] = useState({});
  const [updateProfile, setUpdateProfile] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCurrentUser(data));
  }, []);

  console.log(currentUser);

  const handelUpdateProfile = (e) => {
    e.preventDefault();

    const email = currentUser?.email;
    const name = user?.displayName;
    const avatar = currentUser?.avatar;

    const education = e.target.education.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    const link = e.target.link.value;

    const upateInfo = {
      email,
      name,
      avatar,
      education,
      address,
      phone,
      link,
    };

    fetch(`http://localhost:5000/users/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(upateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    setUpdateProfile(false);
  };

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
                onClick={() => setUpdateProfile(!updateProfile)}
              >
                Edit profile
              </button>
            </div>

            {!updateProfile && (
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
                    {currentUser.email}
                  </h2>
                </div>
                <div className="mb-4">
                  <p className="font-medium text-gray-600">Education</p>
                  <h2 className="text-left text-lg font-medium">
                    {currentUser?.user?.education}
                  </h2>
                </div>
                <div className="mb-4">
                  <p className="font-medium text-gray-600">Address</p>
                  <h2 className="text-left text-xl font-medium">
                    {currentUser?.user?.address}
                  </h2>
                </div>
                <div className="mb-4">
                  <p className="font-medium text-gray-600">Phone</p>
                  <h2 className="text-left text-lg font-medium">
                    {currentUser?.user?.phone}
                  </h2>
                </div>
                <div className="mb-4">
                  <p className="font-medium text-gray-600">Linked In Profile</p>
                  <h2 className="text-left text-lg font-medium">
                    {currentUser?.user?.link}
                  </h2>
                </div>
              </div>
            )}

            {updateProfile && (
              <div>
                <form
                  onSubmit={(e) => handelUpdateProfile(e)}
                  className="flex flex-col justify-end"
                >
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
                    placeholder="Linked In Profile"
                    className="border focus:border-blue-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-xs mx-14 rounded-full mb-4 px-6 py-3"
                  />
                  <input
                    className="w-full max-w-xs mx-14 rounded-full mb-4 text-lg  font-bold py-3 cursor-pointer bg-blue-600 border-0 px-10 text-white"
                    type="submit"
                    value="Update Profile"
                  />
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
