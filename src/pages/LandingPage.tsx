import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  ChevronRight, 
  Play, 
  Zap, 
  BarChart2, 
  Target, 
  TrendingUp, 
  Search, 
  Instagram, 
  Mail, 
  Phone, 
  Twitter,
  MessageCircle
} from 'lucide-react';
import { motion } from 'motion/react';

const LandingPage = () => {
  const [showChat, setShowChat] = useState(false);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowChat(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqItems = [
    {
      question: "QUANTO TEMPO DEMORA PARA VER O DINHEIRO VOLTAR?",
      answer: "Você quer resultados rápidos. Nossas campanhas geram tráfego qualificado desde o dia 1. A maioria dos clientes recebe leads em 48h e vê o ROI consolidar nas primeiras semanas. Não espere meses, comece a vender agora."
    },
    {
      question: "MEU SITE É ANTIGO OU NÃO TENHO UM. ISSO IMPEDE?",
      answer: "Não deixe a tecnologia te travar. Nós criamos Landing Pages de alta conversão desenhadas especificamente para transformar visitantes em compradores. Seu site antigo não é um problema, é nossa oportunidade de criar uma máquina de vendas nova para você."
    },
    {
      question: "TENHO MEDO DE INVESTIR E NÃO TER RETORNO. QUAL A GARANTIA?",
      answer: "O medo de perder dinheiro é natural, mas nós trabalhamos com dados, não sorte. Focamos em CPA e ROAS, rastreando cada centavo. Você verá exatamente quanto volta para cada real investido. Pare de gastar e comece a investir com transparência total."
    },
    {
      question: "COMO FUNCIONA O ACOMPANHAMENTO?",
      answer: "Você nunca ficará no escuro. Diferente de agências que somem, oferecemos acesso direto ao estrategista e relatórios detalhados. Você terá um dashboard em tempo real para acompanhar seu sucesso. Tenha um parceiro de verdade no seu time."
    }
  ];

  return (
    <div className="bg-[#0a0a0a] text-white font-sans min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="https://lh3.googleusercontent.com/d/1UCMSOadfQEJ0-xsTNdVct6AMCkt-D3yr" 
              alt="Peixeweb Logo" 
              className="h-24 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#beneficios" className="hover:text-black transition-colors">BENEFÍCIOS</a>
            <a href="#resultados" className="hover:text-black transition-colors">RESULTADOS</a>
            <a href="#orcamento" className="hover:text-black transition-colors">ORÇAMENTO</a>
          </nav>

          <a 
            href="https://wa.me/5511914716715" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-6 py-2.5 rounded-full text-sm font-semibold border border-transparent transition-all"
          >
            FALAR NO WHATS
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              A Única <br />
              <span className="text-emerald-400">Agência</span> de <br />
              <span className="text-cyan-400">Tráfego</span> que <br />
              escala seu <br />
              <span className="text-blue-500">lucro.</span>
            </h1>
            
            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              Não gaste dinheiro com "testes". Use a estratégia que vai trazer clientes e transforme cliques em lucro real.
            </p>

            <div className="bg-[#111827] border border-white/10 p-6 rounded-2xl max-w-md">
              <h3 className="text-white font-bold text-lg mb-1">Você precisa de mais clientes?</h3>
              <p className="text-emerald-400 font-medium">Eu tenho mais clientes para te trazer!</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Check className="text-emerald-400 w-5 h-5" />
                <span>Estratégias Avançadas de Google & Meta Ads</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Check className="text-cyan-400 w-5 h-5" />
                <span>Foco total em ROI e Conversão Validada</span>
              </div>
            </div>

            <a href="https://wa.me/5511914716715" target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-emerald-500/20 transition-all w-full sm:w-auto inline-block text-center">
              QUERO VENDER MAIS AGORA
            </a>
            
            <p className="text-xs text-gray-500 tracking-widest uppercase">SUA JORNADA RUMO AO TOPO COMEÇA AQUI</p>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900 aspect-video group cursor-pointer">
              <iframe 
                src="https://drive.google.com/file/d/1LXZjisKk1hT14xE2T3-p0DlmsPX2zAE8Ps_StDkmsqc/preview" 
                className="w-full h-full" 
                allow="autoplay; encrypted-media" 
                allowFullScreen
                title="Peixeweb Video"
              ></iframe>
            </div>
            
            {/* Floating Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -left-10 bg-white text-black p-6 rounded-2xl shadow-xl hidden md:block max-w-xs"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <TrendingUp className="text-emerald-600 w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-2xl">+3 Anos</p>
                  <p className="text-xs text-gray-500 uppercase font-semibold">DE EXPERIÊNCIA</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2426" 
                  alt="Equipe Peixeweb - Escritório" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Desktop Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden lg:block border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 p-3 rounded-xl">
                    <TrendingUp className="text-emerald-600 w-8 h-8" />
                  </div>
                  <div>
                    <p className="font-bold text-3xl text-slate-900">+3 Anos</p>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">de experiência</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-emerald-600 font-bold text-sm tracking-widest uppercase mb-4 block">QUEM SOMOS</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Somos novos no mercado, mas experientes no <span className="text-emerald-500 underline decoration-4 decoration-emerald-200 underline-offset-4">sucesso do cliente.</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                A <span className="font-bold text-black">Peixeweb</span> nasceu com o propósito de democratizar o marketing digital de alta performance. Somos uma agência jovem, ágil e movida por resultados concretos.
              </p>

              <div className="grid gap-6">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow flex gap-4">
                  <div className="bg-emerald-100 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <Check className="text-emerald-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Estratégia Sob Medida</h3>
                    <p className="text-gray-600 text-sm">
                      Não acreditamos em fórmulas prontas. Cada negócio recebe uma análise profunda antes da execução.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow flex gap-4">
                  <div className="bg-emerald-100 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <Search className="text-emerald-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Transparência Total</h3>
                    <p className="text-gray-600 text-sm">
                      Relatórios claros e diretos. Você sabe exatamente onde seu dinheiro está sendo investido.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white text-black border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 leading-tight">
                Com a <span className="text-blue-600">Peixeweb</span> você será capaz de:
              </h2>
              
              <div className="space-y-6">
                {[
                  "CRIAR CAMPANHAS DO JEITO CERTO, passo a passo, atraindo os melhores clientes.",
                  "ESCALAR SEUS RESULTADOS e construir um marketing sólido.",
                  "ACELERAR O CRESCIMENTO DA EMPRESA sem medo de desperdiçar orçamento.",
                  "UTILIZAR AS FERRAMENTAS MAIS ATUAIS, incluindo Inteligência Artificial."
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="bg-emerald-100 rounded-full p-1 h-fit mt-1">
                      <Zap className="w-4 h-4 text-emerald-600 fill-current" />
                    </div>
                    <p className="text-gray-700 font-medium leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              <a href="https://wa.me/5511914716715" target="_blank" rel="noopener noreferrer" className="mt-10 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all inline-block">
                QUERO UMA ANÁLISE GRATUITA
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                alt="Analytics Dashboard" 
                className="rounded-2xl shadow-xl w-full h-64 object-cover md:translate-y-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt="Growth Chart" 
                className="rounded-2xl shadow-xl w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Dark) */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tight">Resultados Reais</h2>
            <p className="text-emerald-400 font-medium">Vejam o que dizem quem já aplica nosso método</p>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-6 mb-24">
            {[
              { name: "Thiago M.", role: "E-commerce", text: "Sinceramente, essas aulas sobre estratégias de lances são épicas. Mudou meu jogo no Google Ads." },
              { name: "Angela S.", role: "Serviços", text: "Só assisti a primeira aula e já parei de perder dinheiro. O suporte é fenomenal." },
              { name: "David G.", role: "Infoproduto", text: "O Meta ADS, Através do Instagram Conseguiu mudar minha estrutura e as vendas começaram a cair na conta." }
            ].map((t, i) => (
              <div key={i} className="bg-[#111827] p-8 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-colors group">
                <div className="flex gap-1 mb-4 text-emerald-500">
                  {[...Array(5)].map((_, j) => <Zap key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-300 text-sm mb-6 italic leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-900/50 text-emerald-400 flex items-center justify-center font-bold text-sm border border-emerald-500/20">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tight">O QUE VOCÊ VAI RECEBER:</h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "GOOGLE ADS", desc: "Domine a rede de pesquisa e apareça para quem já quer comprar seu produto agora.", icon: Search, num: "01" },
              { title: "META ADS", desc: "Crie desejo e gere leads qualificados através do Instagram e Facebook de forma profissional.", icon: Target, num: "02" },
              { title: "PÁGINAS DE ALTA CONVERSÃO", desc: "Design focado em vendas. Transformamos seu site em um vendedor que trabalha 24h.", icon: BarChart2, num: "03" },
              { title: "ESTRATÉGIA DE ESCALA", desc: "Aprenda a analisar métricas e aumentar o investimento onde o lucro é garantido.", icon: TrendingUp, num: "04" },
              { title: "GOOGLE SHOPPING", desc: "Exponha seus produtos na vitrine do Google e aumente suas vendas de e-commerce.", icon: Zap, num: "05" },
              { title: "SEO & INTELIGÊNCIA", desc: "Fique orgânico e utilize IA para produzir conteúdos que vendem mais rápido.", icon: Search, num: "06" }
            ].map((item, i) => (
              <div key={i} className="bg-[#111827] p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:bg-[#1f2937] transition-colors">
                <div className="absolute top-4 right-4 text-gray-700 text-4xl font-black opacity-20 group-hover:opacity-40 transition-opacity">{item.num}</div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                  <item.icon className="text-emerald-400 w-6 h-6" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3 uppercase">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-4 uppercase tracking-tight text-slate-900">PRONTO PARA ESCALAR?</h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
            Não acreditamos em pacotes genéricos. Cada negócio tem um desafio único e merece uma estratégia personalizada.
          </p>

          <div className="bg-[#0a0a0a] rounded-3xl p-8 md:p-12 text-left relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="grid md:grid-cols-2 gap-12 relative z-10 items-center">
              <div>
                <h3 className="text-emerald-400 font-bold text-xl mb-6 uppercase tracking-wider">O QUE VAMOS FAZER:</h3>
                <ul className="space-y-4">
                  {[
                    "Análise profunda do seu negócio",
                    "Definição de canais de tráfego",
                    "Planejamento de investimento",
                    "Projeção de resultados reais"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 rounded-full border border-emerald-500/50 flex items-center justify-center">
                        <Check className="w-3 h-3 text-emerald-400" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-400 text-sm leading-relaxed">
                  Fale diretamente com um de nossos estrategistas e receba um plano de ação para os próximos 30 dias.
                </p>
                <a href="https://wa.me/5511914716715" target="_blank" rel="noopener noreferrer" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 group">
                  FAZER ANÁLISES
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  SEM COMPROMISSO
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-black text-white mb-4 text-center uppercase">AINDA COM DÚVIDA?</h2>
          <p className="text-gray-500 text-center mb-16 text-sm">Respostas diretas para quem não tem tempo a perder e quer escalar o faturamento da empresa.</p>

          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div 
                key={i} 
                className="border-b border-white/10 py-6 cursor-pointer group"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-white group-hover:text-emerald-400 transition-colors">{item.question}</h3>
                  <ChevronRight className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${openFaq === i ? 'rotate-90' : ''}`} />
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 mt-4' : 'max-h-0'}`}>
                  <p className="text-white text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-6">
            <img 
              src="https://lh3.googleusercontent.com/d/1UCMSOadfQEJ0-xsTNdVct6AMCkt-D3yr" 
              alt="Peixeweb Logo" 
              className="h-24 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">EXPERIÊNCIA DE 03 ANOS</p>
          <a href="mailto:peixeweb@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm mb-8 block">
            peixeweb@gmail.com
          </a>

          <div className="flex justify-center gap-6 mb-12">
            <a href="https://www.instagram.com/peixeweb/" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
            </a>
          </div>

          <p className="text-gray-600 text-xs">© 2025 PEIXEWEB AGÊNCIA DIGITAL. TODOS OS DIREITOS RESERVADOS.</p>
          
          <div className="mt-8 flex justify-center gap-6">
            <Link to="/app/terms" className="text-gray-600 hover:text-white text-xs transition-colors">Termos de Uso</Link>
            <Link to="/app/privacy" className="text-gray-600 hover:text-white text-xs transition-colors">Política de Privacidade</Link>
          </div>
        </div>
      </footer>

      {/* Fixed Chat Button */}
      <motion.a
        href="https://wa.me/5511914716715"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showChat ? 1 : 0, y: showChat ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className={`fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 font-bold text-lg transition-colors ${showChat ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <MessageCircle className="w-6 h-6" />
        <span>Chat</span>
      </motion.a>

      {/* Mobile Experience Badge */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-6 left-6 z-40 md:hidden bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3"
      >
        <div className="bg-emerald-100 p-2 rounded-lg">
          <TrendingUp className="text-emerald-600 w-5 h-5" />
        </div>
        <div>
          <p className="font-bold text-lg leading-none text-slate-900">+3 Anos</p>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">de experiência</p>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
