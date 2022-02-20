import { NextPage } from "next";
import React from "react";
import Button from "src/components/button/Button";
import ContactForm from "src/components/contactForm/ContactForm";
import ContactFormHandler from "src/components/contactForm/ContactFormHandler";
import Input from "src/components/contactForm/Input";
import Label from "src/components/contactForm/Label";
import TextArea from "src/components/contactForm/TextArea";
import { Layout } from "src/components/layout";
import { serviceCardData } from "src/components/services/serviceCard.data";
import ServiceCards from "src/components/services/ServiceCards";
import Services from "src/components/services/Services";

const Diensten: NextPage = () => {
  return (
    <Layout>
      <h1>Onze Diensten</h1>
      <Services>
        {serviceCardData.map(({ id, text, image1, image2 }) => (
          <ServiceCards key={id} text={text} image1={image1} image2={image2} />
        ))}
      </Services>
      <ContactFormHandler>
        <ContactForm>
          <Label name="name"></Label>
          <Input type={"text"} name={"name"} placeholder={"Name"} />
          <Label name="email"></Label>
          <Input type={"email"} name={"email"} placeholder={"Email"} />
          <Label name="phone"></Label>
          <Input type={"phone"} name={"phone"} placeholder={"Phone"} />
          <Label name="message"></Label>
          <TextArea
            name={"message"}
            rows={8}
            cols={50}
            placeholder={"Message"}
          />
          <Button>Boek je afspraak</Button>
        </ContactForm>
      </ContactFormHandler>
    </Layout>
  );
};

export default Diensten;
