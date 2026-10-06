// ItemLista.jsx
function ItemLista({ texto, comprado, onAlternar, onRemover }) {
  return (
    <div className="flex justify-between items-center border border-gray-200 rounded-lg p-3 mb-2">
      {/* O span agora reage ao clique e ganha a classe condicional */}
      <span 
        onClick={onAlternar} 
        className={`cursor-pointer select-none flex-1 ${
          comprado ? "line-through text-gray-400" : "text-gray-800"
        }`}
      >
        {texto}
      </span>
      
      <button onClick={onRemover} className="text-red-600 text-sm font-medium hover:underline ml-2">
        Remover
      </button>
    </div>
  );
}

export default ItemLista;
