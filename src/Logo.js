
import React from 'react';

const Logo = ({logo}) => {
    return (
      <div className="col-10 mx-auto text-center">
        <img src={logo} className="img-fluid" alt="logo" />
      </div>
    );
  }

  export default Logo;