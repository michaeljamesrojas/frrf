import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import config from './config.json';
import Main from "./Main"


// //First install react router
// npm install react-router-dom

// //Import it from your react index.js file
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// //Rap your app with BrowserRouter
// <BrowserRouter>
// 	<App />  
// </BrowserRouter>

// //Define you Routes in your app and import it on the top
// <Routes>
//   <Route path="/" element={<Home />} />
//   <Route path="/create" element={<Create />} />
//   <Route path="/blogs/:id" element={<BlogDetails />} />
//   <Route path="*" element={<NotFound />} />
// </Routes>

// //Now you are all set. You can use this with
// <Link to="/create" element={Create}/>

function App() {
  const cdn = "https://goygoygoyfixeddata.surge.sh";
  const serverToUse = window.location.href.includes('localhost')? config.serverURLLocal: config.serverURL;
  const [questionList, setQuestionList] = useState([]);

  const fetchCurrentUser = async () => {
    try {
      console.log("fetch user")
      const response = await fetch(`${serverToUse}/test.json`);
      const localData = await response.json();
      setQuestionList(localData);
    } catch (e) {
      console.log(e);
    }
  }
  
  useEffect(() => {
     fetchCurrentUser();
  },[])
  
  return (
    <div>
        <Main />
    </div>
  );
}

export default App;