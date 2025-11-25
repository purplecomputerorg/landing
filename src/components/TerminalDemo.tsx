import React, { useState, useRef, useEffect } from 'react';
import {
  processInput,
  getWelcomeMessage,
  getModeDescription,
  type TerminalLine,
  type Mode,
} from '@/lib/fake-ipy-repl';

export default function TerminalDemo() {
  const [lines, setLines] = useState<TerminalLine[]>(getWelcomeMessage());
  const [currentInput, setCurrentInput] = useState('');
  const [mode, setMode] = useState<Mode>('normal');
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Focus input on mount and when terminal is clicked
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  // Scroll to bottom when new lines are added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!currentInput.trim()) return;

    // Add input line
    const inputLine: TerminalLine = {
      type: 'input',
      content: currentInput,
      timestamp: Date.now(),
    };

    // Process input
    const outputLines = processInput(currentInput, mode);

    // Check for clear command
    if (outputLines.length === 1 && outputLines[0].type === 'system' && outputLines[0].content === 'CLEAR') {
      setLines(getWelcomeMessage());
      setCurrentInput('');
      return;
    }

    // Add all lines
    setLines(prev => [...prev, inputLine, ...outputLines]);
    setCurrentInput('');
    setIsTyping(true);

    // Reset typing indicator
    setTimeout(() => setIsTyping(false), 300);
  };

  const handleModeChange = (newMode: Mode) => {
    setMode(newMode);
    const modeLine: TerminalLine = {
      type: 'system',
      content: `Switched to ${getModeDescription(newMode)}`,
      color: '#ffd93d',
      timestamp: Date.now(),
    };
    setLines(prev => [...prev, modeLine]);
  };

  return (
    <div className="w-full">
      {/* Mode Selector */}
      <div className="mb-4 flex flex-wrap gap-2 justify-center">
        {(['normal', 'emoji', 'color', 'shapes'] as Mode[]).map((m) => (
          <button
            key={m}
            onClick={() => handleModeChange(m)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              mode === m
                ? 'bg-yellow-accent text-purple-dark shadow-lg scale-105'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            {m === 'normal' && '✨ Normal'}
            {m === 'emoji' && '😊 Emoji'}
            {m === 'color' && '🌈 Color'}
            {m === 'shapes' && '●■▲ Shapes'}
          </button>
        ))}
      </div>

      {/* Terminal Window */}
      <div
        className="terminal-window bg-purple-dark rounded-2xl shadow-2xl overflow-hidden border-4 border-purple-primary"
        onClick={handleTerminalClick}
      >
        {/* Terminal Header */}
        <div className="terminal-header bg-purple-primary/50 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="ml-4 text-white/70 text-sm font-mono">
            Purple Computer Terminal
          </div>
        </div>

        {/* Terminal Content */}
        <div
          ref={terminalRef}
          className="terminal-content p-6 min-h-[400px] max-h-[500px] overflow-y-auto cursor-text"
          style={{ backgroundColor: '#2d1b4e' }}
        >
          {/* Previous Lines */}
          {lines.map((line, idx) => (
            <div
              key={`${line.timestamp}-${idx}`}
              className="terminal-line mb-2 animate-fade-in"
            >
              {line.type === 'input' && (
                <div className="flex items-start gap-2">
                  <span className="text-2xl">💜❯</span>
                  <span className="terminal-text text-white flex-1">
                    {line.content}
                  </span>
                </div>
              )}
              {(line.type === 'output' || line.type === 'system') && (
                <div
                  className="terminal-text ml-8"
                  style={{ color: line.color || '#6dd5ed' }}
                >
                  {line.content}
                </div>
              )}
            </div>
          ))}

          {/* Current Input Line */}
          <form onSubmit={handleSubmit} className="flex items-start gap-2">
            <span className="text-2xl">💜❯</span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              className="terminal-text flex-1 bg-transparent text-white outline-none border-none"
              placeholder="Type something magical..."
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
            <span
              className={`inline-block w-3 h-7 bg-yellow-accent ${
                isTyping ? '' : 'animate-cursor-blink'
              }`}
            ></span>
          </form>
        </div>

        {/* Terminal Footer Hint */}
        <div className="terminal-footer bg-purple-primary/30 px-4 py-2 text-center text-white/60 text-xs">
          Try typing: cat, dog, rainbow, heart · Type &apos;help&apos; for tips · &apos;clear&apos; to reset
        </div>
      </div>

      {/* Mode Description */}
      <div className="mt-4 text-center text-white/80 text-sm">
        {getModeDescription(mode)}
      </div>
    </div>
  );
}
