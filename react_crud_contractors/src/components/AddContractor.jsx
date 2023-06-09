import { useState } from "react";
import { useDispatch } from "react-redux";
import { postContractor } from "../features/contractors/contractorSlice";
import Maps from "./Maps/Map"

const AddContractor = () => {
    const [showModal, setShowModal] = useState(false);
    const [contractorData, setContractorData] = useState({
        name: "",
        last_name: "",
        phone: "",
        mail: ""
    });
    const [address, setAddress] = useState(null)
    // const loading = useSelector( state => state.contractors.loadingPost )

    const handleInputChange = e => {
        setContractorData({
        ...contractorData,
        [e.target.name]: e.target.value,
        });
    };
    
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const newContractor = {
            ...contractorData,
            address
        }
        console.log(newContractor);
        dispatch(postContractor(newContractor));

        setShowModal(false);
    };

    return (
        <div>
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setShowModal(true)}>
            Add Contractor
        </button>

        {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="fixed inset-0 bg-black opacity-50"></div>
                <div className="bg-white p-8 rounded shadow-lg w-2/3 h-5/6 overflow-y-auto relative">
                    <h2 className="text-xl font-bold mb-4">Add Contractor</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="name">Name:</label>
                            <input
                                className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700"
                                type="text"
                                id="name"
                                name="name"
                                value={contractorData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="last_name">
                                Last name:</label>
                            <input
                                className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700"
                                type="text"
                                id="last_name"
                                name="last_name"
                                value={contractorData.last_name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="phone">
                            Phone number:
                            </label>
                            <input
                            className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700"
                            type="text"
                            id="phone"
                            name="phone"
                            value={contractorData.phone}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="mail">
                            Email:
                            </label>
                            <input
                            className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700"
                            type="email"
                            id="mail"
                            name="mail"
                            value={contractorData.mail}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="address">
                            Address:
                            </label>
                            <Maps setAddress={setAddress}/>
                        </div>
                        <div className="text-right">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                type="submit">
                                Guardar
                            </button>
                            <button
                                className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                                onClick={() => setShowModal(false)}>
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )}
        </div>
    );
};

export default AddContractor;
