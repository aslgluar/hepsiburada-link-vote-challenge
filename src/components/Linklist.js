import {useContext} from 'react'
import {useState,useEffect} from 'react';
import Link from './Link';
import {Button, Modal} from 'react-bootstrap';
 import LinkForm from './LinkForm'
// import { v4 as uuidv4 } from 'uuid';
import {LinkContext} from '../contexts/LinkContext';
import { Alert } from 'react-bootstrap';
import Pagination  from './Pagination ';


const Linklist = () => {

 const {links} = useContext(LinkContext);

  const [showAlert,setShowAlert] = useState(false);
  const [show,setShow] = useState(false);

  const [currentPage,setCurrentPage] = useState(1);
  const [linksPerPage] =useState(5);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //const handleShowAlert = () => setShowAlert(true);

    const handleShowAlert = () => {
      setShowAlert(true);
      setTimeout(()=>{
        setShowAlert(false);
      },2000);
    };

  useEffect(() =>{
    handleClose();

    return () => {
      handleShowAlert();
    }
  },[links])


  const indexOfLastLink = currentPage * linksPerPage;
  const indexOfFirstLink = indexOfLastLink - linksPerPage;
  const currentLinks = links.slice(indexOfFirstLink, indexOfLastLink);
  const totalPagesNum =Math.ceil(links.length / linksPerPage);

  return(
      <>

     <div className="header-wrapper">
        <div className="logo-wrapper">
            <img src="../img/hepsiburadaLogo.png" alt="" class="logo"></img>
            </div>
        <div className="title-wrapper">
            <p className="title" >
                <span className="link">Link</span>
                <span className="vote">VOTE</span>
                Challenge
            </p>
        </div>
    </div>

       
    <div className="table-title">
    <div className="row">
      <div className="col-sm-6">
        <h2>Link list </h2>
      </div>
      <div className="col-sm-6">
        <Button 
        onClick={handleShow}
        className="btn btn-success text-white" 
        data-toggle="modal">
        <i className="material-icons">&#xE147;
        </i> 
        <span>Add New Link</span></Button>					
      </div>
    </div>
  </div>

  <Alert show={showAlert} variant="success" > process success! </Alert>

    <table className="table table-striped table-hover">
				<thead>
					<tr>
						<th>POİNTS</th>
						<th>NAME</th>
            <th>URL</th>
            <th></th>
					</tr>
				</thead>
				<tbody>

        <Link links={currentLinks}/>

          {/* {
            currentLinks.sort((a,b) => (a.NAME <b.NAME ? -1 : 1 )).map((link) => ( baş harflerine göre sıralama yapar
              <tr key={link.id}>
              <Link links={links}/>
              </tr>
            ))
          } */}
       </tbody>
       </table>

       <Pagination 
       pages = {totalPagesNum} 
       setCurrentPage = {setCurrentPage}
       currentLinks = {currentLinks}
       links = {links}
        />

        <Modal show={show} onhide={handleClose}>
          <Modal.Header className="modal-header"  >
              <Modal.Title>
                Add Link
              </Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <LinkForm />
          </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose} >Close</Button>
            </Modal.Footer>
        </Modal>

       </>
  )
}



export default Linklist;
