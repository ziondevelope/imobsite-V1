
import { Link } from 'wouter';

interface CategoryCard {
  id: number;
  title: string;
  image: string;
  link: string;
  count: number;
}

export default function HomeCategories() {
  const categories: CategoryCard[] = [
    {
      id: 1,
      title: 'Moema',
      image: 'https://images.unsplash.com/photo-1577434373550-3a3c560659d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZXJuJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      link: '/properties?location=moema',
      count: 10
    },
    {
      id: 2,
      title: 'Campo Belo',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlJTIwc3BhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      link: '/properties?location=campo-belo',
      count: 8
    },
    {
      id: 3,
      title: 'Vila Olímpia',
      image: 'https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      link: '/properties?location=vila-olimpia',
      count: 8
    },
    {
      id: 4,
      title: 'Brooklin',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnJvb2tseW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      link: '/properties?location=brooklin',
      count: 5
    },
    {
      id: 5,
      title: 'Cidade Monções',
      image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29uZG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      link: '/properties?location=cidade-moncoes',
      count: 4
    },
    {
      id: 6,
      title: 'Brooklin Novo',
      image: 'https://images.unsplash.com/photo-1625602812206-5ec545ca1231?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJvb2tseW4lMjBuZXd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      link: '/properties?location=brooklin-novo',
      count: 2
    }
  ];

  return (
    <section className="py-16 bg-black">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Explore por Região</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Link key={category.id} href={category.link}>
              <div className="relative h-48 rounded-lg overflow-hidden cursor-pointer group">
                <img
                  src={category.image}
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-montserrat font-bold mb-1">
                    {category.title}
                  </h3>
                  <p className="text-white text-sm">
                    {category.count} Imóveis
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
