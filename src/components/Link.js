import { button } from "react-bootstrap";
import React from "react";
import {LinkContext} from '../contexts/LinkContext';
import {useContext} from 'react';


const Link = ({links}) => {


        const {deletelink} = useContext(LinkContext);
    return( 
            <>
        {
            links.map((link) => (
                <tr key={link.id}>
                <td>{link.POİNTS}</td>
                <td>{link.NAME}</td>
                <td>{link.URL}</td>
                <td>
                       <button 
                       onClick={() => deletelink(link.id)} 
                       class="btn text-danger" 
                       data-toggle="modal">
                       <i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i>
                       </button>
                 </td>                    
            </tr>
            ))
        }
           </> 
    )
  }
  
  
  
  export default Link;