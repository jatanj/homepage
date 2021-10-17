import * as React from "react"
import Head from "../components/head";
import Container from "../components/container";
import Content from "../components/content";

import "@scss/main.scss";

const NotFoundPage = () => {
  return (
    <div>
      <Head>
        <title>Not Found</title>
      </Head>
      <Container>
        <Content
          header="Page Not Found"
          subheader="Whoops! You tried to access a page that doesn't exist.">
          <div className="fs-5">
            <a href="/">Go back.</a>
          </div>
        </Content>
      </Container>
    </div>
  );
};

export default NotFoundPage;
