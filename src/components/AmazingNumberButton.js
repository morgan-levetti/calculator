import '../App.css';
function AmazingNumberButton (props) {

    const createDigits = () => {
        const digits = [];
    
        for (let i = 1; i < 10; i++) {
          digits.push(

            <button onClick={() => props.upDateCalc(i.toString())
            } key={i}>
              {i}
            </button>
          )
        }
    
        return digits;
    
    
      }



    return(
        <div className='digits'>
        {createDigits()}
    </div>
    )
    



}
export default AmazingNumberButton;