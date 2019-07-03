/* eslint-disable import/order */
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { TimePicker } from "antd";

const App = () => (
  <>
    <Query
      query={gql`
        {
          problems {
            title
            author
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return data.problems.map(({ title, author }) => (
          <div key={title}>
            <p>
              {title}: {author}
            </p>
          </div>
        ));
      }}
    </Query>
    <div>
      <h2>My first Apollo app 🚀</h2>
      <TimePicker />
    </div>
  </>
);

export default App;
