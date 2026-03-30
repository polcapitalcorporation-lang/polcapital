import React from 'react';
import { 
  LayoutDashboard, 
  PlusCircle, 
  ListTodo, 
  LogOut,
  Warehouse
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'new-appointment', label: 'Nueva Cita', icon: PlusCircle },
    { id: 'calendar', label: 'Listado y Estatus', icon: ListTodo },
  ];

  return (
    <aside className="h-screen w-72 flex flex-col fixed left-0 top-0 overflow-y-auto bg-primary shadow-[12px_0_40px_rgba(0,17,57,0.08)] z-50 p-8 justify-between">
      <div className="flex flex-col gap-10">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
            <Warehouse className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white tracking-tighter uppercase">Warehouse Portal</span>
            <span className="text-[10px] text-blue-200/50 uppercase tracking-[0.2em] font-semibold">Architect's Ledger</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-4 py-3 flex items-center gap-3 transition-all rounded-lg text-left ${
                activeTab === item.id 
                  ? 'bg-white/10 text-white font-semibold' 
                  : 'text-blue-200/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button 
          onClick={() => setActiveTab('new-appointment')}
          className="mt-4 bg-gradient-to-r from-primary to-primary-container text-white py-4 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all active:scale-95"
        >
          <PlusCircle className="w-4 h-4" />
          Nueva Cita
        </button>
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-4 border-t border-white/5 pt-6">
        <div className="flex items-center gap-3 mb-4">
          <img 
            alt="User profile" 
            className="w-10 h-10 rounded-full object-cover" 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white">Carlos Méndez</span>
            <span className="text-xs text-blue-200/40">Proveedor Logístico</span>
          </div>
        </div>
        <button className="text-blue-200/60 hover:text-white px-4 py-3 flex items-center gap-3 transition-all rounded-lg hover:bg-white/5 text-left">
          <LogOut className="w-5 h-5" />
          <span className="text-sm">Salir</span>
        </button>
      </div>
    </aside>
  );
};
