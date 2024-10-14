import React,{useEffect,useState} from 'react'
import Pagination from './Pagination';

const Table = () => {
    const [data]=useState(Array.from(Array(100).keys(),(n)=>n+1));
    const [filterData, setFilterData]=useState(data);
    const [current, setCurrent]=useState(1);
    const [perPage, setPerpage]=useState(5);
    const totalItems=100;

    useEffect(()=>{
        const temp=data.slice((current-1)*perPage,current* perPage);
        setFilterData(temp);
    },[perPage]);

    const onChange =({start, end, current})=>{
        const temp=data.slice(start, end);
        setFilterData(temp);
        setCurrent(current);
    }
  return (
    <>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            {filterData.map((val,i)=>(
                <tr key={`${i}_${val}`}>
                    <td>{i}</td>
                    <td>{val}</td>
                </tr>
            ))}
        </tbody>
      </table>
      <Pagination
      current={current}
      totalitems={totalItems}
      perPage={perPage}
      onChange={onChange}
      changePerPage={changePerPage}
      />
    </>
  );
}

export default Table