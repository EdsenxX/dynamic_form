import React from "react";

export default function Options(props) {
  return (
    <div className="w-4/12 rounded-xl shadow-lg bg-white p-7">
      <h2 className="text-xl mb-5 font-bold">Agregar un input</h2>
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
      <section className="mt-5">
        <p className="text-xl font-bold">Mis Inputs</p>
        {props.inputs.map((input) => (
          <div key={input.id} className="flex flex-col mb-3">
            <p>
              <span className="font-bold text-lg mr-3">Label:</span>
              {input.label}
            </p>
            <p>
              <span className="font-bold text-lg mr-3">id:</span>
              {input.id}
            </p>
            <p>
              <span className="font-bold text-lg mr-3">type:</span>
              {input.type}
            </p>
            <button
              className="mt-2 text-red-500"
              type="button"
              onClick={() => props.removeInput(input.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
