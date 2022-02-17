import type { NextPage } from "next";
import { Layout } from "../src/components/layout";
import CoreFeature from "../src/components/core-feature/CoreFeature";
import Header from "../src/components/header/Header";
import Text from "../src/components/midSection/Tekst";
import Input from "../src/components/contactForm/Input";
import Services from "../src/components/services/Services";
import Card from "../src/components/services/Card";
import ServiceSection from "../src/components/service-section/ServiceSection";
import TextSection from "../src/components/service-section/TextSection";
import Image from "../src/components/service-section/ImageSection";
import pic1 from "../assets/Image.svg";
import pic2 from "../assets/Group64.svg";
import Button from "src/components/button/Button";
import TextArea from "src/components/contactForm/TextArea";
import ContactFormHandler from "../src/components/contactForm/ContactFormHandler";
import ContactForm from "../src/components/contactForm/ContactForm";
import SubscribeFormHandler from "src/components/subscribe/SubscribeFormHandler";
import SubscribeForm from "src/components/subscribe/SubscribeForm";

//TODO:[] change all the imports to absolute path
//TODO:[] remove <br/> from teksts
//TODO:[] all components of type JSX.Element

const Home: NextPage = () => {
  return (
    <Layout>
      <main className="main">
        <Header />
        <CoreFeature />
        <Text />
        <ContactFormHandler>
          <ContactForm>
            <Input type={"text"} name={"name"} placeholder={"Name"} />
            <Input type={"email"} name={"email"} placeholder={"Email"} />
            <Input type={"phone"} name={"phone"} placeholder={"Phone"} />
            <TextArea
              name={"message"}
              rows={8}
              cols={50}
              placeholder={"Message"}
            />
            <Button>Boek je afspraak</Button>
          </ContactForm>
        </ContactFormHandler>
        <Services>
          <Card />
        </Services>
        <ServiceSection>
          <TextSection />
          <Image src={pic1} alt={"random image"} type={"image/svg"} />
        </ServiceSection>
        <ServiceSection>
          <h1>Wat Anderen Over Ons Zeggen</h1>
          <Image src={pic2} alt={"random image"} type={"image/svg"} />
        </ServiceSection>
        <SubscribeFormHandler>
          <SubscribeForm>
            <h2>
              Schrijf je in op onze nieuwsbrief en ontvang de laatste weetjes
              over gezondheid en thuisverpleging.
            </h2>
            <Input type={"email"} name={"email"} placeholder={"Email"} />
            <Button>Verzenden </Button>
          </SubscribeForm>
        </SubscribeFormHandler>
      </main>
    </Layout>
  );
};

export default Home;
