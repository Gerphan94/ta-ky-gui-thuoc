"use client";

import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaSignature } from "react-icons/fa";
import { PiSignature } from "react-icons/pi";


const availableMedicines = [
    "ACARBOSE FRIULCHEM 100mg",
    "COZAAR 100mg",
    "DESBEBE 0,5mg/ml; 60ml",
    "ENTEROGERMINA 4 TỶ BÀO TỬ 5ml",
    "PARACETAMOL 500mg",
    "AMOXICILLIN 250mg",
]

const MedList = [
    {
        stt: 1,
        thuoc: "ENTEROGERMINA 4 TỶ BÀO TỬ 5ml",
        dvt: "Viên",
        dvsd: "Viên",
        loSX: "Lo 123",
        soLuong: 10,
    },
    {
        stt: 2,
        thuoc: "Paracetamol 500mg",
        dvt: "Viên",
        dvsd: "Viên",
        loSX: "Lo 123",
        soLuong: 3,
    },
    {
        stt: 3,
        thuoc: "Amoxicillin 250mg",
        dvt: "Viên",
        dvsd: "Viên",
        loSX: "Lo 123",
        soLuong: 5,
    },

]


export default function TheoDoiThuocModal({ sltPhieu, show, setShow }) {


    const [medicines, setmedicines] = useState(MedList);
    const [note, setNote] = useState("");
    const [ngayylenh, setNgayYLenh] = useState(new Date().toISOString().slice(0, 10));

    const removeMedicine = (stt) => {
        setmedicines((prev) => prev.filter((med) => med.stt !== stt));
    };

    const [ngayylenhList, setNgayYLenhList] = useState(["12/08/2025", "13/08/2025", "14/08/2025"]);



    if (!show) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto px-6 py-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">Theo dõi ký gửi - {sltPhieu.makygui}</h2>

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
                                value={ngayylenh}
                                onChange={(e) => setNgayYLenh(e.target.value)}
                                className="border rounded px-2 py-1 mt-1" />
                        </div>
                        <div className="flex flex-col justify-end">
                            <div></div>
                            <button className="border rounded px-2 py-1 mt-1 bg-blue-500 text-white hover:bg-blue-700">Thêm</button>

                        </div>


                    </div>



                    {/* Medicine Table */}
                    <div className="border rounded-lg overflow-hidden mt-4 overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-slate-700 text-white">
                                    <th className="p-2 w-10">STT</th>
                                    <th className="p-2 w-40">Thuốc</th>
                                    <th className="p-2 w-20">ĐVT</th>
                                    <th className="p-2 w-20">ĐVSD</th>
                                    <th className="p-2 w-20 text-left">Lô SX</th>
                                    <th className="p-2 w-24">Số lượng</th>
                                    {ngayylenhList.map((ngayylenh, index) => (
                                        <th key={index} className="p-2 w-20 text-center">{ngayylenh}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {medicines.map((medicine, index) => (
                                    <tr key={medicine.stt} className="border-t">
                                        <td className="p-2 text-center">{index + 1}</td>
                                        <td className="p-2 font-medium text-left">{medicine.thuoc}</td>
                                        <td className="p-2 text-center">{medicine.dvt}</td>
                                        <td className="p-2 text-center">{medicine.dvsd}</td>
                                        <td className="p-2 text-left">{medicine.loSX}</td>
                                        <td className="p-2 text-center">{medicine.soLuong}</td>
                                        {ngayylenhList.map((ngayylenh, index) => (
                                            <td key={index} className="p-2 text-center">
                                                <input
                                                    type="number"
                                                    className="border rounded px-2 py-1"


                                                />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                                <tr className="border-t">
                                    <td colSpan={4}></td>
                                    <td colSpan={2} className="text-center">
                                        <div className="text-sm">
                                            Người thực hiện ký
                                        </div>
                                    </td>
                                    {ngayylenhList.map((ngayylenh, index) => (
                                        <td key={index} className="p-2 text-center">
                                            <button>
                                                 <PiSignature className="size-8 text-gray-500" />
                                            </button>

                                        </td>
                                    ))}
                                </tr>
                                 <tr className="border-t">
                                    <td colSpan={4}></td>
                                    <td colSpan={2} className="text-center">
                                        <div className="text-sm">
                                            Người bệnh ký
                                        </div>
                                    </td>
                                    {ngayylenhList.map((ngayylenh, index) => (
                                        <td key={index} className="p-2 text-center ">
                                            <button>
                                                <PiSignature className="size-8 text-gray-500" />
                                            </button>

                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-center gap-4 pt-4">
                        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-1.5 rounded">
                            Chuyển phiếu
                        </button>

                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-1.5 rounded">
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
            <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}
