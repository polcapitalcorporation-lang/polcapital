import React from 'react';
import { Search, Bell, Settings } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-surface flex items-center justify-between px-10 py-6">
      <div className="flex items-center gap-8 flex-1">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/60 w-5 h-5" />
          <input 
            className="w-full bg-surface-container-lowest border-none rounded-full py-2.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-secondary/40 shadow-sm" 
            placeholder="Buscar citas, folios o transportistas..." 
            type="text"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <button className="relative p-2 text-secondary hover:text-primary transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-surface"></span>
        </button>
        <button className="p-2 text-secondary hover:text-primary transition-colors">
          <Settings className="w-5 h-5" />
        </button>
        <div className="h-8 w-[1px] bg-secondary/10 mx-2"></div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-primary">Appointment Management</span>
          <img 
            alt="User avatar" 
            className="w-8 h-8 rounded-full" 
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </header>
  );
};
