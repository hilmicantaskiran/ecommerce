import React from 'react';
import { useState, useEffect } from 'react';

type PagesProps = {
    pages: number;
    setCurrentPage: (page: number) => void;
};

const Pagination: React.FunctionComponent<PagesProps> = ({...props}) => {
    const { pages, setCurrentPage } = props;
    const numOfPages = [];

    for (let i = 1; i <= pages; i++) {
        numOfPages.push(i);
    }

    const [currentPage, setCurrent] = useState(1);

    useEffect(() => {
        setCurrentPage(currentPage);
    } , [currentPage, setCurrentPage]);

    return(
        <div className='my-10'>
            <ul className="inline-flex -space-x-px">
                <li className={currentPage === 1 ? "disabled" : ""}>
                    <a 
                        href="#!" className="block py-2 px-3 ml-0 leading-tight text-gray-500"
                        onClick={() => setCurrent(currentPage - 1)}
                    >
                        <span className="sr-only">Previous</span>
                        <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    </a>
                </li>

                { numOfPages.map((page, index) => {
                    return (
                        <li key={index} className={currentPage === page ? "mt-1 bg-white rounded-lg" : "mt-1"}>
                            <a
                                href="#!" className={currentPage === page ? "py-2 px-3 leading-tight text-[#2a59fe]" : "py-2 px-3 leading-tight text-gray-500 hover:text-black"}
                                onClick={() => setCurrent(page)}
                            >
                                {page}
                            </a>
                        </li>
                    )
                })}

                <li className={currentPage === numOfPages.length ? "disabled" : ""}>
                    <a 
                        href="#!" className="block py-2 px-3 ml-0 leading-tight text-gray-500"
                        onClick={() => setCurrent(currentPage + 1)}
                    >
                        <span className="sr-only">Next</span>
                        <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default Pagination;