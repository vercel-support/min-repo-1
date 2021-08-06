import * as React from 'react';
import { useMeQuery } from 'generated';

const Index = () => {
  const { data, loading, refetch } = useMeQuery();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col items-start justify-center w-full">
      <div>
        {data?.findManyUser.map((user) => (
          <pre key={user.id}>
            <div>---------------</div>
            <div>{user.name}</div>
            <div>{user.email}</div>
          </pre>
        ))}
      </div>
      <button
        className="p-4 mt-1 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-700"
        onClick={() => refetch()}
      >
        Refetch
      </button>
    </div>
  );
};

export default Index;
