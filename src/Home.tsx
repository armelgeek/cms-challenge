import React, { useEffect } from "react";
import Block from "./utils/tail/blocks";
import Element from "./utils/tail/element";
import { useDispatch, useGetter } from "./store";
import BlockEditor from "./components/blocks/BlockEditor";

export default function Home() {
  const editor = useGetter("editor", "data", []);
  const update = useDispatch("editor", "setInfo");
  let page = new Block();
  const block = new Element()
    .Flexbox({ direction: "col" })
    .setIcon("dashboard")
    .setTag("document");
  page.json.blocks = block;
  page.name = "A new page";
  useEffect(() => {
    update({
      prop: "elements",
      value: new Element().Groups(),
    });
    update({
      prop: "current",
      value: block,
    });
    update({
      prop: "document",
      value: block,
    });
    update({
      prop: "page",
      value: page,
    });
  }, []);
  return (
    <div className="min-h-screen w-screen bg-gray-800">
      <div className="mt-10 overflow-hidden">
        <div className="editor-container bottom-0 left-0 right-0 top-0 flex min-h-screen flex-row">
          <div className="w-full overflow-x-hidden overflow-y-hidden">
            <div className="relative grid w-full grid-cols-12">
              <div className="relative col-span-12 mr-10 min-h-screen pb-20 md:col-span-12 lg:col-span-12">
                <div className="absolute inset-0 mb-10 flex flex-col overflow-y-auto">
                  <BlockEditor page={page} document={block} />
                </div>
              </div>

              <div className="z-modal bg-bluegray-200 fixed right-0 top-0 mt-8 min-h-screen w-1/5 border-l pr-10">
                {/**<EditorSidebar :tab="sidebarName" @close="sidebar=false,sidebarName=''"/>**/}
              </div>
              <div className="bg-bluegray-200 z-modal fixed right-0 top-0 mt-8 flex h-screen w-10 flex-col items-center justify-start text-center shadow">
                <div className="chip my-1 rounded bg-black px-1 text-xs text-white">
                  Tools
                </div>
                {/** <EditorSidebarTabs/>*/}
              </div>
              {/** <EditorFooter/>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
