import React from "react";
import blog1 from "../../Images/image/blog1.jpg";
import blog2 from "../../Images/image/blog2.jpg";
import blog3 from "../../Images/image/blog3.jpg";
import NewsTip from "./NewsTip";

const NewsTips = () => {
  const blogs = [
    {
      id: 1,
      image: blog1,
      name: "Medical and Love Have 4 Things In Common",
      detail: "consequat vulputate eget metumpeng magna commodo purus etiam.",
      post: "By Admin",
      position: "Doctor , Clinic",
    },
    {
      id: 2,
      image: blog2,
      name: "22 Tips To Start Building A Medical",
      detail: "consequat vulputate eget metumpeng magna commodo purus etiam.",
      post: "By Admin",
      position: "Health , Medical",
    },
    {
      id: 3,
      image: blog3,
      name: "Being A Star In You dustry Is A Matter",
      detail: "consequat vulputate eget metumpeng magna commodo purus etiam.",
      post: "By Admin",
      position: "Care , Surgery",
    },
  ];

  return (
    <section className="py-20">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">
          Latest N
          <span className="border-b-4 border-blue-600 pb-2 mb-4">ew</span>s &
          Tips
        </h1>
        <p className="mt-10 text-center text-lg text-gray-500">
          Condimentum rutrum placerat egestas condimentum mi eros. Eleifend cras
          quirntum <br /> Feugiat elit placerat. Diam tempor malesuada.
        </p>
      </div>
      <div className="container mx-auto px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {blogs.map((blog) => (
          <NewsTip key={blog.id} blog={blog}></NewsTip>
        ))}
      </div>
    </section>
  );
};

export default NewsTips;
