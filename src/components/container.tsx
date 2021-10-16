import * as React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = (props: Props) => {
  return (
    <div className="d-flex d-center min-vh-90">
      <div className="container m-4">
        {props.children}
      </div>
    </div>
  );
};

export default Container;