import { ICategory } from "entities/categories/types";
import { IUser } from "entities/users";

export interface IGuide {
  id: number;
  title: string;
  description: string;
  intro_image: string;
  cost: number;
  category: ICategory;
  author: IUser;
  created_at: string;
  language: string;
  link: string;
}
