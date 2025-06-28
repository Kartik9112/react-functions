import React from 'react';
import ChildFile from './ChildFile';

const ParentFile = ({ name }) => {
  return (
    <div>
      ParentFile
      <ChildFile name={name} />
    </div>
  );
};

export default ParentFile;
