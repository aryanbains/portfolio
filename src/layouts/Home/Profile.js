import profileKatakana from 'assets/katakana-profile.svg?url';
import profileImgLarge from 'assets/profile-large.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.jpg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m Aryan Bains, currently I live in New Delhi, and I’m a college student passionate about AI, Web3, and building impactful tech. I’ve won multiple hackathons, founded Image5 AI, made impactful products, and constantly strive to push tech boundaries.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      In my spare time I like to take photos to things I see and like{' '}
      <Link href="https://instagram.com/aryanbains2">Website</Link>.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <Fragment>
            <div className={styles.content}>
              <div className={styles.column}>
                <ProfileText visible={visible} titleId={titleId} />
                <div className={styles.contactSection} data-visible={visible}>
                  <Heading level={3} as="h3" className={styles.contactTitle}>
                    Get in touch
                  </Heading>
                </div>
                <Button
                  secondary
                  className={styles.button}
                  data-visible={visible}
                  href="/contact"
                  icon="send"
                >
                  Send me a message
                </Button>
                <br></br>
                <br></br>
                <Button
                  secondary
                  className={styles.button}
                  data-visible={visible}
                  href="https://drive.google.com/file/d/1JkNTB25EiKxKrjio97xIADGuR2pE65As/view?usp=sharing"
                  icon="download"
                >
                  Download CV / Resume
                </Button>
                <br></br>
                <br></br>
                <br></br>
                <div className={styles.contactButtons}>
                  <Button
                    secondary
                    className={styles.contactButton}
                    data-visible={visible}
                    href="mailto:aryanbains6@gmail.com"
                    icon="email"
                  >
                    Email
                  </Button>
                  <Button
                    secondary
                    className={styles.contactButton}
                    data-visible={visible}
                    href="https://linkedin.com/in/aryanbains"
                    icon="linkedin"
                  >
                    LinkedIn
                  </Button>
                  <Button
                    secondary
                    className={styles.contactButton}
                    data-visible={visible}
                    href="https://github.com/aryanbains"
                    icon="github"
                  >
                    GitHub
                  </Button>
                  <Button
                    secondary
                    className={styles.contactButton}
                    data-visible={visible}
                    href="https://x.com/aryanbains2"
                    icon="x"
                  >
                    X
                  </Button>
                </div>
              </div>
              <div className={styles.column}>
                <div className={styles.tag} aria-hidden>
                  <Divider
                    notchWidth="64px"
                    notchHeight="8px"
                    collapsed={!visible}
                    collapseDelay={1000}
                  />
                  <div className={styles.tagText} data-visible={visible}>
                    About Me
                  </div>
                </div>
                <div className={styles.image}>
                  <Image
                    reveal
                    delay={100}
                    placeholder={profileImgPlaceholder}
                    srcSet={[profileImg, profileImgLarge]}
                    sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                    alt="Me standing in the sky"
                  />
                  <svg
                    aria-hidden="true"
                    width="135"
                    height="765"
                    viewBox="0 0 135 765"
                    className={styles.svg}
                    data-visible={visible}
                  >
                    <use href={`${profileKatakana}#katakana-profile`} />
                  </svg>
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </Transition>
    </Section >
  );
};
