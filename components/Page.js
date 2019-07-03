import Header from "./Header";
import Meta from "./Meta";

const Page = props => (
  <div>
    <Meta />
    <Header />
    {props.children}
  </div>
);

export default Page;
