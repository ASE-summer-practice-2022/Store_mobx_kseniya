import {makeAutoObservable, makeObservable, observable} from "mobx";

class AppStore {

  constructor() {

    makeAutoObservable(this);
  }



}
const store = new AppStore();
export default store;
