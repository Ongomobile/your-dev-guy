import React from "react"
import { Link } from "gatsby"
import { Layout, Seo } from "components/common"
import { Intro, Skills, Contact, Projects } from "components/landing"
import { About } from "components/landing/About"
import CookieConsent from "react-cookie-consent"

const Home = () => (
  <Layout>
    <main>
      <Seo />
      <Intro />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </main>
    <CookieConsent
      location="bottom"
      buttonText="Ok"
      cookieName="myAwesomeCookieName2"
      style={{ background: "#2B373B", paddingRight: "2%" }}
      buttonStyle={{
        color: "#4e503b",
        backgroundColor: "#F9B233",
        fontSize: "13px",
        width: "80px",
        borderRadius: "3px",
      }}
      acceptOnScroll={true}
      acceptOnScrollPercentage={50}
      expires={150}
    >
      We use cookies to improve your experience with us. By using our site or dismissing this notice, you accept the use
      of cookies. To learn more see{" "}
      <Link to="/" activeStyle={{ color: "#57a0ff" }}>
        cookies policy
      </Link>
      .
    </CookieConsent>
  </Layout>
)

export default Home
