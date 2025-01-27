// レシピのタイプ定義
export type Recipe = {
  id: string;
  name: string;
  thumb: {
    url: string;
    height: number;
    width: number;
  };
  materialCategory: {
    id: string;
    name: string;
  }[];
  feeling: string[];
  cookingCategory: string[];
  recipeUrl: string;
};