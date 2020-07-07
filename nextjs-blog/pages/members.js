import Head from "next/head";
import Header from "../components/membernav";
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
import ReactDOM from "react-dom";
import App from "../components/App";
import searchBar from "../components/searchBar";

export default function Members() {
  // Next.js backend ---------------->>
  console.log("Members");
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");
  const [user, { mutate }] = useCurrentUser();
  // redirect to home if user is authenticated
  console.log("is users Authenticated? if no, redirect to SignUp");
  if (!user) router.push("/signUp");
  // Next.js backend <<----------------

  return (
    <Layout2 Members>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Header></Header>
      <section
        className={user ? `${user.first_name} ${user.last_name}` : "stranger"}
      >
        <Container>
          <h2 className="display-4" className="display-4">
            {" "}
          </h2>
          <h3>
            This is your member page where you can view workouts from all
            levels, search nutritional facts, calculate your BMI, and customize
            your own planner!
          </h3>
        </Container>
        <br></br>
      </section>
      <br></br>
      <Library />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <SearchBar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Calculator />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Nutrition />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </Layout2>
  );
}
