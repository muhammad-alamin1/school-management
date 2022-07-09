import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchQuery({ handleSearch, searchBy }) {
  return (
    <div className="row my-2" id="onlineAdmissionInformation">
      <div className="col-md-6">
        <label for="class">Search by {searchBy}</label>
        <input
          type="search"
          onChange={handleSearch}
          className="form-control"
          placeholder="Search"
        />
        <div className="text-end">
          <button type="btn" className="my-2" id="searchBtn">
            <FontAwesomeIcon icon={faSearch} style={{ marginRight: "7px" }} />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
