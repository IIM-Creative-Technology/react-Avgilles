import React, {useState, useEffect} from "react";
import '../sass/component/_cards.scss';


const QuizzQuestions = React.memo((props, checked, onchange) => {
    const [count, setCount]= useState(0);
    const [valid, setValid]= useState(false);
    useEffect(() =>{
        document.querySelector('#score').innerHTML = `Vous avez ${count} bonne réponse !`;
    });
    
    const Question = props.infoData.map((data, index) => {
        let arrayLenght = props.infoData.length + 1;
        var randomAnswers = data.answers.sort(() => 0.5 - Math.random()).slice(0, arrayLenght);
       
     
        return(
            
                <fieldset key={index}>
                    {/* <td>{data.id}</td> */}
                    <legend>{data.id}. {data.question}</legend>
                
                    {randomAnswers.map((value, i) => {
                        return (
                            <>
                                <label >
                                    <input onClick={() => (value === data.correct) ? (setCount(count + 1)):setCount(count - 1)}
                                     className={(value === data.correct) ? "radioButton Valid": "radioButton" } type="radio" 
                                     id={"answers_"+ data.id +"_"+i} name={"answers_"+ data.id}
                                     value={value}></input>

                                    {value}
                                </label><br/>
                            </>
                        )
                    })}

                    
                    {/* <td>{data.correct}</td> */}
                </fieldset>
             
            
        );
    });

    return <form>{Question}</form>;
})

function ShowResult() {
    document.querySelector('#score').style.display = "block";
    document.styleSheets[0].insertRule('.Valid::after { display: block !important; }', 0);
} 



const Quizz = (props) => {
    const { infoData } = props;

    const [question, setQuestions] = useState([]);
    useEffect(()=>{
        setQuestions(infoData)
    })
        return(
            <section border="1" align="center">
                <QuizzQuestions infoData={infoData} />
                <hr/>
                <button onClick={ShowResult}>Voir mon score</button>
                <h3 id="score" style={{display: "none"}}></h3>
            </section>
        )
    }

export default Quizz;