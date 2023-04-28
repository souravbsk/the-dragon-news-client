import React from "react";
import Header from "../pages/Shared/Header/Header";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const LoginLayout = () => {
  return (
    <div>
    
      <NavigationBar></NavigationBar>
      <Container>
        <Outlet></Outlet>
      </Container>

    </div>
  );
};

export default LoginLayout;
