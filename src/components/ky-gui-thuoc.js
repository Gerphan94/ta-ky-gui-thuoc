import { useEffect, useState } from "react";
import { kyGuiMoi, kyGuiThucHien, kyGuiHoantat, kyGuiChoXacNhan } from "../data/ky-gui-data"
import KyGuiTable from "./ky-gui-thuoc-table";
import CreateRequestModal from "./tao-ky-gui-modal";
import EditRequestModal from "./sua-ky-gui-modal";
import TheoDoiThuocModal from "./theo-doi-thuoc-modal";
import XacNhanModal from "./xac-nhan-modal";
import RefundModal from "./hoan-tra-modal";

import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";



function KyGuiThuoc() {

    const [sltTrangThai, setSltTrangThai] = useState(0);

    const [data, setData] = useState([]);
    const [showTaoKyGui, setShowTaoKyGui] = useState(false);
    const [showSuaKyGui, setShowSuaKyGui] = useState(false);
    const [showTheodoiThuoc, setShowTheoDoiThuoc] = useState(false);
    const [showHoanTra, setShowHoanTra] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [showXacNhan, setShowXacNhan] = useState(false);
    const [isAll, setIsAll] = useState(false);

    const [sltPhieu, setSltPhieu] = useState({
        maphieu: '',
        mabn: "",
        hoten: "",
        gioitinh: "",
        ngaysinh: "",
        trangthai: '',
    });

    const login = {
        username: 'quanvm',
        department: 'Khoa khám bệnh',
    }

    const filterData = data.filter(item => {
        const matchSearch = item.mabn.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.hoten.toLowerCase().includes(searchQuery.toLowerCase());

        // matchAll if isAll === true get data all else get data filter by khoa = login.department
        const matchAll = isAll ? true : login.department === item.khoa;


        return matchSearch && matchAll;
    });



    const handleXem = () => {
        setCurrentPage(1);
        console.log('sltTrangThai', sltTrangThai, typeof sltTrangThai)
        if (sltTrangThai === 'new') {
            setData(kyGuiMoi);
        } else if (sltTrangThai === 'doing') {
            setData(kyGuiThucHien);
            // } else if (sltTrangThai === 'w8') {
            //     setData(kyGuiChoXacNhan);
        } else if (sltTrangThai === 'complete') {
            setData(kyGuiHoantat);
        } else {
            setData([...kyGuiMoi, ...kyGuiThucHien, ...kyGuiHoantat]);
        }
    };

    const handleSearch = (value) => {
        setSearchQuery(value);
        setCurrentPage(1);
    }

    return (
        <>
            <div className="flex-1 w-full">
                <div className="flex gap-4 py-2">
                    <div className="w-full font-bold text-xl">TAH NỘI TRÚ - BỆNH VIỆN ĐA KHOA TÂM ANH TP. HỒ CHÍ MINH</div>
                    <div className="w-32 text-lg flex items-center gap-2">
                        <IoMdPerson />
                        <div>{login.username}</div>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm mb-6 ml-4 mr-4">
                    <div className="flex justify-between items-center px-4 py-2">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <label className="text-sm font-medium">Từ ngày:</label>
                                <input
                                    type="date"
                                    defaultValue="2025-08-06"
                                    className="border border-gray-300 rounded px-3 py-1 text-sm"
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <label className="text-sm font-medium">Đến ngày:</label>
                                <input
                                    type="date"
                                    defaultValue="2025-08-13"
                                    className="border border-gray-300 rounded px-3 py-1 text-sm"
                                />
                            </div>
                            <div>
                                <select
                                    className="border border-gray-300 rounded px-3 py-1 text-sm"
                                    value={sltTrangThai}
                                    onChange={(e) => setSltTrangThai(e.target.value)}
                                >
                                    <option value={'all'}>Tất cả</option>
                                    <option value={'new'}>Mới</option>
                                    {/* <option value={'w8'}>Chờ xác nhận</option> */}
                                    <option value={'doing'}>Đang thực hiện</option>
                                    <option value={'complete'}>Hoàn tất</option>
                                </select>
                            </div>
                            <button
                                className="bg-blue-800 text-white px-6 py-2 rounded text-sm font-medium hover:bg-blue-900"
                                onClick={handleXem}
                            >
                                Xem
                            </button>
                            {/* <label className="select-none cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    checked={isAll}
                                    onChange={(e) => setIsAll(e.target.checked)}
                                />
                                <span>Tất cả</span>
                            </label> */}
                        </div>
                        <div className="flex gap-4">
                            <input
                                disabled={true}
                                className="w-60 border border-gray-300 rounded px-3 py-1 text-sm"
                                value={login.department} />


                            <button
                                className="bg-blue-800 text-white px-6 py-2 rounded text-sm font-medium hover:bg-blue-900"
                                onClick={() => setShowTaoKyGui(true)}
                            >
                                + Tạo ký gửi
                            </button>
                        </div>
                    </div>
                    <div className="px-16">
                        <div className="relative w-96">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <CiSearch className="h-4 w-4 text-gray-400" />
                            </div>
                            <input
                                id='search'
                                name='search'
                                type="text"
                                autoComplete="off"
                                spellCheck="false"
                                placeholder='Tìm PID, Họ tên'
                                value={searchQuery}
                                onChange={(e) => handleSearch(e.target.value)}
                                className="w-full pl-10 pr-8 py-1 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors select-none"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                                >
                                    <IoMdClose className="h-4 w-4" />
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="mt-4 px-4">
                        <KyGuiTable
                            data={filterData}
                            setShowTheoDoiThuoc={setShowTheoDoiThuoc}
                            setSltPhieu={setSltPhieu}
                            setShowXacNhan={setShowXacNhan}
                            setShowSuaKyGui={setShowSuaKyGui}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            setShowHoanTra={setShowHoanTra}
                        />
                    </div>

                </div>


            </div>
            {showTaoKyGui && <CreateRequestModal setShow={setShowTaoKyGui} login={login} />}
            {showSuaKyGui && <EditRequestModal sltPhieu={sltPhieu} setShow={setShowSuaKyGui} />}
            {showHoanTra && <RefundModal sltPhieu={sltPhieu} setShow={setShowHoanTra} />}

            {showTheodoiThuoc &&
                <TheoDoiThuocModal
                    sltPhieu={sltPhieu}
                    setShow={setShowTheoDoiThuoc}
                    login={login} />


            }
            <XacNhanModal show={showXacNhan} setShow={setShowXacNhan} />

        </>
    )
}

export default KyGuiThuoc