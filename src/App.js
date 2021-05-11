import React from 'react';
import {ToastContainer } from 'react-toastify';
import MainBuilder from './Containers/MainBuilder/MainBuilder';
import 'react-toastify/dist/ReactToastify.css';
// import {toast,Zoom,Bounce} from 'react-toastify';
// import SortBuilder from './Containers/SortBuilder/SortBuilder'
// import SortController from './Components/SortController/SortController';
const App=()=>{
  return (
    <div >
      <>
        <ToastContainer  
          position="top-center" 
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover
          draggable={false}
          />
      </>
        <MainBuilder /> 
    </div>
      
  )
}

export default App;
