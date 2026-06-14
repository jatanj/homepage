import * as React from "react";

type Props = {
  kicker?: React.ReactNode,
  header: React.ReactNode,
  subheader: React.ReactNode,
  children: React.ReactNode
};

const Content = (props: Props) => {
  return (
    <React.Fragment>
      {props.kicker &&
        <p className="kicker mx-sm-4 fade-in">{props.kicker}</p>}
      <h1 className="heading mx-sm-4 mb-3 display-3 fw-bold fade-in delay-1">{props.header}</h1>
      <p className="subheader mx-sm-4 mb-4 fs-5 fade-in delay-2">{props.subheader}</p>
      <div className="d-flex mx-sm-4 fade-in delay-3">{props.children}</div>
    </React.Fragment>
  );
};

export default Content;
