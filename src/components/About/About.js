import React from "react";

export const About = () => {
  return (
    <div className="bg-indigo-50">
      <div className="max-w-screen-2xl py-8 m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-2 md:p-0">
          <div>
            <h1 className="text-3xl font-bold letter-space-2 py-2 mb-2 md:mb-8">
              Why Netron<span className="text-pink-600">Soft</span>
            </h1>
            <p className="text-base font-thin pr-4 md:pr-10 letter-space-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque, ratione ut! Nemo dicta cumque rem id expedita nam
              tenetur facere adipisci omnis eaque molestias repellat, ratione
              corporis quae sapiente corrupti velit ipsum nihil voluptates
              deserunt repellendus aut quaerat! Unde cumque facere tempore
              aperiam? A hic magni esse reprehenderit placeat at excepturi omnis
              autem recusandae nesciunt, cupiditate natus eligendi enim deleniti
              optio atque saepe veniam magnam laborum alias porro ipsum
              molestias ullam numquam. Numquam, neque. Minima provident ipsum
              harum consectetur ipsam aliquid distinctio, eveniet officiis
              cupiditate. Et similique amet nemo at minus, maiores aperiam
              consequatur doloribus voluptas, dolores excepturi eaque ducimus!{" "}
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
              debitis nulla. Molestias enim reiciendis sunt ipsa minima
              obcaecati sint odit dolores doloribus non at facere architecto,
              maiores officiis voluptatum? Exercitationem distinctio vero
              assumenda, minima nemo, beatae ratione a ea tempore repellendus
              est animi, earum reiciendis dolorum maiores similique amet
              explicabo?
            </p>
          </div>
          <div className="w-full rounded">
            <img
              src="https://i.ibb.co/tDs4543/pexels-olia-danilevich-4974914.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
