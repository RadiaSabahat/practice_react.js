import './props.css'
//props
// function CoreConcept(props){
//   return(
//      <li>
//   <img src={props.img} alt={props.title} />
//   <h3>{props.Title}</h3>
//   <p>{props.description}</p>
//   </li>);
// };

// function CoreConcept(props){
//   return(
//      <li>
//   <img src={props.img} alt={props.title} />
//   <h3>{props.Title}</h3>
//   <p>{props.description}</p>
//   </li>);
// };

//object destructuring method 
export default function CoreConcept({image, title, description}){
    return(
       <li>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    </li>);
  };