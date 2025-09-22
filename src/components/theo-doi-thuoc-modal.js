"use client";

import { useEffect, useState } from "react";
import { PiSignature } from "react-icons/pi";
import { FcSignature } from "react-icons/fc";

import ChuyenPhieuModal from "./chuyen-phieu-modal";
import HoanTatPhieuModal from "./hoan-tat-phieu-modal";



const MedList = [
    {
        stt: 1,
        thuoc: "Metoclopramide 10 mg/2 mL",
        duongdung: 'Tiêm bắp/tiêm tĩnh mạch',
        dvt: "Ống",
        dvsd: "Ống",
        loSX: "MCP-2408-11",
        soLuong: 1,
        slsd: []
    },
    {
        stt: 2,
        thuoc: "Paracetamol 1 g/100 mL",
        dvt: "Chai",
        duongdung: 'Dịch truyền tĩnh mạch',
        dvsd: "ml",
        loSX: "LPCM-2503-07",
        soLuong: 3,
        slsd: []
    },
    {
        stt: 3,
        thuoc: "Amoxicillin 250mg",
        dvt: "Viên",
        duongdung:"Uống",
        dvsd: "Viên",
        loSX: "AM2503C",
        soLuong: 5,
        slsd: []
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

const NGAYS = [
    { ngayylenh: "12/08/2025", daky: true },
    { ngayylenh: "13/08/2025", daky: false },
    { ngayylenh: "14/08/2025", daky: false }
];



export default function TheoDoiThuocModal({ sltPhieu, setShow, login }) {

    console.log(sltPhieu)


    const [medicines, setmedicines] = useState(MedList);
    const [note, setNote] = useState("");
    const today = new Date();

    const [ngayylenh, setNgayYLenh] = useState(today);
    const [showChuyenPhieu, setShowChuyenPhieu] = useState(false);
    const [showHoanTatPhieu, setShowHoanTatPhieu] = useState(false);
    const [ngayylenhList, setNgayYLenhList] = useState([]);

    const pdfUrl = `https://atm243452-s3user.vcos.cloudstorage.com.vn/duoc_test/2025/09/18/001/2025_09_18_001_c790ef6c-11ae-4324-a1f2-110c07beb0a0_V0.pdf?AWSAccessKeyId=atm243452-s3user&Expires=1758428541&Signature=mszo90DVmhlLFuY8GMcVIBGglLk%3D` // e.g. /public/docs/file.pdf

    useEffect(() => {
        if (sltPhieu.trangthai === "new") {
            setNgayYLenhList([]);
            
        } else {
            setNgayYLenhList(NGAYS);
            // set slsd in medicines = [1,1]
            setmedicines(
                medicines.map((med) => {
                    return {
                        ...med,
                        slsd: [1],
                    };
            }))
        }

    }, [sltPhieu.trangthai]);





    const onClickNgayYLenh = (ngayylenh) => {
        console.log('ngayylenh', ngayylenh)
        // ngayylenh = Thu Sep 18 2025 11:31:39 GMT+0700 (Indochina Time)
        // Convert to 18/09/2025
        const converDate = new Date(ngayylenh);
        const out = converDate.toLocaleDateString('en-GB', { timeZone: 'Asia/Bangkok' }); // '18/09/2025'

        const newNgay = {
            ngayylenh: out,
            daky: false
        };
        setNgayYLenhList((prev) => [...prev, newNgay]);
        setNgayYLenh(ngayylenh);
    };

    const trangphaiphieu = sltPhieu.trangthai;




    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-40 p-20">
                <div className="bg-white rounded-lg shadow-lg  w-full h-full  flex flex-col flex-grow overflow-y-auto px-6 py-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">Theo dõi ký gửi - {sltPhieu.makygui}</h2>
                    <div className="overflow-y-auto h-full">
                        <div className="grid grid-cols-4 gap-4 items-center mt-4">
                            <div className="text-left">
                                <label htmlFor="pid" className=" text-sm font-medium block">
                                    Mã BN:
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
                            <div className="flex gap-2 items-center">
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
                            <div className="text-left">
                                <label htmlFor="ngaysinh" className="block text-sm font-medium">
                                    Khoa/phòng:
                                </label>
                                <input
                                    id="khoa-phong"
                                    value={login.department}
                                    disabled={true}
                                    className="border rounded px-2 py-1 mt-1 w-full"
                                />
                            </div>


                            <div className="flex gap-4 ">
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
                                        onClick={() => onClickNgayYLenh(ngayylenh)} // ✅ Correct date format: YYYY-MM-DD ngayylenh])}
                                    >
                                        Thêm
                                    </button>
                                </div>
                            </div>
                            <div className="text-left w-full col-span-3">
                                <label className="block text-sm font-medium">Ghi chú:</label>
                                <input
                                    type="text"
                                    placeholder="Nhập khi chú"
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                    className="border rounded px-2 py-1 mt-1 w-full"
                                />
                            </div>
                        </div>


                        {/* Medicine Table */}
                        <div className="border rounded-lg overflow-hidden mt-4 overflow-x-auto text-sm">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-slate-700 text-white">
                                        <th className="p-2 w-10">STT</th>
                                        <th className="p-2 ">Thuốc</th>
                                        <th className="p-2 text-left px-3">Đường dùng</th>
                                        <th className="p-2 w-20">ĐVT</th>
                                        <th className="p-2 w-20">ĐVSD</th>
                                        <th className="p-2 w-20 text-left">Lô SX</th>
                                        <th className="p-2 w-24">SL</th>
                                        <th className="p-2 ">SL còn lại</th>
                                        <th className="p-2 ">Cách dùng</th>
                                        <th className="p-2 ">Ghi chú</th>
                                        {ngayylenhList.map((ngayylenh, index) => (
                                            <th key={index} className="p-2 w-20 text-center text-sm">{ngayylenh.ngayylenh} </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {medicines.map((medicine, index) => (
                                        <tr key={medicine.stt} className="border-t">
                                            <td className="p-2 text-center">{index + 1}</td>
                                            <td className="p-2 font-medium text-left">
                                                <div className="w-80">{medicine.thuoc}</div>
                                            </td>
                                            <td><div className="text-left truncate px-3">{medicine.duongdung}</div></td>
                                            <td className="p-2 text-center">{medicine.dvt}</td>
                                            <td className="p-2 text-center">{medicine.dvsd}</td>
                                            <td className="p-2 text-left">
                                                <div className="w-28">{medicine.loSX}</div>
                                            </td>
                                            <td className="p-2 text-center">{medicine.soLuong}</td>
                                            <td className="p-2 text-center">
                                                <div className="w-24"> {trangphaiphieu === 'new' ? medicine.soLuong : trangphaiphieu === 'complete' ? 0 : slconlai(medicine.soLuong, medicine.slsd)}</div>
                                            </td>
                                            <td>
                                                <input className="border rounded p-1 outline-none" />
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
                                                        type="text"
                                                        value={medicine.slsd[index]}
                                                        className="border rounded px-2 py-1 w-20"
                                                    />
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                    <tr className="border-t ">
                                        <td colSpan={8}></td>
                                        <td colSpan={2} className="text-center ">
                                            <div className="text-sm py-2">
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
                                        <td colSpan={8}></td>
                                        <td colSpan={2} className="text-center">
                                            <div className="text-sm py-2">
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
                            {trangphaiphieu === 'complete' &&
                                <button
                                    className="bg-white text-red-600 border-red-500 border  px-8 py-1.5 rounded"
                                    onClick={() => setShowHoanTatPhieu(true)}
                                >
                                    Mở khóa
                                </button>
                            }
                            {trangphaiphieu !== 'complete' &&
                                <button
                                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-1.5 rounded"
                                    onClick={() => setShowHoanTatPhieu(true)}
                                >
                                    Hoàn tất
                                </button>
                            }
                            {trangphaiphieu !== 'complete' &&
                                <button
                                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-1.5 rounded"
                                    onClick={() => setShowChuyenPhieu(true)}
                                >
                                    Chuyển phiếu
                                </button>
                            }
                        </div>
                        <div className="flex gap-2">
                            {trangphaiphieu !== 'new' &&
                                <a
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-1.5 rounded"
                                    href={pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    In
                                </a>
                            }
                            {trangphaiphieu !== 'complete' &&
                                <button onClick={() => setShow(false)} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-1.5 rounded">
                                    Lưu
                                </button>
                            }
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
