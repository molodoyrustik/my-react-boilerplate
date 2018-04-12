import React from 'react';

import MainLayout from '../layouts/main-layout.jsx';

import FirstRow from '../sections/index/first-row';

const Index = (props) => {
  return (
    <MainLayout>
      <div className="index">
        <FirstRow/>
      </div>
    </MainLayout>
  )
}

export default Index;
