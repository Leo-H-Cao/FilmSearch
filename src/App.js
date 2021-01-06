import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { Layout } from "antd";
import FilmList from "./components/FilmList";
import PageNumber from "./components/PageNumber";

const { Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header />
      <Content style={{ padding: "0 50px" }}>
        <div className="search">
          <SearchBar />
        </div>
        <div className="site-layout-content">
          <FilmList />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        <PageNumber />
      </Footer>
    </Layout>
  );
}

export default App;
