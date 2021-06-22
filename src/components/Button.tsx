import { useState } from 'react';

export function Button() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
    console.log(counter);
  }

  return <button onClick={increment}>{counter}</button>;
}

// type ButtonProps = {
//   children?: string;
// };

// export function Button(props: ButtonProps) {
//   return <button>{props.children || 'Default'}</button>;
// }

// export default Button;
