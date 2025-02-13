import "./Loader.scss";
import {classNames} from "shared/lib/classNames/classNames";

interface LoaderProps {
    className?: string
}

const Loader = ({className}: LoaderProps) => {
    return (
        <div className={classNames("lds-roller", {}, [className])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Loader;
