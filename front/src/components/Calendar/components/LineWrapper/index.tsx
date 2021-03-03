import React, { useState } from "react";
import Line from "../Line";

const LineWrapper: React.FC = (): JSX.Element => {
  const [hide, setHide] = useState<boolean>(true);
  return (
    <>
      <Line />
      {!hide ? <Line /> : null}
    </>
  );
};

export default LineWrapper;
