
import { useState } from "react";
import { FaTrash } from "react-icons/fa";


const randomCode = (name) => {
    // get left 3 char from name + 3 random number
    return name.substring(0, 3) + Math.floor(Math.random() * 1000);

}


const availableMedicines = [
    { id: 1, medcode: 'ent001', name: "Enterogermina 4 tỷ bào tử/5ml", dvt: "Ống", dvsd: "Ống", duongdung: "Tiêm bắp/tiểm tĩnh mạch", sl: 10, losx: "EN2507A" },
    { id: 2, medcode: 'par001', name: "Paracetamol 500mg", dvt: "Viên", dvsd: "Viên", duongdung: "Uống", sl: 3, losx: "PA2406B" },
    { id: 3, medcode: 'amo001', name: "Amoxicillin 250mg", dvt: "Viên", dvsd: "Viên", duongdung: "Uống", sl: 5, losx: "AM2503C" },
    { id: 4, medcode: 'acar001', name: "Acarbose Friulchem 100mg", dvt: "Viên", dvsd: "Viên", duongdung: "Uống", sl: 10, losx: "AC2505D" },
    { id: 5, medcode: 'coz001', name: "Cozaar 100mg (Losartan)", dvt: "Viên", dvsd: "Viên", duongdung: "Uống", sl: 3, losx: "CZ2504E" },
    { id: 6, medcode: 'des001', name: "Desbebe 0,5mg/ml; chai 60ml", dvt: "Chai", dvsd: "ml", duongdung: "Tiêm", sl: 1, losx: "DB2506F" }
]

const MedList = [
    {
        stt: 1,
        id: 1,
        medcode: 'ent001',
        thuoc: "ENTEROGERMINA 4 TỶ BÀO TỬ 5ml",
        dvt: "Viên",
        dvsd: "Viên",
        duongdung: "Uống",
        loSX: "EN2507A",
        soLuong: 10,
    },
    {
        stt: 2,
        id: 2,
        medcode: 'par001',
        thuoc: "Paracetamol 500mg",
        dvt: "Viên",
        dvsd: "Viên",
        duongdung: "Uống",
        loSX: "PA2406B",
        soLuong: 3,
    },
]

