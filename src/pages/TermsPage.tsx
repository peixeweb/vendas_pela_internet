import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Home, Search, Receipt, Gavel, User } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans pb-20">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50 px-4 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center text-blue-600 font-medium">
          <ChevronLeft className="w-6 h-6 -ml-2" />
          <span className="text-lg">Legal</span>
        </Link>
        <h1 className="text-lg font-bold text-gray-900 absolute left-1/2 -translate-x-1/2">Termos de Uso</h1>
        <div className="w-10"></div> {/* Spacer for centering */}
      </header>

      {/* Content */}
      <main className="pt-20 px-6 max-w-lg mx-auto space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Termos de Uso</h2>
          <p className="text-gray-500 text-sm">Última atualização: 23/02/2026</p>
        </div>

        <div className="prose prose-sm prose-blue text-gray-600">
          <p className="mb-6">
            Bem-vindo ao Peixeweb. Estes Termos de Uso regem o seu acesso e uso dos nossos serviços de marketing digital e consultoria. Ao contratar ou utilizar nossos serviços, você concorda em cumprir e estar vinculado a estes termos.
          </p>

          <section className="mb-6">
            <h3 className="text-lg font-bold text-blue-600 mb-3">1. Aceitação dos Termos</h3>
            <p>
              Ao acessar ou usar os serviços da Peixeweb, você concorda em cumprir estes Termos de Uso e todas as leis e regulamentos aplicáveis. Se você não concordar com qualquer um destes termos, está proibido de usar ou acessar este serviço. Os materiais contidos em nosso website e entregáveis são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-bold text-blue-600 mb-3">2. Uso do Serviço</h3>
            <p className="mb-3">
              Espera-se que os clientes utilizem os serviços da Peixeweb de forma responsável e legal. Você concorda em não:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Violar qualquer lei local, estadual, nacional ou internacional.</li>
              <li>Fingir ser qualquer pessoa ou entidade, ou declarar falsamente sua afiliação com uma pessoa ou entidade.</li>
              <li>Interferir ou interromper o serviço ou servidores conectados à nossa infraestrutura.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-bold text-blue-600 mb-3">3. Propriedade Intelectual</h3>
            <p>
              O serviço e seu conteúdo original, recursos e funcionalidade são e permanecerão de propriedade exclusiva do Peixeweb e seus licenciadores. Nossas marcas registradas e identidade visual não podem ser usadas em conexão com qualquer produto ou serviço sem o consentimento prévio por escrito do Peixeweb.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-bold text-blue-600 mb-3">4. Limitação de Responsabilidade</h3>
            <p>
              Em nenhum caso o Peixeweb, nem seus diretores, funcionários, parceiros, agentes, fornecedores ou afiliados, serão responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo, sem limitação, perda de lucros, dados, uso, fundo de comércio ou outras perdas intangíveis.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-bold text-blue-600 mb-3">5. Contato</h3>
            <p>
              Se você tiver alguma dúvida sobre estes Termos, entre em contato com nosso departamento jurídico em:
              <a href="mailto:peixeweb@gmail.com" className="text-blue-600 block mt-1 font-medium">peixeweb@gmail.com</a>
            </p>
          </section>
        </div>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 pb-6 pt-2 px-6 flex justify-between items-end z-50">
        <Link to="/" className="flex flex-col items-center gap-1 text-gray-400">
          <Home className="w-6 h-6" />
          <span className="text-[10px] font-medium">Início</span>
        </Link>
        <div className="flex flex-col items-center gap-1 text-gray-400">
          <Search className="w-6 h-6" />
          <span className="text-[10px] font-medium">Buscar</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400">
          <Receipt className="w-6 h-6" />
          <span className="text-[10px] font-medium">Pedidos</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-blue-600">
          <Gavel className="w-6 h-6 fill-current" />
          <span className="text-[10px] font-medium">Legal</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400">
          <User className="w-6 h-6" />
          <span className="text-[10px] font-medium">Perfil</span>
        </div>
      </nav>
    </div>
  );
};

export default TermsPage;
