import { createContext,useState,useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
export const LinkContext = createContext();

const LinkContextProvider = (props) => {


  const [links,setLinks] = useState([
    {id:uuidv4(),POİNTS:'10' , NAME:'HEPSİBURADA',URL:'www.hepsiburada.com'},
    {id:uuidv4(),POİNTS:'5' , NAME:'Trendyol',URL:'www.trendyol.com'},
    {id:uuidv4() ,POİNTS:'7' , NAME:'Gitti gidiyor',URL:'www.gittigidiyor.com'},
    {id:uuidv4() ,POİNTS:'8' , NAME:'Çiçek Sepeti',URL:'www.çiçeksepeti.com'},
    {id:uuidv4() ,POİNTS:'9' , NAME:'Kitapkurdu',URL:'www.kitapkurdu.com'},
    {id:uuidv4(),POİNTS:'3' , NAME:'Amazon',URL:'www.Amazon.com'}
    
  ])

  
  useEffect(() => {
    const links = localStorage.getItem('links')
    setLinks(JSON.parse(links))
  },[]);


  useEffect(() => {
   localStorage.setItem('links',JSON.stringify(links))
  });


  const addlink = (POİNTS,NAME,URL) => {
    setLinks([...links,{id:uuidv4(),POİNTS,NAME,URL}])
  }

  const deletelink =(id) => {
    setLinks(links.filter(link => link.id !==id))
  }

  return (
      <LinkContext.Provider value={{links,addlink,deletelink}}>
            {props.children}
      </LinkContext.Provider>
  )
}

export default LinkContextProvider;



