import { Link } from 'react-router-dom'

export default function PropertyCard({ property }) {
  return (
    <article className="property-card">
      <img src={property.image} alt={property.title} />
      <div className="property-body">
        <div className="property-head">
          <h3>{property.title}</h3>
          <span>{property.rating}★</span>
        </div>
        <p>{property.location}</p>
        <p className="property-meta">
          {property.beds} beds · {property.baths} baths · up to {property.guests} guests
        </p>
        <div className="property-bottom">
          <strong>${property.pricePerNight}/night</strong>
          <Link to={`/listing/${property.id}`}>View Details</Link>
        </div>
      </div>
    </article>
  )
}
