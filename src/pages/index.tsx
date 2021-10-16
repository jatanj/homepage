import * as React from "react";
import Head from "../components/head";
import Container from "../components/container";
import Content from "../components/content";

import "@scss/main.scss";

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        <Content
          header="Hi. I'm Jatan."
          subheader="I'm a Software Engineer based in Phoenix, Arizona. Find me at the links below.">
          <div className="user-select-none">
            <a href="https://github.com/jatanj" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github fs-2 me-2"></i>
            </a>
            <a href="mailto:j@jatan.dev"><i className="bi bi-envelope-fill fs-2 ms-2 me-2"></i></a>
          </div>
        </Content>
      </Container>
    </div>
  );
};

export default IndexPage;