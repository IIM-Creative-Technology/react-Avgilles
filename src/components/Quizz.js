import React, {useState} from "react";



const TableBody = (props, {question, options}) => {
        
    const [answers, setAnswer] = useState(options);

    const Ligne = props.infoData.map((data, index) => {
        let arrayLenght = props.infoData.length + 1;
        var randomAnswers = data.answers.sort(() => 0.5 - Math.random()).slice(0, arrayLenght);

        return(
            
                <section key={index}>
                    {/* <td>{data.id}</td> */}
                    <pre>{data.id}. {data.question}</pre>
                
                    {randomAnswers.map((value, i) => {
                        return (
                            <>
                                 <input type="radio" id={"answers_"+ data.id +"_"+i} name={"answers_"+ data.id} value={value}></input>
                                <label for={"answers_"+ data.id +"_"+i}>{value}</label><br></br>
                            </>
                        )
                    })}

                    
                    {/* <td>{data.correct}</td> */}
                </section>
             
            
        );
    });

    return <tbody>{Ligne}</tbody>;
}



const Quizz = (props) => {
    const { infoData } = props;
        return(
            <table border="1" align="center">
                <TableBody infoData={infoData} />
            </table>
        )
    }

export default Quizz;