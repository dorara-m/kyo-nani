import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";
import { Recipe } from "./types";

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
          recipe.recipeUrl ? (
            <a href={recipe.recipeUrl} target="_blank" rel="noopener noreferrer">
              <Card recipe={recipe} />
            </a>
          ) : (
            <Card recipe={recipe} />
          )
        ))}
      </div>
    </div>
  );
}

export default App;
