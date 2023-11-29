import React from "react";

const Jumbotron = () => {
  return (
    <div className="container my-3 bg-light p-5">
      <div className="row">
        <div className="col-12">
        <h1> A Warm Welcome!</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsum voluptatibus explicabo veniam dicta est minus autem libero quam odit magnam consequatur a, pariatur dolor vitae nisi accusantium sit exercitationem.</p>
        </div>
        <div className="col-sm-3">
        <button type="button"  className="btn btn-primary btn-sm">Call to action</button>      
      </div>
      </div>
    </div>
  );
};

export default Jumbotron;
