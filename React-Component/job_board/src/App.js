import {useState,useRef, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import JobPosting from './JobPosting';

const PAGE_SIZE=6;
function App() {
  const [fetchingJobDetails,setFetchingJobDetails]=useState(false);
  const [page,setPage]=useState(0);
  const [jobIds, setJobIds]=useState(null);
  const [jobs,setJobs]=useState([]);
  const isMounted=useRef(true);


  useEffect(()=>{
    isMounted.current=true;

    return ()=>{
      isMounted.current=false;
    }
  },[]);


  useEffect(()=>{
    fetchJobs(page);
  },[page]);


  async function fetchJobIds(currPage) {
    let jobs=jobIds;
    if(!jobs){
      const res= await fetch(
        'https://hacker-news.firebaseio.com/v0/jobstories.json',
      );

      jobs=await res.json();
      
      if(!isMounted){
        return;
      }

      setJobIds(jobs);

    }

    const start= currPage* PAGE_SIZE;
    const end= start+PAGE_SIZE;
    return jobs.slice(start, end);
    
  }

  
  async function fetchJobs(currPage) {
    const jobIdsForPage=await fetchJobIds(currPage);

    setFetchingJobDetails(true);

    const jobsForPage= await Promise.all(
      jobIdsForPage.map((jobId)=>
        fetch(
          `https://hacker-news.firebaseio.com/v0/item/${jobId}.json`
        ).then((res)=>res.json()),
      ),
    );

    if(!isMounted.current){
      return;
    }

    setFetchingJobDetails(false);

    const combinedJobs=[...jobs,...jobsForPage];
    setJobs(combinedJobs);
  }

  console.log(jobs);
  return (
    <div className="App">
     <h1 className="title">Hacker New Jobs Board</h1>
     {
      jobIds==null ? (
        <p className='loading'>Loading</p>
      ):(
        <div>
          <div className='jobs' role='list'>
            {jobs.map((job)=>(
              <JobPosting key={job.id} {...job}/>
            ))}
          </div>
          {
            jobs.length>0 &&
            page*PAGE_SIZE+PAGE_SIZE<
              jobIds.length &&(
                <button
                  className='load-more-button'
                  disabled={fetchingJobDetails}
                  onClick={()=>setPage(page+1)}>
                    {
                      fetchingJobDetails ? 'Loading....' : 'Load More jobs'
                    }
                </button>
              )

          }
        </div>
      )
     }
    </div>
  );
}

export default App;
