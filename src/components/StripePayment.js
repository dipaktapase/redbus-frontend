import React, { useState } from "react";
import { useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Infopage from "./Infopage";

const Stripe = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("https://redbus-backend-zmne.onrender.com/config").then(async (r) => {
      const { publishableKey } = await r.json();

      setStripePromise(loadStripe(publishableKey));
      // console.log(publishableKey);
    });
  }, []);

  useEffect(() => {
    fetch("https://redbus-backend-zmne.onrender.com/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
    })
      .then(async (r) => {
        const { clientSecret } = await r.json();

        setClientSecret(clientSecret);
      })
      .catch((error) => {
        console.error("Fetch error:", error.message);
      });
  }, []);

  return (
    <>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }} required>
          <Infopage />
        </Elements>
      )}
    </>
  );
};

export default Stripe;
