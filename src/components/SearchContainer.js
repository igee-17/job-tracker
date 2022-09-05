import { useEffect } from "react";
import Wrapper from "../assets/wrappers/SearchContainer";
import { FormRow, FormRowSelect } from ".";
import { useSelector, useDispatch } from "react-redux";
import { clearFilters, handleChange } from "../features/allJobs/allJobs";

const SearchContainer = () => {
  const dispatch = useDispatch();
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);

  const handleSearch = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  const clearSearch = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };

  return (
    <Wrapper>
      <form action="" className="form">
        <h4>search</h4>
        <div className="form-center">
          {/* SEARCH INPUT */}
          <FormRow
            labelText="job position"
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
          />
          {/* SEARCH STATUS */}
          <FormRowSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
          />
          {/* SEARCH TYPE */}
          <FormRowSelect
            labelText="type"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOptions]}
          />
          {/* SORT */}
          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          {/* CLEAR BUTTON */}
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={clearSearch}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
