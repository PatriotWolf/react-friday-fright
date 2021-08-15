import React from "react";

interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small";
}

const variantConstant = {
  h1: 54,
  h2: 36,
  h3: 24,
  h4: 16,
  h5: 14,
  h6: 12,
  p: 16,
  small: "80%",
};

const Typography: React.FC<TypographyProps> = ({ variant, children }) => {
  return (
    <span
      style={{
        fontSize: (variant && variantConstant[variant]) || 16,
      }}
    >
      {children}
    </span>
  );
};

export default Typography;
