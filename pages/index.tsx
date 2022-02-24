import type { NextPage } from "next";
import { CardContentData } from "src/components/services/CardContent.data";
import { name, email, phone, message } from "utils/formConstants";
import SubscribeFormHandler from "src/components/subscribe/SubscribeFormHandler";
import ContactFormHandler from "src/components/contactForm/ContactFormHandler";
import ServiceSection from "src/components/service-section/ServiceSection";
import TextSection from "src/components/service-section/TextSection";
import SubscribeForm from "src/components/subscribe/SubscribeForm";
import CoreFeature from "src/components/core-feature/CoreFeature";
import ContactForm from "src/components/contactForm/ContactForm";
import Image from "src/components/service-section/ImageSection";
import CardContent from "src/components/services/CardContent";
import TextArea from "src/components/contactForm/TextArea";
import Services from "src/components/services/Services";
import Label from "src/components/contactForm/Label";
import Input from "src/components/contactForm/Input";
import Layout from "src/components/layout/Layout";
import Header from "src/components/header/Header";
import Button from "src/components/button/Button";
import Card from "src/components/services/Card";
import pic2 from "assets/Group64.svg";
import pic1 from "assets/Image.svg";

//TODO:[] Change all the imports to absolute path
//TODO:[] Remove <br/> from teksts
//TODO:[] All components of type JSX.Element
//TODO:[] Put all the buttons input textarea... in own files in components file
//TODO:[] Use styled components
//TODO:[] Hamburger menu on mobile screen
//TODO:[] Layout script optimaze
//TODO:[] Make Card component reuaseble
//TODO:[] CoreFeature add the data array in it own file
//TODO:[] Create interfaces for the props
//TODO:[] Remove h2 in index, diensten page
//TODO:[] Check if lazy loading is needed
//TODO:[] Make every component folder a module
//TODO:[] the images of the CardContent must come from CardContentData
//TODO:[] Make the components css reusable. So the components can be used evey where without need to change css
//TODO:[] Put all the .data.ts files in one folder
//TODO:[] Code clean up imports form big to small

const Home: NextPage = () => {
  return (
    <Layout>
      <Header
        title={"Thuisverpleging in zorgende handen"}
        tekst={"Voor meer zorgeloze momenten in je leven."}
        isButton={true}
      />
      <CoreFeature />
      <Services>
        <Card>
          {CardContentData.map(({ id, text }) => (
            <CardContent key={id} text={text} />
          ))}
        </Card>
      </Services>
      <ContactFormHandler>
        <ContactForm>
          <Label name={name} />
          <Input type="text" name={name} placeholder={name} />
          <Label name={email} />
          <Input type="email" name={email} placeholder={email} />
          <Label name={phone} />
          <Input type="tel" name={phone} placeholder={phone} />
          <Label name={message} />
          <TextArea name={message} rows={8} cols={50} placeholder={message} />
          <Button>Boek je afspraak</Button>
        </ContactForm>
      </ContactFormHandler>
      <ServiceSection>
        <TextSection />
        <Image src={pic1} alt="random image" />
      </ServiceSection>
      <ServiceSection>
        <h2>Wat Anderen Over Ons Zeggen</h2>
        <Image src={pic2} alt="random image" />
      </ServiceSection>
      <SubscribeFormHandler>
        <SubscribeForm>
          <h2>
            Schrijf je in op onze nieuwsbrief en ontvang de laatste weetjes over
            gezondheid en thuisverpleging.
          </h2>
          <Label name={email} />
          <Input type={email} name={email} placeholder="Email" />
          <Button>Verzenden</Button>
        </SubscribeForm>
      </SubscribeFormHandler>
    </Layout>
  );
};

export default Home;
