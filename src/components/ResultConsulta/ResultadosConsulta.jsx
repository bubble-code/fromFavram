import PropTypes from "prop-types";


export const ResultadosConsulta = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="text-center mt-4">
        <i className="fas fa-exclamation-triangle text-3xl text-yellow-500 animate-bounce"></i>
        <p className="mt-2 text-gray-600">No hay resultados disponibles.</p>
      </div>
    );
  }
  return (
    <div>
      {data.map((item, key) => (
        <div key={key + 2} className="my-4">
          <p className="font-bold italic">
            {item.section_name}
            <i className="fas fa-exclamation-circle ml-2 text-red-500"></i>
          </p>
          <div className="text-justify">{item.sentence_text}</div>
        </div>
      ))}
    </div>
  );
};

ResultadosConsulta.propTypes = {
  data: PropTypes.array
};
