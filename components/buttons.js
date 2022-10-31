function Buttons({styles, text, onclick}){
return(
<button className={`border rounded-full leading-4 px-5 py-3 focus:outline-none  ${styles}`} onClick={onclick}>{text}</button>
)
}
export default Buttons