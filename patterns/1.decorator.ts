import { Google, INavigate, Yandex } from './types';

interface IDecorator {
  nav: INavigate;
  getInstance(): INavigate;
}

class AddTypeDecorator implements IDecorator {
  constructor() {
  }

  getInstance(): INavigate {
    if (process.env.TYPE === 'Yandex') {
      this.nav = new Yandex();
    } else {
      this.nav = new Google();
    }
    return this.nav;
  }

  nav: INavigate;
}

class AddPlatformDecorator implements IDecorator {
  nav: INavigate;

  constructor(nav: INavigate) {
    this.nav = nav;
  }

  getInstance() {
    if (process.env.PLATFORM === 'IOS' || process.env.PLATFORM === 'Android' || process.env.PLATFORM === 'Desktop') {
      this.nav.platform = process.env.PLATFORM;
      return this.nav;
    } else {
      throw new Error('PLATFORM is not passed!');
    }
  }
}

class AddVoiceDecorator implements IDecorator {
  nav: INavigate;

  constructor(nav: INavigate) {
    this.nav = nav;
  }

  getInstance() {
    if (process.env.VOICE === 'men' || process.env.VOICE === 'women' || process.env.VOICE === 'Jirik') {
      this.nav.setAssistant(process.env.VOICE);
      return this.nav;
    } else {
      throw new Error('VOICE is not passed!');
    }
  }
}

class AddPointsDecorator implements IDecorator {
  nav: INavigate;
  constructor(nav: INavigate) {
    this.nav = nav;
  }

  getInstance() {
    this.nav.points = ['local', 'burgernaya'];
    return this.nav;
  }
}

class AddThemeDecorator implements IDecorator {
  nav: INavigate;
  constructor(nav: INavigate) {
    this.nav = nav;
  }
  getInstance() {
    this.nav.theme = 'dark';
    return this.nav;
  }
}

function addPoints(nav: INavigate): INavigate {
  return new AddPointsDecorator(nav).getInstance();
}

function addVoice(nav: INavigate): INavigate {
  return new AddVoiceDecorator(nav).getInstance();
}

function addPlatform(nav: INavigate): INavigate {
  return new AddPlatformDecorator(nav).getInstance();
}

function addTheme(nav: INavigate): INavigate {
  return new AddThemeDecorator(nav).getInstance();
}

function addType(): INavigate {
  return new AddTypeDecorator().getInstance();
}



// @ts-ignore
export const decorator = () => {
  let nav: INavigate;
  nav = addPoints(addVoice(addTheme(addPlatform(addType()))));
  return nav;
};

  // if (process.env.TYPE === 'Yandex') {
  //   if (process.env.VOICE === 'men') {
  //     nav = new Yandex();
  //     nav.setAssistant('men');
  //   }
  //   if (process.env.VOICE === 'women') {
  //     nav = new Yandex();
  //     nav.setAssistant('women');
  //   }
  // }
  //
  // if (process.env.TYPE === 'Google') {
  //   if (process.env.PLATFORM === 'Android') {
  //     if (process.env.VOICE === 'men') {
  //       nav = new Google();
  //       nav.setAssistant('men');
  //       nav.platform = 'Android';
  //     }
  //     if (process.env.VOICE === 'women') {
  //       nav = new Google();
  //       nav.setAssistant('women');
  //     }
  //   }
  // }














