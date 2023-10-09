import React, { useState } from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';



function SliderDetail() {
    const { year, index } = useParams();
    console.log(year, index);

  return (
      <>
      <div className="App-back">
        <h1>{`${year} 기수 프로젝트 ${Number(index) + 1}`}</h1>
            아아아잇
      </div>
      </>
  );
}

export default SliderDetail;