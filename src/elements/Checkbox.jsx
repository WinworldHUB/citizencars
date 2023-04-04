import { useState } from "react";

const Checkbox = (props) => {
  const { title, onChecked, className = "" } = props;
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <input
        className=""
        type="checkbox"
        name=""
        id={title.replaceAll(" ", "")}
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
          onChecked?.(!isChecked);
        }}
      />
      <span
        className={`clickable ${className}`}
        onClick={() => {
          setIsChecked(!isChecked);
          onChecked?.(!isChecked);
        }}
      >
        &nbsp;{title}
      </span>
    </>
  );
};

export default Checkbox;
