import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default [
  {
    header: "About Us",
    items: [
      {
        path: "/grade",
        label: "Grade Your Cards",
      },
      {
        path: "/about",
        label: "About Us",
      },
      {
        path: "/",
        label: "Copyright",
      },
    ],
  },
  {
    header: "Information",
    items: [
      {
        path: "/prices",
        label: "Prices",
      },
      {
        path: "/faqs",
        label: "FAQs",
      },
    ],
  },
  {
    header: "Policy",
    items: [
      {
        path: "/",
        label: "Return Policy ",
      },
      {
        path: "/",
        label: "Privacy Policy",
      },
      {
        path: "/",
        label: "Terms & Conditions",
      },
    ],
  },
  {
    header: "Contact",
    items: [
      {
        path: "/contact",
        label: "Talk to Us",
      },

      {
        path: "/contact",
        label: "Address",
      },
    ],
  },
  {
    header: "Social Media",
    items: [
      {
        link:
          "https://m.facebook.com/Megel.Collectz/services/?ref=page_internal&mt_nav=0&paipv=1",
        icon: "<FaFacebookF />",
      },
      {
        link: "https://www.instagram.com/mc.collectables/",
        icon: "<FaInstagram />",
      },
    ],
  },
];