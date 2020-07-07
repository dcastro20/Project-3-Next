import Head from "next/head";
import MainHeader from "../components/Homenav";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import Container from "react-bootstrap/Container";
import WorkoutCard from "../components/WorkoutCard";
import BMICard from "../components/BMICard";
import NutritionCard from "../components/NutritionCard";
import CalendarCard from "../components/CalendarCard";
import React from "react";
import Footer from "../components/Footer";
import { useCurrentUser } from "../lib/hooks";

export default function Home() {
  console.log("Home");
  const [user] = useCurrentUser();
  console.log("useCurrentUser called - user", user);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <MainHeader/>
      <section className={utilStyles.headingMd}>
        <Container>
          <h2>
            Hello, {user ? `${user.first_name} ${user.last_name}` : "stranger"}!
          </h2>
          <p>
            Your new life starts here. No gym membership or equipments required.
            Our members have access to awesome features like our workout
            database. Try out home based workouts based on your fitness level.
            Check your body mass index with our BMI calculator. Following a
            certain diet? Curious about what nutrients you're getting from foods
            you eat? Then simply use our Nutrition Search bar to see what
            nutrients food items have.
          </p>
        </Container>
        <br></br>
      </section>
      <br></br>
      <section>
        <br></br>
        <WorkoutCard />
        <br></br>
        <br></br>
        <br></br>
        <BMICard />
        <br></br>
        <br></br>
        <br></br>
        <NutritionCard />
        <br></br>
        <br></br>
        <br></br>
        <CalendarCard />
        <br></br>
        <br></br>
      </section>
      <br></br>
      <Footer />
      <br></br>
    </Layout>
  );
}
