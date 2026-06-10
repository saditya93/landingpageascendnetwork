import React from 'react';

export function AppWindow({ children, className = '', hideSidebar = false }: { children: React.ReactNode, className?: string, hideSidebar?: boolean }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl flex flex-col ring-1 ring-white/5 w-full ${className}`}>
      {/* Window Header */}
      <div className="h-12 border-b border-white/[0.08] flex items-center px-4 space-x-2 bg-white/[0.01]">
        <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
        <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
      </div>
      <div className="flex flex-1 min-h-0 bg-[#050505] relative">
        {/* Sidebar */}
        {!hideSidebar && (
        <div className="w-48 md:w-56 border-r border-white/10 p-4 hidden md:flex flex-col bg-neutral-900/40 z-10 shrink-0">
          <div className="flex items-center space-x-3 mb-8 px-2">
            <div className="w-6 h-6 rounded bg-white"></div>
            <div className="h-4 w-20 bg-white/20 rounded"></div>
          </div>
          <div className="space-y-4 flex-1">
            <div className="space-y-1">
              <div className="h-3 w-16 bg-white/10 rounded mb-4 ml-2"></div>
              <div className="h-8 w-full bg-white/10 rounded flex items-center px-3">
                <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
                <div className="h-3 w-20 bg-white/20 rounded mx-3"></div>
              </div>
              <div className="h-8 w-full bg-transparent rounded flex items-center px-3">
                <div className="w-4 h-4 bg-white/10 rounded-sm"></div>
                <div className="h-3 w-16 bg-white/10 rounded mx-3"></div>
              </div>
              <div className="h-8 w-full bg-transparent rounded flex items-center px-3">
                <div className="w-4 h-4 bg-white/10 rounded-sm"></div>
                <div className="h-3 w-24 bg-white/10 rounded mx-3"></div>
              </div>
            </div>
            
             <div className="space-y-1 pt-6">
              <div className="h-3 w-16 bg-white/10 rounded mb-4 ml-2"></div>
              <div className="h-8 w-full bg-transparent rounded flex items-center px-3">
                <div className="w-4 h-4 bg-white/10 rounded-sm"></div>
                <div className="h-3 w-20 bg-white/10 rounded mx-3"></div>
              </div>
              <div className="h-8 w-full bg-transparent rounded flex items-center px-3">
                <div className="w-4 h-4 bg-white/10 rounded-sm"></div>
                <div className="h-3 w-24 bg-white/10 rounded mx-3"></div>
              </div>
            </div>
          </div>
        </div>
        )}
        {/* Main Content */}
        <div className={`flex-1 relative overflow-hidden bg-[#0A0A0A] ${hideSidebar ? '' : 'p-6 lg:p-10'} flex flex-col w-full h-full`}>
          {children}
          {/* Top gradient inside main */}
          {!hideSidebar && <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none z-10"></div>}
        </div>
      </div>
    </div>
  );
}
