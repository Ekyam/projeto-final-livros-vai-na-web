import s from './inicio.module.scss';
import reading from '../../assets/reading.png';
import community from '../../assets/community.png';
import balance from '../../assets/balance.png';
import transform  from '../../assets/transform.png';


export default function Inicio(){
    return(
<main>
    <section className={s.primeiraSessaoInicio}>
 <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
    </section>
    
<section className={s.porqueDoarSection}>
    <h2>Por que devo doar?</h2>

<section className={s.cardsMotivos}>

<section>
<img src={ community } alt="Imagem ilustrando círculo social de 4 pessoas." />
<p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
</section>

<section>
    <img src={ reading } alt="Imagem ilustrando uma pessoa lendo um livro" />
    <p>Estimula o hábito da leitura e o aprendizado contínu</p>
</section>

<section>
    <img src={ transform } alt="Imagem ilustando 6 pessoas transformando o mundo" />
    <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
</section>

<section>
    <img src={ balance } alt="Imagem ilustando balança representando a igualdade." />
    <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
</section>

</section>
</section>
     </main>
    );
}