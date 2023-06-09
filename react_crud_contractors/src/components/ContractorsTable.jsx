import { useDispatch, useSelector } from "react-redux";
import { fetchContractors } from "../features/contractors/contractorSlice";
import { useEffect } from "react";

const ContractorsTable = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchContractors())
    }, [dispatch])
    
    const contractors = useSelector( state => state.contractors.list )

    console.log(contractors)

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Contractors List</h2>
            <div className="overflow-x-auto">
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
                    <td className="py-2 px-4 border-b">{contractor.address}</td>
                    <td className="py-2 px-4 border-b">Editar/Eliminar</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ContractorsTable
