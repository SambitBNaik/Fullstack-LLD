import logo from './logo.svg';
import './App.css';
import Article from './Components/Article';
import { useRef } from 'react';
import {useReactToPrint} from 'react-to-print';
import Html2Pdf from "html2pdf.js";

function App() {
  const componentRef=useRef();
  const handlePrint= useReactToPrint({
    content: ()=> componentRef.current,
    print: async (printIframe)=>{
      const document= printIframe.contentDocument;
      if(document){
        const html=document.getElementsByClassName("App")[0];
        const options={
          margin: 0,
          filename:"the-joy..pdf",
        }
        const exporter= new Html2Pdf(html,options);
        await exporter.getPdf (options);
      }
    }
  });
  return (
    <div className="App">
      <Article ref={componentRef}/>
      <button onClick={handlePrint}>Print Article</button>
    </div>
  );
}

export default App;
