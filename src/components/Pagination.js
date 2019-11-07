import React from "react";

function Pagination({ callback }) {
  const [currentPage, setPage] = React.useState(1);

  React.useEffect(() => {
    callback(currentPage);
  });

  return (
    <div className="row mb-2">
      <ul className="pagination pagination-lg">
        <li className={`page-item ${currentPage <= 1 ? "disabled" : null}`}>
          <button className="page-link" tabIndex={-1} onClick={() => setPage(currentPage - 1)}>
            Önceki
          </button>
        </li>
        {currentPage <= 2 ? null : (
          <li className="page-item">
            <button className="page-link" tabIndex={-2} onClick={() => setPage(currentPage - 2)}>
              {currentPage - 2}
            </button>
          </li>
        )}
        {currentPage <= 1 ? null : (
          <li className="page-item">
            <button className="page-link" tabIndex={-1} onClick={() => setPage(currentPage - 1)}>
              {currentPage - 1}
            </button>
          </li>
        )}
        <li className="page-item active" aria-current="page">
          <button className="page-link">{currentPage}</button>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={() => setPage(currentPage + 1)}>
            {currentPage + 1}
          </button>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={() => setPage(currentPage + 2)}>
            {currentPage + 2}
          </button>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={() => setPage(currentPage + 3)}>
            {currentPage + 3}
          </button>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={() => setPage(currentPage + 1)}>
            Sonraki
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
