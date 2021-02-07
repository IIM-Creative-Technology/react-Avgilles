import React, {useState} from "react";



const Radio = React.memo(function Radio({
    item,
    checked,
    onChange
  }) {
    console.log("rendering", item.answers);
    return (
      <label>
        <input
          type="radio"
          value={item.id}
          checked={checked}
          onChange={onChange}
          />
          {item.answers}
      </label>
    );
  });

  const RadioAnswers = ({ items, value, onChange }) => (
    <div>
      {items.map(item => (
        <Radio
          item={item}
          key={item.id}
          checked={item.id === value}
          onChange={onChange}
        />
      ))}
    </div>
  );


// const TableBody = (props, {question, options, selected}) => {

    
        
//     const [answers, setAnswer] = useState(options);

//     const Ligne = props.infoData.map((data, index) => {
//         let arrayLenght = props.infoData.length + 1;
//         var randomAnswers = data.answers.sort(() => 0.5 - Math.random()).slice(0, arrayLenght);

//         return(
            
//                 <fieldset key={index}>
//                     {/* <td>{data.id}</td> */}
//                     <legend>{data.id}. {data.question}</legend>
                
//                     {randomAnswers.map((value, i) => {
//                         return (
//                             <>
//                                  <input type="radio" id={"answers_"+ data.id +"_"+i} name={"answers_"+ data.id} value={value}></input>
//                                 <label for={"answers_"+ data.id +"_"+i}>{value}</label><br></br>
//                             </>
//                         )
//                     })}

                    
//                     {/* <td>{data.correct}</td> */}
//                 </fieldset>
             
            
//         );
//     });

//     return <form>{Ligne}</form>;
// }

// const Quizz = (props) => {
//     const { infoData } = props;
//         return(
//             <section border="1" align="center">
//                 <TableBody infoData={infoData} />
//             </section>
//         )
//     }

const Quizz = ({ items }) => {
    const [value, setValue] = React.useState(items[0].id);
    const [v, setV] = React.useState(items[1].id);
    const onChange = React.useCallback(
      e => setValue(e.target.value),
      []
    );
    const onOther = React.useCallback(
      e => setV(e.target.value),
      []
    );
    return (
      <div>
        <RadioAnswers
          items={items}
          value={value}
          onChange={onChange}
        />
        <RadioAnswers
          items={items}
          value={v}
          onChange={onOther}
        />
      </div>
    );
  };

export default Quizz;