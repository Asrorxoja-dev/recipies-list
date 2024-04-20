import React from "react";
import { Link, NavLink } from "react-router-dom";

function RecipiesList({ recipies }) {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
      {recipies.map((recipie) => {
        return (
          <div key={recipie.id} className="card w-100 bg-base-100 shadow-xl">
            <figure>
              <img src={recipie.Image} className=":md-h-auto h-[200px] w-full object-cover" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{recipie.title}</h2>
              <p className="line-clamp-3">{recipie.method} </p>
              <div className="card-actions ">
                <Link
                  to={`/singleResipie/${recipie.id}`}
                  className="btn btn-primary w-full"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RecipiesList;
