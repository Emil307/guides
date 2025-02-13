import { makeAutoObservable } from "mobx";
import toast from "react-hot-toast";
import { IGuide } from "../types";

const guides = [
  {
    id: 1,
    title: "Как заработать миллион в онлайн",
    description:
      "Купив этот гайд, вы сможете создавать тг ботов для ваших целей, задач и бизнеса, а так же итд.",
    intro_image:
      "https://unsplash.com/photos/a-blue-button-with-a-white-arrow-on-it-3pwMu6uVsJI",
    cost: 150,
    category: 1,
    author: "Андрей Тейт",
    created_at: "2 года назад",
    language: "ru",
    link: "",
  },
];

class GuidesState {
  guides: IGuide[] = [];
  isLoading: boolean = false;
  filter: string = "all";

  constructor() {
    makeAutoObservable(this);
  }

  async handleGetGuides() {
    try {
      this.isLoading = true;
      this.guides = guides;
    } catch (e: any) {
      toast.error(
        e?.response?.data?.message ||
          e?.response?.data?.detail ||
          "Неизвестная ошибка"
      );
    } finally {
      this.isLoading = false;
    }
  }
}

export default new GuidesState();
