import React, { useState } from "react";

import KyGuiThuoc from "./ky-gui-thuoc";
function HomePage() {

    const menu = [
        { id: 'ky-gui-thuoc', title: 'Ký gửi thuốc', link: 'ky-gui-thuoc' },
    ]
    const currentPath = window.location.pathname.split('/').pop();
    const [sltMenu, setSltMenu] = useState(menu[0].id);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [showTThuoc, setShowTThuoc] = useState(false);
    const [sltTrangThai, setSltTrangThai] = useState(-1);

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
                                <a
                                    key={item.id}
                                    className={`text-lg w-full block font-semibold cursor-pointer ${currentPath === item.link ? 'bg-[#017BFB]' : ''} hover:bg-[#017BFB] px-10 py-1 rounded`}
                                    onClick={() => setSltMenu(item.id)}
                                    href={`${item.link}`}
                                >{item.title}</a>
                            ))}
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 ml-56 ">
                        <KyGuiThuoc />
                    </div>


                </div>
            </div>
        </>
    );
}

export default HomePage;