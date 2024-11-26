import { useState } from "react";

function App() {
    let [text, setText] = useState("");
    let [vegetables, setVegetables] = useState([]);
    let [checkedVegetables, setCheckedVegetables] = useState([]);

    function addVegetables(e) {
        e.preventDefault();
        if (text.trim() === "") return; // Bo'sh matnni qo'shmaslik
        setVegetables([...vegetables, text]);
        setText("");
    }

    function deleteVegetables(index) {
        setVegetables(vegetables.filter((_, i) => i !== index));
    }

    function checkVegetables(index) {
        const checkedItem = vegetables[index];
        setCheckedVegetables([...checkedVegetables, checkedItem]);
        setVegetables(vegetables.filter((_, i) => i !== index));
    }

    return (
        <div className="container mx-auto mt-10 max-w-md p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <h1 className="text-center text-2xl font-bold text-gray-700 mb-6">Sabzavotlar ro'yxati</h1>
            
            <form
                className="flex items-center gap-4 mb-6"
                onSubmit={addVegetables}
            >
                <input
                    type="text"
                    placeholder="Sabzavot nomini kiriting"
                    className="flex-1 px-4 py-2 border rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
                >
                    ➕ Qo'shish
                </button>
            </form>

            <div>
                <p className="text-lg font-semibold text-gray-700">Sabzavotlar</p>
                <ol className="list-decimal list-inside mt-2 space-y-2">
                    {vegetables.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-center justify-between bg-gray-50 p-2 rounded-md shadow-sm border"
                        >
                            <span className="text-gray-700">{item}</span>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => deleteVegetables(index)}
                                    className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                                >
                                    🗑 O'chirish
                                </button>
                                <button
                                    onClick={() => checkVegetables(index)}
                                    className="px-2 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                                >
                                    ✅ Olish
                                </button>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>

            <div className="mt-6">
                <p className="text-lg font-semibold text-gray-700">Olingan sabzavotlar</p>
                <ol className="list-decimal list-inside mt-2 space-y-2">
                    {checkedVegetables.map((item, index) => (
                        <li
                            key={index}
                            className="bg-green-50 p-2 rounded-md shadow-sm border text-gray-700"
                        >
                            {item}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default App;
