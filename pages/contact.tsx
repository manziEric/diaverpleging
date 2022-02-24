import { NextPage } from "next";
import { name, email, phone, message } from "utils/formConstants";
import ContactFormHandler from "src/components/contactForm/ContactFormHandler";
import ContactForm from "src/components/contactForm/ContactForm";
import TextArea from "src/components/contactForm/TextArea";
import Input from "src/components/contactForm/Input";
import Label from "src/components/contactForm/Label";
import Layout from "src/components/layout/Layout";
import Button from "src/components/button/Button";
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

export default contact;
