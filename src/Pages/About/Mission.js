import React from "react";
import appointnment from "../../Images/image/appointment.png";

const Mission = () => {
  const missions = [
    {
      id: 1,
      name: "OUR MISSION",
      describe:
        "To provide outstanding dental care with a commitment of honesty, integrity & quality...",
    },
    {
      id: 2,
      name: "OUR VISION",
      describe:
        "To provide outstanding dental care with a commitment of honesty, integrity & quality...",
    },
    {
      id: 3,
      name: "PHILOSOPHY",
      describe:
        "To provide outstanding dental care with a commitment of honesty, integrity & quality...",
    },
  ];
  return (
    <section
      className="py-32"
      style={{
        background: `url(${appointnment})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {missions.map((mission) => (
          <div
            key={mission.id}
            className="border py-10 px-4 hover:border-blue-600 hover:bg-blue-600 hover:text-white duration-300"
          >
            <h2 className="text-center text-xl font-bold text-white">
              {mission.name}
            </h2>
            <p className="text-white text-lg font-bold text-center py-3">
              {mission.describe}
            </p>
            <div className="flex justify-center mt-4">
              <button className="text-white font-bold text-center hover:underline">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mission;
