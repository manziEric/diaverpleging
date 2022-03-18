import ContactFormHandler from 'src/components/contactForm/ContactFormHandler';
import { name, email, phone, message, submit } from 'utils/formConstants';
import ContactForm from 'src/components/contactForm';
import TextArea from 'src/components/textArea';
import Layout from 'src/components/layout';
import Header from 'src/components/header';
import Input from 'src/components/input';
import Label from 'src/components/label';

import inputStyles from 'styles/form.module.css';

function contact(): JSX.Element {
  return (
    <Layout>
      <Header
        title="Je bent in zorgende handen"
        tekst={`Laat je bijstaan in je gezondheid door zorgprofessionals die van hun 
        passie hun job hebben gemaakt.
        Vul het formulier hieronder in voor meer comfort en zorgeloosheid 
        in je dageljkse leven. `}
        isButton={false}
      />
      <ContactFormHandler>
        <ContactForm title="Vraag meteen je intakegesprek aan.">
          <Label name={name} />
          <Input
            type="text"
            name={name}
            placeholder={name}
            inputStyles={inputStyles.input}
          />
          <Label name={email} />
          <Input
            type="email"
            name={email}
            placeholder={email}
            inputStyles={inputStyles.input}
          />
          <Label name={phone} />
          <Input
            type="tel"
            name={phone}
            placeholder={phone}
            inputStyles={inputStyles.input}
          />
          <Label name={message} />
          <TextArea name={message} rows={8} cols={50} placeholder={message} />
          <Input
            type="submit"
            name={submit}
            placeholder={submit}
            inputStyles={inputStyles.button}
          />
        </ContactForm>
      </ContactFormHandler>
    </Layout>
  );
}

export default contact;
