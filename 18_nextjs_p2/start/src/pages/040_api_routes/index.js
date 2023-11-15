import axios from "axios";
import ArticleList from "../../components/articleList";
import { useEffect, useState } from "react";

export default function Page() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const ENDPOINT = "/api/articles";
      const result = await axios.get(ENDPOINT).then((res) => res.data);
      setArticles(result);
    };
    getArticles();
  }, []);
  if (!articles) {
    return <div>No articles found</div>;
  }
  return (
    <>
      <h3>fetch</h3>
      <ArticleList list={articles} />
    </>
  );
}
