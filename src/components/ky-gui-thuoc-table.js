import Pagination from "./pagination";

function KyGuiTable({
    data,
    setShowTheoDoiThuoc,
    setSltPhieu,
    currentPage, setCurrentPage,
    setShowXacNhan,
    setShowSuaKyGui
}) {

    const itemsPerPage = 10;
    const totalPage = Math.ceil(data.length / itemsPerPage);
    const datainPage = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    console.log('data', data)

    const handleClickThuoc = (item) => {
        setShowTheoDoiThuoc(true);
        setSltPhieu({
            makygui: item.makygui,
            mabn: item.mabn,
            hoten: item.hoten,
            gioitinh: item.gioitinh,
            ngaysinh: item.ngaysinh,
            trangthai: item.trangthai
        });
    };
    const handleClickSua = (item) => {
        setShowSuaKyGui(true);
        setSltPhieu({
            makygui: item.makygui,
            mabn: item.mabn,
            hoten: item.hoten,
            gioitinh: item.gioitinh,
            ngaysinh: item.ngaysinh,
        });
    };

    return (
        <>
            <div>
                <table className="w-full">
                    <thead>
                        <tr className="bg-slate-700 hover:bg-slate-700 text-white font-medium">
                            <th className="w-10 px-2 text-center">#</th>
                            <th className="px-4 py-2 text-left">Mã ký gửi</th>
                            <th>Ngày tạo</th>
                            <th>Mã BN</th>
                            <th className="px-2 text-left">Họ tên</th>
                            <th>Giới tính</th>
                            <th>Ngày Sinh</th>
                            <th>Trạng thái</th>
                            <th className="px-2 text-left">Khoa</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {datainPage.map((item, index) => (
                            <tr key={item.makygui} className="hover:bg-gray-50 cursor-pointer border-b">
                                <td>{currentPage === 1 ? index + 1 : (currentPage - 1) * 10 + index + 1}</td>
                                <td className="py-2.5 px-4 text-left">{item.makygui}</td>
                                <td>{item.ngaytao}</td>
                                <td>{item.mabn}</td>
                                <td><div className="px-2 text-left">{item.hoten}</div></td>
                                <td>{item.gioitinh}</td>
                                <td>{item.ngaysinh}</td>
                                <td>
                                    {item.trangthai === 'new' && <span className="text-gray-500 font-semibold border rounded py-0.5 px-2">Mới</span>}
                                    {item.trangthai === 'w8' && <span className="text-orange-500 font-semibold border rounded py-0.5 px-2">Chờ xác nhận</span>}

                                    {item.trangthai === 'doing' && <span className="text-blue-500 font-semibold border rounded py-0.5 px-2">Đang thực hiện</span>}
                                    {item.trangthai === 'complete' && <span className="text-green-500 font-semibold border rounded py-0.5 px-2">Hoàn tất</span>}
                                </td>
                                <td className="px-2 text-left">
                                    {item.khoa}
                                </td>
                                <td>
                                    <div className="text-sm select-none">
                                        {item.trangthai !== 'w8' &&
                                            <button className="bg-green-500 text-white py-1 px-2 rounded"
                                                onClick={() => handleClickThuoc(item)}
                                            >Chi tiết</button>
                                        }

                                        {/* {item.trangthai === 'new' &&
                                            <button className="bg-blue-500 text-white py-1 px-2 rounded ml-2"
                                                onClick={() => handleClickSua(item)}
                                            >Sửa</button>} */}
                                        {item.trangthai === 'w8' &&
                                            <button
                                                className="bg-blue-500 text-white py-1 px-2 rounded ml-2"
                                                onClick={() => setShowXacNhan(true)}

                                            >Xác nhận</button>}

                                    </div>

                                </td>
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
export default KyGuiTable;