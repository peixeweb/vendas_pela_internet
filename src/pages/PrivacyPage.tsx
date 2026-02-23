import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Home, Search, Receipt, User, Settings, Shield, ShoppingCart, Lock, Database, Eye, ArrowRight } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans pb-24">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50 px-4 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center text-blue-600 font-medium">
          <ChevronLeft className="w-6 h-6 -ml-2" />
          <span className="text-lg">Ajustes</span>
        </Link>
        <h1 className="text-lg font-bold text-gray-900 absolute left-1/2 -translate-x-1/2">Política de Privacidade</h1>
        <div className="w-10"></div> {/* Spacer for centering */}
      </header>

      {/* Progress Bar */}
      <div className="fixed top-14 w-full bg-white z-40 px-6 py-4 border-b border-gray-100 shadow-sm">
        <div className="flex justify-between items-center mb-2 text-xs font-semibold tracking-wide uppercase text-blue-600">
          <span>Progresso da Leitura</span>
          <span className="text-gray-400">40% lido</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-1.5">
          <div className="bg-blue-600 h-1.5 rounded-full w-[40%]"></div>
        </div>
      </div>

      {/* Content */}
      <main className="pt-40 px-6 max-w-lg mx-auto space-y-10">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">Compromisso de Privacidade Peixeweb</h2>
          <p className="text-gray-400 text-sm italic mb-6">Última atualização: 23/02/2026</p>
          <p className="text-gray-600 leading-relaxed">
            No <span className="font-bold text-blue-600">Peixeweb</span>, sua confiança é nosso ativo mais valioso. Esta política descreve como protegemos suas informações pessoais enquanto você aproveita nosso marketplace aquático e serviços comunitários.
          </p>
        </div>

        {/* Section 1 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Database className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-blue-600">1. Informações que Coletamos</h3>
          </div>
          
          <div className="bg-blue-50 rounded-2xl p-6 mb-4 border border-blue-100">
            <h4 className="font-bold text-gray-900 mb-3">Informações que você fornece:</h4>
            <ul className="space-y-3">
              {[
                "Detalhes da conta (Nome, e-mail, telefone)",
                "Informações de pagamento para transações seguras",
                "Fotos de perfil e anúncios de aquarismo"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <div className="bg-blue-600 rounded-full p-0.5 mt-0.5">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6">
            <h4 className="font-bold text-gray-900 mb-2">Dados Automatizados:</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Coletamos automaticamente informações do dispositivo, endereços IP e padrões de uso para otimizar sua experiência de navegação em nossas plataformas.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Eye className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-blue-600">2. Como Usamos Seus Dados</h3>
          </div>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            Seus dados nos ajudam a mergulhar mais fundo no fornecimento de uma experiência personalizada. Nós os usamos para:
          </p>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="bg-blue-100 p-3 rounded-xl">
                <ShoppingCart className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Facilitar Negociações</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Conectando compradores e vendedores de forma segura.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Prevenção de Fraudes</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Mantendo o ecossistema seguro contra bots e agentes maliciosos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Lock className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-blue-600">3. Seus Direitos de Privacidade</h3>
          </div>
          
          <div className="border-l-4 border-blue-600 pl-6 py-2 space-y-6">
            <p className="text-gray-600 leading-relaxed">
              Independentemente de onde você mora, o Peixeweb garante a todos os usuários o direito de <span className="text-blue-600 font-bold underline decoration-2 underline-offset-2">Acessar</span>, <span className="text-blue-600 font-bold underline decoration-2 underline-offset-2">Retificar</span> ou <span className="text-blue-600 font-bold underline decoration-2 underline-offset-2">Excluir</span> seus dados pessoais a qualquer momento.
            </p>
            
            <a href="mailto:peixeweb@gmail.com" className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-colors w-full sm:w-auto inline-block text-center">
              Solicitar Exportação de Dados
            </a>
          </div>
        </section>

        {/* Contact Card */}
        <div className="bg-[#0f172a] rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">Tem alguma dúvida?</h3>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              Nosso escritório de proteção de dados está aqui para ajudar com qualquer questão relacionada à sua privacidade.
            </p>
            
            <a href="mailto:peixeweb@gmail.com" className="bg-white text-gray-900 w-full py-4 rounded-xl font-bold flex items-center justify-between px-6 hover:bg-gray-100 transition-colors group">
              <span>Contatar Equipe de Privacidade</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
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
          <User className="w-6 h-6 fill-current" />
          <span className="text-[10px] font-medium">Perfil</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400">
          <Settings className="w-6 h-6" />
          <span className="text-[10px] font-medium">Ajustes</span>
        </div>
      </nav>
    </div>
  );
};

export default PrivacyPage;
