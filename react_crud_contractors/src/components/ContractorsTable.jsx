import { useDispatch, useSelector } from "react-redux";
import {
    deleteContractor,
    fetchContractors,
    // setContractors
} from "../features/contractors/contractorSlice";
// import { fetchData } from "../services/fetchData";
import {
    // Suspense,
    useEffect,
    useState } from "react";
import Modal from 'react-modal';
import ViewContractorMap from "./ViewContractorMap";
import UpdateContractor from "./UpdateContractor";

// const url = import.meta.env.VITE_URL_BACKEND_CONTRACTORS;
// const apiData = fetchData(url)

const ContractorsTable = () => {
    const [modalUpdateOpen, setModalUpdateOpen] = useState(false);
    const [modalViewMapOpen, setModalViewMapOpen] = useState(false);
    const [contractorToUpdate, setContractorToUpdate] = useState({});
    const dispatch = useDispatch();
    // dispatch(setContractors(apiData.read()));

    useEffect(() => {
        dispatch(fetchContractors());
    }, [dispatch])
    
    const contractors = useSelector( state => state.contractors.list )

    const delContractor = id => {
        dispatch(deleteContractor(id));
    }

    function openUpdateModal(contractor) {
        setContractorToUpdate(contractor)
        setModalUpdateOpen(true);
    }

    function closeUpdateModal() {
    setModalUpdateOpen(false);
    }

    function openViewMapModal(contractor) {
        setContractorToUpdate(contractor)
        setModalViewMapOpen(true);
    }

    function closeViewMapModal() {
        setModalViewMapOpen(false);
    }

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Contractors List</h2>
            <div className="overflow-x-auto">
            {/* <Suspense fallback={<div>Loading...</div>}> */}
                <table className="w-full table-auto">
                    <thead>
                    <tr className="bg-gray-200">
                        <th className="py-2 px-4 border-b">ID</th>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Last name</th>
                        <th className="py-2 px-4 border-b">Phone Number</th>
                        <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b">Address</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contractors.map((contractor) => (
                        <tr key={contractor.id}>
                            <td className="py-2 px-4 border-b">{contractor.id}</td>
                            <td className="py-2 px-4 border-b">{contractor.name}</td>
                            <td className="py-2 px-4 border-b">{contractor.last_name}</td>
                            <td className="py-2 px-4 border-b">{contractor.phone}</td>
                            <td className="py-2 px-4 border-b">{contractor.mail}</td>
                            <td className="py-2 px-4 border-b">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={()=>openViewMapModal(contractor)}>
                                    Map
                                </button>
                            </td>
                            <td className="py-2 px-4 border-b">
                                <button
                                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={()=>openUpdateModal(contractor)}>
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => delContractor(contractor.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <Modal
                    isOpen={modalUpdateOpen}
                    onRequestClose={closeUpdateModal}
                >
                    <UpdateContractor
                        closeUpdateModal={closeUpdateModal}
                        contractor={contractorToUpdate}
                    />
                </Modal>
                <Modal
                    isOpen={modalViewMapOpen}
                    onRequestClose={closeViewMapModal}
                >
                    <ViewContractorMap
                        closeViewMapModal={closeViewMapModal}
                        lng={contractorToUpdate.address?.coordinates[0]}
                        lat={contractorToUpdate.address?.coordinates[1]}
                    />
                </Modal>
            {/* </Suspense> */}
            </div>
        </div>
    );
};

export default ContractorsTable
