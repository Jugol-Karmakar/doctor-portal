import React from "react";
import write from "../../Images/image/write.webp";

const MyReview = () => {
  const handelAddReview = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const profession = e.target.profession.value;
    const image = e.target.image.value;
    const review = e.target.review.value;

    const reviews = {
      name,
      profession,
      image,
      review,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h2 className="text-4xl font-bold m-6 border-b-2 border-blue-600 pb-4">
        Add Reviews
      </h2>
      <div className="flex justify-between py-6">
        <div className="w-1/2">
          <form onSubmit={handelAddReview}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="border focus:border-blue-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-md mx-14 rounded-full mb-4 px-6 py-3"
            />
            <input
              type="text"
              name="profession"
              placeholder="Your Profession"
              className="border focus:border-blue-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-md mx-14 rounded-full mb-4 px-6 py-3"
            />
            <input
              type="text"
              name="image"
              placeholder="Your Image Url"
              className="border focus:border-blue-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-md mx-14 rounded-full mb-4 px-6 py-3"
            />
            <textarea
              className="border focus:border-blue-600 focus:shadow-lg outline-none duration-300 transition-all w-full max-w-md rounded-full mx-14 mb-4 px-6 py-3"
              type="text"
              name="review"
              placeholder="Write Review"
              cols="30"
              rows="2"
            ></textarea>
            <input
              type="submit"
              value="Send Message"
              className="w-full max-w-md mx-14 rounded-full mb-4 text-lg  font-bold py-3 cursor-pointer bg-blue-600 border-0 px-10 text-white"
            />
          </form>
        </div>
        <div className="w-1/2 ml-6">
          <img className="w-full h-full" src={write} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MyReview;
