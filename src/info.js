import React from 'react';

const Info = ({title,copyright,date}) => {
    return (
      <div className="mx-auto col-md-8">
      <p className="mt-2 text-left text-white"><span className="text-muted">Title: </span>{title}</p>
      <p className="mt-2 text-left text-white"><span className="text-muted">Copyright: </span>{copyright}</p>
      <p className="mt-2 text-left text-white"><span className="text-muted">Date: </span>{date}</p>
      </div>
    );
  }

  export default Info;