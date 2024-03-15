import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../features/dataSlice';
import './DataDisplayComponent.css'; // Import CSS file

const DataDisplayComponent = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.data);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchData());
    }, 5000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="data-display">
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p className="error">Error: {error}</p>}
      {status === 'succeeded' && (
        <ul className="user-list">
          <li>
            <span className="label">Name:</span> <span>{data.name}</span> <br />
            <span className="label">Email:</span> <span>{data.email}</span> <br />
            <span className="label">Phone:</span> <span>{data.phone}</span> <br />
            <span className="label">Website:</span> <span>{data.website}</span> 
          </li>
        </ul>
      )}
    </div>
  );
};

export default DataDisplayComponent;
