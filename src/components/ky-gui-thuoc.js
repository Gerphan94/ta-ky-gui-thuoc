import { useEffect, useState } from "react";
import { kyGuiMoi, kyGuiThucHien, kyGuiHoantat } from "../data/ky-gui-data"
import KyGuiTable from "./ky-gui-thuoc-table";
import CreateRequestModal from "./tao-ky-gui-modal";
import TheoDoiThuocModal from "./theo-doi-thuoc-modal";

import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
function KyGuiThuoc() {

    const [sltTrangThai, setSltTrangThai] = useState(0);

    const [data, setData] = useState([]);
    const [showTaoKyGui, setShowTaoKyGui] = useState(false);
    const [showTheodoiThuoc, setShowTheoDoiThuoc] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const [sltPhieu, setSltPhieu] = useState({
        maphieu: '',
        mabn: "",
        hoten: "",
        gioitinh: "",
        ngaysinh: "",
    });

    const filterData = data.filter((item) => item.mabn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.hoten.toLowerCase().includes(searchQuery.toLowerCase()));

    const handleXem = () => {
        console.log('sltTrangThai', sltTrangThai, typeof sltTrangThai)
        if (sltTrangThai === 'new') {
            setData(kyGuiMoi);
        } else if (sltTrangThai === 'doing') {
            setData(kyGuiThucHien);
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
            <div className="flex-1 p-6 w-full">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                    <div className="flex justify-between items-center py-2">
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
                        </div>

                        <button
                            className="bg-blue-800 text-white px-6 py-2 rounded text-sm font-medium hover:bg-blue-900"
                            onClick={() => setShowTaoKyGui(true)}
                        >
                            + Tạo ký gửi
                        </button>
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
                    <div className="mt-4">
                        <KyGuiTable
                            data={filterData}
                            setShowTheoDoiThuoc={setShowTheoDoiThuoc}
                            setSltPhieu={setSltPhieu}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>

                </div>


            </div>
            <CreateRequestModal show={showTaoKyGui} setShow={setShowTaoKyGui} />
            <TheoDoiThuocModal sltPhieu={sltPhieu} show={showTheodoiThuoc} setShow={setShowTheoDoiThuoc} />

        </>
    )
}

export default KyGuiThuoc