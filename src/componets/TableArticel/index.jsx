import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import style from "./table.module.css";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getArticel } from "../../config/redux/actions/articelActions";
import ModelUpdate from "../Model/modelUpdate";
import ModelDelete from "../Model/modalDelete";

const Table = () => {
  let [data, setData] = useState([]);

  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSearch = () => {
    if (search !== "" && sort !== "") {
      setSearchParams({
        keyword: search,
        sort: sort,
      });
    } else if (search !== "") {
      setSearchParams({
        keyword: search,
      });
    } else if (sort !== "") {
      setSearchParams({
        sort: sort,
      });
    } else {
      setSearchParams({});
    }
  };
  let dispatch = useDispatch();
  const [loading, isLoading] = useState(false);
  useEffect(() => {
    dispatch(getArticel(setData, isLoading));
  }, [searchParams]);

  const actionBodyTemplate = (data) => {
    console.log(data);
    return (
      <>
        <ModelUpdate id={data.id} writer={data.writer} title={data.title} content={data.content} image={data.image}>
          <i className="   bi bi-box-arrow-up"></i>
          <span> Upadte</span>
        </ModelUpdate>
        <ModelDelete id={data.id} title={data.title}>
          <i className="bi bi-trash"></i>
          <span> Delete</span>
        </ModelDelete>
      </>
    );
  };
  return (
    <>
      <div class={`container  col-12 col-md-9 bg-light ${style.rightSide}`}>
        <div className="col-12">
          <div className={`row inputEdit justify-content-center mb-3 mb-md-5 ${style.themeRow} ${style.rowOneRight}`}>
            <div className="col-11">
              <h3 className="pt-4">My Articel</h3>
              <hr className={style.hr} />
              <div className=" mt-4 container row">
                <div className="container  mb-2"></div>
                <div className="container">
                  <input style={{ borderRadius: "15px", width: "300px" }} type="text" name="search" placeholder="search" onChange={(e) => setSearch(e.target.value)} />
                  <button style={{ borderRadius: "15px", width: "150px", height: "30px", textAlign: "center" }} className="mb-1 btn btn-primary ml-3" onClick={handleSearch}>
                    cari
                  </button>
                </div>
              </div>
              <div className="table-responsive  container col-xs-12" style={{ overflowX: "auto" }}>
                <table className={`${style.table} table table-responsive-sm `}>
                  <tbody>
                    <div className={`card ${style.card}`}>
                      <DataTable value={data} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: "50rem" }}>
                        <Column field="id" header="Id" sortable style={{ width: "25%" }}></Column>
                        <Column field="writer" header="Penulis" sortable style={{ width: "25%" }}></Column>
                        <Column field="title" header="Judul" sortable style={{ width: "25%" }}></Column>
                        <Column className={`content  ${style.content}  text-justify`} field="content" header="Content" sortable style={{ width: "70%" }}></Column>
                        <Column header="Action" body={actionBodyTemplate} exportable={false} style={{ minWidth: "16rem" }}></Column>
                      </DataTable>
                    </div>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <p></p>
      </div>
    </>
  );
};

export default Table;
