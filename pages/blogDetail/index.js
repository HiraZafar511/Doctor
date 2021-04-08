import Layout from "../../components/Layout";
import BlogDetail from "../../components/BlogDetail/index";

const Index = () => {
  return (
    <div>
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        />

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      </head>
      <Layout>
        <BlogDetail />
      </Layout>
    </div>
  );
};

export default Index;
