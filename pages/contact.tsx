import { NextPage } from "next";
import Layout from "src/components/layout/Layout";
import Button from "src/components/button/Button";
import ContactForm from "src/components/contactForm/ContactForm";
import ContactFormHandler from "src/components/contactForm/ContactFormHandler";
import Input from "src/components/contactForm/Input";
import Label from "src/components/contactForm/Label";
import TextArea from "src/components/contactForm/TextArea";
import Header from "src/components/header/Header";

const contact: NextPage = () => {
  return (
    <Layout>
      <Header
        title={"Je bent in zorgende handen"}
        tekst={`Laat je bijstaan in je gezondheid door zorgprofessionals die van hun 
        passie hun job hebben gemaakt.
        Vul het formulier hieronder in voor meer comfort en zorgeloosheid 
        in je dageljkse leven. `}
        isButton={false}
      />
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

export default contact;
