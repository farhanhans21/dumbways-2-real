import React from "react";
import { Link as Clink, LinkProps } from "@chakra-ui/react";

import { Link as RRLink, LinkProps as RRLinkProps } from "react-router-dom";

type ButtonLinkPops = LinkProps & RRLinkProps & { children: React.ReactNode };

export default function ButtonLink({ children, to, ...props }: ButtonLinkPops) {
  return (
    <>
      <Clink
        as={RRLink}
        to={to}
        {...props}
        _hover={"color: green"}
        transition={"color 0.2s ease-in-out"}
        textDecoration={"none"}
      >
        {children}
      </Clink>
    </>
  );
}
