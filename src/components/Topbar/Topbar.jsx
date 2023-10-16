import React from "react";
import { Style } from "./Style";
import { india } from "../ALL_DATA/ALL_DATA";
import Data from "./data";

const Topbar = () => {
  const Clasess = Style();

  return (
    <section className={Clasess.topbsrSection}>
      <h5 className={Clasess.TopbarTitleAndImage}>
        Covid19
        <h2 className={Clasess.topBarTitle}>
          india
          <img src={india} alt="" />
        </h2>
      </h5>
      <article>
        <Data />
      </article>
    </section>
  );
};

export default Topbar;
