import React, { useState } from "react";
import AppointmentHero from "../AppointmentHero/AppointmentHero";
import Avaliable from "../Avaliable/Avaliable";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentHero date={date} setDate={setDate}></AppointmentHero>
      <Avaliable date={date}></Avaliable>
    </div>
  );
};

export default Appointment;
