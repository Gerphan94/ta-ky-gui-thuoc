

function XacNhanModal({ show, setShow }) {


    if (!show) return null

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto px-6 py-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Xác nhận phiếu?</h2>
                    <div className="flex justify-center gap-4 pt-4 text-sm">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-1.5 rounded"
                             onClick={() => setShow(false)}
                        >
                            Đồng ý
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


export default XacNhanModal