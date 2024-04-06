import React from "react";

type SectionHeaderProps = {
    // ReactNode: a typeScript type used to represent any content that can be rendered as a React node.
    children: React.ReactNode;
}

export default function SectionHeader({ children }: SectionHeaderProps) {
  return <h2 className="text-3xl font-medium capitalize mb-8 text-center">{children}</h2>;
}
