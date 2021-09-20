import '../App.css';
function BeautifullScreen(props) {
      
    return ( <div className="display">
    
              {/* {props.result ? <span>({props.result})</span> : ''}&nbsp; */}
              {props.calc || "0"}
            </div> 
)
           

}
export default BeautifullScreen;