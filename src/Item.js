import { useEffect, useState } from 'react';
import config from './config.json';

function Item({currentItemName, serverToUse}) {

    const cdn = "https://goygoygoyfixeddata.surge.sh";
  const [questionInfo, setChoicesInfo] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

    const fetchChoices = async () => {
        try {
          if(!currentItemName)
          return;
        //   console.log("fetch choices  ")
          const choices = await fetch(`${serverToUse}/questions/${currentItemName}.info.json`);
          // console.log({ choices})
          const localData = await choices.json();
        //   console.log({localData})
          setChoicesInfo(localData);
          // console.log({choices})
        } catch (e) {
          console.log(e);
        }
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Form submitted`, {e});    
    }

    useEffect(() => {
        fetchChoices();
    },[currentItemName])

  return (
    <>
        <img className='mainImage' src={`${serverToUse}/questions/${currentItemName}.q.jpg`} alt="logo" />
        <div>
        <form onSubmit = {handleSubmit}>
            {questionInfo.choices &&
            questionInfo.choices.map((c, i) =>  
                <div key={i}>
                    <label> 
                        <input type="radio" name={c} value={c} onChange={(e) => setSelectedAnswer(e.target.value)}/>
                        {c}
                    </label>
                    <br/>
                </div>
            )
            }
            {/* <input onChange = {(e) => setName(e.target.value)} value = {name}></input> */}
            <br/>
            <button className='submitButton sideButton' disabled={true}> &lt; </button>
            <button className='submitButton' type ='submit' disabled={false}>SUBMIT</button>
            <button className='submitButton sideButton' disabled={true}> &gt; </button>
        </form>
        </div>
        {/* <h6>PDF File: </h6> */}
    </>
  )
}

export default Item;