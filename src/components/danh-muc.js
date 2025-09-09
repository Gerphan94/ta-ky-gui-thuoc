import { useEffect, useState } from "react";
import { users } from "../data/user-data";
import UserTable from "./danh-muc-user-table";
import AddUserModal from "./add-user-modal";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
function DanhMuc() {

    const [currentPage, setCurrentPage] = useState(1);
    const [showAdd, setShowAdd] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [sltMenu, setSltMenu] = useState('tk');

    const handleSearch = (value) => {
        setSearchQuery(value);
        setCurrentPage(1);
    };

    const filterData = users.filter((item) => item.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.fullname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.department.toLowerCase().includes(searchQuery.toLowerCase()));


    return (
        <>
            <div className="w-1/2 mx-auto mt-10 bg-white rounded shadow px-6">
                <div className="w-full flex items-start">
                    <div className="flex items-center py-4">
                         <button className={`p-2 border-b-blue-500  hover:border-b ${sltMenu === 'tk' && 'border-b'} `} onClick={() => setSltMenu('tk')}>Tài khoản</button>
                    </div>
                </div>

                <div className="flex justify-between">
                    <div className="relative w-96">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <CiSearch className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                            id='search'
                            name='search'
                            type="text"
                            autoComplete="off"
                            spellCheck="false"
                            placeholder='Tìm kiếm'
                            value={searchQuery}
                            onChange={(e) => handleSearch(e.target.value)}
                            className="w-full pl-10 pr-8 py-1 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors select-none"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                            >
                                <IoMdClose className="h-4 w-4" />
                            </button>
                        )}
                    </div>

                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-1.5 rounded"
                        onClick={() => setShowAdd(true)}

                    >Thêm</button>
                </div>
                <div className="py-4">
                    <UserTable data={filterData} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </div>

            </div>
            <AddUserModal show={showAdd} setShow={setShowAdd} users={users} />
        </>
    );
}

export default DanhMuc;