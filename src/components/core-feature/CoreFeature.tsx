import IconsColumn from 'src/components/icons-column/IconsColumn';
import SpaIcon from '@mui/icons-material/Spa';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import ChatIcon from '@mui/icons-material/Chat';
import styles from 'styles/icons.module.css';

const data = [
  {
    id: 1,
    IconSrc: SpaIcon,
    title: 'Kwaliteit',
    text: 'Krijg de zorg die je nodig hebt voor meer comfort in je dagelijkse leven.',
  },
  {
    id: 2,

    IconSrc: SupervisorAccountIcon,
    title: 'Vast verzorg(st)er',
    text: 'We kennen jouw specifieke complicaties voor een vlotte verzorging.  ',
  },
  {
    id: 3,
    IconSrc: AddIcCallIcon,
    title: 'Altijd bereikbaar',
    text: 'Ook bij noodgevallen staat iemand van Dia Verpleging voor je klaar.',
  },
  {
    id: 4,
    IconSrc: ChatIcon,
    title: 'Een luisterend oor',
    text: 'Een babbeltje kan zo’n deugd doen. Wil je je even hart luchten? Wij luisteren.  ',
  },
];

const CoreFeature = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <h2>Waarom Dia Verpleging</h2>
      <div className={styles.grid}>
        {data.map(({ id, IconSrc, title, text }) => (
          <IconsColumn key={id} IconSrc={IconSrc} title={title} text={text} />
        ))}
      </div>
    </div>
  );
};

export default CoreFeature;
