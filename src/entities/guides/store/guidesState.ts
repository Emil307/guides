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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Felis_silvestris_silvestris.jpg/550px-Felis_silvestris_silvestris.jpg",
    cost: 150,
    category: 1,
    author: "Андрей Тейт",
    created_at: "2 года назад",
    language: "ru",
    link: "",
  },
  {
    id: 2,
    title: "Как заработать 2 миллиона в онлайн",
    description:
      "Купив этот гайд, вы сможете создавать тг ботов для ваших целей, задач и бизнеса, а так же итд.",
    intro_image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Felis_silvestris_silvestris.jpg/550px-Felis_silvestris_silvestris.jpg",
    cost: 150,
    category: 1,
    author: "Андрей Тейт",
    created_at: "2 года назад",
    language: "ru",
    link: "",
  },
];

class GuidesState {
  allGuides: IGuide[] = [];
  myGuides: IGuide[] = [];
  engGuides: IGuide[] = [];
  ruGuides: IGuide[] = [];
  isLoading: boolean = false;
  filter: string = "all";

  constructor() {
    makeAutoObservable(this);
  }

  async handleGetAllGuides() {
    try {
      this.isLoading = true;
      this.allGuides = guides;
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

  async handleGetMyGuides() {
    try {
      this.isLoading = true;
      this.myGuides = guides;
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

  async handleGetEngGuides() {
    try {
      this.isLoading = true;
      this.engGuides = guides;
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

  async handleGetRuGuides() {
    try {
      this.isLoading = true;
      this.ruGuides = guides;
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
