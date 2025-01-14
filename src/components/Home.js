import Image from "../assets/soi-hero-banner-2024.7455aee66183ba225061.jpg";

export default function Home() {
    return (
        <div className="container">
            <img
              className="img-feat"
              src={Image} 
              alt="One student holding a laptop having a conversation with an another student."/>
            <h1>Home</h1>
            <p>
                If you are excited by the latest technological advances and have a passion for a problem-solving, 
                join us at <strong>Republic Polytechnic School of Infocomm (SOI)</strong>. 
                We will help you discover your hidden technical skills and nurture your creative digital dreams.
                We offer six diploma programmes across a wide range of infocomm discplines.
            </p>
        </div>
    )
};