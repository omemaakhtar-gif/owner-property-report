import React, { useState, Fragment } from 'react';
import { 
  Download, 
  Share2, 
  MapPin, 
  Bed, 
  Bath, 
  Maximize2, 
  Calendar,
  Clock, 
  ExternalLink, 
  Tag, 
  Home,
  Key,
  MessageCircle,
  Mail,
  Link2,
  Eye,
  MousePointer2,
  Users,
  FileText,
  FileX,
  TrendingUp,
  TrendingDown,
  CalendarCheck2,
  Star,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  HelpCircle,
  Sparkles,
  Lightbulb,
  User,
  Check,
  CheckCircle,
  CreditCard,
  ClipboardList,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  BarChart2,
  Plus,
  Award,
  Flame,
  Activity,
  PlayCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import { MOCK_PROPERTY, MOCK_AGENT } from './constants';

export default function App() {
  const [expandedViewing, setExpandedViewing] = useState<number | null>(1);

  const [expandedOffer, setExpandedOffer] = useState<number | null>(null);
  const [comparableTab, setComparableTab] = useState<'damac' | 'marina'>('marina');

  const offers = [
    { 
      id: 1, 
      buyer: "Ahmed Al Mansouri", 
      tag: "Best", 
      offer: 2750000, 
      asking: 2850000, 
      date: "9 Apr 2026", 
      method: "Cash", 
      highlighted: true,
      note: "Strong buyer, ready to proceed. Has cash available and prefers quick closing timeline. Recommended to prioritize this offer."
    },
    { 
      id: 2, 
      buyer: "Sarah Williams", 
      offer: 2650000, 
      asking: 2850000, 
      date: "6 Apr 2026", 
      method: "Mortgage",
      note: "Counter at 2.8M suggested. Buyer is pre-approved but final approval pending. Follow up within a week."
    },
    { 
      id: 3, 
      buyer: "Investment Group LLC", 
      offer: 2500000, 
      asking: 2850000, 
      date: "2 Apr 2026", 
      method: "Cash",
      note: "Offer too low. Buyer was not willing to negotiate further. Declined."
    },
    { 
      id: 4, 
      buyer: "Mark Thompson", 
      offer: 2600000, 
      asking: 2850000, 
      date: "28 Mar 2026", 
      method: "Mortgage",
      note: "Buyer found another property in the same building. Offer withdrawn."
    }
  ];

  const viewingsData = [
    {
      id: 1,
      buyer: "Ahmed Al Mansouri",
      time: "8 Apr 2026 · 10:00 AM",
      status: "Completed",
      interest: "Very Interested",
      budget: "AED 2.8M - 3.0M",
      suggested: "AED 2.75M",
      payment: "Cash",
      paymentNote: "Cash buyer - no financing contingency required.",
      feedback: "Loved the marina view and modern finishes. Asking about payment flexibility.",
      nextViewing: "Scheduled for 15 Apr 2026",
      agentNote: "Prefers quick closing. Has cash ready. Strong buyer - prioritize follow-up."
    },
    {
      id: 2,
      buyer: "Sarah Williams",
      time: "5 Apr 2026 · 2:00 PM",
      status: "Completed",
      interest: "Interested",
      budget: "AED 2.5M - 2.9M",
      suggested: "AED 2.65M",
      payment: "Mortgage",
      paymentNote: "Mortgage means the buyer is using bank financing to purchase the property.",
      feedback: "Good layout but concerned about parking situation.",
      agentNote: "Needs mortgage pre-approval. Expected within 2 weeks. Follow up on parking concerns."
    },
    {
      id: 3,
      buyer: "Mohammed Hassan",
      time: "12 Apr 2026 · 11:00 AM",
      status: "Scheduled",
      budget: "AED 2.7M - 3.2M",
      agentNote: "First-time viewer. Interested in marina-facing units."
    },
    {
      id: 4,
      buyer: "Lisa Chen",
      time: "14 Apr 2026 · 4:00 PM",
      status: "Scheduled",
      budget: "AED 2.6M - 2.8M",
      agentNote: "Rescheduled from earlier date. Very interested based on initial call."
    }
  ];
  // Navigation items
  const navigationItems = [
    { name: 'Performance Overview', id: 'performance-overview' },
    { name: 'Viewings', id: 'viewings' },
    { name: 'Offers Received', id: 'offers-received' },
    { name: 'Time to Sell', id: 'time-to-sell' },
    { name: 'Market Valuation', id: 'market-valuation' },
    { name: 'Market Insights & Position', id: 'market-insights-position' },
    { name: 'Comparables', id: 'market-comparables' },
    { name: 'Listing Strength', id: 'listing-quality' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Agent Comments items
  const agentCommentsList = [
    { date: '10 Apr 2026', text: 'Owner is motivated to sell within 60 days. Price negotiation possible up to 5%.' },
    { date: '5 Apr 2026', text: 'Received multiple inquiries from serious buyers. Schedule viewings for this week.' },
    { date: '28 Mar 2026', text: 'Property listed. Owner prefers buyers with ready financing.' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header Section */}
      <header className="bg-[#F8FAFC] py-8">
        <div className="max-w-[1600px] mx-auto px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-[32px] font-[800] text-[#111827] leading-tight">Owner Property Report</h1>
            <p className="text-[16px] text-[#6B7280] mt-2 font-[500]">
              Prepared for <span className="text-[#111827] font-[700]">{MOCK_PROPERTY.preparedFor}</span> | Generated on <span className="text-[#374151] font-[600]">{MOCK_PROPERTY.generatedOn}</span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="h-[48px] px-6 flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-[16px] text-[15px] font-[700] text-[#00897B] hover:bg-gray-50 transition-all shadow-sm">
              <Download size={18} />
              Download PDF Report
            </button>
            <div className="h-[48px] pl-6 pr-4 flex items-center gap-4 bg-white border border-[#E5E7EB] rounded-[16px] shadow-sm">
              <span className="text-[15px] font-[700] text-[#00897B]">Share Report</span>
              <div className="flex items-center gap-2">
                <div className="w-[32px] h-[32px] bg-[#25D366] text-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-90">
                  <MessageCircle size={16} fill="currentColor" />
                </div>
                <div className="w-[32px] h-[32px] bg-[#00897B] text-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-90">
                  <Mail size={16} fill="currentColor" />
                </div>
                <div className="w-[32px] h-[32px] bg-gray-100 text-[#6B7280] rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200">
                  <Link2 size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Property Section */}
      <div className="max-w-[1600px] mx-auto px-8 mb-8">
        <div className="bg-white border border-[#E5E7EB] rounded-[24px] overflow-hidden shadow-sm flex flex-col lg:flex-row h-auto lg:h-[300px]">
          {/* Left: Image (approx 35% width) */}
          <div className="w-full lg:w-[35%] h-[240px] lg:h-full overflow-hidden relative shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1000&h=800"
              alt="Premium Interior" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute top-5 left-5 bg-white px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg border border-gray-100">
              <div className="w-5 h-5 bg-[#00897B] rounded-full flex items-center justify-center shrink-0">
                <Check size={12} className="text-white stroke-[4]" />
              </div>
              <span className="text-[12px] font-[800] text-[#111827]">TruCheck™</span>
            </div>
          </div>

          {/* Right: Content (remaining space, compact layout) */}
          <div className="flex-1 p-7 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <div className="text-[28px] font-[800] text-[#111827] leading-none mb-2">AED {MOCK_PROPERTY.price.toLocaleString()}</div>
                <div className="flex items-center gap-2 text-[#6B7280]">
                  <MapPin size={18} className="text-[#00897B] shrink-0" />
                  <span className="text-[15px] font-[600] truncate">{MOCK_PROPERTY.address}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-[#4B5563] bg-gray-50/50 p-3 rounded-[12px] border border-gray-100/50 w-fit">
                <span className="text-[14px] font-[700] text-[#111827]">{MOCK_PROPERTY.type}</span>
                <div className="h-3 w-px bg-gray-200"></div>
                <div className="flex items-center gap-1.5"><Bed size={18} className="text-gray-400" /> <span className="font-[800] text-[#111827]">{MOCK_PROPERTY.beds}</span></div>
                <div className="h-3 w-px bg-gray-200"></div>
                <div className="flex items-center gap-1.5"><Bath size={18} className="text-gray-400" /> <span className="font-[800] text-[#111827]">{MOCK_PROPERTY.baths}</span></div>
                <div className="h-3 w-px bg-gray-200"></div>
                <div className="text-[14px] font-[700] text-[#111827]">{MOCK_PROPERTY.area}</div>
              </div>

              <a 
                href={MOCK_PROPERTY.listingLink}
                target="_blank"
                rel="no-referrer"
                className="inline-flex items-center gap-2 text-[14px] font-[800] text-[#00897B] hover:underline"
              >
                <ExternalLink size={16} />
                View on Bayut
              </a>
            </div>

            <div className="pt-5 border-t border-[#F1F5F9] flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-[13px] font-[600] text-[#6B7280]">
                  <Calendar size={16} className="text-gray-400" /> Listed: <span className="text-[#111827] font-[700] ml-1">{MOCK_PROPERTY.liveOn}</span>
                </div>
                <div className="flex items-center gap-2 text-[13px] font-[600] text-[#6B7280]">
                  <Clock size={16} className="text-gray-400" /> <span className="text-[#111827] font-[700]">{MOCK_PROPERTY.daysOnMarket}</span> days ago
                </div>
              </div>

              <div className="flex items-center gap-4 pr-1">
                <div className="bg-white border border-[#E5E7EB] rounded-[8px] px-3 py-1.5 shadow-[0_2px_6px_rgba(0,0,0,0.06)] flex items-center justify-center">
                  <div className="bg-[#014282] px-3 py-1 rounded-[4px] flex items-center justify-center">
                    <span className="text-white text-[11px] font-[700] uppercase tracking-tight whitespace-nowrap">Prime Land Properties</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Bar - Re-aligned to same size as header/sidebar container */}
      <div className="max-w-[1600px] mx-auto px-8 mb-12">
        <div className="bg-white border border-[#E5E7EB] h-[80px] rounded-[20px] px-8 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#F0FDF4] rounded-[10px] flex items-center justify-center text-[#00897B] border border-[#DCFCE7]">
              <Tag size={20} />
            </div>
            <span className="text-[18px] font-[700] text-[#111827]">Listing Price</span>
          </div>
          <div className="flex items-center justify-end">
            <div className="text-[32px] font-[800] text-[#111827]">AED {MOCK_PROPERTY.price.toLocaleString()}</div>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto flex gap-8 px-8 pb-12 items-start">
        {/* Left Sidebar Navigation */}
        <aside className="w-[280px] shrink-0 sticky top-[24px] h-[calc(100vh-48px)] flex flex-col gap-4 overflow-hidden">

          {/* Agent Profile Card */}
          <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-6 shadow-sm shrink-0">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-sm border-2 border-white ring-1 ring-gray-100">
                <img src={MOCK_AGENT.imageUrl} alt={MOCK_AGENT.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-[15px] font-[700] text-[#111827] mb-2">{MOCK_AGENT.name}</h3>
                <div className="bg-[#014282] px-2.5 py-1 rounded-[4px] inline-flex items-center justify-center mb-3">
                  <span className="text-white text-[9px] font-[700] uppercase tracking-wider whitespace-nowrap">Prime Land Properties</span>
                </div>
                <div className="flex">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#F0FDF4] border border-[#DCFCE7] rounded-full">
                    <Award size={10} className="text-[#166534]" />
                    <span className="text-[10px] font-[700] text-[#166534] tracking-tight">TruBroker™</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-[#F1F5F9]">
              <div className="bg-[#F0FDF4]/50 rounded-[12px] p-2.5 border border-[#E5E7EB]">
                <div className="flex items-center gap-1.5 mb-1">
                  <Home size={13} className="text-[#00897B]/60" />
                  <div className="text-[10px] font-[700] text-[#64748B]">Sale</div>
                </div>
                <div className="text-[18px] font-[800] text-[#111827]">{MOCK_AGENT.saleMetric}</div>
              </div>
              <div className="bg-[#EFF6FF]/50 rounded-[12px] p-2.5 border border-[#E5E7EB]">
                <div className="flex items-center gap-1.5 mb-1">
                  <Key size={13} className="text-[#3B82F6]/60" />
                  <div className="text-[10px] font-[700] text-[#64748B]">Rent</div>
                </div>
                <div className="text-[18px] font-[800] text-[#111827]">{MOCK_AGENT.rentMetric}</div>
              </div>
            </div>
            <div className="pt-5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-[12px] text-[#6B7280] font-[500]"><Mail size={13} /> Email</div>
              <div className="text-[12px] font-[600] text-[#111827] truncate ml-1">{MOCK_AGENT.email}</div>
            </div>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-3 shadow-sm overflow-y-auto custom-scrollbar flex-1">
            <div className="space-y-1">
              {navigationItems.map((item, idx) => (
                <button 
                  key={idx}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full flex items-center text-left py-2.5 px-4 rounded-[12px] transition-all group text-[#64748B] font-[500] hover:bg-[#F8FAFC] hover:text-[#111827]"
                >
                  <span className="text-[14px] font-[500] leading-relaxed">{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 min-w-0">
          <main>

        {/* Performance Overview Section */}
        <section id="performance-overview" className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-[20px] font-[700] text-[#111827]">Performance Overview</h2>
              <div className="text-[13px] text-[#6B7280] font-[500] mt-1">
                <span className="font-[700]">47</span> days on Bayut · Last <span className="font-[700]">30</span> days performance included
              </div>
            </div>
          </div>
          
          {/* Row 1: Primary Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Listing Views */}
            <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-[20px] p-8 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className="w-[40px] h-[40px] bg-[#BBF7D0] rounded-[10px] flex items-center justify-center text-[#166534]">
                  <Eye size={22} />
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-baseline gap-2">
                  <div className="text-[32px] font-[700] text-[#111827]">4,892</div>
                  <div className="flex items-center gap-1 text-[14px] font-[700] text-[#166534]">
                    <span>↗ 12.4%</span>
                  </div>
                </div>
                <div className="text-[15px] font-[600] text-[#4B5563] mt-1">Listing Views</div>
                <div className="text-[12px] text-[#6B7280] mt-1 leading-relaxed font-[500]">compared to similar properties in Dubai Marina</div>
              </div>
            </div>

            {/* Clicks */}
            <div className="bg-[#EFF6FF] border border-[#DBEAFE] rounded-[20px] p-8 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className="w-[40px] h-[40px] bg-[#BFDBFE] rounded-[10px] flex items-center justify-center text-[#1D4ED8]">
                  <MousePointer2 size={22} />
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-baseline gap-2">
                  <div className="text-[32px] font-[700] text-[#111827]">847</div>
                  <div className="flex items-center gap-1 text-[14px] font-[700] text-[#166534]">
                    <span>↗ 8.2%</span>
                  </div>
                </div>
                <div className="text-[15px] font-[600] text-[#4B5563] mt-1">Clicks</div>
                <div className="text-[12px] text-[#6B7280] mt-1 leading-relaxed font-[500]">compared to similar properties in Dubai Marina</div>
              </div>
            </div>

            {/* Leads */}
            <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-8 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className="w-[40px] h-[40px] bg-[#F3F4F6] rounded-[10px] flex items-center justify-center text-[#374151]">
                  <Users size={22} />
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-baseline gap-2">
                  <div className="text-[32px] font-[700] text-[#111827]">34</div>
                  <div className="flex items-center gap-1 text-[14px] font-[700] text-[#EF4444]">
                    <span>↘ 5.1%</span>
                  </div>
                </div>
                <div className="text-[15px] font-[600] text-[#4B5563] mt-1">Leads</div>
                <div className="text-[12px] text-[#6B7280] mt-1 leading-relaxed font-[500]">compared to similar properties in Dubai Marina</div>
              </div>
            </div>
          </div>

          {/* Row 2: Secondary Metrics - 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-[52px] h-[52px] bg-[#F3F4F6] rounded-[12px] flex items-center justify-center text-[#374151] shrink-0">
                <Calendar size={26} />
              </div>
              <div>
                <div className="text-[32px] font-[700] text-[#111827] leading-none mb-1">4</div>
                <div className="text-[15px] font-[700] text-[#111827]">Total viewings</div>
                <div className="text-[13px] text-[#6B7280] font-medium mt-1">
                  2 Scheduled · 2 Completed
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-[52px] h-[52px] bg-[#F3F4F6] rounded-[12px] flex items-center justify-center text-[#374151] shrink-0">
                <FileText size={26} />
              </div>
              <div>
                <div className="text-[32px] font-[700] text-[#111827] leading-none mb-1">4</div>
                <div className="text-[15px] font-[700] text-[#111827]">Total offers</div>
                <div className="text-[13px] text-[#6B7280] font-medium mt-1">
                  3 Received · 1 Declined
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Viewings Section */}
        <section id="viewings" className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[20px] font-[700] text-[#111827]">Viewings</h2>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#EFF6FF] border border-[#DBEAFE] rounded-[16px] p-6 flex items-center gap-6 shadow-sm">
              <div className="w-[50px] h-[50px] bg-[#DBEAFE] rounded-[12px] flex items-center justify-center text-[#2563EB]">
                <Calendar size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-[28px] font-[700] text-[#1D4ED8] leading-none">2</span>
                <span className="text-[15px] font-[500] text-[#2563EB] mt-1">Viewings Scheduled</span>
              </div>
            </div>

            <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-[16px] p-6 flex items-center gap-6 shadow-sm">
              <div className="w-[50px] h-[50px] bg-[#DCFCE7] rounded-[12px] flex items-center justify-center text-[#16A34A]">
                <CheckCircle size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-[28px] font-[700] text-[#166534] leading-none">2</span>
                <span className="text-[15px] font-[500] text-[#16A34A] mt-1">Viewings Completed</span>
              </div>
            </div>
          </div>
        
          {/* List of Viewings */}
          <div className="space-y-4">
            {viewingsData.map((viewing) => (
              <div key={viewing.id} className="bg-white border border-[#E5E7EB] rounded-[20px] overflow-hidden shadow-sm transition-all">
                {/* Header */}
                <div 
                  className={`p-5 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors ${expandedViewing === viewing.id ? 'bg-[#F9FAFB]' : ''}`}
                  onClick={() => setExpandedViewing(expandedViewing === viewing.id ? null : viewing.id)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-[48px] h-[48px] bg-[#F3F4F6] rounded-full flex items-center justify-center text-[#9CA3AF]">
                      <User size={24} />
                    </div>
                    <div>
                      <h4 className="text-[16px] font-[700] text-[#111827]">{viewing.buyer}</h4>
                      <p className="text-[14px] text-[#6B7280]">{viewing.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-4 py-1.5 rounded-full text-[13px] font-[700] ${
                      viewing.status === 'Completed' ? 'bg-[#DCFCE7] text-[#166534]' : 'bg-[#DBEAFE] text-[#1E40AF]'
                    }`}>
                      {viewing.status}
                    </span>
                    {expandedViewing === viewing.id ? (
                      <ChevronUp size={20} className="text-[#9CA3AF]" />
                    ) : (
                      <ChevronDown size={20} className="text-[#9CA3AF]" />
                    )}
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedViewing === viewing.id && (
                  <div className="px-8 pb-8 pt-2 border-t border-[#F3F4F6]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-6">
                      {/* Left Side: Viewing Details */}
                      <div>
                        <div className="flex items-center gap-2 mb-6 text-[#111827]">
                          <Calendar size={18} className="text-[#6B7280]" />
                          <h5 className="text-[15px] font-[700]">Viewing Details</h5>
                        </div>
                        <div className="space-y-4">
                          <div className="flex gap-4">
                            <span className="text-[14px] text-[#9CA3AF] font-[500] w-28 shrink-0">Date & Time:</span>
                            <span className="text-[14px] font-[600] text-[#4B5563]">{viewing.time.split(' · ').slice(0, 2).join(', ')}</span>
                          </div>
                          {viewing.status === 'Completed' && (
                            <>
                              <div className="flex gap-4 items-center">
                                <span className="text-[14px] text-[#9CA3AF] font-[500] w-28 shrink-0">Interest Level:</span>
                                <span className={`px-3 py-1 rounded-full text-[12px] font-[700] ${
                                  viewing.interest === 'Very Interested' ? 'bg-[#DCFCE7] text-[#166534]' : 
                                  viewing.interest === 'Interested' ? 'bg-[#DBEAFE] text-[#1E40AF]' : 'bg-[#F3F4F6] text-[#4B5563]'
                                }`}>
                                  {viewing.interest}
                                </span>
                              </div>
                              <div className="flex gap-4">
                                <span className="text-[14px] text-[#9CA3AF] font-[500] w-28 shrink-0">Feedback:</span>
                                <p className="text-[14px] text-[#4B5563] leading-relaxed font-[500] flex-1">{viewing.feedback}</p>
                              </div>
                            </>
                          )}
                          {viewing.nextViewing && (
                            <div className="mt-6 bg-[#EFF6FF] border border-[#DBEAFE] rounded-[12px] p-4 flex items-center gap-3">
                              <Clock size={18} className="text-[#2563EB]" />
                              <div>
                                <div className="text-[12px] font-[700] text-[#1D4ED8]">Next Viewing</div>
                                <div className="text-[14px] font-[600] text-[#2563EB]">{viewing.nextViewing}</div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Right Side: Offer & Payment */}
                      <div>
                        <div className="flex items-center gap-2 mb-6 text-[#111827]">
                          <ClipboardList size={18} className="text-[#6B7280]" />
                          <h5 className="text-[15px] font-[700]">Buyer Offer & Payment Details</h5>
                        </div>
                        <div className="space-y-4">
                          <div className="flex gap-4">
                            <span className="text-[14px] text-[#9CA3AF] font-[500] w-32 shrink-0">Budget Range:</span>
                            <span className="text-[14px] font-[600] text-[#4B5563]">{viewing.budget}</span>
                          </div>
                          
                          {viewing.status === 'Completed' && (
                            <>
                              {viewing.suggested && (
                                <div className="flex gap-4">
                                  <span className="text-[14px] text-[#9CA3AF] font-[500] w-32 shrink-0">Suggested Offer:</span>
                                  <span className="text-[14px] font-[700] text-[#111827]">{viewing.suggested}</span>
                                </div>
                              )}
                              <div className="mt-6 bg-[#F9FAFB] border border-[#E5E7EB] rounded-[16px] p-5">
                                <div className="flex items-center gap-3 mb-2">
                                  <CreditCard size={18} className="text-[#4B5563]" />
                                  <span className="text-[15px] font-[700] text-[#111827]">{viewing.payment}</span>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Agent Comments Row */}
                    <div className="mt-8 pt-6 border-t border-[#F3F4F6]">
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <MessageSquare size={18} className="text-[#008459]" />
                        </div>
                        <div className="flex-1">
                          <h6 className="text-[15px] font-[700] text-[#111827] mb-2">Agent Comments</h6>
                          <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-[14px] p-4">
                            <p className="text-[14px] text-[#166534] font-medium leading-relaxed">
                              {viewing.agentNote}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Offers Received Section */}
        <section id="offers-received" className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[20px] font-[700] text-[#111827]">Offers Received</h2>
          </div>
 
          <div className="bg-white border border-[#E5E7EB] rounded-[16px] overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse table-fixed">
              <thead>
                <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                  <th className="py-4 px-5 text-[14px] font-[700] text-[#6B7280] tracking-[0.05em] w-[6%] text-center">#</th>
                  <th className="py-4 px-5 text-[14px] font-[700] text-[#6B7280] tracking-[0.05em] w-[23%]">Buyer</th>
                  <th className="py-4 px-5 text-[14px] font-[700] text-[#6B7280] tracking-[0.05em] w-[22%]">Buyer offer</th>
                  <th className="py-4 px-5 text-[14px] font-[700] text-[#6B7280] tracking-[0.05em] w-[16%]">Offer date</th>
                  <th className="py-4 px-5 text-[14px] font-[700] text-[#6B7280] tracking-[0.05em] text-center w-[14%]">Method</th>
                  <th className="py-4 px-5 text-[14px] font-[700] text-[#6B7280] tracking-[0.05em] text-center w-[19%]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {offers.map((row) => {
                  const diff = row.offer - row.asking;
                  const diffPercent = ((diff / row.asking) * 100).toFixed(1);
                  const isBelow = diff < 0;
                  const isExpanded = expandedOffer === row.id;

                  return (
                    <Fragment key={row.id}>
                      <tr className={`border-b border-[#F3F4F6] hover:bg-[#F9FAFB] transition-colors h-[78px] ${row.highlighted ? 'bg-[#F0FDF4]/50' : ''}`}>
                        <td className="py-4 px-5 text-[15px] text-[#6B7280] font-[500] text-center">
                          {row.highlighted ? <Star size={16} className="text-yellow-400 fill-yellow-400 inline" /> : <span className="font-[700]">{row.id}</span>}
                        </td>
                        <td className="py-4 px-5 truncate">
                          <div className="flex items-center gap-2 overflow-hidden">
                            <span className="text-[15px] font-[700] text-[#111827] truncate">{row.buyer}</span>
                            {row.tag && <span className="bg-[#DCFCE7] text-[#166534] text-[11px] font-[700] px-2 py-0.5 rounded shrink-0">Best</span>}
                          </div>
                        </td>
                        <td className="py-4 px-5">
                          <div className="flex flex-col leading-[1.3]">
                            <div className="text-[15px] font-[800] text-[#111827]">AED {row.offer.toLocaleString()}</div>
                            <div className={`flex items-center gap-1 text-[12px] font-[700] ${isBelow ? 'text-[#EF4444]' : 'text-[#166534]'}`}>
                              {isBelow ? <TrendingDown size={14} /> : <TrendingUp size={14} />}
                              <span>{isBelow ? '' : '+'}{diffPercent}%</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-5 text-[15px] text-[#4B5563] font-[500]">{row.date}</td>
                        <td className="py-4 px-5 text-center">
                          <span className={`px-4 py-1.5 rounded-full text-[12px] font-[700] inline-block min-w-[80px] shadow-sm ${row.method === 'Cash' ? 'bg-[#DCFCE7] text-[#166534]' : 'bg-[#DBEAFE] text-[#1E40AF]'}`}>
                            {row.method}
                          </span>
                        </td>
                        <td className="py-4 px-5 text-center">
                          <button 
                            onClick={() => setExpandedOffer(isExpanded ? null : row.id)}
                            className={`inline-flex items-center gap-2 text-[14px] font-[700] transition-all ${isExpanded ? 'text-[#111827]' : 'text-[#4B5563] hover:text-[#111827]'}`}
                          >
                            <MessageSquare size={18} className={isExpanded ? 'text-[#111827]' : 'text-[#9CA3AF]'} />
                            <span className="inline">Comments</span> {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                          </button>
                        </td>
                      </tr>
                      {isExpanded && (
                        <tr>
                          <td colSpan={6} className="px-6 py-4 bg-[#F9FAFB]/50 border-b border-[#F3F4F6]">
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              className="bg-white border border-[#E5E7EB] rounded-[16px] p-6 shadow-sm"
                            >
                              <h6 className="text-[15px] font-[700] text-[#374151] mb-2">Agent Comments</h6>
                              <p className="text-[15px] text-[#4B5563] leading-relaxed font-[500]">
                                {row.note}
                              </p>
                            </motion.div>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Time to Sell Section */}
        <section id="time-to-sell" className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[20px] font-[700] text-[#111827]">Time to Sell</h2>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Avg. Similar Properties */}
              <div className="bg-[#F9FAFB] border border-[#F1F5F9] rounded-[24px] p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-[24px] h-[24px] flex items-center justify-center text-[#64748B]">
                    <Clock size={22} />
                  </div>
                  <span className="text-[14px] font-[700] text-[#64748B] tracking-wider">Avg. similar properties</span>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-[48px] font-[700] text-[#111827]">42</span>
                  <span className="text-[20px] font-[700] text-[#64748B]">days</span>
                </div>
                <div className="text-[15px] text-[#64748B] font-[500]">Average time to sell</div>
              </div>
 
              {/* Your Listing */}
              <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-[24px] h-[24px] flex items-center justify-center text-[#B45309]">
                    <TrendingUp size={22} />
                  </div>
                  <span className="text-[14px] font-[700] text-[#B45309] tracking-wider">Your listing</span>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-[48px] font-[700] text-[#B45309]">47</span>
                  <span className="text-[20px] font-[700] text-[#B45309]">days</span>
                </div>
                <div className="text-[15px] text-[#B45309] font-[700]">5 days above avg</div>
              </div>
            </div>
 
                <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-[20px] p-6 flex items-start gap-4">
                  <div className="text-[#64748B] shrink-0 mt-0.5">
                    <AlertCircle size={28} />
                  </div>
                  <div>
                    <h4 className="text-[18px] font-[700] text-[#111827] mb-1.5">Above average market time</h4>
                    <p className="text-[16px] text-[#6B7280] leading-relaxed font-[500]">
                      Properties similar to yours in Dubai Marina typically sell within <span className="font-[700]">42</span> days. Consider adjusting your pricing strategy or boosting visibility to accelerate the sale.
                    </p>
                  </div>
                </div>
              </div>
          </section>

        {/* Market Valuation Section */}
        <section id="market-valuation" className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[20px] font-[700] text-[#111827]">Market Valuation</h2>
            <div className="flex items-center gap-1.5 text-[14px]">
              <Sparkles size={16} className="text-[#008459]" />
              <span className="text-[#6B7280]">Powered by</span>
              <span className="font-[700] text-[#008459]">TruEstimate™</span>
            </div>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[24px] overflow-hidden shadow-sm p-8">
            <div className="flex flex-col lg:flex-row gap-0 items-stretch">
              {/* LEFT COLUMN: Listing Price */}
              <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left pb-10 lg:pb-0 lg:pr-12">
                <div className="flex-1">
                  <div className="text-[12px] font-[600] text-[#94A3B8] mb-2 uppercase tracking-wider">Listing price</div>
                  <div className="text-[38px] font-[800] text-[#111827] leading-none mb-3 whitespace-nowrap">AED 2.85M</div>
                  
                  <div className="flex items-center gap-2.5 mb-4 h-[28px]">
                    <div className="bg-[#F0FDF4]/80 border border-[#DCFCE7]/80 rounded-full px-5 py-1 text-[12px] font-[700] text-[#166534] flex items-center justify-center h-full shadow-sm/5">
                      TruEstimate™ range match
                    </div>
                  </div>
                </div>
                
                <p className="text-[13px] text-[#6B7280] font-[500] leading-tight max-w-[240px] mt-auto">
                  Current listing price compared against Bayut TruEstimate™
                </p>
              </div>

              {/* VISUAL DIVIDER */}
              <div className="hidden lg:block w-px bg-[#E5E7EB] self-stretch" />

              {/* RIGHT COLUMN: TruEstimate Value */}
              <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-12 pt-10 lg:pt-0">
                <div className="text-[12px] font-[600] text-[#94A3B8] mb-3 uppercase tracking-wider">TruEstimate™ value</div>
                <div className="text-[32px] font-[800] text-[#16A34A] leading-none mb-4 whitespace-nowrap">AED 2.88M</div>
                
                <div className="flex items-center gap-2.5 mb-5 h-[28px]">
                  <div className="flex items-center gap-1.5 bg-[#F0FDF4]/50 border border-[#DCFCE7]/60 px-2 py-0.5 rounded-md h-fit self-center">
                    <Activity size={10} className="text-[#166534]" />
                    <span className="text-[11px] font-[600] text-[#166534] uppercase tracking-tighter">High confidence</span>
                  </div>
                </div>

                <div className="w-full space-y-3.5 text-[13.5px]">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F8FAFC]">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0]"></div>
                      <span className="text-[#6B7280] font-[600]">TruEstimate™ range</span>
                    </div>
                    <span className="text-[#111827] font-[700]">AED 2.57M – 3.18M</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0]"></div>
                      <span className="text-[#6B7280] font-[600]">Difference vs TruEstimate™</span>
                    </div>
                    <span className="text-[#166534] font-[700] bg-[#F0FDF4] px-1.5 py-0 rounded-md text-[13px]">-1.0% (AED -30K)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Agent Recommendation Box */}
            <div className="mt-6 pt-6 border-t border-[#F1F5F9]">
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[20px] p-6 lg:p-7 flex flex-col lg:flex-row gap-6 items-start lg:items-center">
                <div className="w-14 h-14 bg-white border border-[#E2E8F0] rounded-[16px] flex items-center justify-center text-[#00897B] shrink-0 shadow-sm">
                  <CheckCircle size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-[16px] font-[800] text-[#111827] mb-1.5">Agent Recommendation</h4>
                  <p className="text-[14px] text-[#64748B] leading-relaxed font-[500]">
                    The listing price of <span className="text-[#111827] font-[700]">AED 2.85M</span> is well-positioned within the TruEstimate™ range. We recommend maintaining this price point to attract serious buyers while remaining competitive in the current Dubai Marina market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Insights & Position Section */}
        <section id="market-insights-position" className="mb-14">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[20px] font-[700] text-[#111827]">Market Insights & Position</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Demand Trend Card */}
            <div className="bg-white border border-[#E5E7EB] rounded-[16px] p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-[44px] h-[44px] bg-[#F0FDF4] rounded-[12px] flex items-center justify-center text-[#166534] shrink-0 border border-[#DCFCE7]">
                  <TrendingUp size={22} />
                </div>
                <div>
                  <div className="text-[15px] font-[700] text-[#111827] mb-1 font-sans">Demand trend</div>
                  <p className="text-[13px] text-[#6B7280] leading-relaxed font-[500]">
                    Buyer interest is increasing by 12% month-over-month.
                  </p>
                </div>
              </div>
            </div>

            {/* Buyer Type Card */}
            <div className="bg-white border border-[#E5E7EB] rounded-[16px] p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-[44px] h-[44px] bg-[#EFF6FF] rounded-[12px] flex items-center justify-center text-[#1D4ED8] shrink-0 border border-[#DBEAFE]">
                  <Users size={22} />
                </div>
                <div>
                  <div className="text-[15px] font-[700] text-[#111827] mb-1 font-sans">Buyer type</div>
                  <p className="text-[13px] text-[#6B7280] leading-relaxed font-[500]">
                    Dubai Marina is primarily a cash market with 65% cash buyers.
                  </p>
                </div>
              </div>
            </div>

            {/* Negotiation Margin Card */}
            <div className="bg-white border border-[#E5E7EB] rounded-[16px] p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-[44px] h-[44px] bg-[#FFFBEB] rounded-[12px] flex items-center justify-center text-[#B45309] shrink-0 border border-[#FEF3C7]">
                  <div className="text-[18px] font-black leading-none">%</div>
                </div>
                <div>
                  <div className="text-[15px] font-[700] text-[#111827] mb-1 font-sans">Negotiation margin</div>
                  <p className="text-[13px] text-[#6B7280] leading-relaxed font-[500]">
                    Average negotiation discount is 3-5% in this area.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-[16px] p-6 shadow-sm">
            <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-12">
              {/* Scores Side */}
              <div className="flex items-center gap-10 lg:gap-16 shrink-0">
                <div>
                  <div className="text-[11px] font-[700] text-[#94A3B8] mb-1.5 tracking-wider">Demand Score</div>
                  <div className="text-[26px] font-[800] text-[#166534] leading-none">High</div>
                </div>
                <div className="w-px h-10 bg-[#F1F5F9] hidden sm:block" />
                <div>
                  <div className="text-[11px] font-[700] text-[#94A3B8] mb-1.5 tracking-wider">Supply Score</div>
                  <div className="text-[26px] font-[800] text-[#1D4ED8] leading-none">Moderate</div>
                </div>
              </div>

              {/* Insight Side */}
              <div className="flex-1 border-l-0 md:border-l border-[#F1F5F9] md:pl-12 flex items-center">
                <div className="text-[14px] text-[#64748B] leading-relaxed font-[500]">
                  <span className="font-[700] text-[#111827] block mb-1">High demand outweighs competition</span>
                  Your property is in a favorable market position with buyer interest exceeding available inventory.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparables Section */}
        <section id="market-comparables" className="mb-14">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-[24px] font-[700] text-[#111827]">Comparables</h2>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-8 border-b border-[#E5E7EB] mb-8">
            <button 
              onClick={() => setComparableTab('marina')}
              className={`pb-4 text-[15px] font-[700] transition-all relative ${comparableTab === 'marina' ? 'text-[#00897B]' : 'text-[#6B7280] hover:text-[#111827]'}`}
            >
              Dubai Marina
              {comparableTab === 'marina' && (
                <motion.div layoutId="activeTab" className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#00897B]" />
              )}
            </button>
            <button 
              onClick={() => setComparableTab('damac')}
              className={`pb-4 text-[15px] font-[700] transition-all relative ${comparableTab === 'damac' ? 'text-[#00897B]' : 'text-[#6B7280] hover:text-[#111827]'}`}
            >
              DAMAC Heights
              {comparableTab === 'damac' && (
                <motion.div layoutId="activeTab" className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#00897B]" />
              )}
            </button>
          </div>

          {comparableTab === 'damac' ? (
            <div className="mb-14">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[18px] font-[700] text-[#111827]">Similar Properties Sold in DAMAC Heights</h3>
              </div>

              <div className="bg-white border border-[#E5E7EB] rounded-[16px] overflow-hidden shadow-sm">
                <div className="w-full">
                  <table className="w-full text-left border-collapse table-fixed">
                    <thead>
                      <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB] h-[56px]">
                        <th className="px-6 text-[13px] font-[600] text-[#6B7280] w-[36%]">Property</th>
                        <th className="px-4 text-[13px] font-[600] text-[#6B7280] text-center w-[10%]">Beds</th>
                        <th className="px-4 text-[13px] font-[600] text-[#6B7280] text-center w-[10%]">Baths</th>
                        <th className="px-6 text-[13px] font-[600] text-[#6B7280] text-center w-[20%]">Days on Market</th>
                        <th className="px-6 text-[13px] font-[600] text-[#6B7280] text-right w-[24%] pr-6">Sold Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { property: "Unit 2105, DAMAC Heights", beds: 2, baths: 3, dom: "38 days", price: "2,780,000" },
                        { property: "Unit 1804, DAMAC Heights", beds: 2, baths: 2, dom: "25 days", price: "2,920,000" },
                        { property: "Unit 902, DAMAC Heights", beds: 2, baths: 2, dom: "52 days", price: "2,650,000" },
                        { property: "Unit 1205, DAMAC Heights", beds: 2, baths: 3, dom: "41 days", price: "2,810,000" },
                      ].map((item, idx) => (
                        <tr key={idx} className="border-b border-[#F3F4F6] last:border-b-0 hover:bg-[#F9FAFB] transition-colors h-[80px]">
                          <td className="px-6">
                            <div className="flex flex-col gap-1">
                              <span className="text-[14px] font-[700] text-[#111827] truncate">{item.property}</span>
                              <div className="flex items-center gap-1.5 px-2 py-0.5 bg-[#F0FDF4] border border-[#DCFCE7] rounded-md shrink-0 w-fit">
                                <CheckCircle size={10} className="text-[#166534]" />
                                <span className="text-[10px] font-[800] text-[#166534] uppercase tracking-tighter">Sold</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 text-[14px] text-[#111827] font-[700] text-center">{item.beds}</td>
                          <td className="px-4 text-[14px] text-[#111827] font-[700] text-center">{item.baths}</td>
                          <td className="px-6 text-[14px] text-[#4B5563] font-[500] text-center">{item.dom}</td>
                          <td className="px-6 text-right pr-6">
                            <div className="text-[15px] font-[700] text-[#111827]">AED {item.price}</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            <div className="mb-14">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[18px] font-[700] text-[#111827]">Similar Properties Sold in Dubai Marina</h3>
              </div>

              <div className="bg-white border border-[#E5E7EB] rounded-[16px] overflow-hidden shadow-sm">
                <div className="w-full">
                  <table className="w-full text-left border-collapse table-fixed">
                    <thead>
                      <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB] h-[56px]">
                        <th className="px-6 text-[13px] font-[600] text-[#6B7280] w-[36%]">Property</th>
                        <th className="px-4 text-[13px] font-[600] text-[#6B7280] text-center w-[10%]">Beds</th>
                        <th className="px-4 text-[13px] font-[600] text-[#6B7280] text-center w-[10%]">Baths</th>
                        <th className="px-6 text-[13px] font-[600] text-[#6B7280] text-center w-[20%]">Days on Market</th>
                        <th className="px-6 text-[13px] font-[600] text-[#6B7280] text-right w-[24%] pr-6">Sold Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { property: "Marina Gate Tower 1", beds: 2, baths: 2, dom: "40 days", price: "2,850,000" },
                        { property: "Cayan Tower", beds: 2, baths: 3, dom: "54 days", price: "2,900,000" },
                        { property: "Marina Promenade", beds: 2, baths: 2, dom: "33 days", price: "2,750,000" },
                      ].map((item, idx) => (
                        <tr key={idx} className="border-b border-[#F3F4F6] last:border-b-0 hover:bg-[#F9FAFB] transition-colors h-[80px]">
                          <td className="px-6">
                            <div className="flex flex-col gap-1">
                              <span className="text-[14px] font-[700] text-[#111827] truncate">{item.property}</span>
                              <div className="flex items-center gap-1.5 px-2 py-0.5 bg-[#F0FDF4] border border-[#DCFCE7] rounded-md shrink-0 w-fit">
                                <CheckCircle size={10} className="text-[#166534]" />
                                <span className="text-[10px] font-[800] text-[#166534] uppercase tracking-tighter">Sold</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 text-[14px] text-[#111827] font-[700] text-center">{item.beds}</td>
                          <td className="px-4 text-[14px] text-[#111827] font-[700] text-center">{item.baths}</td>
                          <td className="px-6 text-[14px] text-[#4B5563] font-[500] text-center">{item.dom}</td>
                          <td className="px-6 text-right pr-6">
                            <div className="text-[15px] font-[700] text-[#111827]">AED {item.price}</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Active Listings Section */}
          <div className="mt-12">
            <h3 className="text-[18px] font-[700] text-[#111827] mb-6">Similar Active Properties</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { price: "2,900,000", unit: "Marina Gate Tower 1", beds: 2, baths: 3, area: "1,480 sqft", psqft: "1,959", daysOnMarket: "21 days active", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=400&h=240" },
                { price: "2,750,000", unit: "Cayan Tower", beds: 2, baths: 2, area: "1,400 sqft", psqft: "1,964", daysOnMarket: "14 days active", img: "https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?auto=format&fit=crop&q=80&w=400&h=240" },
                { price: "2,950,000", unit: "Marina Gate Tower 3", beds: 2, baths: 3, area: "1,520 sqft", psqft: "1,941", daysOnMarket: "35 days active", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400&h=240" }
              ].map((item, iIndex) => (
                <div key={iIndex} className="bg-white border border-[#F3F4F6] rounded-[24px] overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-shadow">
                  <div className="relative aspect-[1.6/1]">
                    <img src={item.img} alt={item.unit} className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-[10px] flex items-center gap-1.5 text-[12px] font-[700] shadow-sm bg-[#EFF6FF] text-[#1D4ED8]">
                      <Activity size={14} />
                      Active
                    </div>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <div className="mb-6">
                      <div className="text-[22px] font-[700] text-[#111827] mb-1">AED {item.price}</div>
                      <div className="text-[15px] font-[700] text-[#4B5563]">{item.unit}</div>
                    </div>

                    <div className="flex items-center gap-4 text-[14px] text-[#6B7280] font-[700] mb-6">
                      <div className="flex items-center gap-1.5"><Bed size={16} className="text-gray-400" /> {item.beds}</div>
                      <div className="flex items-center gap-1.5"><Bath size={16} className="text-gray-400" /> {item.baths}</div>
                      <div className="flex items-center gap-1.5"><Maximize2 size={16} className="text-gray-400" /> {item.area}</div>
                    </div>

                    <div className="space-y-3 pt-6 border-t border-[#F3F4F6]">
                      <div className="flex justify-between text-[14px]">
                        <span className="text-[#9CA3AF] font-[500]">Price/sqft</span>
                        <span className="font-[700] text-[#111827]">AED {item.psqft}</span>
                      </div>
                      <div className="flex justify-between text-[14px]">
                        <span className="text-[#9CA3AF] font-[500]">Days active</span>
                        <span className="font-[700] text-[#2563EB]">{item.daysOnMarket}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Listing Strength Section */}
        <section id="listing-quality" className="mb-14 border-t border-[#F1F5F9] pt-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-[20px] font-[700] text-[#111827]">Listing Strength</h2>
          </div>
          
          <div className="bg-white border border-[#E5E7EB] rounded-[16px] p-6 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#F1F5F9]">
              
              {/* Column 1: Signature Tag */}
              <div className="py-6 md:py-3 md:pr-10">
                <div className="flex items-center gap-3 mb-3.5 min-h-[40px]">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-lg flex items-center justify-center text-[#2563EB] shrink-0 border border-[#DBEAFE]">
                    <Award size={20} />
                  </div>
                  <h3 className="text-[16px] font-[700] text-[#111827] leading-tight max-w-[140px]">Signature Tag Applied</h3>
                </div>
                <p className="text-[13px] text-[#64748B] font-[500] leading-[1.55]">
                  Appears at the top of search results, maximizing visibility and attracting more buyer leads.
                </p>
              </div>

              {/* Column 2: TruCheck */}
              <div className="py-6 md:py-3 md:px-10">
                <div className="flex items-center gap-3 mb-3.5 min-h-[40px]">
                  <div className="w-10 h-10 bg-[#F0FDF4] rounded-lg flex items-center justify-center text-[#166534] shrink-0 border border-[#DCFCE7]">
                    <CheckCircle size={20} />
                  </div>
                  <h3 className="text-[16px] font-[700] text-[#111827] leading-tight max-w-[140px]">TruChecked™ Listing</h3>
                </div>
                <p className="text-[13px] text-[#64748B] font-[500] leading-[1.55]">
                  Verified for accuracy and availability, increasing buyer trust and improving listing performance.
                </p>
              </div>

              {/* Column 3: Quality Score */}
              <div className="py-6 md:py-3 md:pl-10">
                <div className="flex items-center gap-3 mb-3.5 min-h-[40px]">
                  <div className="text-[26px] font-[800] text-[#00897B] leading-none shrink-0 flex items-baseline">
                    9<span className="text-[14px] text-[#94A3B8] font-[700] ml-0.5">/10</span>
                  </div>
                  <h3 className="text-[16px] font-[700] text-[#111827] leading-tight max-w-[140px]">Listing Quality Score</h3>
                </div>
                <p className="text-[13px] text-[#64748B] font-[500] leading-[1.55]">
                  Measures listing completeness and quality, helping improve ranking and buyer engagement.
                </p>
              </div>

            </div>
          </div>
        </section>
        </main>
        </div>

        {/* Right Sidebar Agent Comments */}
        <aside className="w-[320px] shrink-0 sticky top-6 h-[calc(100vh-48px)] flex flex-col gap-6">
          <div className="bg-white border border-[#E5E7EB] rounded-[24px] shadow-sm flex flex-col h-full overflow-hidden">
            <div className="p-6 border-b border-[#F1F5F9] flex items-center justify-between bg-white shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-[36px] h-[36px] flex items-center justify-center text-[#111827]">
                  <MessageSquare size={20} />
                </div>
                <h3 className="text-[16px] font-[800] text-[#111827]">Agent Comments</h3>
              </div>
              <button className="text-[#9CA3AF] hover:text-[#111827] transition-colors">
                <Plus size={20} />
              </button>
            </div>
            
            <div className="px-6 py-2 overflow-y-auto flex-1 space-y-4 custom-scrollbar">
              {agentCommentsList.map((note, idx) => (
                <div key={idx} className="bg-[#F8FAFC] border border-[#F1F5F9] rounded-[16px] p-5">
                  <div className="text-[12px] font-[500] text-[#9CA3AF] mb-2">{note.date}</div>
                  <p className="text-[14px] text-[#475569] leading-relaxed font-[500]">
                    {note.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-6 bg-[#F8FAFC] border-t border-[#F1F5F9] text-center shrink-0 text-[14px] font-[700] text-[#9CA3AF]">
              {agentCommentsList.length} comments added
            </div>
          </div>
        </aside>
      </div>

      <footer className="max-w-[1600px] mx-auto px-8 py-10 border-t border-[#E5E7EB] opacity-50">
        <div className="flex justify-between items-center text-[12px] text-[#6B7280] font-[500]">
          <div>© 2026 Bayut. All rights reserved.</div>
          <div className="flex gap-6 font-[500]">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
