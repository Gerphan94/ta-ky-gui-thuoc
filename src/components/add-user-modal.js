import { useState } from "react";


function AddUserModal({ show, setShow, users }) {
    const khoas = [
        { id: 'nt', name: "Nhà thuốc" },
        { id: 'kc', name: "Khoa khám bệnh" },
        { id: 'cc', name: "Khoa cấp cúu" },
        { id: 'ccq7', name: "Khoa cấp cúu Q7" },
    ]

    const [sltKhoaId, setSltKhoaId] = useState('');

    if (!show) return null


    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto px-6 py-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">Thêm User</h2>

                    <div className=" py-2">
                        <div className="grid grid-cols-2 gap-3 text-left w-1/2">
                            <label className="font-semibold">User name:</label>
                            <select className="px-2 py-1 border w-96">
                                <option value="" hidden selected>-- Chọn User --</option>
                                {users.map((user) => (
                                    <option key={user.id} value={user.id}>{user.username} - {user.fullname}</option>
                                ))}
                            </select>
                            <label className="font-semibold">Khoa / Phòng ban:</label>
                            <select className="px-2 py-1 border w-96"
                               
                            >
                                <option value="" hidden selected>-- Chọn bộ phân --</option>
                                {khoas.map((khoa) => (
                                    <option key={khoa.id} value={khoa.id}>{khoa.name}</option>
                                ))}
                            </select>
                        </div>

                    </div>
                    <div className="flex justify-center gap-4 pt-4 text-sm">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-1.5 rounded">
                            Xác nhận
                        </button>
                        <button
                            onClick={() => setShow(false)}
                            className="border border-red-600 text-red-600 hover:bg-red-50 px-8 py-1.5 rounded"
                        >
                            Đóng
                        </button>
                    </div>
                </div>


            </div>
            <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>

        </>

    )

}


export default AddUserModal