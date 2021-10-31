import { WhiteBlock } from '../../WhiteBlock';
import { Button } from '../../Button';

import styles from './WelcomeStep.module.scss';
import { MainContext } from '../../../pages';
import React from 'react';

export const WelcomeStep: React.FC = () => {
  const { onNextStep } = React.useContext(MainContext);

  return (
    <WhiteBlock className={styles.block}>
      <h3 className={styles.title}>
        <img className={styles.handWaveImg} src="/static/js-logo.png" alt="Logo" />
        Welcome to JetSpeech!
      </h3>
      <p>
        We're working hard to keep JetSpeech ready for everyone!
        At the moment, you can try out a prototype of the application, test your hypotheses about what you would like to see here and understand what tasks it can help you with :)
      </p>
      <div>
        <Button className={styles.button} onClick={onNextStep}>
          Get your username
          <img className="d-ib ml-10" src="/static/arrow.svg" />
        </Button>
      </div>
    </WhiteBlock>
  );
};
