import clsx from 'clsx';
import Cookies from 'js-cookie';
import { WhiteBlock } from '../../WhiteBlock';
import { Button } from '../../Button';
import { StepInfo } from '../../StepInfo';

import styles from './GitHubStep.module.scss';
import React from 'react';
import { MainContext, UserData } from '../../../pages';
import { SERVER_URL } from '../../../utils/config';

export const GitHubStep: React.FC = () => {
  const { onNextStep, setUserData } = React.useContext(MainContext);

  /* NOTE: При запросе авторизации через github, сервер обращается к github, вытаскивает из него данные о пользователе, и возвращает данные о пользователе + токен на основе его данных на фронт.
  На фронте отлавливается передача сообщения, чекается содержимое ответа, обновляются куки токена и переход на следующий этап */


  const onClickAuth = () => {
    window.open(
      `${SERVER_URL}/auth/github`,
      'Auth',
      'width=500,height=500,status=yes,toolbar=no,menubar=no,location=no',
    );
  };

  React.useEffect(() => {
    window.addEventListener('message', ({ data, origin }) => {
      const user: string = data;
      if (typeof user === 'string' && user.includes('avatarUrl')) {
        Cookies.remove('token');
        const json: UserData = JSON.parse(user);
        setUserData(json);
        onNextStep();
        Cookies.set('token', json.token);
      }
    });
  }, []);

  return (
    <div className={styles.block}>
      
      <StepInfo icon="/static/js-logo.png" title="Please log in to the application through your GitHub account" />
      <WhiteBlock className={clsx('m-auto mt-40', styles.whiteBlock)}>
        <Button
          onClick={onClickAuth}
          className={clsx(styles.button, 'd-i-flex align-items-center')}>
          <img className="d-ib mr-10" src="/static/github.svg" />
          Log in from GitHub
          <img className="d-ib ml-10" src="/static/arrow.svg" />
        </Button>
      </WhiteBlock>
    </div>
  );
};
