import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import config from './config.json';
import Item from "./Item"

function Main() {
  const cdn = "https://goygoygoyfixeddata.surge.sh";
  const serverToUse = window.location.href.includes('localhost')? config.serverURLLocal: config.serverURL;
  const [currentItem, setCurrentItem] = useState(1);  
  const [questionList, setQuestionList] = useState([]);

  const fetchQuestionsList = async () => {
    try {
    //   console.log("fetch questions")
      const response = await fetch(`${serverToUse}/questionUnique.json`);
      const localData = await response.json();
      setQuestionList(localData);
    } catch (e) {
      console.log(e);
    }
  }
  
  useEffect(() => {
     fetchQuestionsList();
  },[])
  
  return (
    <div className="App">
        <h4>
          Question {currentItem + 1}/{questionList.length}
        </h4>
      <header className="App-header">
        {questionList.length > 0 && 
          <Item currentItemName={questionList[currentItem]} serverToUse={serverToUse} key={Date.now()}></Item>
        }
      </header>
    </div>
  );
}

export default Main;