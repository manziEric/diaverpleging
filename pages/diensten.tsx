import ContactFormHandler from 'src/components/contactForm/ContactFormHandler';
import ServiceCardsContent from 'src/components/services/ServiceCardsContent';
import { name, email, phone, message, submit } from 'utils/formConstants';
import serviceCardData from 'src/components/services/serviceCard.data';
import ContactForm from 'src/components/contactForm/ContactForm';
import ServiceCards from 'src/components/services/ServiceCards';
import TextArea from 'src/components/textArea/TextArea';
import Services from 'src/components/services/Services';
import Input from 'src/components/input/Input';
import Label from 'src/components/label/Label';
import Layout from 'src/components/layout/Layout';
import styles from 'styles/diensten.module.css';

import inputStyles from 'styles/form.module.css';

function Diensten(): JSX.Element {
  return (
    <Layout>
      <h2 className={styles.h2}>Onze Diensten</h2>
      <Services>
        {serviceCardData.map(
          ({
            id,
            title1,
            title2,
            text1,
            text2,
            image1,
            image2,
            alt1,
            alt2,
          }) => (
            <ServiceCards key={id}>
              <ServiceCardsContent
                title={title1}
                text={text1}
                image={image1}
                alt={alt1}
              />
              <ServiceCardsContent
                title={title2}
                text={text2}
                image={image2}
                alt={alt2}
              />
            </ServiceCards>
          )
        )}
      </Services>
      <ContactFormHandler>
        <ContactForm title="Vraag meteen je intakegesprek aan.">
          <h3>
            Vind je jouw zorgebehoefte niet? Stuur ons een bericht en we kijken
            graag hoe we je kunnen helpen.
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
}

export default Diensten;
