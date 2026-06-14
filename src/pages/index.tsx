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
          kicker="Software Engineer"
          header={<>Hi, I&apos;m <span className="text-gradient">Jatan</span>.</>}
          subheader={<>I&apos;m a Software Engineer based in Phoenix, Arizona 🌵.<span className="d-block mt-3">Find me at the links below.</span></>}>
          <div className="social-links user-select-none">
            <a href="https://github.com/jatanj" aria-label="Github">
              <i className="bi bi-github fs-icon" title="Github" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/jatan-patel-3aa50a339/" aria-label="Linkedin">
              <i className="bi bi-linkedin fs-icon" title="Linkedin" aria-hidden="true"></i>
            </a>
            <a href="mailto:jatan.j.patel@outlook.com" aria-label="Email">
              <i className="bi bi-envelope-fill fs-icon" title="Email" aria-hidden="true"></i>
            </a>
          </div>
        </Content>
      </Container>
    </div>
  );
};

export default IndexPage;
