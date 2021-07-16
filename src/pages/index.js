import React from "react"
import { Layout, Seo } from "components/common"
import { Intro, Skills, Contact, Projects } from "components/landing"
import { About } from "components/landing/About"

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
  </Layout>
)

export default Home
