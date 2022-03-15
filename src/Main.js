import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./App.css";
import { LineChart, TableComponent } from "./components";

function Main() {
  const [loader, setLoader] = useState(false);
  const [newsdata, setNewsData] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const { id } = useParams();
  const page = id !== undefined ? id : 1;

  useEffect(() => {
    (async () => {
      setLoader(true);
      await axios
        .get(`https://hn.algolia.com/api/v1/search?tags=story&page=${page}`)
        .then((res) => {
          setNewsData(res.data.hits);
          setTotalPages(res.data.nbPages);
          setLoader(false);
        });
    })();
  }, [page]);

  return (
    <Container>
      <TableComponent data={newsdata} loader={loader} />

      <div style={{ borderBottom: "3px solid #ff742b", align: "right" }}>
        {loader ? (
          <Spinner animation="border" variant="warning" />
        ) : page > 1 ? (
          <Link
            to={`/page/${parseInt(page) - 1}`}
            style={{ color: "#ff742b", fontWeight: "bold" }}
          >
            Prev
          </Link>
        ) : (
          <span>Prev</span>
        )}

        {loader ? null : (
          <span style={{ marginLeft: 5, marginRight: 5 }}> | </span>
        )}

        {loader ? null : totalPages - 1 > page ? (
          <Link
            to={`/page/${parseInt(page) + 1}`}
            style={{ color: "#ff742b", fontWeight: "bold" }}
          >
            Next
          </Link>
        ) : (
          <span>Next</span>
        )}
      </div>

      {loader ? (
        <span>charts loading...</span>
      ) : (
        newsdata !== null && <LineChart data={newsdata} />
      )}

      <br />
    </Container>
  );
}

export default Main;
