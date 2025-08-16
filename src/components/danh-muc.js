import { useEffect, useState } from "react";
import { usersNhaThuoc, usersCC, usersKKB } from "../data/user-data";
import UserTable from "./danh-muc-user-table";

function DanhMuc() {

    const [userData, setUserData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const fullUsers = [...usersNhaThuoc, ...usersCC, ...usersKKB];

    const khoas = [
        { id: 'nt', name: "Nhà thuốc" },
        { id: 'kc', name: "Khoa khám bệnh" },
        { id: 'cc', name: "Khoa cấp cúu" },
        { id: 'ccq7', name: "Khoa cấp cúu Q7" },
    ]

    const [sltKhoaId, setSltKhoaId] = useState('');

    useEffect(() => {
        if (sltKhoaId === 'nt') {
            setUserData(usersNhaThuoc)
        } else if (sltKhoaId === 'kc') {
            setUserData(usersKKB)
        } else if (sltKhoaId === 'cc') {
            setUserData(usersCC)
        } else {
            setUserData([])
        }
    }, [sltKhoaId])

    return (
        <>
            <div className="w-1/2 mx-auto mt-10 bg-white rounded shadow p-6">
                <div className="w-full  rounded">
                    <div className="text-left flex gap-2 items-center w-1/2">
                        <label className="w-20 font-semibold">Bộ phận</label>
                        <select className="px-2 py-1 border w-full"
                            value={sltKhoaId}
                            onChange={(e) => setSltKhoaId(e.target.value)}
                        >
                            <option value="" hidden selected>-- Chọn bộ phân --</option>
                            {khoas.map((khoa, index) => (
                                <option key={khoa.id} value={khoa.id}>{khoa.name}</option>
                            ))}
                        </select>
                    </div>

                </div>
                <div>
                    <div className="text-left mt-4 flex gap-2 items-center">
                        <label className="font-semibold">User name:</label>
                        <select className="px-2 py-1 border">
                            <option value="" hidden selected>-- Chọn User --</option>
                            {fullUsers.map((user) => (
                                <option key={user.id} value={user.id}>{user.username} - {user.fullname}</option>
                            ))}
                        </select>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-1 rounded">Thêm</button>
                    </div>
                </div>

                <div className="mt-6">
                    <UserTable data={userData} currentPage={currentPage} setCurrentPage={setCurrentPage} />

                </div>

            </div>
        </>
    );
}

export default DanhMuc;