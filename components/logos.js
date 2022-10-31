import Link from "next/link";

function Logo({url, imgurl}){
    return(
<div className="lg:px-3 px-2 mt-10 lg:mt-0">
    <Link href={url}><img src={imgurl} alt='medialogo'/></Link>

</div>
    );
}
export default Logo