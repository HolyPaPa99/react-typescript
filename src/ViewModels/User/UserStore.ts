import Language from '@Models/User/Language';
import { action, observable } from 'mobx';

class UserStore {

    @observable lang: Language = Language.English;

    @action
    setLang(lang: Language){
        this.lang = lang;
    }

    
}

const userStore = new UserStore();

export default userStore;