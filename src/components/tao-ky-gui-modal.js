"use client";

import { useState } from "react";


const availableMedicines = [
    "ACARBOSE FRIULCHEM 100mg",
    "COZAAR 100mg",
    "DESBEBE 0,5mg/ml; 60ml",
    "ENTEROGERMINA 4 TỶ BÀO TỬ 5ml",
    "PARACETAMOL 500mg",
    "AMOXICILLIN 250mg",
]


export default function CreateRequestModal({ show, setShow }) {
    const [fromDate, setFromDate] = useState("07/15/2025");
    const [toDate, setToDate] = useState("07/15/2025");
    const [requestType, setRequestType] = useState("Yêu cầu lĩnh thuốc");
    const [patientPID, setPatientPID] = useState("");
    const [selectedDepositSlip, setSelectedDepositSlip] = useState("");
    const [selectedMedicine, setSelectedMedicine] = useState("");
    const [medicineUnit, setMedicineUnit] = useState("Viên");
    const [medicineUsedUnit, setMedicineUsedUnit] = useState("Viên");
    const [medicineQuantity, setMedicineQuantity] = useState("");
    const [batchNumber, setBatchNumber] = useState("Lo 123");
    const [reasonForReturn, setReasonForReturn] = useState("");
    const [addedMedicines, setAddedMedicines] = useState([]);

    const removeMedicine = (stt) => {
        setAddedMedicines((prev) => prev.filter((med) => med.stt !== stt));
    };

    const addMedicine = () => {
        if (selectedMedicine && medicineQuantity && batchNumber) {
            const newMedicine = {
                stt: addedMedicines.length + 1,
                thuoc: selectedMedicine,
                dvt: medicineUnit,
                dvsd: medicineUsedUnit,
                loSX: batchNumber,
                soLuongkhadung: Number.parseInt(medicineQuantity),
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
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 text-left">Tạo Ký gửi thuốc</h2>
                    {/* Date Range + Request Type */}


                    {/* Patient Information */}
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

                    <div className="flex mt-4">
                        <div className="text-left">
                            <label className=" text-sm font-medium block">Đợt vào viện:</label>
                            <select
                                onChange={(e) => setRequestType(e.target.value)}
                                className="border rounded px-2 py-1 w-[200px]"
                            >
                                <option value="Yêu cầu lĩnh thuốc">01/08/2025 08:00</option>
                                <option value="Yêu cầu lĩnh thuốc">10/07/2025 08:00</option>
                            </select>
                        </div>
                    </div>

                    {/* Deposit Slip */}


                    {/* Reason for return */}


                    {/* Medicine selection */}
                    <div className="flex gap-2 items-end mt-4 flex-wrap text-left">
                        <div className="w-96">
                            <label className="block text-sm font-medium">Thuốc:</label>
                            <select
                                value={selectedMedicine}
                                onChange={(e) => setSelectedMedicine(e.target.value)}
                                className="border rounded px-2 py-1 mt-1 w-full"
                            >
                                <option value="">-- Chọn thuốc --</option>
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
                                value={3}
                                readOnly
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
                    <div className="border rounded-lg overflow-hidden mt-4 min-h-[200px]">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-slate-700 text-white">
                                    <th className="p-2 w-16">STT</th>
                                    <th className="p-2">Thuốc</th>
                                    <th className="p-2 w-20">ĐVT</th>
                                    <th className="p-2 w-20">ĐVSD</th>
                                    <th className="p-2 w-32">Lô SX</th>
                                    <th className="p-2 w-24">Số lượng</th>
                                    <th className="p-2 w-16"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {addedMedicines.map((medicine) => (
                                    <tr key={medicine.stt} className="border-t">
                                        <td className="p-2 text-center">{medicine.stt}</td>
                                        <td className="p-2 font-medium">{medicine.thuoc}</td>
                                        <td className="p-2 text-center">{medicine.dvt}</td>
                                        <td className="p-2 text-center">{medicine.dvsd}</td>
                                        <td className="p-2 text-center">{medicine.loSX}</td>
                                        <td className="p-2 text-center">{medicine.soLuong}</td>
                                        <td className="p-2 text-center">
                                            <button
                                                onClick={() => removeMedicine(medicine.stt)}
                                                className="text-red-600 hover:text-red-700"
                                            >
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-center gap-4 pt-4">
                       
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded">
                            Lưu
                        </button>
                        <button
                            onClick={() => setShow(false)}
                            className="border border-red-600 text-red-600 hover:bg-red-50 px-8 py-2 rounded"
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
