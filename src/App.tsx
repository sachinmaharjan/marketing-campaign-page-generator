import { useState, useRef } from 'react';
import StarWars from './campaigns/StarWars';
import ChildrensDay from './campaigns/ChildrensDay';
import Diwali from './campaigns/Diwali';
import CreateCampaign from './CreateCampaign';
import GeneratedCampaign from './campaigns/GeneratedCampaign';
import CampaignList from './CampaignList';
import { Download } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('list');
  const mainRef = useRef<HTMLElement>(null);
  
  const [campaigns, setCampaigns] = useState<any[]>([
    { id: 'starwars', name: 'Star Wars Day', component: <StarWars /> },
    { id: 'childrens', name: "Children's Day", component: <ChildrensDay /> },
    { id: 'diwali', name: 'Diwali', component: <Diwali /> }
  ]);

  const handleCreated = (productName: string, selectedHolidayNames: string[], productLink?: string) => {
    if (selectedHolidayNames.length === 0) {
      selectedHolidayNames = ["Next Best Holiday"];
    }
    
    const newCampaigns = selectedHolidayNames.map((holiday) => {
      const id = `${productName.toLowerCase().replace(/[^a-z0-9]/g, '')}-${holiday.toLowerCase().replace(/[^a-z0-9]/g, '')}-${Date.now()}`;
      return {
        id,
        name: `${productName} - ${holiday}`,
        component: <GeneratedCampaign productName={productName} holidayName={holiday} productLink={productLink} />
      };
    });
    
    setCampaigns(prev => [...prev, ...newCampaigns]);
    setActiveTab('list');
  };

  const currentComponent = activeTab === 'list' 
    ? <CampaignList campaigns={campaigns} onSelectCampaign={setActiveTab} /> 
    : (campaigns.find(c => c.id === activeTab)?.component || (activeTab === 'create' ? <CreateCampaign onCreated={handleCreated} /> : null));

  const exportCurrentPage = () => {
    if (!mainRef.current || activeTab === 'create' || activeTab === 'list') return;
    
    // We get the inner HTML of the main container, which holds the current campaign
    const htmlContent = mainRef.current.innerHTML;
    
    const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${campaigns.find(c => c.id === activeTab)?.name || 'Campaign'} Export</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  ${htmlContent}
</body>
</html>`;

    const blob = new Blob([fullHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${activeTab}-campaign.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col font-sans overflow-hidden">
      <header className="p-4 border-b border-neutral-800 bg-black flex flex-wrap gap-4 items-center justify-between z-50">
        <h1 className="text-xl font-bold tracking-tight shrink-0">Glow Worms Marketing</h1>
        
        <div className="flex gap-2 flex-wrap items-center bg-neutral-900 p-1 rounded-full overflow-x-auto max-w-full">
          <button
            onClick={() => setActiveTab('create')}
            className={`px-4 py-2 flex-shrink-0 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${activeTab === 'create' ? 'bg-indigo-500 text-white' : 'text-neutral-400 hover:text-white hover:bg-neutral-800'}`}
          >
            + Create Landing Page
          </button>
          
          <button
            onClick={() => setActiveTab('list')}
            className={`px-4 py-2 flex-shrink-0 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${activeTab === 'list' ? 'bg-indigo-500 text-white' : 'text-neutral-400 hover:text-white hover:bg-neutral-800'}`}
          >
            All Landing Pages
          </button>
          
          <div className="w-px h-6 bg-neutral-800 mx-1 flex-shrink-0"></div>
          
          {campaigns.map(camp => (
            <button
              key={camp.id}
              onClick={() => setActiveTab(camp.id)}
              className={`px-4 py-2 flex-shrink-0 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${activeTab === camp.id ? 'bg-white text-black' : 'text-neutral-400 hover:text-white hover:bg-neutral-800'}`}
            >
              {camp.name.split(' - ')[1] || camp.name}
            </button>
          ))}
        </div>

        <div>
          {activeTab !== 'create' && activeTab !== 'list' && (
            <button
              onClick={exportCurrentPage}
              className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black text-sm font-bold rounded-lg transition-colors flex-shrink-0"
            >
              <Download className="w-4 h-4" />
              Export HTML
            </button>
          )}
        </div>
      </header>
      <main ref={mainRef} className="flex-1 relative overflow-y-auto w-full h-full">
        {currentComponent}
      </main>
    </div>
  );
}
