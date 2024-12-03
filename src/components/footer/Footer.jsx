import logoFacebook from '../../assets/logoFacebook.png';
import logoInstagram from '../../assets/logoInstagram.png';
import logoLinkedin from '../../assets/logoLinkedin.png';
import logoYoutube from '../../assets/logoYoutube.png';
import twitterLogo from '../../assets/twitterLogo.png';
import s from './footer.module.scss';

export default function Footer(){
    const siteFacebook = 'https://www.facebook.com/?locale2=pt_BR&_rdr';
    const siteTwitter = 'https://x.com/?lang=pt-br';
    const siteYoutube = 'https://www.youtube.com/';
    const siteInstagram = 'https://www.instagram.com/';
    const siteLinkedin = 'https://www.linkedin.com/login/pt-br';
    return (
        
        <footer>
            <section className={s.contatosFooter}>
                <p>4002-8922</p>
                
                <nav>
            
                <a href={ siteFacebook } target="_blank" rel="noopener noreferrer"><img src={ logoFacebook } alt="Imagem ilustrativa do logo do facebook" /></a>
                <a href={ siteTwitter } target="_blank" rel="noopener noreferrer"><img src={ twitterLogo } alt="Imagem ilustrativa do logo do twitter" /></a>
                <a href={ siteYoutube } target="_blank" rel="noopener noreferrer" ><img src={ logoYoutube } alt="Imagem ilustrativa do logo do youtube" /></a>
                <a href={ siteLinkedin } target="_blank" rel="noopener noreferrer"><img src={ logoLinkedin } alt="imagem ilustrativa do logo do linkedln" /></a>
                <a href={ siteInstagram } target="_blank" rel="noopener noreferrer"><img src={ logoInstagram } alt=" Imagem ilustativa do logo do instagram" /></a>
        
                </nav>
            </section>
            <section className={ s.sessaoFinal}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
             </footer>
        
    )
}