import { useEffect, useState } from "react";
import { kyGuiMoi, kyGuiThucHien } from "../data/ky-gui-data"
import KyGuiTable from "./ky-gui-thuoc-table";
import CreateRequestModal from "./tao-ky-gui-modal";

function KyGuiThuoc() {

    const [sltTrangThai, setSltTrangThai] = useState(0);

    const [data, setData] = useState([]);
    const [showTaoKyGui, setShowTaoKyGui] = useState(false);

    const handleXem = () => {
        console.log('sltTrangThai', sltTrangThai, typeof sltTrangThai)
        if (sltTrangThai === '1') {
            setData(kyGuiMoi);
        } else if (sltTrangThai === '2') {
            setData(kyGuiThucHien);
        } else {
            setData([...kyGuiMoi, ...kyGuiThucHien]);
        }
    };



    return (
        <>
            <div className="flex-1 p-6 w-full">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                    <div className="flex justify-between items-center">


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
                                    <option value={0}>Tất cả</option>
                                    <option value={1}>Mới</option>
                                    <option value={2}>Đang thực hiện</option>
                                    <option value={3}>Hoàn tất</option>
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
                    <div className="p-4">
                        <KyGuiTable data={data} />
                    </div>

                </div>


            </div>
        <CreateRequestModal show={showTaoKyGui} setShow={setShowTaoKyGui} />

        </>
    )
}

export default KyGuiThuoc