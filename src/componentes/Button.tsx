
/*type ButtonProps = {
  text?:string,



  const [counter, setCounter] = useState(0) 

  const increment = () => {
    setCounter(counter + 1);
    console.log(counter)
  }
}*/

import { ButtonHTMLAttributes }  from 'react';
import '../globalStyles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {

  return (
    <button className="button" {...props} />
  )
}
