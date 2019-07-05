/* eslint-disable import/order */
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { Layout, Row, Col, Table, Button, Tag } from "antd";
import Link from "next/link";
import Menu from "../components/Menu";

const { Header, Content, Footer } = Layout;

const PROBLEMS_QUERY = gql`
  query PROBLEMS_QUERY {
    problems {
      name
      url
      categories
      judge
    }
  }
`;

const Columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Judge",
    dataIndex: "judge",
    key: "judge"
  },
  {
    title: "categories",
    key: "categories",
    dataIndex: "categories",
    render: categories => (
      <span>
        {categories.map(tag => {
          let color = tag.length > 5 ? "yellow" : "green";
          if (tag.length > 8) color = "blue";
          return (
            <Tag color={color} key={tag}>
              {tag}
            </Tag>
          );
        })}
      </span>
    )
  },
  {
    title: "Link",
    key: "link",
    dataIndex: "url",
    render: url => (
      <Button type="primary">
        <Link href={url}>
          <a>View Problem</a>
        </Link>
      </Button>
    )
  }
];

const App = () => (
  <>
    <Layout style={{ minHeight: "100vh" }} theme="dark" className="layout">
      <Header>
        <Menu />
      </Header>
      <Layout>
        <Content style={{ margin: "16px 16px" }}>
          <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
            <Row gutter={16}>
              <Col>
                <Query query={PROBLEMS_QUERY}>
                  {({ data, loading, error }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error...</p>;
                    return (
                      <Table columns={Columns} dataSource={data.problems} />
                    );
                  }}
                </Query>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Made with ❤ by club Algoritmia INTEC
        </Footer>
      </Layout>
    </Layout>
  </>
);

export default App;
