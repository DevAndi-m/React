import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FetchApi() {
  const [state, setState] = useState({
    data: {},
    error: null,
  });

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1') 
      .then((res) => setState({ data: res.data, error: null }))
      .catch((err) => setState({ data: {}, error: err }));
  }, []);

  return (
    <div>
      {state.error ? (
        <p>Error: {state.error.message}</p>
      ) : (
        <div>
          {/* Access state data here */}
          <p>Title: {state.data.id}</p>
          <p>Body: {state.data.userId}</p>
        </div>
      )}
    </div>
  );
}

export default FetchApi;