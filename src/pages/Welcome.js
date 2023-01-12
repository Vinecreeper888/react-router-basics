import React from "react";
import { Route, Routes } from "react-router-dom";
import NewUserDetails from "./NewUserDetails";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome page</h1>
      <Routes>
        <Route path="new" element={<NewUserDetails />} />
      </Routes>
    </section>
  );
};

export default Welcome;
//can define routes wherever you want
