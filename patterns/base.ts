import { Google, INavigate, Yandex } from './types';

let nav: INavigate;

const main = () => {
  if (process.env.TYPE === 'Yandex') {
    if (process.env.VOICE === 'men') {
      nav = new Yandex();
      nav.setAssistant('men');
    }
    if (process.env.VOICE === 'women') {
      nav = new Yandex();
      nav.setAssistant('women');
    }
  }

  if (process.env.TYPE === 'Google') {
    if (process.env.PLATFORM === 'Android') {
      if (process.env.VOICE === 'men') {
        nav = new Google();
        nav.setAssistant('men');
        nav.platform = 'Android';
      }
      if (process.env.VOICE === 'women') {
        nav = new Google();
        nav.setAssistant('women');
      }
    }
  }
  nav.buildPath();
};

main();











