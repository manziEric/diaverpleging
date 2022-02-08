import type { NextPage } from "next";
import { Layout } from "../src/components/layout";
import CoreFeature from "../src/components/core-feature/CoreFeature";
import Header from "../src/components/header";
import Text from "../src/components/midSection/Tekst";
import ContactForm from "../src/components/contactForm/ContactForm";
import Form from "../src/components/contactForm/Form";
import Input from "../src/components/contactForm/Input";
import Services from "../src/components/services/Services";
import Card from "../src/components/services/Card";
import ServiceSection from "../src/components/service-section/ServiceSection";
import TextSection from "../src/components/service-section/TextSection";
import Image from "../src/components/service-section/ImageSection";
import pic1 from "../assets/Image.svg";
import pic2 from "../assets/Group64.svg";

//TODO:[] change all the imports to absolute path
//TODO:[] remove <br/> from teksts

const Home: NextPage = () => {
  return (
    <Layout>
      <main className="main">
        <Header />
        <CoreFeature />
        <Text />
        <ContactForm>
          <Form>
            <Input type={"text"} name={"name"} />
            <Input type={"email"} name={"email"} />
            <Input type={"phone"} name={"phone"} />
            <Input type={"textArea"} name={"message"} />
            <Input type={"submit"} name={"submit"} />
          </Form>
        </ContactForm>
        <Services>
          <Card />
        </Services>
        <ServiceSection>
          <TextSection />
          <Image src={pic1} alt={"random image"} type={"image/svg"} />
        </ServiceSection>
        <ServiceSection>
          <TextSection />
          <Image src={pic2} alt={"random image"} type={"image/svg"} />
        </ServiceSection>
        <ContactForm>
          <Form>
            <Input type={"email"} name={"email"} />
            <Input type={"submit"} name={"submit"} />
          </Form>
        </ContactForm>
      </main>
    </Layout>
  );
};

export default Home;
