import React, { useState } from 'react';
import { Mail, Sparkles, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

const LandingZentu = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí conectarás con Formspree o Supabase después
    alert(`¡Bienvenido a la revolución, ${email}! Te avisaremos pronto.`);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-purple-100">
      
      {/* Navbar Minimalista */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
          ZentU
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-500">
          <a href="#vision" className="hover:text-purple-600 transition">Visión</a>
          <a href="#empresas" className="hover:text-purple-600 transition">Para Empresas</a>
        </div>
        <button className="text-sm font-semibold bg-white border border-slate-200 px-5 py-2 rounded-full shadow-sm hover:shadow-md transition">
          hola@zentu.app
        </button>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 pt-16 pb-24 text-center">
        <div className="inline-flex items-center space-x-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-xs font-bold mb-8 animate-fade-in">
          <Sparkles size={14} />
          <span>EL FUTURO DEL TALENTO ES GEN Z</span>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6">
          Tu carrera, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-400">
            validada por IA.
          </span>
        </h1>
        
        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Olvida el CV tradicional. En ZentU, tus habilidades reales se convierten en datos. 
          Conectamos tu potencial con empresas que buscan talento, no solo títulos.
        </p>

        {/* Formulario de Espera */}
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-20">
          <div className="relative w-full">
            <Mail className="absolute left-4 top-3.5 text-slate-400" size={20} />
            <input 
              type="email" 
              placeholder="Tu correo de la uni..." 
              required
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-purple-500 outline-none transition shadow-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full md:w-auto bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition flex items-center justify-center space-x-2">
            <span>Unirse</span>
            <ArrowRight size={18} />
          </button>
        </form>

        {/* Preview de la Player Card (El Gancho Visual) */}
        <div className="relative max-w-sm mx-auto bg-white p-8 rounded-[32px] shadow-2xl shadow-purple-100 border border-slate-100 transform hover:-rotate-2 transition duration-500">
          <div className="flex items-center space-x-4 mb-6 text-left">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl shadow-inner" />
            <div>
              <h3 className="font-bold text-lg">Alex Zentner</h3>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Estratega de Producto</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-2xl text-left">
              <div className="flex justify-between text-xs font-bold mb-2">
                <span>IA ANALYTICS SCORE</span>
                <span className="text-purple-600">92%</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-blue-400 h-full w-[92%]" />
              </div>
            </div>
            
            <div className="flex gap-2">
              <span className="bg-blue-50 text-blue-600 text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-tighter">Growth</span>
              <span className="bg-purple-50 text-purple-600 text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-tighter">Python</span>
              <span className="bg-green-50 text-green-600 text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-tighter">Design</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-12 text-center text-slate-400 text-sm">
        <p>© 2026 ZentU.app | La nueva era del talento.</p>
      </footer>
    </div>
  );
};

export default LandingZentu;