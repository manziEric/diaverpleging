import SubscribeFormHandler from 'src/components/subscribe/SubscribeFormHandler';
import ContactFormHandler from 'src/components/contactForm/ContactFormHandler';
import { name, email, phone, message, submit } from 'utils/formConstants';
import CardContentData from 'src/components/cardContent/CardContent.data';
import ServiceSection from 'src/components/service-section';
import ImageSection from 'src/components/imageSection';
import TextSection from 'src/components/textSection';
import SubscribeForm from 'src/components/subscribe';
import CoreFeature from 'src/components/core-feature';
import ContactForm from 'src/components/contactForm';
import CardContent from 'src/components/cardContent';
import pic1 from 'assets/homepage/Homepagina.png';
import TextArea from 'src/components/textArea';
import Services from 'src/components/services';
import pic2 from 'assets/homepage/Group64.svg';
import Layout from 'src/components/layout';
import Header from 'src/components/header';
import Label from 'src/components/label';
import Input from 'src/components/input';
import Card from 'src/components/card';

import inputStyles from 'styles/form.module.css';

function Home(): JSX.Element {
  return (
    <Layout>
      <Header
        title="Thuisverpleging in zorgende handen"
        tekst="Meer zorgeloze momenten in je leven"
        address="Kiel, Hoboken, Aartselaar, Hemiksem, Schelle, Niel, Boom"
        isButton
        isContact={false}
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
