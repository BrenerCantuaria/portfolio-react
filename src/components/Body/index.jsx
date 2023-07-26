import avatar from "/avatar-git.png"
import html from "/html.svg"
import js from "/js.svg"
import py from "/python-4.svg"
import java from "/java.svg"
import css from "/css.svg"
import reactIconSvg from "/react.svg"
import gif from "/giphy.gif"
import devices from "/devices.svg"
import pyInterface from "../../assets/interface.jpeg"
import hardware from "../../assets/hardware.jpeg"
import github from "/githubsvg.svg"
import linkedin from "/linkedin.svg"
import email from "/email.svg"
import javatela from "/javacrud1.jpeg"
import javatela2 from "/javacrud2.jpeg"



export default function Body() {
  return (
    <main className="bg-gray-900	">
      <section id="home" className="h-screen ">
            <div className="p-20 text-center ">
                <h1 className="title text-sm md:text-4xl text-sm ">Olá seja bem-vindo, sou estudante de análise e desenvolvimento de sistemas</h1>
                <p className="description text-sm md:text-base dm:text-justify 2xl:text-4xl ">Explore meu portfólio para conhecer melhor meu trabalho e minha paixão por desenvolvimento web. Estou ansioso para contribuir com projetos incríveis e fazer parte de desafios que impulsionem o crescimento tecnológico. Vamos trabalhar juntos para criar soluções impactantes e inspiradoras!</p>
            </div>
            <div className="flex justify-center">
                <img src={gif} alt="" className="rounded w-3/4 md:w-2/5 2xl:w-2/5"/>
            </div>
      </section>

      <section className="bg-gray-900 mb-52" id="sobremim">
            <div className="py-20 md:flex">
                <div className=" px-20">
                    <h1 className="title text-sm md:text-4xl text-sm ">Meu nome é Márcio Brener</h1>
                    <div className="description text-sm text-justify  md:text-base md:text-justify 2xl:text-2xl">
                        <p>Sou estudante de Análise e Desenvolvimento de Sistemas, iniciei no ano de 2022 na área de tecnologia, porém desde muito novo sempre tive interesse em  me formar e profissionalizar nessa área, através da minha dedicação e esforço acredito que posso chegar longe. Apesar de ser novo na área de tecnologia sou formado como técnico em meio ambiente pelo Instituto Federal de Educação, Ciência e Tecnologia do Pará, mas acabei migrando para tecnologia da informação (T.I), hoje busco me tornar um profissional em front-end, umas das áreas dentre tantas do mundo de T.I.</p>
                    </div>
                </div>
                <img src={avatar} alt="" className="m-auto w-3/4 md:w-2/5 2xl:w-2/5" />
            </div>
        </section>

        <section className="bg-gray-900 mb-52">
            <div className="py-20 sm:flex-col justify-center items-center">
                <div className="px-20">
                    <h1 className="title text-sm md:text-4xl text-sm ">Primeiros passos na programação</h1>
                    <div className="description text-sm text-justify  md:text-base md:text-justify 2xl:text-2xl">
                        <p>Navegando pela internet em busca do primeiro contato com a programação, me deparei com diversos vídeos sobre desenvolvimento web. Foi nesse momento que meu interesse por esse assunto despertou. Após alguns dias de pesquisa, percebi que desenvolver websites representava uma grande oportunidade para iniciar meus primeiros contatos com a programação.Decidi, então, investir tempo para estudar e aprofundar meus conhecimentos nessa área fascinante. Foi assim que descobri algo que realmente me chamou a atenção: aprender como funciona a criação de sites. </p>
                    </div>
                </div>
                    <img src={devices} alt="" className="m-auto h-auto w-3/4 md:w-2/5 2xl:w-1/4"/>
            </div>
        </section>

        <section className="bg-gray-900  flex-col pb-40">
          <div className="text-center py-3.5">
                <h1 className="title text-sm md:text-4xl">Essas são as tecnologias que eu utilizo</h1>
          </div>
            <div className="flex flex-wrap justify-around py-20"> 
                    <div className="bg-gray-300 rounded flex-col items-center p-2 md:p-8 hover:-translate-y-1 cursor-pointer m-2  ">
                        <img src={html} alt="" className="w-40 h-40"/> 
                        <p className="text-center text-teal-700 font-bold pt-2">HTML</p>
                    </div>
                    
                    <div className="bg-gray-300 rounded flex-col items-center p-2 md:p-8 hover:-translate-y-1 cursor-pointer m-2 ">
                        <img src={css} alt="" className="w-40 h-40"/> 
                        <p className="text-center text-teal-700 font-bold pt-2">   CSS</p>
                    </div>
                    

                    <div className="bg-gray-300 rounded flex-col items-center p-2 md:p-8 hover:-translate-y-1 cursor-pointer m-2 ">
                        <img src={js} alt="" className="w-40 h-40"/> 
                        <p className="text-center text-teal-700 font-bold pt-2">JAVASCRIPT</p>
                    </div>
                    
                    <div className="bg-gray-300 rounded flex-col items-center p-2 md:p-8 hover:-translate-y-1 cursor-pointer m-2 ">
                        <img src={reactIconSvg} alt="" className="w-40 h-40"/> 
                        <p className="text-center text-teal-700 font-bold pt-2">REACT</p>
                    </div>     
            </div>
        </section>
        
        <section className="bg-gray-900  flex-col ">
          <div className="text-center py-3.5">
                <h1 className="title text-sm md:text-4xl">Linguagens de programção back-end que estou estudando no momento</h1>
          </div>
            <div className="flex  flex-wrap gap-4  justify-around py-20"> 
                    <div className="bg-gray-300 rounded flex-col items-center p-2 md:p-8 hover:-translate-y-1 cursor-pointer ">
                        <img src={py} alt="" className="w-40 h-40"/> 
                        <p className="text-center text-teal-700 font-bold pt-2">PYTHON</p>
                    </div>
                    
                    <div className="bg-gray-300 rounded flex-col items-center p-2 md:p-8 hover:-translate-y-1 cursor-pointer">
                        <img src={java} alt="" className="w-40 h-40 rounded"/> 
                        <p className="text-center text-teal-700 font-bold pt-2">JAVA</p>
                    </div>
            </div>
        </section>
        
        <section className="bg-gray-900 mb-56">
            <div className="flex py-20">
                <div className="flex-colum px-20">
                    <h1 className="title text-sm md:text-4xl text-sm ">Explorando o Mundo do Back-End: Meu Interesse por Python e Java durante a Faculdade</h1>
                    <div className="description text-sm text-justify  md:text-base md:text-justify 2xl:text-2xl">
                        <p>Durante minha trajetória acadêmica na faculdade, meu caminho pelo desenvolvimento web me levou a descobrir o fascinante universo do back-end.Foi nesse contexto que me deparei com duas linguagens que me encantaram de maneira especial: Python e Java. Ao aprender sobre o back-end, percebi como Python é versátil e possui uma sintaxe clara, tornando-a atraente para soluções ágeis e eficientes. Por outro lado, Java, com sua robustez e capacidade de lidar com projetos complexos, me impressionou, especialmente ao perceber sua relevância em grandes sistemas empresariais.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="projetos">
            <div>
                <h1 className="title text-sm md:text-4xl text-center p-2">PROJETOS</h1>
            </div>
            <div className="flex flex-col items-center justify-center ">
                
                    <div  className="flex-colum px-20">
                        <h2 className="title text-sm md:text-4xl text-sm text-center">Interface de automação em python 3</h2>

                     <p className="description text-sm text-justify  md:text-base md:text-justify 2xl:text-2xl mb-2">O projeto de Internet das Coisas (IoT) desenvolvido na faculdade é um exemplo fascinante de integração de tecnologias para automação. Utilizando Python 3, Arduino e a linguagem C, a iniciativa tem como objetivo criar uma solução completa de comunicação entre uma placa Arduino e uma interface Python. Para alcançar esse propósito, foi criado um acesso intermediário que possibilita a comunicação serial entre as duas tecnologias. A integração de ambas as plataformas é feita por meio de uma conexão única, permitindo o envio e recebimento de dados de forma eficiente. A interface Python é criada com o auxílio da biblioteca Py Simple GUI, que oferece uma maneira simples e amigável de construir interfaces gráficas. Nela, foram adicionados botões com imagens que, ao serem clicados, desencadeiam eventos de comunicação.</p>
                    </div>
                    <div>
                    <img src={pyInterface} alt="" className="rounded w-3/4 md:w-4/5 m-auto p-2"/>
                    <img src={hardware} alt=""    className=" md:w-96 h-96 m-auto rounded text-center"/>
                </div>
            </div>
            <div className="p-20"> 
                <div>
                    <h1 className="title text-sm md:text-4xl text-sm text-center">Java Crud com JavaFX e integração com postgresql</h1>
                    <p className="description text-sm text-justify  md:text-base md:text-justify 2xl:text-2xl mb-2">O projeto Java CRUD com Interface JavaFX e Integração com PostgreSQL é uma aplicação desenvolvida como parte da disciplina de Introdução ao Java, sem a utilização de frameworks externos, buscando aplicar os conceitos fundamentais da linguagem Java e JavaFX. A aplicação permite realizar operações básicas de um sistema CRUD, como adicionar, visualizar, atualizar e excluir registros de pessoas e empresas em um banco de dados PostgreSQL. A conexão com o banco de dados é implementada seguindo o padrão de projeto Singleton para garantir eficiência e reutilização da instância de conexão. </p>
                </div>
                <div >
                    <img src={javatela2} alt="" className="rounded-lg m-auto p-1" />
                    <img src={javatela} alt="" className="rounded-lg m-auto p-1" />
                </div>
               
            </div>

            <div className="h-screen flex justify-center items-center ">
                <div className="title text-sm md:text-4xl text-center ">
                    <h1>Visite meu perfil no github e conheça outros projetos</h1>
                    <a href="https://github.com/BrenerCantuaria?tab=repositories" target="_blank">
                    <img src={github} alt="" className=" w-20 md:w-40 h-auto mt-4 m-auto p-1 bg-gray-700  rounded"/>
                    </a>
                </div>
            </div>
        </section>
     
        <section id="contato" className="bg-gray-900  flex-col h-2/5">
          <div className="text-center py-3.5">
                <h1 className="title text-sm md:text-4xl">Contato</h1>
          </div>
            <div className="flex justify-around py-20"> 
                    <div className="bg-gray-700 rounded p-2  cursor-pointer">
                        <a href="mailto:brenercanturiasantos@gmail.com" >
                        <img src={email} alt="" className="w-20 h-auto md:w-40"/>
                        <h1 className="text-center">Email</h1>
                        </a>
                    </div>
                    <div className="bg-gray-700 rounded p-2">
                        <img src={linkedin} alt="" className="w-20 h-auto md:w-40 " />
                        <h1 className="text-center">Linkedin</h1>
                    </div>
            </div>
        </section>
        
    </main>
  )
}
