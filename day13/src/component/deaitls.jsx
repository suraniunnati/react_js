import { useState } from "react";

function Deaitls() {
    const [state, setState] = useState({
        name: "",
        cource: "",
        hobby: [""],
        language: [""],
    });
    const [arr, setArr] = useState([]);

    const handle = (e) => {
        const { name, value, dataset } = e.target;
        if(name=="hobby"){
            const arr=[...state.hobby]
            arr[dataset.index]=value
            setState({...state,[name]:arr})
        }
        else if(name=="language"){
            const arr=[...state.language]
            arr[dataset.index]=value
            setState({...state,[name]:arr})
        }
        else {
            setState({ ...state, [name]: value });
        }
    };

    const SubmitClick = (e) => {
        e.preventDefault();
        setArr([...arr, state]);
        console.log("Form Submitted:", state);

        setState({
        name: "",
        cource: "",
        hobby: [""],
        language: [""],
        })
    };

    const addHobby = () => {
        setState({ ...state, hobby: [...state.hobby, ""] });
    };

    const addLanguage = () => {
        setState({ ...state, language: [...state.language, ""] });
    };

    return (
        <>
            <form onSubmit={SubmitClick}>
                <h2>STUDENT INFORMATION</h2>
                <input type="text" placeholder="Student Name" name="name" value={state.name} onChange={handle} />
                <br />
                <input type="text" placeholder="Course" name="cource" value={state.cource} onChange={handle}/>
                <br />
                <label htmlFor="">Hobby : </label>
                <input type="button" value="Add" onClick={addHobby} id="add"/>

                {state.hobby.map((el, index) => {
                   return <div key={index}>
                        <input type="text" name="hobby" data-index={index} value={el} onChange={handle}/><br />
                    </div>
                })}

                <label htmlFor="">language : </label>
                <input type="button" value="Add" onClick={addLanguage} id="add"/>

                {state.language.map((el, index) => {
                    return<div key={index}>
                        <input type="text" name="language" data-index={index} value={el} onChange={handle}/><br />
                    </div>
                })}
                <input type="submit" value="Submit" id="submit"/>
            </form>
        </>
    );
}

export default Deaitls;
