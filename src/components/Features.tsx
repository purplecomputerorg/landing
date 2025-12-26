export default function Features() {
  return (
    <div className="max-w-5xl mx-auto">
        <p className="text-purple-primary font-semibold mb-4 text-center tracking-wide uppercase text-sm">
          What's inside
        </p>
        <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-gray-900 mb-16 text-center tracking-tight">
          Built for curiosity
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
              <span className="text-purple-primary/40 text-sm">Screenshot coming soon</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                {/* mdi-chat-question */}
                <svg className="w-5 h-5 text-purple-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,3C6.5,3 2,6.58 2,11C2,13.13 3.05,15.07 4.75,16.5C4.75,17.1 4.33,18.67 2,21C4.37,20.89 6.64,20 8.47,18.5C9.61,18.83 10.82,19 12,19C17.5,19 22,15.42 22,11C22,6.58 17.5,3 12,3M12.19,5.5C14.22,5.5 15.86,6.93 15.86,8.7C15.86,10.47 14.22,11.89 12.19,11.89H11.5V13.5H10.07V10.89L10.92,10.58C12.25,10.12 13.29,9.5 13.29,8.7C13.29,8 12.59,7.5 11.86,7.5C11.14,7.5 10.43,8 10.43,8.7H9C9,6.93 10.64,5.5 12.19,5.5M10.07,14.58H11.5V16H10.07V14.58Z" />
                </svg>
                <h3 className="font-display font-bold text-xl text-gray-900">Ask</h3>
              </div>
              <p className="text-gray-500 leading-relaxed">
                Type a word, see an emoji. Type math, see the answer. A gentle first step into computing.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
              <span className="text-purple-primary/40 text-sm">Screenshot coming soon</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                {/* fa-music */}
                <svg className="w-5 h-5 text-purple-primary" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"/>
                </svg>
                <h3 className="font-display font-bold text-xl text-gray-900">Play</h3>
              </div>
              <p className="text-gray-500 leading-relaxed">
                Every key makes a sound and color. No wrong notes, no wrong moves. Just exploration.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
              <span className="text-purple-primary/40 text-sm">Screenshot coming soon</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                {/* mdi-file-document */}
                <svg className="w-5 h-5 text-purple-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" />
                </svg>
                <h3 className="font-display font-bold text-xl text-gray-900">Write</h3>
              </div>
              <p className="text-gray-500 leading-relaxed">
                Large text, easy typing, colors that shift as you go. A space to put thoughts into words.
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}
