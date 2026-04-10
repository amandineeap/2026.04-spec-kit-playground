import ServiceCard from '@/components/services/ServiceCard';
import { services } from '@/data/services';

export const metadata = {
  title: 'Services — Happy Paws Dog Walking',
  description: 'Solo walks, group walks, and full-day daycare with pricing.',
};

export default function ServicesPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-bark mb-3 text-center">Our Services</h1>
      <p className="text-bark/70 text-center mb-12 max-w-xl mx-auto leading-relaxed">
        Tailored care options to suit every dog and lifestyle. All services are provided by a
        certified, insured professional.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
