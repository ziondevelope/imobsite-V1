import { useEffect, useState } from 'react';
import { Star, StarHalf } from 'lucide-react';
import { Testimonial, testimonials } from '@/lib/data';

export default function Testimonials() {
  const [testimonialData, setTestimonialData] = useState<Testimonial[]>([]);

  useEffect(() => {
    setTestimonialData(testimonials);
  }, []);

  // Helper function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-primary text-primary h-5 w-5" />);
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-primary text-primary h-5 w-5" />);
    }

    return stars;
  };

  return (
    <section className="py-16 bg-primary bg-opacity-5">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-montserrat font-bold text-dark mb-2">
            Depoimentos
          </h2>
          <p className="text-secondary">
            O que nossos clientes dizem sobre nós
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialData.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-primary">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              <p className="text-secondary italic mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-secondary">
                    Cliente desde {testimonial.clientSince}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
