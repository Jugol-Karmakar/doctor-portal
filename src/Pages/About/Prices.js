import React from "react";
import Price from "./Price";

const Prices = () => {
  const prices = [
    {
      id: 1,
      name: "Basic",
      price: "57",
      advantage: [
        "Liver Function Tests.",
        "Full Blood Examination.",
        "TSH (Thyroid Stimulating",
        "INR (International Normalized",
      ],
    },
    {
      id: 2,
      name: "Standard",
      price: "86",
      advantage: [
        "Liver Function Tests.",
        "Full Blood Examination.",
        "TSH (Thyroid Stimulating",
        "INR (International Normalized",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: "98",
      advantage: [
        "Liver Function Tests.",
        "Full Blood Examination.",
        "TSH (Thyroid Stimulating",
        "INR (International Normalized",
      ],
    },
  ];

  return (
    <section className="py-20 bg-[#f9f9f9]">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">
          Choose{" "}
          <span className="border-b-4 border-blue-600 pb-2 mb-4">Pri</span>
          cing Plan
        </h1>
        <p className="mt-10 text-center text-lg text-gray-500">
          Condimentum rutrum placerat egestas condimentum mi eros. Eleifend cras
          quirntum <br /> Feugiat elit placerat. Diam tempor malesuada.
        </p>
      </div>

      <div className="container mx-auto px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {prices.map((price) => (
          <Price key={price.id} price={price}></Price>
        ))}
      </div>
    </section>
  );
};

export default Prices;
