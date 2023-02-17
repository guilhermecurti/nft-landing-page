import { FaArrowRight } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div
        className="border-t-4 border-tertiary mt-16 py-10 text-tertiary"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="container mx-auto">
          <div className="grid grid-col-2 md:grid-cols-5 gap-2 md:gap-6 text-center md:text-left">
            <div className="col-span-2">
              <a href="#x" className="text-5xl line-through font-bold">
                GC
              </a>
              <p className="mt-3 pr-5">
              O maior mercado de NFT 3D. Autêntico e verdadeiramente único na
                criação digital. Assinado e emitido pelo criador. Tecnologia BlockChain
              </p>
            </div>
            <div>
              <h2 className="font-primary font-bold text-2xl">Caminhos</h2>
              <p className="mt-6">Sobre</p>
              <p>Blog</p>
              <p>BlockChain</p>
            </div>
            <div>
              <h2 className="font-primary font-bold text-2xl">Contatos</h2>
              <p className="mt-6">Central Atendimento</p>
              <p>Comunidade</p>
              <p>Criadores</p>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start">
              <h2 className="font-primary font-bold text-2xl">Inscreva-se</h2>
              <button className="bg-transparent hover:bg-primary mt-6 text-tertiary border-tertiary hover:border-primary px-8 py-3 border-2 rounded-full font-semibold transition-all flex items-center gap-2">
                Obter NFT's <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
