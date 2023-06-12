import { useState } from "react";
import MapView from "./Maps/MapView";

const ViewContractorMap = (lng, lat) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
        <button
            className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
            onClick={() => setShowModal(true)}>
            Map
        </button>

        {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="fixed inset-0 bg-black opacity-50"></div>
                <div className="bg-white p-8 rounded shadow-lg w-2/3 h-5/6 overflow-y-auto relative">
                    <h2 className="text-xl font-bold mb-4">Contractor Map</h2>
                    <MapView lng={lng} lat={lat} />
                    
                    <div className="text-right">
                        <button
                            className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                            onClick={() => setShowModal(false)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )}
        </div>
    );
};

export default ViewContractorMap;
