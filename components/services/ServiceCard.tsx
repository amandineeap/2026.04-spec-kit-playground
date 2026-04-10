import type { Service } from '@/data/types';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article
      className="bg-blush/30 rounded-2xl p-6 flex flex-col gap-3 border border-blush hover:shadow-md transition-shadow"
      aria-label={`${service.name} — ${service.price}`}
    >
      {service.icon && (
        <span role="img" aria-label={service.name} className="text-4xl">
          {service.icon}
        </span>
      )}
      <h2 className="text-xl font-bold text-bark">{service.name}</h2>
      <p className="text-bark/70 text-sm leading-relaxed flex-1">{service.description}</p>
      <p className="text-bark font-semibold bg-peach px-3 py-1 rounded-full text-sm w-fit border border-peach/60">
        {service.price}
      </p>
    </article>
  );
}
