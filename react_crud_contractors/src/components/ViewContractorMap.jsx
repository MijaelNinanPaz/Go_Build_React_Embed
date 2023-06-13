import { useState } from "react";
import MapView from "./Maps/MapView";

const ViewContractorMap = (lng, lat, closeViewMapModal) => {

    return (
        
        <div className="bg-white p-8 rounded  h-5/6 overflow-y-auto relative">
            <h2 className="text-xl font-bold mb-4">Contractor Map</h2>
            <MapView lng={lng} lat={lat} />
            
            <div className="text-right">
                <button
                    className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                    onClick={closeViewMapModal}>
                    Cancelar
                </button>
            </div>
        </div>
    );
};

export default ViewContractorMap;
