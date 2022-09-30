export interface INavigate {
  platform: Platform;
  assistant: IVoiceAssistant;
  points: Point[];
  theme: Theme;

  setTheme(param: Theme);
  setAssistant(param: IVoiceAssistant);

  buildPath();
}

export type Theme = 'dark' | 'light';

export type Platform = 'IOS' | 'Android' | 'Desktop';

export type Point = number | string;

export type IVoiceAssistant = 'men' | 'women' | 'Jirik';

export class Yandex implements INavigate {
  theme: Theme;
  points: Point[];
  assistant: IVoiceAssistant;
  platform: Platform;

  buildPath() {
    console.log('Yandex', this.platform, this.assistant, this.points, this.theme);
  }

  setAssistant(param: IVoiceAssistant) {
    this.assistant = param;
  }

  setTheme(param: Theme) {
    this.theme = param;
  }
}

export class Google implements INavigate {
  theme: Theme;
  setTheme(param: Theme) {
    this.theme = param;
  }
  assistant: IVoiceAssistant;
  platform: Platform;
  points: Point[];

  setAssistant(param: IVoiceAssistant) {
    this.assistant = param;
  }

  buildPath() {
    console.log('Google', this.platform, this.assistant, this.points, this.theme);
  }
}
