
export default function Header() {
  return (
    <header className="w-full">
        <nav>
            <ul id="nav-list" className="flex justify-around	items-center	font-[Poppins] py-3.5 text-white	bg-gray-800	"  >
                <li> <a href="#home">Início</a></li>
                <li> <a href="#sobremim">Sobre mim</a></li>
                <li> <a href="#projetos">Projetos</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    </header>
  )
}
