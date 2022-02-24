import { NextPage } from "next";
import { serviceCardData } from "src/components/services/serviceCard.data";
import { name, email, phone, message } from "utils/formConstants";
import ContactFormHandler from "src/components/contactForm/ContactFormHandler";
import ServiceCardsContent from "src/components/services/ServiceCardsContent";
import ContactForm from "src/components/contactForm/ContactForm";
import ServiceCards from "src/components/services/ServiceCards";
import TextArea from "src/components/contactForm/TextArea";
import Services from "src/components/services/Services";
import Input from "src/components/contactForm/Input";
import Label from "src/components/contactForm/Label";
import Layout from "src/components/layout/Layout";
import Button from "src/components/button/Button";
import Header from "src/components/header/Header";
import styles from "styles/diensten.module.css";

const Diensten: NextPage = () => {
  return (
    <Layout>
      <Header
        title={"Onze Diensten"}
        tekst={
          "Met zorg gegeven door een team van gepassioneerde verplegers en verpleegsters. "
        }
        isButton={false}
      />
      <h2 className={styles.h2}>Onze Diensten</h2>
      <Services>
        {serviceCardData.map(({ id, text, image1, image2 }) => (
          <ServiceCards key={id}>
            <ServiceCardsContent text={text} image={image1} />
            <ServiceCardsContent text={text} image={image2} />
          </ServiceCards>
        ))}
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
    </Layout>
  );
};

export default Diensten;
