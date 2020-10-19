import React from "react";
import "../assets/css/ActiveState.css";


function ActiveState() {
  return (
    <nav aria-label="...">
      <ul class="pagination pagination-lg">
        <li class="page-item active" aria-current="page">
          <span class="page-link">
            1<span class="sr-only">(current)</span>
          </span>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            2
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            3
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default ActiveState;
