import React from "react";

interface BlogPaginationProps {
    nPages: number,
    currentPage:number,
    setCurrentPage:React.Dispatch<React.SetStateAction<number>>,

}

const BlogPagination: React.FC<BlogPaginationProps> = ({nPages , currentPage , setCurrentPage})=>{

    const pageNumbers = [...Array(nPages+1).keys()].slice(1);

    const goToNextPage = () =>{
        if(currentPage !== nPages){
            setCurrentPage(currentPage + 1)
        }
    }

    const goToPrevPage = () =>{
        if(currentPage !== 1){
            setCurrentPage(currentPage -1 )
        }
    }

    return(
        <>
        <nav>
             <ul className='pagination justify-content-center'>
                 <li className="page-item-text"> {/* Previous page button */}
                     <a className="page-link" 
                         onClick={goToPrevPage}  // Click event handler for navigating to previous page
                         href='#'>
                         
                         Prev
                     </a>
                 </li>
                  {/* Mapping through each page number */}
                 {pageNumbers.map(pgNumber => (
                     <li key={pgNumber} 
                         className= {`page-item ${currentPage == pgNumber ? 'active' : ''} `} >
 
                         <a onClick={() => setCurrentPage(pgNumber)}  // Click event handler for setting the current page
                             className='page-link' 
                             href='#'>
                             
                             {pgNumber}
                         </a>
                     </li>
                 ))}
                 <li className="page-item-text"> {/* Next page button */}
                     <a className="page-link" 
                         onClick={goToNextPage} // Click event handler for navigating to next page
                         href='#'>
                         
                         Next
                     </a>
                 </li>
             </ul>
         </nav>
        </>
    )
}

export default BlogPagination;