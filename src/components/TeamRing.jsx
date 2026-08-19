import './TeamRing.scss';

const defaultPositions = [
  { top: '8%', left: '50%' },
  { top: '23.8%', left: '82.8%' },
  { top: '59.3%', left: '91%' },
  { top: '87.8%', left: '68.2%' },
  { top: '87.8%', left: '31.8%' },
  { top: '59.3%', left: '9%' },
  { top: '23.8%', left: '17.2%' },
];

export default function TeamRing({ photos, label = 'NETFUSION' }) {
  const items = photos.slice(0, defaultPositions.length);
  return (
    <div className="team-ring">
      <div className="team-ring__ring team-ring__ring--outer" />
      <div className="team-ring__ring team-ring__ring--inner" />
      <div className="team-ring__center">{label}</div>
      {items.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          role="presentation"
          className="team-ring__avatar"
          style={defaultPositions[i]}
          loading="lazy"
        />
      ))}
    </div>
  );
}
