import { collection, doc, setDoc } from 'firebase/firestore';
import emailjs from '@emailjs/browser';
import { db } from 'src/firebase';

const useContactFormHandler = () => {
  const contactFormHandler = async (e: any, isSubscribe = false) => {
    e.preventDefault();

    if (!isSubscribe) {
      const postDataToServer = {
        name: e.target.Naam.value,
        email: e.target.Email.value,
        phone: e.target.Tel.value,
        message: e.target.Bericht.value,
      };

      emailjs.sendForm(
        'service_cc6nqyq',
        'template_aou0l0a',
        e.target,
        'kiPNvIKWK2MRtVCov'
      );

      const newDataRef = doc(collection(db, 'service'));
      await setDoc(newDataRef, postDataToServer);
      e.target.Naam.value = '';
      e.target.Email.value = '';
      e.target.Tel.value = '';
      e.target.Bericht.value = '';
    }

    if (isSubscribe) {
      const postDataToServer = {
        email: e.target.Email.value,
      };

      emailjs.sendForm(
        'service_cc6nqyq',
        'template_s21dwmm',
        e.target,
        'kiPNvIKWK2MRtVCov'
      );

      const newDataRef = doc(collection(db, 'subscribe'));
      await setDoc(newDataRef, postDataToServer);
      e.target.Email.value = '';
    }
  };
  return [contactFormHandler];
};

export default useContactFormHandler;
