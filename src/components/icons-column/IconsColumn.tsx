/* eslint-disable @typescript-eslint/ban-types */
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

import styles from 'styles/icons.module.css';

export default function IconsColumn({
  IconSrc,
  title,
  text,
}: {
  IconSrc: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  title: string;
  text: string;
}): JSX.Element {
  return (
    <div>
      <div>
        <IconSrc className={styles.icon} />
        <br />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
