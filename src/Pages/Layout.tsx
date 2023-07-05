import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Box } from "@chakra-ui/react";

type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
};

export default Layout;
