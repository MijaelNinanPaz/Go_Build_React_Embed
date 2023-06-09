import { useSelector } from "react-redux";

const ContractorsTable = () => {
    const contractors = useSelector( state => state.contractors.list )

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
                    <th className="py-2 px-4 border-b">Address</th>
                </tr>
                </thead>
                <tbody>
                {contractors.map((contratista) => (
                    <tr key={contratista.id}>
                    <td className="py-2 px-4 border-b">{contratista.id}</td>
                    <td className="py-2 px-4 border-b">{contratista.name}</td>
                    <td className="py-2 px-4 border-b">{contratista.last_name}</td>
                    <td className="py-2 px-4 border-b">{contratista.phone_number}</td>
                    <td className="py-2 px-4 border-b">{contratista.direccion}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ContractorsTable
