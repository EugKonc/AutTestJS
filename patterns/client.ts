import { decorator } from './1.decorator';
import { NavigatorLoggerProxy } from './2.proxy';


class NavigatorFacade {
  private proxy = null;
  private object = null;

  constructor() {
    this.object = decorator();
    this.proxy = new NavigatorLoggerProxy(this.object);
  }

  changeNavigatorAssistance(assistance){
    // await axios.post('https....')
    this.proxy.setAssistant(assistance)
  }

    createNavigatorObject(){
        return this.proxy;

    }
}

const navigator = new NavigatorFacade().createNavigatorObject();

navigator.buildPath();
navigator.setAssistant('women');
navigator.setAssistant('men');
navigator.buildPath();
navigator.setTheme('dark');
navigator.buildPath();
navigator.setTheme('light');