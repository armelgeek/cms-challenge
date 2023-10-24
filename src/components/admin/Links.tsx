import React, { memo } from "react";
import { Link } from "react-router-dom";
const Links = memo(
  ({ title, children }: any) => {
    return (
      <div className="flex flex-col items-center justify-between gap-y-1 bg-dark-900 px-3 pb-1 pt-1 sm:flex-row sm:gap-y-0">
        <h5 className="text-xl font-bold text-slate-200">{title}</h5>
        {children}
      </div>
    );
  },
  (prev, next) => {
    return prev.title === next.title && prev.children === next.children;
  }
);
export default Links;
