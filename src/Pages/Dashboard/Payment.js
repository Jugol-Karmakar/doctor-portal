import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(
  "pk_test_51L4OinJiEZ0zjbT3fMKkg8gWVdVTutIkqW3A60ZBpvoY840mZYuMdqOZNJaqOYOdhxRZ54RpMcUddPbuLTjgAEV200ddYw7LQW"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://doctor-portal-server-green.vercel.app/booking/${id}`;

  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold m-6 border-b-2 border-blue-600 pb-4">
        Please Pay For Your Appointment
      </h1>
      <div className="mx-10">
        <div className="card w-50 max-w-md bg-base-100 shadow-xl my-8">
          <div className="card-body">
            <p className="font-bold text-purple-600 text-lg">
              Hello, {appointment.patientName}
            </p>
            <h2 className="text-2xl mb-2">
              Please Pay for{" "}
              <span className="text-blue-600 font-bold">
                {appointment.treatment}
              </span>
            </h2>
            <p className="text-lg font-bold mb-2">Date : {appointment.date}</p>
            <p className="text-lg font-bold mb-2">Time : {appointment.slot}</p>
            <p className="text-xl font-bold mb-2">
              Price : ${appointment.price}
            </p>
          </div>
        </div>
        <div className="card flex-shrink-0 w-50 max-w-md shadow-xl bg-base-100 my-8">
          <div className="card-body">
            <Elements stripe={stripePromise} appointment={appointment}>
              <CheckOutForm appointment={appointment} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
