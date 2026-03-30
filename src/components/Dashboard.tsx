import React from 'react';
import { 
  TrendingUp, 
  Calendar as CalendarIcon, 
  BarChart3, 
  Truck, 
  ChevronLeft, 
  ChevronRight,
  Clock
} from 'lucide-react';
import { motion } from 'motion/react';

export const Dashboard: React.FC = () => {
  const stats = [
    { 
      label: 'Citas Pendientes', 
      value: '12', 
      tag: 'Por confirmar', 
      trend: '+2 desde ayer', 
      icon: Clock,
      color: 'bg-secondary-container text-on-secondary-container'
    },
    { 
      label: 'Citas Confirmadas', 
      value: '28', 
      tag: 'Listas para recibir', 
      trend: 'Hoy: 8 entregas', 
      icon: CalendarIcon,
      color: 'bg-primary text-white',
      isPrimary: true
    },
    { 
      label: 'Citas Finalizadas', 
      value: '145', 
      tag: 'Mes en curso', 
      trend: '94% eficiencia', 
      icon: BarChart3,
      color: 'bg-tertiary-container text-on-tertiary-container'
    }
  ];

  const deliveries = [
    { id: '#WH-89021', type: 'Carga Seca', dock: 'Muelle 4', carrier: 'Logística Express S.A.', time: 'Hoy, 14:30', status: 'Confirmada', delay: true },
    { id: '#WH-89025', type: 'Perecederos', dock: 'Muelle 12', carrier: 'Transportes Frío-King', time: 'Hoy, 16:00', status: 'En Proceso', delay: false },
    { id: '#WH-89032', type: 'General', dock: 'Muelle 1', carrier: 'Global Cargo', time: 'Mañana, 09:15', status: 'Pendiente', delay: false },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="px-10 py-8 max-w-[1600px] mx-auto"
    >
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-primary tracking-tight">Resumen de Operaciones</h1>
        <p className="text-secondary mt-2">Gestione y monitoree el flujo de sus citas en tiempo real.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {stats.map((stat, idx) => (
          <div 
            key={idx}
            className={`${stat.isPrimary ? stat.color + ' shadow-[0_20px_40px_rgba(0,17,57,0.1)]' : 'bg-surface-container-lowest'} p-8 rounded-2xl transition-all hover:scale-[1.02] cursor-default`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${stat.isPrimary ? 'bg-white/10' : stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-widest ${stat.isPrimary ? 'text-white/40' : 'text-secondary/50'}`}>
                {stat.tag}
              </span>
            </div>
            <div className="mt-8">
              <span className="text-5xl font-black">{stat.value}</span>
              <h3 className={`text-sm font-semibold mt-2 ${stat.isPrimary ? 'text-blue-200/80' : 'text-secondary'}`}>
                {stat.label}
              </h3>
            </div>
            <div className={`mt-6 flex items-center gap-2 text-xs px-3 py-2 rounded-full w-fit ${stat.isPrimary ? 'bg-white/10 text-blue-100' : 'bg-surface-container text-secondary'}`}>
              {stat.isPrimary ? <CalendarIcon className="w-3 h-3" /> : <TrendingUp className="w-3 h-3" />}
              <span>{stat.trend}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-primary tracking-tight">Próximas Entregas</h2>
            <button className="text-sm font-bold text-primary hover:underline transition-all">Ver todas</button>
          </div>
          <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-surface-container/50">
                  <tr>
                    <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-secondary/60">Referencia / ID</th>
                    <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-secondary/60">Transportista</th>
                    <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-secondary/60">Horario</th>
                    <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-secondary/60">Estatus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container/30">
                  {deliveries.map((delivery, idx) => (
                    <tr key={idx} className="hover:bg-surface-container-low transition-colors group">
                      <td className="px-8 py-6">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-primary">{delivery.id}</span>
                          <span className="text-[10px] text-secondary/60">{delivery.type} - {delivery.dock}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center">
                            <Truck className="w-4 h-4 text-secondary" />
                          </div>
                          <span className="text-sm font-medium text-secondary">{delivery.carrier}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-primary">{delivery.time}</span>
                          {delivery.delay && (
                            <span className="text-[10px] text-white font-semibold bg-error px-2 py-0.5 rounded w-fit mt-1">Retrasado</span>
                          )}
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className={`text-xs font-bold px-4 py-1.5 rounded-full ${
                          delivery.status === 'Confirmada' ? 'bg-secondary-container text-on-secondary-container' :
                          delivery.status === 'En Proceso' ? 'bg-primary-container text-white' :
                          'bg-surface-container text-secondary'
                        }`}>
                          {delivery.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-primary tracking-tight">Planificador Semanal</h2>
          <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <span className="text-sm font-bold text-primary">Octubre 2023</span>
              <div className="flex gap-2">
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container transition-all">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container transition-all">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-y-6 text-center text-[10px] font-bold text-secondary/40 uppercase tracking-widest mb-4">
              <span>Lu</span><span>Ma</span><span>Mi</span><span>Ju</span><span>Vi</span><span>Sa</span><span>Do</span>
            </div>
            <div className="grid grid-cols-7 gap-y-2 text-center text-sm">
              {[25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((day, i) => (
                <span 
                  key={i} 
                  className={`py-2 font-medium relative flex items-center justify-center ${
                    day > 20 ? 'text-secondary/20' : 
                    day === 11 ? 'bg-primary text-white rounded-lg scale-90 font-bold' : 
                    'text-primary'
                  }`}
                >
                  {day}
                  {day === 4 && <span className="absolute bottom-1 w-1 h-1 bg-primary rounded-full"></span>}
                  {day === 12 && <span className="absolute bottom-1 w-1 h-1 bg-error rounded-full"></span>}
                </span>
              ))}
            </div>
            <div className="mt-10 pt-10 border-t border-surface-container/50 space-y-6">
              <div className="flex gap-4">
                <div className="w-1 h-10 bg-primary rounded-full"></div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-secondary/60 uppercase">10:30 AM</span>
                  <span className="text-sm font-bold text-primary">Auditoría Muelle Norte</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 h-10 bg-secondary-container rounded-full"></div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-secondary/60 uppercase">02:00 PM</span>
                  <span className="text-sm font-bold text-primary">Recepción High-Value</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
