import { makeAutoObservable } from "mobx";

class SidebarState {
  isCollapsed: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  setIsCollapsed(isCollapsed: boolean) {
    this.isCollapsed = isCollapsed;
  }
}

export default new SidebarState();
