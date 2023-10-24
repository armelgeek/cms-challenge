import React, {useState, useEffect, useMemo, useCallback} from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "../../hooks/usePagination";
import _ from "lodash";
import { useTable } from "react-table";
import { Link } from "react-router-dom";
import {BsArrowLeft, BsArrowRight} from "react-icons/bs";
import {AiOutlineFileAdd} from "react-icons/ai";
import {FiInfo, FiSearch} from "react-icons/fi";
export default function DataTable({
  columns,
  data = [],
  scopes = [],
  searchTerm,
  handleInputChange,
  handleSearch,
  meta,
  addUrl,
  urlName,
  footer,
  tip = "",
  filter = true,
  paginate = true,
  func = null,
  guide,
}: any) {
  return (
    <>
      <DataTableData
        columns={columns}
        data={meta.isFetching ? [] : data}
        meta={meta}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        handleInputChange={handleInputChange}
        scopes={scopes}
        addUrl={addUrl}
        urlName={urlName}
        footer={footer}
        tip={tip}
        filter={filter}
        paginate={paginate}
        guide={guide}
        func={func}
      />
    </>
  );
}
function DataTableData({
  columns,
  data = [],
  scopes = [],
  searchTerm,
  handleInputChange,
  handleSearch,
  meta,
  addUrl,
  urlName,
  footer,
  tip = "",
  filter = true,
  func = null,
  guide,
}: any) {
  const [pageData, setPageData] = useState({
    rowData: data,
    totalPages: 0,
    totalItems: 0,
  });
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    if (!meta.isFetching) {
      setPageData({
        rowData: data,
        totalPages: meta.totalPages,
        totalItems: meta.totalItems,
      });
    }
  }, [data, meta]);
  return (
    <>
      <div className="flex justify-end items-center">
          {addUrl && urlName && (
            <Link className="btn btn-sm bg-primary-500 text-white" to={addUrl}>
              {urlName}
            </Link>
          )}
      </div>
      <div className="flex items-center justify-between flex-row w-full my-2">
        {tip && <div className="alert alert-info w-full"><FiInfo className={"mr-1"}/> {tip}</div>}
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="search">
          <div  className="input-group">

            <input
                type="text"
                id="searchTerm"
                name="searchTerm"
                value={searchTerm}
                onChange={handleInputChange}
                className="input input-sm border border-slate-200"
                placeholder="Rechercher ...."
            />
            <span className="input-group-text cursor-pointer"  onClick={handleSearch}>
              <button type="button"><FiSearch/></button>
            </span>
          </div>
        </div>
         <div>
           {_.isFunction(func) && pageData.totalPages && (
               <Pagination
                   className="flex flex-col justify-center items-center"
                   currentPage={currentPage}
                   totalCount={pageData.totalItems}
                   func={func}
                   pageSize={10}
                   onPageChange={(page: number) => {
                     setCurrentPage(page);
                     if (_.isFunction(func)) {
                       func(page);
                     }
                   }}
               /> )}
         </div>
             <div className="page-info">
               {meta.page}/{meta.totalPages} - {meta.totalItems} element's
             </div>
     </div>
      <AppTable
        columns={columns}
        data={pageData.rowData}
        isLoading={meta.isFetching}
      />
      {footer && (
        <div>
          <tr>
            <td colSpan={5} color={"white"}>
              {footer}
            </td>
          </tr>
        </div>
      )}
    </>
  );
}
const AppTable = ({
  columns,
  data,
  currentPage,
  setCurrentPage,
  isLoading = false,
}: any) => {
  const columnData = useMemo(() => columns, [columns]);
  const rowData = useMemo(() => data, [data]);
  const colspan = columns.length;
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns: columnData,
      data: rowData,
    });
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {isLoading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0)",
            zIndex: 10000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="text-center"
        >
          <div
            style={{
              color: "white",
              fontSize: "14px",
              backgroundColor: "rgba(0,0,0,0.3)",
              padding: "20px",
            }}
          >
            Chargement des données en cours ....
          </div>
        </div>
      )}
      <table {...getTableProps()} className="table-striped table">
        <thead className=" text-white">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const Pagination = (props: any) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  }) as any;

  // @ts-ignore
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = useCallback(() => {
    onPageChange(currentPage + 1);
  },[currentPage]);

  const onPrevious = useCallback(() => {
    onPageChange(currentPage - 1);
  },[currentPage]);
   const noop = useCallback(() => {
    return ;
  },[]);

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
      <div className={className}>
      <nav className="pagination pagination-circle">
          <ul
            className={"pagination-list"}
          >
            <li
              className={classnames("pagination-item", {
                disabled: currentPage === 1,
              })}
              onClick={currentPage === 1 ? noop: onPrevious}
            >
              <a className="pagination-link pagination-link-prev-icon">
                <BsArrowLeft/>
              </a>
            </li>
            {paginationRange.map((pageNumber:any) => {
              if (pageNumber === DOTS) {
                return <li className="pagination-item dots"> <span className="pagination-link pagination-link-more"> ... </span></li>;
              }
              return (
                <li
                  className={`pagination-item ${ pageNumber === currentPage ? 'active': ''}`}
                  onClick={() => onPageChange(pageNumber)}
                >

                  <a className="pagination-link">{pageNumber}</a>
                </li>
              );
            })}
            <li
              className={classnames("pagination-item", {
                disabled: currentPage === lastPage,
              })}
              onClick={currentPage === lastPage ? noop : onNext}
            >
              <a className="pagination-link pagination-link-next-icon">
                <BsArrowRight/>
              </a>
            </li>
          </ul>
      </nav>
      </div>
  );
};
