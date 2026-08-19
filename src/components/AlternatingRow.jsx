import './AlternatingRow.scss';

export default function AlternatingRow({
  image,
  alt,
  eyebrow,
  title,
  description,
  reverse = false,
  shape = 'rounded',
  badge,
}) {
  return (
    <div className={`alt-row ${reverse ? 'alt-row--reverse' : ''}`}>
      <div className="container alt-row__inner">
        <div className={`alt-row__media alt-row__media--${shape}`}>
          <img src={image} alt={alt} loading="lazy" />
          {badge && (
            <div className="alt-row__badge">
              {typeof badge === 'object' && badge !== null && !badge.$$typeof ? (
                <>
                  {badge.icon && <span className="alt-row__badge-icon">{badge.icon}</span>}
                  {badge.text && <span>{badge.text}</span>}
                </>
              ) : (
                badge
              )}
            </div>
          )}
        </div>
        <div className="alt-row__text">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
