import './PhotoBadges.scss';

export default function PhotoBadges({ src, alt, badges = [], className = '' }) {
  return (
    <div className={`photo-badges ${className}`}>
      <img src={src} alt={alt} loading="lazy" />
      {badges.map((b, i) => (
        <div key={i} className={`photo-badges__badge photo-badges__badge--${b.position || 'top-left'}`}>
          {b.icon && <span className="photo-badges__icon">{b.icon}</span>}
          <span>{b.text}</span>
        </div>
      ))}
    </div>
  );
}
