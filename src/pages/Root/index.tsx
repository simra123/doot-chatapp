import React from "react";
import { Navigate } from "react-router-dom";

const Index = (props: any) => {
  return (
    <div>
      <Navigate to="/chat" />
    </div>
  );
};

export default Index;
