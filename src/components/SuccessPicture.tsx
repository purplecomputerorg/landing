import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faTv, faMugHot } from '@fortawesome/free-solid-svg-icons';

export default function SuccessPicture() {
  const vignettes = [
    {
      icon: faPaintBrush,
      text: 'They explore, draw, or make music',
      subtext: 'and then stop on their own.',
    },
    {
      icon: faTv,
      text: 'No video negotiations',
      subtext: 'No "one more episode." No ads.',
    },
    {
      icon: faMugHot,
      text: 'You get 20 quiet minutes',
      subtext: 'to cook dinner or answer an email.',
    },
  ];

  return (
    <div className="relative z-20 max-w-5xl mx-auto">
      <div className="bg-gradient-to-br from-purple-primary to-purple-dark rounded-3xl p-8 md:p-12">
        <div className="grid md:grid-cols-3 gap-6">
          {vignettes.map((v, i) => (
            <div key={i} className="text-center">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                <FontAwesomeIcon icon={v.icon} className="text-white" style={{ width: '1rem', height: '1rem' }} />
              </div>
              <p className="font-semibold text-white mb-1">{v.text}</p>
              <p className="text-purple-200 text-sm">{v.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
