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
            <a href="https://github.com/jatanj" target="_blank" rel="noopener noreferrer" aria-label="Github">
              <i className="bi bi-github fs-icon me-2" title="Github" aria-hidden="true"></i>
            </a>
            <a href="mailto:j@jatan.dev" aria-label="Email">
              <i className="bi bi-envelope-fill fs-icon ms-2 me-2" title="Email" aria-hidden="true"></i>
            </a>
          </div>
        </Content>
      </Container>
    </div>
  );
};

export default IndexPage;