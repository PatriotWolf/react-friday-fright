import React from "react";

interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small";
}

interface TypographyState {
  title: string;
  foo?: number;
}

const variant = {
  h1: 54,
  h2: 36,
  h3: 24,
  h4: 16,
  h5: 14,
  h6: 12,
  p: 16,
  small: "80%",
};

class Typography extends React.Component<TypographyProps, TypographyState> {
  render() {
    return (
      <text
        style={{
          fontSize: (this.props.variant && variant[this.props.variant]) || 16,
        }}
      >
        {this.props.children}
      </text>
    );
  }
}

export default Typography;
