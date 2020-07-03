import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import SignUpComp from "../components/SignUpComp";
import Container from "react-bootstrap/Container";
import Footer from "../components/Footer";

export default function SignUp() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Container>
          <p>
            Sign up by creating an account here. Our members gain access to the
            cool features we offer like the workouts database, nutrition
            database, BMI calculator and a personal calendar!
          </p>
        </Container>
        <SignUpComp />
      </section>
      <Footer />
    </Layout>
  );
}
