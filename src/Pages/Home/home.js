import React from "react";
import Layout from "../../Components/Layouts/Layout";
import Section1 from "./Section1";
import Section2 from "./Section2";
import "../../styles/HomeStyle.css";

function Home() {
  return (
    <Layout>
      <Section1 />
      <Section2 />
      {/* <div>Home!!</div> */}
    </Layout>
  );
}

export default Home;
