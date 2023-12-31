import axios from "axios";
import ArticleList from "../../components/articleList"

export default function Page({ articles }) {
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

export async function getStaticProps() {
  console.log("getStaticProps");
  const ENDPOINT = "http://localhost:4030/articles";
  const result = await axios.get(ENDPOINT).then((res) => res.data);
  console.log(result);
  return { props: { articles: result } };
}
