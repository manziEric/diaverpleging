import React from "react";
import IconsColumn from "src/components/icons-column/IconsColumn";
import styles from "styles/icons.module.css";
import SpaIcon from "@mui/icons-material/Spa";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import ChatIcon from "@mui/icons-material/Chat";

const data = [
  {
    id: 1,
    IconSrc: SpaIcon,
    title: "Meer rust",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est",
  },
  {
    id: 2,

    IconSrc: SupervisorAccountIcon,
    title: "Vast verzorg(st)er",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est",
  },
  {
    id: 3,
    IconSrc: AddIcCallIcon,
    title: "Telkens bereikbaar",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est",
  },
  {
    id: 4,
    IconSrc: ChatIcon,
    title: "Een luisterend oor",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est",
  },
];

const CoreFeature = (): JSX.Element => {
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
