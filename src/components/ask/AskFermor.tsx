'use client';

import React, { useState, useEffect } from 'react';
import { chatScenarios, ChatScenario } from '@/data/chatQuestions';
import { MessageSquare, ArrowRight, CornerDownLeft, Sparkles, CheckCircle2, TrendingUp } from 'lucide-react';

export function AskFermor() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>(chatScenarios[0].id);
  const [customInput, setCustomInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [revealStage, setRevealStage] = useState(3); // 1: query, 2: message, 3: metrics & chart

  const activeScenario = chatScenarios.find((s) => s.id === activeScenarioId) || chatScenarios[0];

  const handleChipClick = (id: string) => {
    if (id === activeScenarioId) return;
    setIsTyping(true);
    setRevealStage(1);
    setActiveScenarioId(id);

    setTimeout(() => {
      setIsTyping(false);
      setRevealStage(2);
      setTimeout(() => setRevealStage(3), 200);
    }, 350);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    const lower = customInput.toLowerCase();
    const matched = chatScenarios.find((s) =>
      s.userPrompt.toLowerCase().includes(lower) ||
      lower.includes('invest') ||
      lower.includes('spend') ||
      lower.includes('save') ||
      lower.includes('loan')
    );

    setIsTyping(true);
    setRevealStage(1);
    setActiveScenarioId(matched ? matched.id : chatScenarios[1].id);
    setCustomInput('');

    setTimeout(() => {
      setIsTyping(false);
      setRevealStage(2);
      setTimeout(() => setRevealStage(3), 200);
    }, 400);
  };

  return (
    <section id="ask" className="py-20 lg:py-28 bg-[var(--surface)] border-b border-[var(--border)] relative">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Typography */}
          <div className="lg:col-span-5 space-y-6">
            <div className="font-mono text-xs font-bold text-[var(--forest)] tracking-widest uppercase flex items-center gap-2">
              <span>01</span>
              <span className="text-[var(--border)]">/</span>
              <span>ASK FERMOR</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--ink)] tracking-tight leading-[1.12]">
              Ask anything
              <br />
              about your money.
            </h2>

            <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">
              Get a clear explanation of what is happening across your finances without digging through spreadsheets, brokerage portals, or complex tax forms.
            </p>

            <div className="pt-2 space-y-3">
              <div className="text-xs font-mono text-[var(--muted)] uppercase tracking-wider font-semibold">
                Tap a scenario to explore the math:
              </div>
              <div className="flex flex-wrap gap-2">
                {chatScenarios.map((scenario) => {
                  const isActive = scenario.id === activeScenarioId;
                  return (
                    <button
                      key={scenario.id}
                      type="button"
                      onClick={() => handleChipClick(scenario.id)}
                      className={`text-left text-xs font-medium px-3.5 py-2 rounded-xl transition-all border ${
                        isActive
                          ? 'bg-[var(--forest)] text-[var(--mint)] border-[var(--forest)] shadow-sm scale-[1.02]'
                          : 'bg-[var(--white)] text-[var(--ink)] border-[var(--border)] hover:border-[var(--muted)] hover:bg-[var(--surface-2)]'
                      }`}
                    >
                      {scenario.chipLabel}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Progressive Chat Interface */}
          <div className="lg:col-span-7">
            <div className="bg-[var(--white)] border border-[var(--border)] rounded-3xl shadow-[0_16px_40px_rgba(16,23,19,0.06)] overflow-hidden">
              
              {/* Terminal Title Bar */}
              <div className="px-5 py-3.5 bg-[var(--surface-2)] border-b border-[var(--border)] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--forest)]" />
                  <span className="font-mono text-xs font-bold text-[var(--forest)] tracking-wide">
                    FERMOR FINANCIAL DIALOGUE
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-[var(--muted)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--positive)]" />
                  <span>Example Portfolio Mapped</span>
                </div>
              </div>

              {/* Chat Conversation Canvas */}
              <div className="p-6 space-y-5 min-h-[380px] flex flex-col justify-between">
                <div className="space-y-4">
                  
                  {/* User Query Bubble */}
                  <div className="flex justify-end">
                    <div className="max-w-[85%] bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--border)] rounded-2xl rounded-tr-sm px-4 py-3 text-sm font-semibold shadow-sm animate-in fade-in duration-200">
                      {activeScenario.userPrompt}
                    </div>
                  </div>

                  {/* Fermor Response Bubble with Progressive Reveal */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[var(--forest)] text-[var(--mint)] flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-1 shadow-sm">
                      F
                    </div>

                    <div className="flex-1 space-y-3.5">
                      {/* Response Message */}
                      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl rounded-tl-sm p-4 sm:p-5 text-sm space-y-3">
                        <div className="font-bold text-base text-[var(--ink)] tracking-tight">
                          {isTyping ? (
                            <span className="inline-flex items-center gap-2 text-[var(--muted)]">
                              <span className="w-2 h-2 rounded-full bg-[var(--forest)] animate-pulse" />
                              <span>Analyzing cashflow and portfolio...</span>
                            </span>
                          ) : (
                            activeScenario.responseHeadline
                          )}
                        </div>

                        {!isTyping && revealStage >= 2 && (
                          <p className="text-[var(--muted)] text-xs sm:text-sm leading-relaxed animate-in fade-in duration-250">
                            {activeScenario.responseBody}
                          </p>
                        )}

                        {/* Interactive Micro Breakdown Card */}
                        {!isTyping && revealStage >= 3 && (
                          <div className="pt-3 border-t border-[var(--border)] grid grid-cols-3 gap-2 animate-in fade-in duration-300">
                            {activeScenario.breakdown.map((item, idx) => (
                              <div
                                key={idx}
                                className="bg-[var(--white)] p-2.5 rounded-xl border border-[var(--border)] text-left"
                              >
                                <div className="text-[10px] font-mono text-[var(--muted)] uppercase truncate">
                                  {item.label}
                                </div>
                                <div className="font-mono text-xs sm:text-sm font-bold text-[var(--ink)] mt-0.5 tabular-nums">
                                  {item.value}
                                </div>
                                {item.trend && (
                                  <div className="text-[10px] font-mono text-[var(--positive)] font-medium mt-0.5">
                                    {item.trend}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Key Action Recommendation */}
                        {!isTyping && revealStage >= 3 && activeScenario.actionRecommendation && (
                          <div className="p-2.5 rounded-xl bg-[var(--mint-soft)]/50 border border-[rgba(10,122,62,0.2)] text-xs font-medium text-[var(--forest)] flex items-center gap-2 animate-in fade-in duration-300">
                            <CheckCircle2 size={14} className="text-[var(--positive)] shrink-0" />
                            <span>{activeScenario.actionRecommendation}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Question Input Form */}
                <form
                  onSubmit={handleCustomSubmit}
                  className="pt-4 border-t border-[var(--border)] flex items-center gap-2"
                >
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={customInput}
                      onChange={(e) => setCustomInput(e.target.value)}
                      placeholder="Ask about spending, taxes, emergency fund, or SIP..."
                      className="w-full px-4 py-2.5 text-xs sm:text-sm bg-[var(--surface)] text-[var(--ink)] rounded-full border border-[var(--border)] focus:outline-none focus:border-[var(--forest)] focus:ring-1 focus:ring-[var(--forest)] placeholder:text-[var(--muted)]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="p-2.5 bg-[var(--forest)] text-[var(--mint)] hover:bg-[var(--forest-2)] rounded-full transition-colors shrink-0 active:scale-95"
                    aria-label="Send financial query"
                  >
                    <CornerDownLeft size={16} />
                  </button>
                </form>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
