import Link from "next/link";
import React from "react";

const DropDownLink = (props) => {
  const { children, href, ...rest } = props;
  return (
    <Link href={href}>
      <p {...rest}>{children}</p>
    </Link>
  );
};

export default DropDownLink;
