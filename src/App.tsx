import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { Dashboard } from './components/Dashboard';
import { NewAppointment } from './components/NewAppointment';
import { CalendarView } from './components/CalendarView';
import { Plus } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'new-appointment':
        return <NewAppointment />;
      case 'calendar':
        return <CalendarView />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-surface">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="ml-72 min-h-screen flex flex-col">
        <TopBar />
        
        <div className="flex-1 overflow-y-auto no-scrollbar">
          {renderContent()}
        </div>
      </main>

      {/* Contextual FAB */}
      {activeTab !== 'new-appointment' && (
        <button 
          onClick={() => setActiveTab('new-appointment')}
          className="fixed bottom-10 right-10 w-16 h-16 bg-gradient-to-tr from-primary to-primary-container text-white rounded-2xl shadow-[0_12px_40px_rgba(0,17,57,0.25)] flex items-center justify-center hover:scale-105 active:scale-95 transition-all group z-50"
        >
          <Plus className="w-8 h-8" />
          <div className="absolute right-full mr-4 px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Nueva Cita
          </div>
        </button>
      )}
    </div>
  );
}
