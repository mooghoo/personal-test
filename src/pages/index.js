import * as React from "react";
import { Link } from 'gatsby';

const Homepage = () =>{
  return (
    <div>
      <h1>Hello World!</h1>
      <Link to="/about">About</Link>
      <p>Hi.</p>
    </div>
  );
};

export default Homepage;