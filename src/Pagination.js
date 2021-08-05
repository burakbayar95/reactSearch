import React from 'react'

 const Pagination = ({postPerPage,totalPosts,paginate,currentPage}) => {
     const pageNumbers=[];

     for(let i=1;i<=Math.ceil(totalPosts / postPerPage);i++){
         pageNumbers.push(i);

     }


    return (
        <nav>
            <ul className="pagination">
                <li className="page-item">
      <a class="page-link" onClick={()=> paginate(currentPage===1 ? currentPage=1 :  pageNumbers=>pageNumbers-1)}  tabindex="-1">Previous</a>
      {console.log(currentPage)}
    </li>
                
                {pageNumbers.map(number=>(
                    <li key={number} className="page-item">
                       <a onClick={()=> paginate(number)} className="page-link">
                           {number}
                           </a> 

                    </li>
                    
                ))}

<li class="page-item">
      <a className="page-link" onClick={()=> paginate(currentPage===pageNumbers.length ? currentPage=pageNumbers.length :  pageNumbers=>pageNumbers-1)}  tabindex="-1">Previous</a>
    </li>

            </ul>
        </nav>
    );
}
export default Pagination