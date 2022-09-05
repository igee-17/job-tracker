import { useEffect } from "react";
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import { getAllJobs } from "../features/allJobs/allJobs";
import PageButtonContainer from "./PageButtonContainer";

const JobsContainer = () => {
  const {
    jobs,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  // GET JOBS WHEN OTHER INPUTS ARE CHANGED
  useEffect(() => {
    dispatch(getAllJobs());
  }, [page, searchStatus, searchType, sort]);

  // GET JOBS WHEN SEARCH INPUT IS CHANGED
  useEffect(() => {
    const delaySearch = setTimeout(() => {
      dispatch(getAllJobs());
    }, 1000);

    return () => clearTimeout(delaySearch);
  }, [search]);
  if (isLoading) {
    return (
      <Wrapper>
        <h5>jobs info</h5>
        <Loading />
      </Wrapper>
    );
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} {jobs.length > 1 ? "jobs" : "job"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageButtonContainer />}
    </Wrapper>
  );
};

export default JobsContainer;
