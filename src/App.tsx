import { useState, useEffect } from "react";
import "./App.css";

// レシピのタイプ定義
type Recipe = {
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

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // microCMSのAPIキーとエンドポイントを設定してください
        const response = await fetch(
          "https://whats-for-dinner.microcms.io/api/v1/results?limit=100",
          {
            headers: {
              "X-MICROCMS-API-KEY": "IXwFsBjw7zfWfbKgjLj7Do7swc3XkdKpxZca",
            },
          }
        );
        const data = await response.json();
        setRecipes(data.contents);
      } catch (error) {
        console.error("レシピの取得に失敗しました:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) return <div>読み込み中...</div>;

  return (
    <div className="recipe-container">
      <h1>今日なに食べる？</h1>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            {recipe.thumb && <img src={recipe.thumb.url} alt={recipe.name} />}
            <h2>{recipe.name}</h2>
            <div className="recipe-tags">
              {recipe.materialCategory.map((cat) => (
                <span key={cat.id} className="category-tag">
                  {cat.name}
                </span>
              ))}
              {recipe.feeling.map((feel) => (
                <span key={feel} className="feeling-tag">
                  {feel}
                </span>
              ))}
            </div>
            {recipe.recipeUrl && (
              <a
                href={recipe.recipeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                レシピを見る
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
