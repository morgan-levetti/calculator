import '../App.css';
function GreatOperationButton(props) {

   
    
return(
    <div className="operators">
             
    <button onClick={() => props.upDateCalc('/')}>/</button>
    <button onClick={() => props.upDateCalc('*')}>*</button>
    <button onClick={() => props.upDateCalc('+')}>+</button>
    <button onClick={() => props.upDateCalc('-')}>-</button>

    
</div>
)
    









}
export default GreatOperationButton;