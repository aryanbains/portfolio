import { classes } from 'utils/style';
import styles from './Icon.module.css';
import ArrowLeft from './svg/arrow-left.svg';
import ArrowRight from './svg/arrow-right.svg';
import Check from './svg/check.svg';
import ChevronRight from './svg/chevron-right.svg';
import Close from './svg/close.svg';
import Copy from './svg/copy.svg';
import Email from './svg/email.svg';
import Error from './svg/error.svg';
import Figma from './svg/figma.svg';
import Github from './svg/github.svg';
import Link from './svg/link.svg';
import Linkedin from './svg/linkedin.svg';
import Menu from './svg/menu.svg';
import Pause from './svg/pause.svg';
import Play from './svg/play.svg';
import Send from './svg/send.svg';
import X from './svg/x.svg';
import Download from './svg/download.svg';

export const icons = {
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  check: Check,
  chevronRight: ChevronRight,
  close: Close,
  copy: Copy,
  email: Email,
  error: Error,
  figma: Figma,
  github: Github,
  link: Link,
  linkedin: Linkedin,
  menu: Menu,
  pause: Pause,
  play: Play,
  send: Send,
  x: X,
  download: Download,
};

export const Icon = ({ icon, className, ...rest }) => {
  const IconComponent = icons[icon];

  return (
    <IconComponent aria-hidden className={classes(styles.icon, className)} {...rest} />
  );
};
