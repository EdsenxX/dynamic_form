import React from "react";

export default function Inputs(props) {
  const setInput = (input) => {
    switch (input.type) {
      case "text":
        return (
          <div className="flex flex-col" key={input.id}>
            <label htmlFor={input.id}>{input.label}</label>
            <input
              type={input.type}
              id={input.id}
              className="border-b border-black"
            />
          </div>
        );
      case "select":
        return (
          <div className="flex flex-col" key={input.id}>
            <label htmlFor={input.id}>{input.label}</label>
            <select id={input.id} className="border-b border-black">
              {input.options.map((opt, idx) => (
                <option key={idx} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        );
      case "radio":
        return (
          <div key={input.id} className="flex flex-col">
            <label>{input.label}</label>
            <div className="">
              {input.options.map((opt, idx) => (
                <div className="">
                  <input key={idx} type="radio" name={input.id} value={opt} />
                  <label>{opt}</label>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        break;
    }
  };

  return (
    <div className="w-7/12 rounded-xl shadow-lg bg-white p-7">
      <div className="flex flex-col gap-5">
        {props.inputs.map((input) => setInput(input))}
      </div>
    </div>
  );
}
