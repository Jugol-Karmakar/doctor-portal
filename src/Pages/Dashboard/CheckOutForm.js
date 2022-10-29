import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useEffect } from "react";

const CheckOutForm = ({ appointment }) => {
  const { _id, price, patient, patientName } = appointment;
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransitionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || " ");

    //confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: patient,
            name: patientName,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
    } else {
      setCardError("");
      setTransitionId(paymentIntent.id);
      console.log(paymentIntent);
      setSuccess("Congratulations!! Your Payment Successfully Done.");

      const payment = {
        appointment: _id,
        transactionId: paymentIntent.id,
      };

      fetch(`http://localhost:5000/booking/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="bg-green-500 px-4 py-1 mt-4 rounded shadow-lg text-white font-bold"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600">{cardError}</p>}
      {success && (
        <div className="text-green-600">
          <p>{success}</p>
          <p className="text-lg font-bold text-blue-600">
            TransitionId : {transactionId}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckOutForm;
