import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  
  const title = `Picker's Pick`
  
  return (
    <div>
      <Head>
        <title>{title}</title>
        {/* <meta
          name="description"
          content="Solana Scaffold"
        /> */}
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
