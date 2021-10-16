import * as React from "react";

type Props = {
  header: React.ReactNode,
  subheader: React.ReactNode,
  children: React.ReactNode
};

const Content = (props: Props) => {
  return (
    <React.Fragment>
      <h1 className="mx-sm-4 my-4 display-3 fw-bold">{props.header}</h1>
      <p className="mx-sm-4 my-4 fs-5">{props.subheader}</p>
      <div className="d-flex mx-sm-4 my-4">{props.children}</div>
    </React.Fragment>
  );
};

export default Content;