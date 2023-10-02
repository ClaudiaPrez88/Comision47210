
import { useCount } from "./useCount";

const Contador = () => {
    const {count,decrementar,incrementar,reset} = useCount(1,0,10);
    
  return (
    <div>
        <div>{count}</div>
        <button onClick={decrementar}>-</button>
        <button onClick={incrementar}>+</button>
        <button onClick={reset}>Resetear</button>

    </div>
  )
}

export default Contador