// Components
import MisInputs from "./MisInputs";

export default function Options(props) {
  return (
    <div className="w-4/12 flex flex-col gap-5">
      <div className="rounded-xl shadow-lg bg-white p-7">
        <h2 className="text-xl mb-5 font-bold text-center">Agregar un input</h2>
        <div className="flex flex-col">
          <label htmlFor="">Tipo de input</label>
          <select
            name="selectInput"
            onChange={props.handleSelectInput}
            value={props.inputType}
          >
            <option value="">Selecciona una opcion...</option>
            <option value="text">Text</option>
            <option value="select">Select</option>
            <option value="radio">Radio</option>
          </select>
        </div>
        {props.showForm && (
          <form className="mt-5" onSubmit={props.addInput}>
            <div className="flex flex-col">
              <label htmlFor="">Label del campo</label>
              <input
                type="text"
                className="border-b border-black"
                onChange={(e) => props.setLabel(e.target.value)}
              />
            </div>
            {props.showMoreOptions && (
              <div className="flex flex-col mt-5">
                <p>Agregar opciones</p>
                <div className="flex gap-3">
                  <input
                    type="text"
                    className="border-b border-black"
                    value={props.option}
                    onChange={({ target }) => props.setOption(target.value)}
                  />
                  <button type="button" onClick={props.addOption}>
                    Agregar
                  </button>
                </div>
                <div className="flex flex-col">
                  {props.options.map((opt, idx) => (
                    <p key={idx}>{opt}</p>
                  ))}
                </div>
              </div>
            )}
            <button
              type="submit"
              className="bg-blue-500 rounded-lg text-white py-1 px-4 text-lg mt-5"
            >
              Crear
            </button>
          </form>
        )}
      </div>
      <MisInputs inputs={props.inputs} removeInput={props.removeInput} />
    </div>
  );
}
