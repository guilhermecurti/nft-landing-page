export default function Steps() {
  return (
    <>
      <div
        className="container mx-auto py-10 md:py-20 px-3 md:px-0"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1 className="font-primary text-tertiary font-bold text-3xl md:text-6xl text-center mb-0 md:mg-8">
          Crie e venda seus NFT's
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-14 py-8">
          <div className="bg-primary text-tertiary text-center rounded-2xl border-tertiary w-full p-2 md:p-4 flex flex-col items-center gap-3 cursor-pointer hover:scale-105 transition-all">
            <img src="/img/steps-1.png" alt="" className="w-3/4" />
            <h1 className="text-2xl md:text-4xl font-primary font-bold">
              Criar Arte
            </h1>
            <p className="text-sm md:text-lg">
            Crie sua coleção, adicione links sociais, uma descrição, perfil e
              imagens de banner e defina uma taxa de vendas secundária
            </p>
          </div>
          <div className="bg-primary text-tertiary text-center rounded-2xl border-tertiary w-full p-2 md:p-4 flex flex-col items-center gap-3 cursor-pointer hover:scale-105 transition-all">
            <img src="/img/steps-2.png" alt="" className="w-3/4" />
            <h1 className="text-2xl md:text-4xl font-primary font-bold">
              Adicione seus NFT's
            </h1>
            <p className="text-sm md:text-lg">
            Carregue seu trabalho, adicione título, uma descrição e personalize seu
              NFTs com propriedades, estatísticas e conteúdo desbloqueável.
            </p>
          </div>
          <div className="bg-primary text-tertiary text-center rounded-2xl border-tertiary w-full p-2 md:p-4 flex flex-col items-center gap-3 cursor-pointer hover:scale-105 transition-all col-span-2 md:col-span-1">
            <img src="/img/steps-3.png" alt="" className="w-2/4 md:w-3/4" />
            <h1 className="text-2xl md:text-4xl font-primary font-bold">
              Liste para venda
            </h1>
            <p className="text-sm md:text-lg">
            Escolha entre leilões e listagens de preços em declínio. Você escolhe
              como você quer vender seus NFTs, e nós ajudamos você nisso!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
