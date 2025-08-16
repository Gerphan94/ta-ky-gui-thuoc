import React, { useState } from "react";

import KyGuiThuoc from "./ky-gui-thuoc";
import DanhMuc from "./danh-muc";   
function HomePage() {

    const menu = [
        { id: 'ky-gui-thuoc', title: 'Ký gửi thuốc' },
        { id: 'danh-muc', title: 'Danh mục' },
    ]
    const [sltMenu, setSltMenu] = useState('ky-gui-thuoc');


    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <div className="flex">
                    {/* Sidebar */}
                    <div className="w-56 h-screen fixed bg-[#2C43A8] text-white p-2">
                        <div className="p-4">
                            <img src="/img/talogo.png" alt="Logo" className="w-full h-18 mx-auto" />

                        </div>
                        <div className="mt-20 text-left space-y-1">
                            {menu.map((item) => (
                                <div
                                    key={item.id}
                                    className={`text-lg w-full block font-semibold cursor-pointer ${sltMenu === item.id ? 'bg-[#017BFB]' : ''} hover:bg-[#017BFB] px-10 py-1 rounded`}
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