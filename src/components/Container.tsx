import React from "react";

const Container: React.FC = ({ children }) => {
  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,
        minHeight: `100vh`,
        backgroundColor: `#282c34`,
        color: `white`,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
