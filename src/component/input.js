import "./input.css";

const Input =({text,results}) =>{
    return<div className="input-wrapper">
        <div className="results">
            <h1>{results}</h1>

        </div>
        <div className="text">
            <h1>{text}</h1>
        </div>
    </div>
}

export default Input;