
function Input({onChange, value, placeholder, type}) {
    return (
        <div className="w-full sm:w-1/2 px-1 mb sm:mb-0">
            <label className="block px-1 uppercase text-xs text-gray-700 font-bold tracking-wide mb-2">First Name</label>
            <input
              type={type}
              className="block py-2 px-4 rounded text-gray-700 w-full border border-yellow-500" // Pastel yellow border
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            />
        </div>
    );
};

export default Input
