import React, { FC } from "react";
import LockIcon from "@material-ui/icons/Lock";
import IconsColumn from "src/components/icons-column";
import styles from "styles/icons.module.css";

const data = [
  {
    id: 1,
    IconSrc: LockIcon,
    title: "Fast turnarounds",
    text: "Card will be returned within 45 to 60 working days.",
  },
  {
    id: 2,

    IconSrc: LockIcon,
    title: "Maximum insurance",
    text: "We always insure your cards for their current market value, upon sending and return. ",
  },
  {
    id: 3,
    IconSrc: LockIcon,
    title: "Free personal delivery",
    text: "We personally deliver high-value packages in consultation in the Netherlands and Belgium. Yes, for free!",
  },
  {
    id: 4,
    IconSrc: LockIcon,
    title: "Personal contact",
    text: "Any questions? We’re happy to personally answer them. Dutch jokes included!",
  },
];

const CoreFeature: FC = () => {
  return (
    <div className={styles.container}>
      <h2>Waarom Dia Verpleging</h2>
      <div className={styles.grid}>
        {data.map((item) => (
          <IconsColumn
            key={item.id}
            IconSrc={item.IconSrc}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default CoreFeature;
