import {  FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import './Icon.css';
const Icon = () => {
    return (
        <>
            <div className='icons'>
                <a href="https://github.com/anurag-10--git" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/anurag-mohan-19903b259/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href="https://www.facebook.com/anurag.mehra.92/" target="_blank" rel="noreferrer"><FaFacebook /></a>
            </div>

        </>
    )
}
export default Icon;