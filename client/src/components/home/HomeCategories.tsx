import { Link } from 'wouter';

interface CategoryCard {
  id: number;
  title: string;
  image: string;
  link: string;
}

export default function HomeCategories() {
  const categories: CategoryCard[] = [
    {
      id: 1,
      title: 'Apartamentos',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      link: '/properties?type=apartment'
    },
    {
      id: 2,
      title: 'Casas',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      link: '/properties?type=house'
    },
    {
      id: 3,
      title: 'Comercial',
      image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      link: '/properties?type=commercial'
    },
    {
      id: 4,
      title: 'Terrenos',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      link: '/properties?type=land'
    }
  ];

  return (
    <section className="py-16 bg-zinc-800">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-montserrat font-bold text-white mb-2">
            Categorias de Imóveis
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Encontre o imóvel perfeito para você
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={category.link}>
              <div className="relative h-64 rounded-sm overflow-hidden border border-zinc-700 group cursor-pointer">
                <img
                  src={category.image}
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-zinc-900 bg-opacity-80 px-6 py-3 rounded-sm border-l-4 border-green-500 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-xl font-montserrat font-bold text-center">
                      {category.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}