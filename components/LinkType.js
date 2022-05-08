import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const LinkType = ({link, linkClass, linkClickHandler, children}) => {

    const [ returnElement, setReturnElement ] = useState(<></>)
    
    useEffect(()=>{
        const createElements = () =>{

            var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
           //Checking Android 
            if (/android/i.test(userAgent)) {
                if(link==="instagram"){
                    return(
                        <div className={linkClass} onClick={()=>linkClickHandler("https://www.instagram.com/atelier_gerbrand/","intent://instagram.com/_u/atelier_gerbrand#Intent;package=com.instagram.android;scheme=https;end")}>
                            <Image src={`/img/${link}.png`} height={30} width={30} alt={`${link} link`}/>
                            {children}
                        </div>
                    )
                }
                else if(link==="facebook"){
                    return(
                        <div className={linkClass} onClick={()=>linkClickHandler("https://www.facebook.com/Atelier-Gerbrand-100388695087700/","fb://page/100388695087700")}>
                            <Image src={`/img/${link}.png`} height={30} width={30} alt={`${link} link`}/>
                            {children}
                        </div>
                    )
                }
            }
    
            // iOS detection from: http://stackoverflow.com/a/9039885/177710
            if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                if(link==="instagram"){
                    return(
                    <div className={linkClass} onClick={()=>linkClickHandler("https://www.instagram.com/atelier_gerbrand/","instagram://user?username=atelier_gerbrand")}>
                        <Image src={`/img/${link}.png`} height={30} width={30} alt={`${link} link`}/>
                        {children}
                    </div>
                )}
                else if(link==="facebook"){
                    return(
                    <div className={linkClass} onClick={()=>linkClickHandler("https://www.facebook.com/Atelier-Gerbrand-100388695087700/","fb://profile/100388695087700")}>
                        <Image src={`/img/${link}.png`} height={30} width={30} alt={`${link} link`}/>
                        {children}
                    </div>
                )}
            }
    
            //Creating regular Links
            if(link==="instagram"){
                return(
                <Link href="https://www.instagram.com/atelier_gerbrand/">
                    <a target="_blank" className={linkClass}>
                        <Image src={`/img/${link}.png`} height={30} width={30} alt={`${link} link`}/>
                        {children}
                    </a>
                </Link>
            )}
            if(link==="facebook"){
                return(
                <Link href="https://www.facebook.com/Atelier-Gerbrand-100388695087700/">
                    <a target="_blank" className={linkClass}>
                        <Image src={`/img/${link}.png`} height={30} width={30} alt={`${link} link`}/>
                        {children}
                    </a>
                </Link>
            )}
        }
        setReturnElement(createElements())
    },[link, linkClass, linkClickHandler, children])

    return returnElement
}

LinkType.defaultProps = {
    linkClass: "",
}

export default LinkType