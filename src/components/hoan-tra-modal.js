
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { PiSignature } from "react-icons/pi";
import { FcSignature } from "react-icons/fc";
import { PiSignatureThin } from "react-icons/pi";

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

export default function RefundModal({ setShow, login }) {

    const [patientPID, setPatientPID] = useState("25100003578");
    

   

    



    


    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg max-w-5xl w-full max-h-[90vh] overflow-y-hidden px-6 py-4 flex flex-col flex-grow">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">Hoàn trả thuốc</h2>
                    <div className="overflow-y-auto h-full">
                        <div className="grid grid-cols-4 gap-4 items-center mt-4">
                            <div className="text-left">
                                <label htmlFor="pid" className=" text-sm font-medium block">
                                    PID
                                </label>
                                <input
                                    id="pid"
                                    value={patientPID}
                                    disabled={true}
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
                        {/* Medicine Table */}
                        <div className="border rounded-lg overflow-hidden mt-4 ">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-slate-700 text-white">
                                        <th className="p-2 w-16">STT</th>
                                        <th className="p-2">Thuốc</th>
                                        <th className="p-2 w-20">ĐVT</th>
                                        <th className="p-2 w-32 text-left">Đường dùng</th>
                                        <th className="p-2 w-32 text-left">Lô SX</th>
                                        <th className="p-2 w-24">Số lượng</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {MedList.map((medicine, index) => (
                                        <tr key={medicine.stt} className="border-t">
                                            <td className="p-2 text-center">{index + 1}</td>
                                            <td className="p-2 font-medium text-left">{medicine.thuoc}</td>
                                            <td className="p-2 text-center">{medicine.dvt}</td>
                                         
                                            <td className="p-2 text-left">{medicine.duongdung}</td>
                                            <td className="p-2 text-left">{medicine.loSX}</td>
                                            <td className="p-2 text-center">{medicine.soLuong}</td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex gap-64 justify-center py-10">
                            <div>
                                <div className="font-bold">Người bàn giao</div>
                                <button>
                                    <PiSignatureThin className="size-32" />
                                </button>
                            </div>
                            <div>
                                <div className="font-bold">Người nhận thuốc</div>
                                <button>
                                    <PiSignatureThin className="size-32" />
                                </button>
                            </div>



                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-center gap-4 pt-4 select-none">
                        {/* <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-1.5 rounded">
                            Xác nhận
                        </button> */}
                        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-1.5 rounded">
                            In hoàn trả
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
