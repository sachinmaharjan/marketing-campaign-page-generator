import { ExternalLink, Target, Calendar } from 'lucide-react';

export default function CampaignList({ 
  campaigns, 
  onSelectCampaign 
}: { 
  campaigns: any[], 
  onSelectCampaign: (id: string) => void 
}) {
  return (
    <div className="min-h-full bg-[#f8f9fa] text-neutral-900 p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-8 border-b border-neutral-200 pb-6">
          <div>
            <h2 className="text-3xl font-bold flex items-center gap-3 text-neutral-800">
              <Target className="w-8 h-8 text-indigo-500" />
              Landing Page Library
            </h2>
            <p className="text-neutral-500 mt-2">Manage and view all your generated holiday promotional pages.</p>
          </div>
          <div className="text-sm font-medium text-neutral-500 bg-white border border-neutral-200 px-4 py-2 rounded-lg shadow-sm">
            Total Pages: <span className="text-indigo-600 font-bold">{campaigns.length}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((camp) => (
            <div 
              key={camp.id} 
              className="bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:border-indigo-400 hover:shadow-lg transition-all group flex flex-col"
            >
              <div className="h-40 bg-neutral-900 border-b border-neutral-200 flex items-center justify-center p-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-indigo-900 to-black group-hover:scale-105 transition-transform duration-500"></div>
                <h3 className="text-2xl font-black text-center z-10 text-white tracking-tight drop-shadow-lg leading-tight uppercase">
                  {camp.name.split(' - ').map((part: string, i: number) => (
                    <span key={i} className={i === 1 ? 'text-indigo-400 block mt-1 text-xl' : ''}>
                      {part}
                    </span>
                  ))}
                </h3>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-4">
                  <Calendar className="w-4 h-4" /> 
                  Standard Promo
                </div>
                
                <p className="text-sm text-neutral-600 mb-8 flex-1">
                  Fully styled responsive HTML landing page optimized for "{camp.name}". Includes customized copy, thematic color palette, and offer countdowns.
                </p>
                
                <div className="flex gap-3 mt-auto">
                  <button 
                    onClick={() => onSelectCampaign(camp.id)}
                    className="w-full bg-[#f8f9fa] border border-neutral-300 hover:border-indigo-500 hover:text-indigo-600 hover:bg-indigo-50 text-neutral-700 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Preview Page
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {campaigns.length === 0 && (
            <div className="col-span-full py-20 text-center bg-white border border-neutral-200 rounded-3xl border-dashed">
              <Target className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-neutral-700 mb-2">No Landing Pages Yet</h3>
              <p className="text-neutral-500 mb-6">Create your first holiday landing page to see it here.</p>
              <button 
                onClick={() => onSelectCampaign('create')}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors"
              >
                Create Landing Page
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
