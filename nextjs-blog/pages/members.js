import Head from "next/head";
import Layout2, { siteTitle } from "../components/Layout2";
import utilStyles from "../styles/utils.module.css";
import Container from "react-bootstrap/Container";
import Library from "../components/Library";
import SearchBar from "../components/searchBar";
import Footer from "../components/Footer";
import Calculator from "../components/Calculator";
import Nutrition from "../components/Nutrition";
// Next.js backend
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useCurrentUser } from "../lib/hooks";

export default function Members() {
  // Next.js backend ---------------->>
  console.log("Members");
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");
  const [user, { mutate }] = useCurrentUser();
  // redirect to home if user is authenticated
  console.log('is users Authenticated? if no, redirect to SignUp');
  if (!user) router.push("/signUp")
  // Next.js backend <<----------------


  return (
    <Layout2 Members>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Container>
          <h2 className="display-4" className="display-4">
            Welcome,
            {' '}
            {user ? `${user.first_name} ${user.last_name}` : 'stranger'}
            !
          </h2>
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
      <Nutrition />
      <Footer />
    </Layout2>
  );
}