export default function CreateRequestModal({ setShow, login }) {

    const [patientPID, setPatientPID] = useState("");
    const [sltMedicineId, setSltMedicineId] = useState(0);
    const [medicineCode, setMedicineCode] = useState("");
    const [medicineName, setMedicineName] = useState("");
    const [medicineUnit, setMedicineUnit] = useState("");
    const [medicineUsedUnit, setMedicineUsedUnit] = useState("");
    const [medicineRouteOfAdministration, setMedicineRouteOfAdministration] = useState("");
    const [medicineQuantity, setMedicineQuantity] = useState("");
    const [batchNumber, setBatchNumber] = useState("");
    const [addedMedicines, setAddedMedicines] = useState(MedList);
    const [note, setNote] = useState("");
    const [slInput, setSlInput] = useState(0);
    const [isFreeText, setIsFreeText] = useState(false);

    const handleChangeMedicineQuantity = (e) => {
        const inputValue = e.target.value;
        // Allow only digits
        if (/^\d*$/.test(inputValue)) {
            setMedicineQuantity(inputValue);
        }
    };

    const removeMedicine = (stt) => {
        setAddedMedicines((prev) => prev.filter((med) => med.stt !== stt));
    };


    const isExist = (id) => {
        return addedMedicines.some((med) => med.id === id);
    };

    const addMedicine = () => {
        console.log('sltMedicineId', sltMedicineId, typeof sltMedicineId);

        if (medicineCode && medicineName && medicineQuantity && batchNumber) {
            if (isExist(Number.parseInt(sltMedicineId)) && !isFreeText) {
                return;
            }
            const newMedicine = {
                stt: addedMedicines.length + 1,
                id: isFreeText ? 0 : Number.parseInt(sltMedicineId),
                mathuoc: isFreeText ? randomCode(medicineName) : medicineCode,
                thuoc: medicineName,
                dvt: medicineUnit,
                dvsd: medicineUsedUnit,
                duongdung: medicineRouteOfAdministration,
                loSX: batchNumber,
                soLuong: Number.parseInt(medicineQuantity),
            };
            console.log(newMedicine)

            setAddedMedicines((prev) => [...prev, newMedicine]);
            setSltMedicineId(0);
            setMedicineCode("");
            setMedicineName("");
            setMedicineUnit("");
            setMedicineUsedUnit("");
            setMedicineQuantity("");
            setMedicineRouteOfAdministration("");
            setBatchNumber("");

        }
    };

    const handleChangeThuoc = (e) => {
        const sltId = e.target.value;
        setSltMedicineId(sltId);
        setMedicineCode(availableMedicines.find((med) => med.id === Number.parseInt(sltId)).medcode);
        setMedicineName(availableMedicines.find((med) => med.id === Number.parseInt(sltId)).name);
        setMedicineUnit(availableMedicines.find((med) => med.id === Number.parseInt(sltId)).dvt);
        setMedicineUsedUnit(availableMedicines.find((med) => med.id === Number.parseInt(sltId)).dvsd);
        setMedicineRouteOfAdministration(availableMedicines.find((med) => med.id === Number.parseInt(sltId)).duongdung);
        setMedicineQuantity(availableMedicines.find((med) => med.id === Number.parseInt(sltId)).sl);
        setBatchNumber(availableMedicines.find((med) => med.id === Number.parseInt(sltId)).losx);
    };


    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg max-w-7xl w-full max-h-[90vh] overflow-y-hidden px-6 py-4 flex flex-col flex-grow">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">Tạo Ký gửi thuốc</h2>
                    <div className="overflow-y-auto h-full">
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
                                <div className="flex gap-6 items-center">
                                    <label className="block text-sm font-medium">Thuốc:</label>
                                    <label className="select-none cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="mr-2"
                                            onChange={(e) => setIsFreeText(e.target.checked)}
                                        />
                                        <span>Nhập tự do</span>
                                    </label>

                                </div>
                                {isFreeText ?
                                    <input
                                        spellCheck="false"
                                        autoComplete="off"
                                        placeholder="Nhập tên thuốc"
                                        value={medicineName}
                                        onChange={(e) => setMedicineName(e.target.value)}
                                        className="border rounded px-2 py-1 mt-1 w-full text-[#102E50]"
                                    />
                                    :
                                    <select
                                        value={sltMedicineId}
                                        onChange={(e) => handleChangeThuoc(e)}
                                        className="border rounded px-2 py-1 mt-1 w-full text-[#102E50] font-medium"
                                    >
                                        <option value={0} disabled hidden>
                                            Chọn thuốc
                                        </option>
                                        {availableMedicines.map((medicine) => (
                                            <option key={medicine.id} value={medicine.id}>
                                                {medicine.name}
                                            </option>
                                        ))}
                                    </select>
                                }

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
                            <div className="w-32">
                                <label className="block text-sm font-medium">Đường dùng:</label>
                                <input
                                    value={medicineRouteOfAdministration}
                                    onChange={(e) => setMedicineRouteOfAdministration(e.target.value)}
                                    className="border rounded px-2 py-1 mt-1 w-full"
                                />
                            </div>

                            <div className="w-28">
                                <label className="block text-sm font-medium">Số lượng:</label>
                                <input
                                    type="text"
                                    value={medicineQuantity}
                                    onChange={(e) => handleChangeMedicineQuantity(e)}

                                    className="border rounded px-2 py-1 mt-1 w-full"
                                />
                            </div>
                            <div className="w-56">
                                <label className="block text-sm font-medium">Lô SX:</label>
                                <input
                                    value={batchNumber}
                                    autoComplete="off"
                                    spellCheck="false"
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
                                        <th className="p-2 w-32 text-left">Đường dùng</th>
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
                                            <td className="p-2 text-left">{medicine.duongdung}</td>
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
                        <div className="text-left ">
                            <label className="block font-medium">Khoa/ Phòng ký gửi:</label>
                            <input className="w-96 border rounded px-2 py-1 mt-1 " disabled={true} value={login.department} />
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-center gap-4 pt-4">
                        {/* <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-1.5 rounded">
                            Xác nhận
                        </button> */}

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
