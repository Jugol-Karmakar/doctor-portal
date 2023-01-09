import { useEffect, useState } from "react";

const useDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("https://doctor-portal-server-green.vercel.app/doctor")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return [doctors, setDoctors];
};

export default useDoctors;
