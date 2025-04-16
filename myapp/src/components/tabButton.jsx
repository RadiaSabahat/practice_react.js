// export default  function TabButtons(props){
//     return(
//         <li><button>{ptops.children}</button></li>
//     )
// };

//by destructuring
export default function TabButtons({ children, onSelect }) {
  return (
    <li>
      <button className="active" onClick={onSelect}>{children}</button>
    </li>
  );
}

// export default  function TabButtons({lable}){
//     return(
//         <li><button>{lable}</button></li>
//     )
// };
