import React, { useState } from "react";

const BlockFloating = ({ current }: any) => {
  const [state, setState] = useState({
    currentIcon: "",
    icons: [
      //{ icon: 'expand_less' , title: 'Move up' , action: 'moveBlock,1' , filter : null},
      {
        icon: "edit",
        title: "Edit content",
        action: "BlockEditContent",
        filter: null,
      },
      {
        icon: "photo",
        title: "Icon",
        action: "BlockIconFinder",
        filter: "IconifyIcon",
      },
      { icon: "format_size", title: "Font", action: "BlockFont" },
      { icon: "title", title: "Heading", action: "BlockHeading", filter: "h" },
      {
        icon: "format_color_text",
        title: "Color",
        action: "BlockTextColor",
        options: { context: "textcolor" },
        filter: null,
      },
      {
        icon: "format_color_fill",
        title: "Fill Color",
        action: "BlockTextColor",
        options: { context: "bgcolor" },
        filter: null,
      },
      //{ icon: 'brush' , title: 'Customize' , action: 'customizeBlock' , filter : null },
      { icon: "photo", title: "Image", action: "BlockImageUrl", filter: null },
      { icon: "link", title: "Link", action: "BlockLink", filter: null },

      {
        icon: "menu",
        title: "More...",
        action: "BlockContextMenu",
        filter: null,
      },
      //{ icon: 'delete' , title: 'Remove' , action: 'deleteBlock' , filter: null },
    ],
    position: {},
    offsetX: 145,
    inner: null,
    currentElement: null,
  });
  return (
    <div className="z-highest mt-5 flex h-8 cursor-pointer items-center justify-center bg-white px-2 text-sm text-black shadow">
      <small className="chip bg-blue-800 capitalize text-white mr-2">
        {current.element}
      </small>
      <small className="chip bg-blue-800 capitalize text-white mr-2">
        Move block
      </small>
      {current.type == "container" && (
        <small className="chip bg-blue-800 capitalize text-white mr-2">Add</small>
      )}
      {state.icons.length > 0 &&
        state.icons.map((icon,index) => (
          <small key={index} className="chip bg-blue-800 capitalize text-white mx-2">{icon.title}</small>
        ))}
    </div>
  );
};
export default BlockFloating;
