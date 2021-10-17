import * as React from "react"
import { Helmet } from "react-helmet";

type Props = {
  children?: React.ReactChild | React.ReactChildren
};

export default (props: Props) => {
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      titleTemplate="%s | Jatan Patel"
      defaultTitle="Jatan Patel" defer={false}
    >
      {props.children}
    </Helmet>
  );
}