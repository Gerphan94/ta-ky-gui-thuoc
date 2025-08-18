"use client";

import { useState } from "react";
import { PiSignature } from "react-icons/pi";
import { FcSignature } from "react-icons/fc";

import ChuyenPhieuModal from "./chuyen-phieu-modal";
import HoanTatPhieuModal from "./hoan-tat-phieu-modal";



const MedList = [
    {
        stt: 1,
        thuoc: "ENTEROGERMINA 4 TỶ BÀO TỬ 5ml",
        dvt: "Viên",
        dvsd: "Viên",
        loSX: "Lo 123",
        soLuong: 10,
        slsd: [1, 1]
    },
    {
        stt: 2,
        thuoc: "Paracetamol 500mg",
        dvt: "Viên",
        dvsd: "Viên",
        loSX: "Lo 123",
        soLuong: 3,
        slsd: [1]
    },
    {
        stt: 3,
        thuoc: "Amoxicillin 250mg",
        dvt: "Viên",
        dvsd: "Viên",
        loSX: "Lo 123",
        soLuong: 5,
        slsd: [1]
    },

]

const formatted = (day) => {
    // day = 2025-12-08

    return day.split("-").reverse().join("/");
};


const slconlai = (sl, slsd) => {
    let sum = 0;
    for (let i = 0; i < slsd.length; i++) {
        sum += slsd[i];
    }
    return sl - sum;
}   




