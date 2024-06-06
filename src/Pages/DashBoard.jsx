import React from "react";
import TopBar from "../Componentes/TopBar";
import SideBar from "../Componentes/SideBar";
import Footer from "../Componentes/Footer";
import BookDisplay from "../Componentes/BookDisplay";

function DashBoard() {
  return (
    <>
      <TopBar />
      <section className="d-flex">
        <SideBar />
        <BookDisplay />
      </section>

      <Footer />
    </>
  );
}

export default DashBoard;
