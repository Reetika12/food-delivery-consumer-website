import React from "react";
import Layout from "../../Components/Layouts/Layout";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import "../../styles/HomeStyle.css";

function Home() {
  return (
    <Layout>
      {/* Home Section Banner */}
      <Section1 />
      {/* Home Section About */}
      <Section2 />
      {/* Home Section Menu */}
      <Section3 />
      {/* <div>Home!!</div> */}
      {/* Home Promotion Menu */}
      <Section4 />
    </Layout>
  );
}

export default Home;
