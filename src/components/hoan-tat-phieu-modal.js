

function HoanTatPhieuModal({ show, setShow }) {


    if (!show) return null


    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto px-6 py-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">Xác nhận hoàn tất</h2>

                    <div className=" py-2">
                        <div className=" flex items-center text-left gap-10">
                            <label className="">
                                <input
                                    name="hoantat"
                                    type="radio"
                                    className="mr-2"
                                />
                                <span>Hoàn tất ký gửi</span>
                            </label>
                            <label>
                                <input
                                    name="hoantat"
                                    type="radio"
                                    className="mr-2"
                                />
                                <span>Người bệnh dừng ký gửi</span>
                            </label>

                        </div>
                        <div className="text-left py-1">
                            <label htmlFor="note" className="text-sm font-medium block mt-4">
                                Ghi chú
                            </label>
                            <textarea
                                id="note"
                                rows="4"
                                className="mt-1 border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                            ></textarea>
                        </div>

                    </div>
                    <div className="flex justify-center gap-4 pt-4 text-sm">


                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-1.5 rounded">
                            Xác nhận
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

    )

}


export default HoanTatPhieuModal