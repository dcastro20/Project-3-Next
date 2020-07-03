import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Container from "react-bootstrap/Container";
import Library from "../components/Library";
import SearchBar from "../components/searchBar";
import Footer from "../components/Footer";
import Calculator from "../components/Calculator";


export default function Members() {
  return (
    <Layout Members>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Container>
          <h2 className="display-4">Welcome, Member!</h2>
          <p>
            This is the members page where you can view workouts from all
            levels, search nutritional facts, calculate your BMI, and customize
            your own weekly planner!
          </p>
        </Container>
      </section>
      <Library />
      <SearchBar />
      <Calculator />
      <Footer />
    </Layout>
  );
}
