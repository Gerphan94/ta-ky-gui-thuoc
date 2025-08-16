import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";

function Pagination({ currentPage, setCurrentPage, totalPage }) {

    const range = (start, end) => {
        const length = end - start + 1;
        return Array.from({ length }, (_, i) => start + i);
    };


    const getVisiblePages = () => {
       
        return normalVoew();;
    };

    const normalVoew = () => {
        const visiblePages = [];
        if (totalPage <= 7) {
            for (let i = 1; i <= totalPage; i++) {
                visiblePages.push(i);
            }
        } else {
            visiblePages.push(1);
            if (currentPage <= 3) {
                visiblePages.push(...range(2, 5));
                visiblePages.push('...');
                visiblePages.push(totalPage);

            } else if (currentPage >= totalPage - 2) {
                visiblePages.push('...');
                visiblePages.push(...range(totalPage - 4, totalPage));
            }
            else {
                visiblePages.push('...');
                const startPage = Math.max(2, currentPage - 1);
                const endPage = Math.min(totalPage - 1, currentPage + 1);

                for (let i = startPage; i <= endPage; i++) {
                    visiblePages.push(i);
                }
                if (currentPage < totalPage - 2) {
                    visiblePages.push('...');
                }
                visiblePages.push(totalPage);
            }
        }
        return visiblePages;
    };

    const mobileView = () => {
        const visiblePages = []

        const startPage = Math.max(1, currentPage === totalPage ? currentPage - 2 : currentPage - 1);
        const endPage = Math.min(totalPage, currentPage === 1 && totalPage > 3 ? 3 : currentPage + 1);

        for (let i = startPage; i <= endPage; i++) {
            visiblePages.push(i);
        }
        return visiblePages;

    }


    return (
        <div className="px-4 py-1 bg-slate-100 w-full flex flex-row-reverse justify-between">
            <div className="flex gap-1">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="w-10 flex items-center justify-center text-lg bg-white border border-gray-300 rounded-md hover:bg-gray-100 disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:cursor-not-allowed">
                    <BiChevronsLeft />
                </button>
                {getVisiblePages().length === 0 ?
                    <button
                        disabled={true}
                        className={` w-10 text-md px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-100 disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:cursor-not-allowed`}
                    >
                        ...
                    </button>
                    :
                    getVisiblePages().map((page, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(page)}
                            disabled={page === currentPage || page === '...'}
                            className={`${page > 999 ? 'text-xs':''}  ${page === currentPage ? '!bg-blue-500 !text-white' : 'bg-white text-gray-700'} w-10 text-md px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-100 disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:cursor-not-allowed select-none`}
                        >
                            {page}
                        </button>
                    ))}
                <button
                    disabled={currentPage === totalPage || totalPage === 0}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="w-10 flex items-center justify-center text-lg bg-white border border-gray-300 rounded-md hover:bg-gray-100 disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:cursor-not-allowed">
                    <BiChevronsRight />

                </button>
            </div>
        </div>
    );
}

export default Pagination;