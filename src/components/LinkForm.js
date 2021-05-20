import React,{useState,useContext}from 'react';
import { Form, Button } from 'react-bootstrap';
import Linklist from './Linklist'
import {LinkContext} from '../contexts/LinkContext';


const LinkForm = () => {


  const {addlink} = useContext(LinkContext);


  // const [POİNTS,setPoints] = useState('');
  // const [NAME,setName] = useState('');
  // const [URL,setUrl] = useState('');

  const [newlink,setNewlink] = useState({
    POİNTS:"", NAME:"",URL:""
  })

  const {POİNTS,NAME,URL} =newlink;

  const onInputChange = (e) => {
    setNewlink({...newlink, [e.target.name]: e.target.value})
}

  const handlesubmit = (e) => {
  e.preventDefault();
 addlink(POİNTS,NAME,URL)
}

  return(
    <Form onSubmit={handlesubmit}>
       <Form.Group>
      <Form.Label>add point:</Form.Label>
        <Form.Control
         type="text"
          placeholder="Add a Point"
          name="POİNTS"
          value={POİNTS}
          onChange={e => onInputChange(e)}
          required

          />
      </Form.Group>
      <Form.Group>
      <Form.Label>Link Name :</Form.Label>
        <Form.Control
         type="text"
          placeholder="Add New Link"
          name="NAME"
          value={NAME}
          onChange={e => onInputChange(e)}
          required

          />
      </Form.Group>
      <Form.Group>
      <Form.Label>Link URL :</Form.Label>
        <Form.Control
         type="text"
          placeholder="e.g.http//abc.xyz"
          name="URL"
          value={URL}
          onChange={e => onInputChange(e)}
          required

          />
      </Form.Group>
      <Button variant="primary" type="submit" block>
    ADD NEW LİNK
  </Button>
    </Form>
  )
}
export default LinkForm;


