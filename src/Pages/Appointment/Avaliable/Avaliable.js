import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import AppointmentModal from "../AppointmentModal/AppointmentModal";
import AppointmentSevices from "../AppointmentServices/AppointmentSevices";

const Avaliable = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  const formettedDate = format(date, "PP");

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formettedDate], () =>
    fetch(
      `https://doctor-portal-server-green.vercel.app/available?date=${formettedDate}`
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="my-6">
      <h3 className="text-center text-2xl text-blue-600 font-bold py-4">
        Available Services on {format(date, "PP")}{" "}
      </h3>

      <div className="container mx-auto px-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
        {services?.map((service) => (
          <AppointmentSevices
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></AppointmentSevices>
        ))}

        {treatment && (
          <AppointmentModal
            date={date}
            key={treatment._id}
            refetch={refetch}
            treatment={treatment}
            setTreatment={setTreatment}
          ></AppointmentModal>
        )}
      </div>
    </div>
  );
};

export default Avaliable;
