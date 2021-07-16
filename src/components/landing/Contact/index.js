import React from "react"
import { Container } from "components/common"
import contact from "assets/illustrations/Email.svg"
import { Wrapper, Details, Thumbnail } from "./styles"
import ContactForm from "./ContactForm"

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="I look forward to your email" />
    </Thumbnail>
  </Wrapper>
)
