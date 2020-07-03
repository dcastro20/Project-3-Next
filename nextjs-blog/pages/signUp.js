import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import SignUpComp from "../components/SignUpComp";

export default function SignUp() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <SignUpComp />
      </section>
    </Layout>
  );
}
