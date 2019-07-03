import App, { Container } from "next/app";
import Router from "next/router";
import { ApolloProvider } from "react-apollo";
import withApollo from "../lib/withApollo";
import Page from "../components/Page";
import "../static/App.css";
import NProgress from "nprogress";

// Router.events.on("routeChangeStart", NProgress.start());
// Router.events.on("routeChangeComplete", NProgress.done());
// Router.events.on("routeChangeError", NProgress.done());

class MyApp extends App {
  componentDidMount() {
    NProgress.configure({ showSpinner: false });
    Router.events.on("routeChangeStart", NProgress.start());
    Router.events.on("routeChangeComplete", NProgress.done());
    Router.events.on("routeChangeError", NProgress.done());
  }

  componentWillUnmount() {
    // clearTimeout(this.timer);
    NProgress.configure({ showSpinner: false });
    Router.events.off("routeChangeStart", NProgress.start());
    Router.events.off("routeChangeComplete", NProgress.done());
    Router.events.off("routeChangeError", NProgress.done());
  }

  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            {/* <NProgress /> */}
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
