import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Mic, 
  Building, 
  Camera, 
  Store,
  Plus,
  BarChart3
} from 'lucide-react';
import { supabase } from '../../lib/supabase';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    scientificCommittee: 0,
    speakers: 0,
    accommodation: 0,
    mediaCoverage: 0,
    exhibition: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [
        { count: scientificCommittee },
        { count: speakers },
        { count: accommodation },
        { count: mediaCoverage },
        { count: exhibition },
      ] = await Promise.all([
        supabase.from('scientific_committee').select('*', { count: 'exact', head: true }),
        supabase.from('speakers').select('*', { count: 'exact', head: true }),
        supabase.from('accommodation').select('*', { count: 'exact', head: true }),
        supabase.from('media_coverage').select('*', { count: 'exact', head: true }),
        supabase.from('exhibition').select('*', { count: 'exact', head: true }),
      ]);

      setStats({
        scientificCommittee: scientificCommittee || 0,
        speakers: speakers || 0,
        accommodation: accommodation || 0,
        mediaCoverage: mediaCoverage || 0,
        exhibition: exhibition || 0,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const cards = [
    {
      title: 'Scientific Committee',
      count: stats.scientificCommittee,
      icon: Users,
      color: 'teal',
      link: '/admin/scientific-committee',
    },
    {
      title: 'Speakers',
      count: stats.speakers,
      icon: Mic,
      color: 'purple',
      link: '/admin/speakers',
    },
    {
      title: 'Accommodation',
      count: stats.accommodation,
      icon: Building,
      color: 'orange',
      link: '/admin/accommodation',
    },
    {
      title: 'Media Coverage',
      count: stats.mediaCoverage,
      icon: Camera,
      color: 'pink',
      link: '/admin/media-coverage',
    },
    {
      title: 'Exhibition',
      count: stats.exhibition,
      icon: Store,
      color: 'blue',
      link: '/admin/exhibition',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Manage your conference content in both Arabic and English</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.title}
              to={card.link}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200 hover:border-gray-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{card.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{card.count}</p>
                </div>
                <div className={`p-3 bg-${card.color}-100 rounded-lg`}>
                  <Icon className={`w-6 h-6 text-${card.color}-600`} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <BarChart3 className="w-5 h-5 mr-2" />
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={`action-${card.title}`}
                to={`${card.link}/new`}
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className={`p-2 bg-${card.color}-100 rounded-lg mr-3`}>
                  <Plus className={`w-4 h-4 text-${card.color}-600`} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Add {card.title}</p>
                  <p className="text-sm text-gray-600">Create new content</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;