import React from "react";
import Doctor from "../../components/Doctor";
import Header from "../../components/Header";
import doctors from "../../doctors";

const Home = () => {
  return (
    <div className="w-100">
      <Header />
      <div className="container d-flex justify-content-center">
        <div className="row">
          {doctors.map((d) => (
            <Doctor
              key={d.id}
              name={d.name}
              type={d.type}
              phone={d.phone}
              img={d.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
