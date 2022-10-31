function Title({text, styles}){
    return (
        <h1 className={`text-darkgrey font-medium text-2xl lg:leading-large lg:text-4xl leading-basex font-graphik tracking-small ${styles}`}>{text}</h1>
    );
}
export default Title