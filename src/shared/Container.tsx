import React, { ReactNode } from "react";
import { cn } from "../lib/utils";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <div className={cn("container py-10 md:py-16", className)}>{children}</div>
  );
};

export default Container;
