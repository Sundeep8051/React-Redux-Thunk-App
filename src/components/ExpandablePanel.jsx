import React, { useState } from "react";
import { GoTriangleRight, GoTriangleDown } from "react-icons/go";

const ExpandablePanel = ({ header, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded((prevState) => !prevState);
  };
  return (
    <div className="mb-2 border rounded">
      <div
        className="flex flex-row justify-between p-2 items-center cursor-pointer"
        onClick={handleExpand}
      >
        <div className="flex p-2 items-center cursor-pointer">{header}</div>
        {isExpanded ? <GoTriangleDown /> : <GoTriangleRight />}
      </div>
      {isExpanded ? <div className="p-2 border-t">{children}</div> : <></>}
    </div>
  );
};
export default ExpandablePanel;
