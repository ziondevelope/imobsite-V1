
import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider } from "@/components/ui/sidebar";

interface AdminStats {
  totalProperties: number;
  totalAgents: number;
  totalMessages: number;
}

interface Property {
  id: number;
  title: string;
  status: string;
  price: number;
}

interface Agent {
  id: number;
  name: string;
  email: string;
  active: boolean;
}

interface Message {
  id: number;
  name: string;
  email: string;
  subject: string;
  createdAt: string;
}

export default function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [, setLocation] = useLocation();
  const [stats, setStats] = useState<AdminStats>({
    totalProperties: 0,
    totalAgents: 0,
    totalMessages: 0
  });
  const [properties, setProperties] = useState<Property[]>([]);
  const [agents, setAgents] = useState<Agent[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const response = await fetch('/api/admin/check');
        if (!response.ok) {
          setLocation('/');
          return;
        }
        setIsAdmin(true);
        
        // Fetch initial data
        const statsResponse = await fetch('/api/admin/stats');
        const statsData = await statsResponse.json();
        setStats(statsData);

        // Fetch other data
        const [propertiesRes, agentsRes, messagesRes] = await Promise.all([
          fetch('/api/properties'),
          fetch('/api/agents'),
          fetch('/api/contact/messages')
        ]);

        setProperties(await propertiesRes.json());
        setAgents(await agentsRes.json());
        setMessages(await messagesRes.json());
      } catch (error) {
        console.error('Error:', error);
        setLocation('/');
      }
    };
    checkAdmin();
  }, []);

  if (!isAdmin) return null;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <SidebarProvider>
        <Sidebar>
        <SidebarHeader className="p-4">
          <h2 className="text-xl font-bold">Painel Admin</h2>
        </SidebarHeader>
        <SidebarContent className="space-y-1">
          <Tabs value={activeTab} orientation="vertical">
            <TabsList className="flex flex-col w-full">
              <TabsTrigger value="dashboard" onClick={() => setActiveTab("dashboard")}
                className="w-full text-left px-4 py-2 hover:bg-gray-200">
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="properties" onClick={() => setActiveTab("properties")}
                className="w-full text-left px-4 py-2 hover:bg-gray-200">
                Imóveis
              </TabsTrigger>
              <TabsTrigger value="agents" onClick={() => setActiveTab("agents")}
                className="w-full text-left px-4 py-2 hover:bg-gray-200">
                Corretores
              </TabsTrigger>
              <TabsTrigger value="messages" onClick={() => setActiveTab("messages")}
                className="w-full text-left px-4 py-2 hover:bg-gray-200">
                Mensagens
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </SidebarContent>
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Tabs value={activeTab} className="p-6">
          <TabsContent value="dashboard">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle>Total de Imóveis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-green-600">{stats.totalProperties}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Total de Corretores</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-blue-600">{stats.totalAgents}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Mensagens</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-purple-600">{stats.totalMessages}</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="properties">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Gerenciar Imóveis</CardTitle>
                <Button>Adicionar Imóvel</Button>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left p-2">ID</th>
                        <th className="text-left p-2">Título</th>
                        <th className="text-left p-2">Status</th>
                        <th className="text-left p-2">Preço</th>
                        <th className="text-left p-2">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {properties.map((property) => (
                        <tr key={property.id} className="border-t">
                          <td className="p-2">{property.id}</td>
                          <td className="p-2">{property.title}</td>
                          <td className="p-2">{property.status}</td>
                          <td className="p-2">R$ {property.price}</td>
                          <td className="p-2">
                            <Button variant="outline" size="sm" className="mr-2">Editar</Button>
                            <Button variant="destructive" size="sm">Excluir</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="agents">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Gerenciar Corretores</CardTitle>
                <Button>Adicionar Corretor</Button>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left p-2">ID</th>
                        <th className="text-left p-2">Nome</th>
                        <th className="text-left p-2">Email</th>
                        <th className="text-left p-2">Status</th>
                        <th className="text-left p-2">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {agents.map((agent) => (
                        <tr key={agent.id} className="border-t">
                          <td className="p-2">{agent.id}</td>
                          <td className="p-2">{agent.name}</td>
                          <td className="p-2">{agent.email}</td>
                          <td className="p-2">
                            {agent.active ? 
                              <span className="text-green-600">Ativo</span> : 
                              <span className="text-red-600">Inativo</span>
                            }
                          </td>
                          <td className="p-2">
                            <Button variant="outline" size="sm" className="mr-2">Editar</Button>
                            <Button variant="destructive" size="sm">Desativar</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle>Mensagens Recebidas</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left p-2">Data</th>
                        <th className="text-left p-2">Nome</th>
                        <th className="text-left p-2">Email</th>
                        <th className="text-left p-2">Assunto</th>
                        <th className="text-left p-2">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {messages.map((message) => (
                        <tr key={message.id} className="border-t">
                          <td className="p-2">{new Date(message.createdAt).toLocaleDateString()}</td>
                          <td className="p-2">{message.name}</td>
                          <td className="p-2">{message.email}</td>
                          <td className="p-2">{message.subject}</td>
                          <td className="p-2">
                            <Button variant="outline" size="sm" className="mr-2">Ver</Button>
                            <Button variant="destructive" size="sm">Excluir</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      </SidebarProvider>
    </div>
  );
}
