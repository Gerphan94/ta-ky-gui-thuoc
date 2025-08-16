import Pagination from "./pagination";

function UserTable({ data, setShowTheoDoiThuoc, setSltPhieu, currentPage, setCurrentPage }) {

    const itemsPerPage = 10;
    const totalPage = Math.ceil(data.length / itemsPerPage);
    const datainPage = data.slice((currentPage - 1) * itemsPerPage,  currentPage * itemsPerPage);

    return (
        <>
            <div>


                <table className="w-full">
                    <thead>
                        <tr className="bg-slate-700 hover:bg-slate-700 text-white font-medium">
                            <th className="w-10 px-2 text-center">#</th>
                            <th className="px-4 py-2 text-left">User</th>
                            <th><div className="p-2 text-left">Họ và tên</div></th>
                             <th><div className="p-2 text-left">Khoa / Phòng ban</div></th>
                            <th>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datainPage.map((item, index) => (
                            <tr key={item.id} className="hover:bg-gray-50 cursor-pointer border-b">
                                <td>{currentPage === 1 ? index + 1 : (currentPage - 1) * 10 + index + 1}</td>
                                <td className="py-2.5 px-4 text-left">{item.username}</td>
                                <td><div className="p-2 text-left">{item.fullname}</div></td>
                                <td><div className="px-2 text-left">{item.department}</div></td>
                                <td>{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPage={totalPage}
                />
            </div>


        </>
    )
}
export default UserTable;