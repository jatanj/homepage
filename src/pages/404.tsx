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
          kicker="Error 404"
          header={<>Page <span className="text-gradient">Not Found</span></>}
          subheader="The page you're looking for doesn't exist or may have moved.">
          <a href="/" className="back-link" aria-label="Back to home">
            <i className="bi bi-arrow-left back-link__arrow" aria-hidden="true"></i>
            <span>Back home</span>
          </a>
        </Content>
      </Container>
    </div>
  );
};

export default NotFoundPage;
