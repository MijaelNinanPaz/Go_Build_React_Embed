/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { putContractor } from "../features/contractors/contractorSlice";
import Maps from "./Maps/Map";

const UpdateContractor = ({ contractor, closeUpdateModal }) => {
    console.log(contractor);
    const [contractorData, setContractorData] = useState({
        id: contractor.id,
        name: contractor.name,
        last_name: contractor.last_name,
        phone: contractor.phone,
        mail: contractor.mail,
    });

    const [address, setAddress] = useState(null);

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
            address,
        };
        console.log(newContractor);
        dispatch(putContractor(newContractor));
        closeUpdateModal();
    };

    return (
        <div className="bg-white p-8 rounded  h-5/6 overflow-y-auto relative">
            <h2 className="text-xl font-bold mb-4">Edit</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="name">
                        Name:
                    </label>
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
                        Last name:
                    </label>
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
                    <Maps setAddress={setAddress} />
                </div>
                <div className="text-right">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        type="submit">
                        Guardar
                    </button>
                    <button
                        className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                        onClick={closeUpdateModal}>
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateContractor;
