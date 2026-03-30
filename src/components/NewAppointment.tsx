import React from 'react';
import { 
  Package, 
  CalendarCheck, 
  FileUp, 
  FileText, 
  ArrowRight,
  Minus,
  Plus
} from 'lucide-react';
import { motion } from 'motion/react';

export const NewAppointment: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="px-10 pb-20"
    >
      <div className="max-w-5xl mx-auto py-12">
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-on-secondary-container mb-4 block">Warehouse Management System</span>
        <h2 className="text-4xl font-extrabold text-primary tracking-tight mb-2">Nueva Cita</h2>
        <p className="text-secondary max-w-2xl leading-relaxed">
          Complete el formulario para programar una nueva descarga. La precisión en el volumen y personal garantiza la eficiencia de nuestras bahías de carga.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <form className="grid grid-cols-12 gap-8" onSubmit={(e) => e.preventDefault()}>
          <div className="col-span-12 lg:col-span-8 space-y-8">
            <div className="bg-surface-container-lowest p-10 rounded-xl architect-shadow">
              <div className="flex items-center gap-3 mb-8">
                <Package className="text-primary w-6 h-6" />
                <h3 className="text-lg font-bold text-primary">Información de la Carga</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant">Orden de Compra (OC)</label>
                  <input className="w-full border-none bg-surface-container-low focus:ring-2 focus:ring-primary/20 rounded-lg p-3 text-sm transition-all outline-none" placeholder="OC-000000" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant">Proveedor</label>
                  <select className="w-full border-none bg-surface-container-low focus:ring-2 focus:ring-primary/20 rounded-lg p-3 text-sm transition-all outline-none appearance-none">
                    <option>Seleccionar proveedor</option>
                    <option>Global Logistics S.A.</option>
                    <option>Transportes del Norte</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant">Correo de Contacto</label>
                  <input className="w-full border-none bg-surface-container-low focus:ring-2 focus:ring-primary/20 rounded-lg p-3 text-sm transition-all outline-none" placeholder="ejemplo@logistica.com" type="email"/>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant">Volumen Estimado (m³)</label>
                  <div className="relative">
                    <input className="w-full border-none bg-surface-container-low focus:ring-2 focus:ring-primary/20 rounded-lg p-3 text-sm transition-all outline-none" placeholder="0.00" type="number"/>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-outline">M3</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-10 rounded-xl architect-shadow">
              <div className="flex items-center gap-3 mb-8">
                <CalendarCheck className="text-primary w-6 h-6" />
                <h3 className="text-lg font-bold text-primary">Programación</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant">Fecha Programada</label>
                  <input className="w-full border-none bg-surface-container-low focus:ring-2 focus:ring-primary/20 rounded-lg p-3 text-sm transition-all outline-none" type="date"/>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant">Hora de Arribo</label>
                  <input className="w-full border-none bg-surface-container-low focus:ring-2 focus:ring-primary/20 rounded-lg p-3 text-sm transition-all outline-none" type="time"/>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 space-y-8">
            <div className="bg-primary p-8 rounded-xl text-white shadow-[0_20px_40px_rgba(0,17,57,0.15)]">
              <h3 className="text-lg font-bold mb-6">Logística de Personal</h3>
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-blue-200/50">Personal Requerido</label>
                  <div className="flex items-center gap-4">
                    <button className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all" type="button"><Minus className="w-4 h-4" /></button>
                    <span className="text-xl font-bold flex-1 text-center">2</span>
                    <button className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all" type="button"><Plus className="w-4 h-4" /></button>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-[11px] text-blue-200/60 leading-relaxed italic">
                    "Se asignará automáticamente el muelle #14 basado en el volumen indicado."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-xl architect-shadow">
              <h3 className="text-sm font-bold text-primary mb-6">Documentación Adjunta</h3>
              <div className="space-y-6">
                <div className="group relative cursor-pointer">
                  <div className="flex flex-col items-center justify-center border-2 border-dashed border-outline-variant/30 rounded-xl p-6 transition-all group-hover:border-primary/30 group-hover:bg-surface-container">
                    <FileUp className="text-secondary group-hover:text-primary mb-2 w-6 h-6" />
                    <p className="text-[11px] font-bold text-secondary group-hover:text-primary">GUÍA DE REMISIÓN</p>
                    <p className="text-[9px] text-outline mt-1">PDF o JPG (Máx 5MB)</p>
                  </div>
                  <input className="absolute inset-0 opacity-0 cursor-pointer" type="file"/>
                </div>
                <div className="group relative cursor-pointer">
                  <div className="flex flex-col items-center justify-center border-2 border-dashed border-outline-variant/30 rounded-xl p-6 transition-all group-hover:border-primary/30 group-hover:bg-surface-container">
                    <FileText className="text-secondary group-hover:text-primary mb-2 w-6 h-6" />
                    <p className="text-[11px] font-bold text-secondary group-hover:text-primary">FICHA TÉCNICA</p>
                    <p className="text-[9px] text-outline mt-1">Solo PDF</p>
                  </div>
                  <input className="absolute inset-0 opacity-0 cursor-pointer" type="file"/>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button className="w-full bg-gradient-to-r from-primary to-primary-container text-white font-bold py-5 rounded-xl shadow-[0_12px_40px_rgba(0,17,57,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3" type="submit">
                <span>Registrar Cita</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-[10px] text-secondary mt-6 px-4">
                Al registrar, se enviará una notificación automática al proveedor y al equipo de bahía.
              </p>
            </div>
          </div>
        </form>
      </div>

      <div className="max-w-5xl mx-auto mt-20 relative h-64 rounded-2xl overflow-hidden bg-surface-container group">
        <img 
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Warehouse"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
        <div className="absolute bottom-8 left-10">
          <p className="text-white/60 text-[10px] font-bold tracking-widest uppercase">Ubicación del Almacén</p>
          <h4 className="text-white text-xl font-bold">Terminal de Carga Zona Sur, Sector D</h4>
        </div>
      </div>
    </motion.div>
  );
};
