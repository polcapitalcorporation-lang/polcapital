import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon,
  Info,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

export const CalendarView: React.FC = () => {
  const days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="px-10 pb-10"
    >
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div>
          <h2 className="text-3xl font-extrabold text-primary tracking-tight mb-2">Planificación de Muelles</h2>
          <p className="text-secondary">Gestiona los horarios de carga y descarga para la semana actual.</p>
        </div>
        <div className="flex items-center gap-4 bg-surface-container-low p-1.5 rounded-xl self-start">
          <button className="px-6 py-2.5 rounded-lg text-sm font-bold transition-all text-secondary hover:bg-surface-container-highest">Día</button>
          <button className="px-6 py-2.5 rounded-lg text-sm font-bold transition-all text-secondary hover:bg-surface-container-highest">Semana</button>
          <button className="px-6 py-2.5 rounded-lg text-sm font-bold transition-all bg-white text-primary shadow-sm">Mes</button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 xl:col-span-9 space-y-8">
          <div className="bg-surface-container-lowest rounded-2xl overflow-hidden architect-shadow">
            <div className="flex items-center justify-between px-8 py-6 bg-white">
              <div className="flex items-center gap-6">
                <h3 className="text-xl font-bold text-primary">Octubre 2023</h3>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-full flex items-center justify-center border border-outline-variant/20 hover:bg-surface-container-low transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full flex items-center justify-center border border-outline-variant/20 hover:bg-surface-container-low transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <button className="text-sm font-bold text-primary border-b-2 border-primary/20 pb-0.5 hover:border-primary transition-all">Hoy</button>
            </div>

            <div className="grid grid-cols-7 bg-surface-container-low/50 border-y border-outline-variant/10">
              {days.map(day => (
                <div key={day} className="py-4 text-center text-[11px] font-bold text-secondary tracking-widest uppercase">{day}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 bg-white">
              {/* Mock calendar grid items */}
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={`empty-${i}`} className="min-h-[140px] p-4 bg-surface-container-low/20"></div>
              ))}
              {[1, 2, 3, 4].map(day => (
                <div key={`day-${day}`} className="min-h-[140px] p-4 border-r border-b border-outline-variant/5">
                  <span className="text-sm font-medium text-outline-variant">{day}</span>
                </div>
              ))}
              
              <div className="min-h-[140px] p-4 border-r border-b border-outline-variant/5 relative group hover:bg-surface-container-low/30 transition-colors">
                <span className="text-sm font-bold text-primary">5</span>
                <div className="mt-2 space-y-1">
                  <div className="px-2 py-1 bg-secondary-container/40 text-[10px] font-bold text-on-secondary-container rounded border-l-2 border-primary">10:00 - LogiTrans</div>
                </div>
              </div>
              
              <div className="min-h-[140px] p-4 border-r border-b border-outline-variant/5">
                <span className="text-sm font-bold text-primary">6</span>
                <div className="mt-2 space-y-1">
                  <div className="px-2 py-1 bg-tertiary-container/10 text-[10px] font-bold text-on-tertiary-container rounded border-l-2 border-on-tertiary-container">08:00 - Express</div>
                  <div className="px-2 py-1 bg-secondary-container/40 text-[10px] font-bold text-on-secondary-container rounded border-l-2 border-primary">14:30 - Global</div>
                </div>
              </div>

              <div className="min-h-[140px] p-4 border-r border-b border-outline-variant/5 bg-primary/[0.02]">
                <span className="text-sm font-bold text-primary">7</span>
                <div className="mt-2 flex flex-col gap-1">
                  <div className="w-full h-1 bg-secondary-container rounded-full"></div>
                  <span className="text-[10px] text-secondary font-medium">8 espacios disponibles</span>
                </div>
              </div>

              {[8, 9, 10, 11, 12].map(day => (
                <div key={`day-${day}`} className="min-h-[140px] p-4 border-r border-b border-outline-variant/5">
                  <span className="text-sm font-bold text-primary">{day}</span>
                  {day === 9 && (
                    <div className="mt-2">
                      <div className="px-2 py-1 bg-error-container/40 text-[10px] font-bold text-error rounded border-l-2 border-error uppercase tracking-tighter">Mantenimiento</div>
                    </div>
                  )}
                </div>
              ))}

              <div className="min-h-[140px] p-4 border-r border-b border-outline-variant/5 ring-2 ring-primary ring-inset z-10 bg-primary/[0.03]">
                <span className="flex items-center justify-center w-6 h-6 bg-primary text-white rounded-full text-xs font-bold">13</span>
                <div className="mt-2 space-y-1">
                  <div className="px-2 py-1 bg-secondary-container/60 text-[10px] font-bold text-primary rounded border-l-2 border-primary">09:00 - Carga Pesada</div>
                  <div className="px-2 py-1 bg-secondary-container/60 text-[10px] font-bold text-primary rounded border-l-2 border-primary">11:30 - QuickShip</div>
                </div>
              </div>

              {Array.from({ length: 5 }).map((_, i) => (
                <div key={`rest-${i}`} className="min-h-[140px] p-4 border-r border-b border-outline-variant/5">
                  <span className="text-sm font-bold text-primary">{14 + i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 xl:col-span-3 space-y-8">
          <section className="bg-white p-8 rounded-2xl architect-shadow space-y-6">
            <h4 className="text-sm font-extrabold text-primary tracking-widest uppercase">Leyenda de Estatus</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-secondary-container border border-primary/20"></div>
                <span className="text-sm text-secondary font-medium">Cita Confirmada</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-tertiary-container/30 border border-on-tertiary-container/20"></div>
                <span className="text-sm text-secondary font-medium">En Descarga</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-error-container/50 border border-error/20"></div>
                <span className="text-sm text-secondary font-medium">Incidencia / Bloqueo</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full border-2 border-dashed border-outline-variant"></div>
                <span className="text-sm text-secondary font-medium">Espacio Disponible</span>
              </div>
            </div>
          </section>

          <section className="bg-primary p-8 rounded-2xl text-white relative overflow-hidden architect-shadow">
            <div className="relative z-10">
              <h4 className="text-xs font-bold text-blue-200/60 tracking-widest uppercase mb-4">Disponibilidad Hoy</h4>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-extrabold tracking-tighter">14</span>
                <span className="text-xl text-blue-200/80 font-medium">/ 32</span>
              </div>
              <p className="mt-4 text-sm text-blue-100/70 leading-relaxed">Espacios disponibles para agendamiento inmediato en Muelles A y B.</p>
              <button className="mt-8 w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-sm transition-all border border-white/10">Ver Disponibilidad Detallada</button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};
