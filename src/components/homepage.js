import React, { useState } from "react";

import KyGuiThuoc from "./ky-gui-thuoc";
import DanhMuc from "./danh-muc";  

import { FaAngleDown } from "react-icons/fa";

function HomePage() {

    const menu = [
        { id: 'ky-gui-thuoc', title: 'Quản lý ký gửi' },
        { id: 'danh-muc', title: 'Danh mục' },
    ]
    const [sltMenu, setSltMenu] = useState('ky-gui-thuoc');


    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <div className="flex">
                    {/* Sidebar */}
                    <div className="w-[250px] h-screen fixed bg-[#102E9E] text-white p-2 font-source font-normal">
                        <div className="p-4">
                            <img src="/img/talogo.png" alt="Logo" className="w-full h-18 mx-auto" />

                        </div>
                        <div className="mt-20 text-left space-y-1">
                            <div className="text-lg w-full  cursor-pointer px-4 py-1 rounded bg-[#2C43A8] flex justify-between items-center">
                                <div> Ký gửi thuốc</div>
                               
                                <FaAngleDown />
                                </div>
                            {menu.map((item) => (
                                <div
                                    key={item.id}
                                    className={`text-lg w-full block  cursor-pointer ${sltMenu === item.id ? 'bg-[#2C43A8]' : ''} hover:bg-[#2C43A8] px-8 py-1 rounded`}
                                    onClick={() => setSltMenu(item.id)}
                                >{item.title}</div>
                            ))}
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 ml-56 ">
                        {sltMenu === 'ky-gui-thuoc' && <KyGuiThuoc /> }
                        {sltMenu === 'danh-muc' && <DanhMuc /> }
                    </div>


                </div>
            </div>
        </>
    );
}

export default HomePage;