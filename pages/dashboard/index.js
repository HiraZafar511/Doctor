import Layout from "../../components/Layout";
import Dashboard from "../../components/Dashboard/index.js";

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
        <Dashboard />
      </Layout>
    </div>
  );
};

export default Index;
