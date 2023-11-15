import Layout2 from "../../components/layout/layout2";

export default function Page() {
  return (
    <div>
      <p>Layout2: header in the bottom</p>
    </div>
  );
}

Page.getLayout = (page) => {
  return <Layout2>{page}</Layout2>;
}