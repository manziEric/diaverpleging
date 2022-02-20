import type { NextPage } from "next";
import { Layout } from "src/components/layout";
import CoreFeature from "src/components/core-feature/CoreFeature";
import Header from "src/components/header/Header";
import Input from "src/components/contactForm/Input";
import Services from "src/components/services/Services";
import Card from "src/components/services/Card";
import ServiceSection from "src/components/service-section/ServiceSection";
import TextSection from "src/components/service-section/TextSection";
import Image from "src/components/service-section/ImageSection";
import pic1 from "assets/Image.svg";
import pic2 from "assets/Group64.svg";
import Button from "src/components/button/Button";
import TextArea from "src/components/contactForm/TextArea";
import ContactFormHandler from "src/components/contactForm/ContactFormHandler";
import ContactForm from "src/components/contactForm/ContactForm";
import SubscribeFormHandler from "src/components/subscribe/SubscribeFormHandler";
import SubscribeForm from "src/components/subscribe/SubscribeForm";
import Label from "src/components/contactForm/Label";

//TODO:[] change all the imports to absolute path
//TODO:[] remove <br/> from teksts
//TODO:[] all components of type JSX.Element
//TODO:[] put all the buttons input textarea... in own files in components file
//TODO:[] use styled components
//TODO:[] Hamburger menu on mobile screen
//TODO:[] Layout script optimaze
//TODO:[] make Card component reuaseble
//TODO:[] coreFeature add the data array in it own file

const Home: NextPage = () => {
  return (
    <Layout>
      <Header />
      <CoreFeature />
      <Services>
        <Card />
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
      <ServiceSection>
        <TextSection />
        <Image src={pic1} alt={"random image"} />
      </ServiceSection>
      <ServiceSection>
        <h2>Wat Anderen Over Ons Zeggen</h2>
        <Image src={pic2} alt={"random image"} />
      </ServiceSection>
      <SubscribeFormHandler>
        <SubscribeForm>
          <h2>
            Schrijf je in op onze nieuwsbrief en ontvang de laatste weetjes over
            gezondheid en thuisverpleging.
          </h2>
          <Label name="email"></Label>
          <Input type={"email"} name={"email"} placeholder={"Email"} />
          <Button>Verzenden </Button>
        </SubscribeForm>
      </SubscribeFormHandler>
    </Layout>
  );
};

export default Home;
