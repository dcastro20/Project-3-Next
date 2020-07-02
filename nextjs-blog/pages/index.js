import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Container from "react-bootstrap/Container";
import Cards from "../components/Cards";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Container>
          <p>
            Welcome to Plan-it-Fitness! Your new life starts here. No gym
            membership or equipments required. Our members have access to
            awesome stuff like our workout database. Try out home based workouts
            based on your fitness level. Check your body mass index with our BMI
            calculator. Following a certain diet? Curious about what nutrients
            you're getting from foods you eat? Then simply use our Nutrition
            Search bar to see what nutrients food items have.
          </p>
        </Container>
      </section>
      <br></br>
      <div>
        <Cards />
      </div>
    </Layout>
  );
}