export default function TheoDoiThuocModal({ sltPhieu, show, setShow }) {


    const [medicines, setmedicines] = useState(MedList);
    const [note, setNote] = useState("");
    const today = new Date();

    const [ngayylenh, setNgayYLenh] = useState(today);
    const [showChuyenPhieu, setShowChuyenPhieu] = useState(false);
    const [showHoanTatPhieu, setShowHoanTatPhieu] = useState(false);

    const removeMedicine = (stt) => {
        setmedicines((prev) => prev.filter((med) => med.stt !== stt));
    };

    const [ngayylenhList, setNgayYLenhList] = useState([
        { ngayylenh: "12/08/2025", daky: true },
        { ngayylenh: "13/08/2025", daky: false },
        { ngayylenh: "14/08/2025", daky: false }
    ]);



    if (!show) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-40">
                <div className="bg-white rounded-lg shadow-lg max-w-7xl w-full max-h-[90vh] flex flex-col flex-grow overflow-y-auto px-6 py-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">Theo dõi ký gửi - {sltPhieu.makygui}</h2>
                    <div className="overflow-y-auto">
                        <div className="grid grid-cols-4 gap-4 items-center mt-4">
                            <div className="text-left">
                                <label htmlFor="pid" className=" text-sm font-medium block">
                                    PID
                                </label>
                                <input
                                    id="pid"
                                    value={sltPhieu.mabn}
                                    disabled={true}
                                    className="border rounded px-2 py-1 mt-1 w-full"
                                    autoComplete="off"
                                    spellCheck="false"
                                />
                            </div>
                            <div className="text-left">
                                <label htmlFor="pid" className="block text-sm font-medium">
                                    Họ và Tên
                                </label>
                                <input
                                    id="hoten"
                                    value={sltPhieu.hoten}
                                    disabled={true}
                                    className="border rounded px-2 py-1 mt-1 w-full"
                                />
                            </div>
                            <div className="text-left">
                                <label htmlFor="phai" className="block text-sm font-medium">
                                    Giới tính
                                </label>
                                <input
                                    id="phai"
                                    value={'Nam'}
                                    disabled={true}
                                    className="border rounded px-2 py-1 mt-1 w-full"
                                />
                            </div>
                            <div className="text-left">
                                <label htmlFor="ngaysinh" className="block text-sm font-medium">
                                    Ngày sinh
                                </label>
                                <input
                                    id="ngaysinh"
                                    value={'11/10/1997'}
                                    disabled={true}
                                    className="border rounded px-2 py-1 mt-1 w-full"
                                />
                            </div>

                        </div>

                        <div className="flex gap-4 mt-4">
                            <div className="text-left">
                                <label className="block text-sm font-medium">Ngày y lệnh</label>
                                <input
                                    type="date"
                                    value={ngayylenh ? new Date(ngayylenh).toISOString().split("T")[0] : ""}
                                    onChange={(e) => setNgayYLenh(e.target.value)}
                                    className="border rounded px-2 py-1 mt-1 w-40"
                                />
                            </div>
                            <div className="flex flex-col justify-end">
                                <div></div>
                                <button
                                    className="border rounded px-2 py-1 mt-1 bg-blue-500 text-white hover:bg-blue-700"
                                    onClick={() => setNgayYLenhList([...ngayylenhList, formatted(ngayylenh)])} // ✅ Correct date format: YYYY-MM-DD ngayylenh])}
                                >
                                    Thêm
                                </button>
                            </div>
                        </div>
                        {/* Medicine Table */}
                        <div className="border rounded-lg overflow-hidden mt-4 overflow-x-auto text-sm">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-slate-700 text-white">
                                        <th className="p-2 w-10">STT</th>
                                        <th className="p-2 ">Thuốc</th>
                                        <th className="p-2 w-20">ĐVT</th>
                                        <th className="p-2 w-20">ĐVSD</th>
                                        <th className="p-2 w-20 text-left">Lô SX</th>
                                        <th className="p-2 w-24">Số lượng</th>
                                        <th className="p-2 ">SL còn lại</th>
                                        <th className="p-2 ">Ghi chú</th>
                                        {ngayylenhList.map((ngayylenh, index) => (
                                            <th key={index} className="p-2 w-20 text-center text-sm">{ngayylenh.ngayylenh}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {medicines.map((medicine, index) => (
                                        <tr key={medicine.stt} className="border-t">
                                            <td className="p-2 text-center">{index + 1}</td>
                                            <td className="p-2 font-medium text-left">
                                                <div className="w-80">{medicine.thuoc}
                                                </div></td>
                                            <td className="p-2 text-center">{medicine.dvt}</td>
                                            <td className="p-2 text-center">{medicine.dvsd}</td>
                                            <td className="p-2 text-left">
                                                <div className="w-28">{medicine.loSX}</div>
                                            </td>
                                            <td className="p-2 text-center">{medicine.soLuong}</td>
                                            <td className="p-2 text-center">
                                                <div className="w-24"> {slconlai(medicine.soLuong, medicine.slsd)}</div>
                                            </td>
                                            <td className="p-2 text-center">
                                                <textarea
                                                    spellCheck="false"
                                                    autoComplete="off"
                                                    className="w-48 border rounded p-1 outline-none" />
                                            </td>
                                            {ngayylenhList.map((ngayylenh, index) => (
                                                <td key={index} className="p-2 text-center">
                                                    <input
                                                        disabled={ngayylenh.daky}
                                                        type="number"
                                                        value={medicine.slsd[index]}
                                                        className="border rounded px-2 py-1 w-20"
                                                    />
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                    <tr className="border-t">
                                        <td colSpan={6}></td>
                                        <td colSpan={2} className="text-center">
                                            <div className="text-sm">
                                                Người thực hiện ký
                                            </div>
                                        </td>
                                        {ngayylenhList.map((ngayylenh, index) => (
                                            <td key={index} className="p-2 text-center">

                                                <button>
                                                    {ngayylenh.daky ? <FcSignature className="size-8 text-gray-500" /> :
                                                        <PiSignature className="size-8 text-gray-500" />
                                                    }
                                                </button>
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className="border-t">
                                        <td colSpan={6}></td>
                                        <td colSpan={2} className="text-center">
                                            <div className="text-sm">
                                                Người bệnh ký
                                            </div>
                                        </td>
                                        {ngayylenhList.map((ngayylenh, index) => (
                                            <td key={index} className="p-2 text-center ">
                                                <button>
                                                    {ngayylenh.daky ? <FcSignature className="size-8 text-gray-500" /> :
                                                        <PiSignature className="size-8 text-gray-500" />
                                                    }
                                                </button>
                                            </td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-between gap-4 pt-4">
                        <div className="flex gap-2">
                            <button
                                className="bg-green-600 hover:bg-green-700 text-white px-8 py-1.5 rounded"
                                onClick={() => setShowHoanTatPhieu(true)}
                            >
                                Hoàn tất
                            </button>
                            <button
                                className="bg-green-600 hover:bg-green-700 text-white px-8 py-1.5 rounded"
                                onClick={() => setShowChuyenPhieu(true)}
                            >
                                Chuyển phiếu
                            </button>
                        </div>
                        <div className="flex gap-2">
                            <button onClick={() => setShow(false)} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-1.5 rounded">
                                Lưu
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
            </div>
            <div className="opacity-75 fixed inset-0 z-30 bg-black"></div>
            <ChuyenPhieuModal show={showChuyenPhieu} setShow={setShowChuyenPhieu} />
            <HoanTatPhieuModal show={showHoanTatPhieu} setShow={setShowHoanTatPhieu} />
        </>
    );
}
