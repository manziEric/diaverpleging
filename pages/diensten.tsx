import { NextPage } from 'next';
import { serviceCardData } from 'src/components/services/serviceCard.data';
import { name, email, phone, message, submit } from 'utils/formConstants';
import ContactFormHandler from 'src/components/contactForm/ContactFormHandler';
import ServiceCardsContent from 'src/components/services/ServiceCardsContent';
import ContactForm from 'src/components/contactForm/ContactForm';
import ServiceCards from 'src/components/services/ServiceCards';
import TextArea from 'src/components/contactForm/TextArea';
import Services from 'src/components/services/Services';
import Input from 'src/components/contactForm/Input';
import Label from 'src/components/contactForm/Label';
import Layout from 'src/components/layout/Layout';
import styles from 'styles/diensten.module.css';
import inputStyles from 'styles/form.module.css';

const Diensten: NextPage = () => {
  console.log('routing diensten');
  return (
    <Layout>
      <h2 className={styles.h2}>Onze Diensten</h2>
      <Services>
        {serviceCardData.map(
          ({ id, title1, title2, text1, text2, image1, image2 }) => (
            <ServiceCards key={id}>
              <ServiceCardsContent title={title1} text={text1} image={image1} />
              <ServiceCardsContent title={title2} text={text2} image={image2} />
            </ServiceCards>
          )
        )}
      </Services>
      <ContactFormHandler>
        <ContactForm title="Vraag meteen je intakegesprek aan.">
          <h3>
            Staat jouw zorgbehoefte er niet tussen? Stuur ons eeen bericht en we
            kijken graag hoe we je kunnen helpen.{' '}
          </h3>
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
};

export default Diensten;
