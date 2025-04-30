
import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';

interface AdminStats {
  totalProperties: number;
  totalAgents: number;
  totalMessages: number;
}

export default function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [stats, setStats] = useState<AdminStats>({
    totalProperties: 0,
    totalAgents: 0,
    totalMessages: 0
  });
  const [, setLocation] = useLocation();

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const response = await fetch('/api/admin/check');
        if (!response.ok) {
          setLocation('/');
          return;
        }
        setIsAdmin(true);
        const statsResponse = await fetch('/api/admin/stats');
        const statsData = await statsResponse.json();
        setStats(statsData);
      } catch (error) {
        console.error('Error:', error);
        setLocation('/');
      }
    };
    checkAdmin();
  }, []);

  if (!isAdmin) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Área Administrativa</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Total de Imóveis</h3>
          <p className="text-3xl font-bold text-green-600">{stats.totalProperties}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Total de Corretores</h3>
          <p className="text-3xl font-bold text-blue-600">{stats.totalAgents}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Mensagens</h3>
          <p className="text-3xl font-bold text-purple-600">{stats.totalMessages}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Ações Rápidas</h2>
          <div className="space-y-2">
            <button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
              Adicionar Novo Imóvel
            </button>
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Gerenciar Corretores
            </button>
            <button className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
              Ver Mensagens
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
