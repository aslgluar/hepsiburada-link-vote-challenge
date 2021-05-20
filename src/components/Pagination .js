import {useState,useEffect} from 'react';

const Pagination = ({pages,setCurrentPage,currentLinks,links}) => {

        

        const numofPages = [];

        for (let i=1; i<= pages; i++) {
            numofPages.push(i);
        }

        const [currentButton,setCurrentButton] =useState(1);

        useEffect(() => {
         setCurrentPage(currentButton)
        }, [currentButton,setCurrentPage]);

        return(
            <div className="clearfix">
				<div className="hint-text">Showing <b>{currentLinks.length}</b> out of <b>{links.length}</b> entries</div>
				<ul className="pagination">
					<li className={`${currentButton === 1 ? 'page-item disabled' : 'page-item'}`}
                    onClick = { () => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}
                    ><a href="#">Previous</a></li>

                        {

                            numofPages.map((page,index) => {
                                return (
                                    <li key={index} class={`${currentButton === page ? 'page-item active' : 'page-item'}`}><a href="#!" class="page-link"
                                    onClick = {() => setCurrentButton(page)}
                                    >{page}</a></li>
                                        
                                )
                            })
                        }

                    <li className={`${currentButton === numofPages.length ? 'page-item disabled' : 'page-item'}`}
                    onClick = { () => setCurrentButton((prev) => prev === numofPages.length ? prev : prev + 1)}
                    ><a href="#">Next</a></li>
				</ul>
			</div>
        )
}

export default Pagination;
