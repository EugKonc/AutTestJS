import { INavigate, IVoiceAssistant, Platform, Point, Theme } from './types';

export class NavigatorLoggerProxy implements INavigate {
  assistant: IVoiceAssistant;
  platform: Platform;
  points: Point[];
  theme: Theme;
  private proxied: INavigate = null;

  constructor(nav: INavigate) {
    this.proxied = nav;
  }
  
  setTheme(param: Theme) {
    console.log('FROM PROXY', new Date().toLocaleString(), 'invoked setTheme()', 'params: ', param);
    try {
      this.proxied.setTheme(param);
    } catch (e) {
      console.log('FROM PROXY', new Date().toLocaleString(), 'failed setTheme()');
    }
  }

  buildPath() {
    console.log('FROM PROXY', new Date().toLocaleString(), 'invoked buildPath()');
    try {
      this.proxied.buildPath();
    } catch (e) {
      console.log('FROM PROXY', new Date().toLocaleString(), 'failed buildPath()');
    }
  }

  setAssistant(param: IVoiceAssistant) {
    console.log('FROM PROXY', new Date().toLocaleString(), 'invoked setAssistant()', 'params: ', param);
    try {
      this.proxied.setAssistant(param);
    } catch (e) {
      console.log('FROM PROXY', new Date().toLocaleString(), 'failed setAssistant()');
    }
  }
}


