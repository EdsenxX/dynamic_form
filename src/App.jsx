// Dependencies
import { useState } from "react";
import { v4 } from "uuid";
// Components
import Options from "./Options";
import Inputs from "./Inputs";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [inputs, setInputs] = useState([]);
  const [inputType, setInputType] = useState("");
  const [label, setLabel] = useState("");
  const [options, setOptions] = useState([]);
  const [option, setOption] = useState("");

  const handleSelectInput = (e) => {
    const { value } = e.target;
    if (value) {
      setShowForm(true);
    } else {
      setShowForm(false);
      return setShowMoreOptions(false);
    }
    setInputType(value);
    if (value !== "text") {
      setShowMoreOptions(true);
    } else {
      setShowMoreOptions(false);
    }
  };

  const addOption = () => {
    setOption("");
    setOptions([...options, option]);
  };

  const addInput = (e) => {
    e.preventDefault();
    setInputs([
      ...inputs,
      {
        type: inputType,
        label,
        id: v4(),
        options,
      },
    ]);
    resetForm();
  };

  const resetForm = () => {
    setShowForm(false);
    setShowMoreOptions(false);
    setInputType("");
    setLabel("");
    setOptions([]);
    setOption("");
  };

  const removeInput = (id) => {
    const filtered = inputs.filter(function (el) {
      return el.id !== id;
    });
    setInputs(filtered);
  };

  return (
    <div className="w-full flex justify-center items-center bg-gray-100 h-screen">
      <div className="w-10/12 flex gap-5">
        <Options
          handleSelectInput={handleSelectInput}
          inputType={inputType}
          showForm={showForm}
          addInput={addInput}
          setLabel={setLabel}
          showMoreOptions={showMoreOptions}
          option={option}
          setOption={setOption}
          addOption={addOption}
          options={options}
          inputs={inputs}
          removeInput={removeInput}
        />
        <Inputs inputs={inputs} />
      </div>
    </div>
  );
}

export default App;
