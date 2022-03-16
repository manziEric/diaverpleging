import SubscribeFormHandler from 'src/components/subscribe/SubscribeFormHandler';
import ContactFormHandler from 'src/components/contactForm/ContactFormHandler';
import ServiceSection from 'src/components/service-section/ServiceSection';
import { name, email, phone, message, submit } from 'utils/formConstants';
import CardContentData from 'src/components/services/CardContent.data';
import ImageSection from 'src/components/service-section/ImageSection';
import TextSection from 'src/components/service-section/TextSection';
import SubscribeForm from 'src/components/subscribe/SubscribeForm';
import CoreFeature from 'src/components/core-feature/CoreFeature';
import ContactForm from 'src/components/contactForm/ContactForm';
import CardContent from 'src/components/services/CardContent';
import TextArea from 'src/components/contactForm/TextArea';
import Services from 'src/components/services/Services';
import Label from 'src/components/contactForm/Label';
import Input from 'src/components/contactForm/Input';
import pic1 from 'assets/homepage/Homepagina.png';
import Layout from 'src/components/layout/Layout';
import Header from 'src/components/header/Header';
import Card from 'src/components/services/Card';
import pic2 from 'assets/homepage/Group64.svg';
import inputStyles from 'styles/form.module.css';

function Home(): JSX.Element {
  return (
    <Layout>
      <Header
        title="Thuisverpleging in zorgende handen"
        tekst="Meer zorgeloze momenten in je leven."
        isButton
      />
      <CoreFeature />
      <Services>
        <Card>
          {CardContentData.map(({ id, title, text }) => (
            <CardContent key={id} title={title} text={text} />
          ))}
        </Card>
      </Services>
      <ContactFormHandler>
        <ContactForm title="Vraag meteen Je consulatie aan">
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
      <ServiceSection>
        <TextSection />
        <ImageSection src={pic1} alt="random image" />
      </ServiceSection>
      <ServiceSection>
        <h2>Wat Anderen Over Ons Zeggen</h2>
        <ImageSection src={pic2} alt="random image" />
      </ServiceSection>
      <SubscribeFormHandler>
        <SubscribeForm>
          <h2>
            Schrijf je in op onze nieuwsbrief en ontvang de laatste weetjes over
            gezondheid in je mailbox.
          </h2>
          <Label name={email} />
          <Input
            type={email}
            name={email}
            placeholder={email}
            inputStyles={inputStyles.input}
          />
          <Input
            type="submit"
            name={submit}
            placeholder={submit}
            inputStyles={inputStyles.button}
          />
        </SubscribeForm>
      </SubscribeFormHandler>
    </Layout>
  );
}

export default Home;
