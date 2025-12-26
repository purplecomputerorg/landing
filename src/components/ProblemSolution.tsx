import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faCircleCheck, faInfinity, faClock } from '@fortawesome/free-solid-svg-icons';

export default function ProblemSolution() {
  return (
    <div className="relative z-20 max-w-4xl mx-auto">
        <p className="text-purple-primary font-semibold mb-4 text-center tracking-wide uppercase text-sm">
          A creativity device, not an entertainment device
        </p>
        <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-gray-900 mb-6 text-center tracking-tight">
          Screen time without the guilt
        </h2>

        <p className="text-xl text-gray-500 mb-16 text-center leading-relaxed max-w-2xl mx-auto">
          Most kids' devices are designed to capture attention. Purple is designed to set it free.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow ">
            <div className="flex items-start gap-6">
              <FontAwesomeIcon icon={faLock} className="text-purple-primary flex-shrink-0 mt-1" style={{ width: '2rem', height: '2rem' }} />
              <div>
                <h3 className="font-display font-bold text-gray-900 mb-2 text-lg">No internet</h3>
                <p className="text-gray-500">No ads, no algorithms, no tracking, no infinite feeds. Automatically secure.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow ">
            <div className="flex items-start gap-6">
              <FontAwesomeIcon icon={faCircleCheck} className="text-purple-primary flex-shrink-0 mt-1" style={{ width: '2rem', height: '2rem' }} />
              <div>
                <h3 className="font-display font-bold text-gray-900 mb-2 text-lg">Nothing to break</h3>
                <p className="text-gray-500">Kids get free rein of the whole computer. No settings to mess up, no files to lose.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow ">
            <div className="flex items-start gap-6">
              <FontAwesomeIcon icon={faInfinity} className="text-purple-primary flex-shrink-0 mt-1" style={{ width: '2rem', height: '2rem' }} />
              <div>
                <h3 className="font-display font-bold text-gray-900 mb-2 text-lg">Pay once, keep forever</h3>
                <p className="text-gray-500">No subscriptions, no in-app purchases. Just yours.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow ">
            <div className="flex items-start gap-6">
              <FontAwesomeIcon icon={faClock} className="text-purple-primary flex-shrink-0 mt-1" style={{ width: '2rem', height: '2rem' }} />
              <div>
                <h3 className="font-display font-bold text-gray-900 mb-2 text-lg">Built to bore them eventually</h3>
                <p className="text-gray-500">Limited by design. They'll put it down when they're done.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
