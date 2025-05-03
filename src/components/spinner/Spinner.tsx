import {ClipLoader} from "react-spinners";
import "./spinner.css";
const Spinner = () => {
    return (
        <div className={"loading-spinner"}>
            <ClipLoader size={50} color={"#000000"}/>
        </div>
    );
};

export default Spinner;