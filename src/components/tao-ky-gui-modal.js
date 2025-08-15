"use client";

import { useState } from "react";
import { FaTrash } from "react-icons/fa";


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


export default function CreateRequestModal({ show, setShow }) {

    const [patientPID, setPatientPID] = useState("");
    const [selectedMedicine, setSelectedMedicine] = useState("");
    const [medicineUnit, setMedicineUnit] = useState("Viên");
    const [medicineUsedUnit, setMedicineUsedUnit] = useState("Viên");
    const [medicineQuantity, setMedicineQuantity] = useState("");
    const [batchNumber, setBatchNumber] = useState("Lo 123");
    const [addedMedicines, setAddedMedicines] = useState(MedList);
    const [note, setNote] = useState("");

    const removeMedicine = (stt) => {
        setAddedMedicines((prev) => prev.filter((med) => med.stt !== stt));
    };

    const addMedicine = () => {
        console.log(selectedMedicine, medicineQuantity, batchNumber);
        if (selectedMedicine && medicineQuantity && batchNumber) {
            console.log('newMedicine')
            const newMedicine = {

                stt: addedMedicines.length + 1,
                thuoc: selectedMedicine,
                dvt: medicineUnit,
                dvsd: medicineUsedUnit,
                loSX: batchNumber,
                soLuong: Number.parseInt(medicineQuantity),
            };

            setAddedMedicines((prev) => [...prev, newMedicine]);
            setSelectedMedicine("");
            setMedicineQuantity("");
            setBatchNumber("Lo 123");
        }
    };

    if (!show) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto px-6 py-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">Tạo Ký gửi thuốc</h2>

                    <div className="grid grid-cols-4 gap-4 items-center mt-4">
                        <div className="text-left">
                            <label htmlFor="pid" className=" text-sm font-medium block">
                                Nhập PID
                            </label>
                            <input
                                id="pid"
                                value={patientPID}
                                onChange={(e) => setPatientPID(e.target.value)}
                                placeholder="Nhập PID"
                                className="border rounded px-2 py-1 mt-1 w-full bg-white"
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
                                value={'Nguyễn Văn An'}
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

                    <div className="flex mt-4 w-full">
                        <div className="text-left w-full">
                            <label className=" text-sm font-medium block">Đợt vào viện:</label>
                            <select
                                className="border rounded mt-1 px-2 py-1 w-full"
                            >
                                <option value="" hidden disabled>
                                    Chọn Đợt khám chữa bệnh
                                </option>
                                <option value="1">01/08/2025 08:00 - Bệnh Viện Đa Khoa Tâm Anh TP. Hồ Chí Minh</option>
                                <option value="2">10/07/2025 09:20 - Phòng khám Đa Khoa Tâm Anh Quận 7</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex gap-2 items-end mt-4 flex-wrap text-left">
                        <div className="w-96">
                            <label className="block text-sm font-medium">Thuốc:</label>
                            <select
                                value={selectedMedicine}
                                onChange={(e) => setSelectedMedicine(e.target.value)}
                                className="border rounded px-2 py-1 mt-1 w-full text-[#102E50]"
                            >
                                <option value="" disabled hidden>
                                    Chọn thuốc
                                </option>
                                {availableMedicines.map((medicine) => (
                                    <option key={medicine} value={medicine}>
                                        {medicine}
                                    </option>
                                ))}
                            </select>

                        </div>

                        <div className="w-20">
                            <label className="block text-sm font-medium">ĐVT:</label>
                            <input
                                value={medicineUnit}
                                onChange={(e) => setMedicineUnit(e.target.value)}
                                className="border rounded px-2 py-1 mt-1 w-full"
                            />
                        </div>

                        <div className="w-20">
                            <label className="block text-sm font-medium">ĐVSD:</label>
                            <input
                                value={medicineUsedUnit}
                                onChange={(e) => setMedicineUsedUnit(e.target.value)}
                                className="border rounded px-2 py-1 mt-1 w-full"
                            />
                        </div>

                        <div className="w-28">
                            <label className="block text-sm font-medium">Số lượng:</label>
                            <input
                                type="number"
                                value={medicineQuantity}
                                onChange={(e) => setMedicineQuantity(e.target.value)}

                                className="border rounded px-2 py-1 mt-1 w-full"
                            />
                        </div>
                        <div className="w-28">
                            <label className="block text-sm font-medium">Lô SX:</label>
                            <input
                                value={batchNumber}
                                onChange={(e) => setBatchNumber(e.target.value)}
                                className="border rounded px-2 py-1 mt-1 w-full"
                            />
                        </div>

                        <button
                            onClick={addMedicine}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded"
                        >
                            Thêm
                        </button>
                    </div>

                    {/* Medicine Table */}
                    <div className="border rounded-lg overflow-hidden mt-4 ">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-slate-700 text-white">
                                    <th className="p-2 w-16">STT</th>
                                    <th className="p-2">Thuốc</th>
                                    <th className="p-2 w-20">ĐVT</th>
                                    <th className="p-2 w-20">ĐVSD</th>
                                    <th className="p-2 w-32 text-left">Lô SX</th>
                                    <th className="p-2 w-24">Số lượng</th>
                                    <th className="p-2 w-16"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {addedMedicines.map((medicine, index) => (
                                    <tr key={medicine.stt} className="border-t">
                                        <td className="p-2 text-center">{index + 1}</td>
                                        <td className="p-2 font-medium text-left">{medicine.thuoc}</td>
                                        <td className="p-2 text-center">{medicine.dvt}</td>
                                        <td className="p-2 text-center">{medicine.dvsd}</td>
                                        <td className="p-2 text-left">{medicine.loSX}</td>
                                        <td className="p-2 text-center">{medicine.soLuong}</td>
                                        <td className="p-2 text-center">
                                            <button
                                                onClick={() => removeMedicine(medicine.stt)}
                                                className="text-red-400 hover:text-red-700"
                                            ><FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>


                    <div className="w-full text-left py-2">
                        <label className="block text-sm font-medium">Ghi chú:</label>
                        <textarea
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            spellCheck="false"
                            autoComplete="false"
                            className="border rounded p-2 w-full mt-1"
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex justify-center gap-4 pt-4">
                        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-1.5 rounded">
                            Xác nhận
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
