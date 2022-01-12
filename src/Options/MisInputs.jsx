export default function componentName(props) {
  return (
    <div className="rounded-xl shadow-lg bg-white p-7 h-3/6 overflow-auto">
      <p className="text-xl font-bold text-center mb-2">Mis Inputs</p>
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
    </div>
  );
}
