'use client';

import React from 'react';
import { articlesData, Article } from '@/data/articles';
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';

export function EditorialSection() {
  const featuredArticle = articlesData.find((a) => a.featured) || articlesData[0];
  const secondaryArticles = articlesData.filter((a) => !a.featured);

  return (
    <section id="learn" className="py-20 lg:py-28 bg-[var(--surface-2)] border-b border-[var(--border)]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-xl">
            <div className="font-mono text-xs font-bold text-[var(--forest)] tracking-widest uppercase flex items-center gap-2">
              <span>08</span>
              <span className="text-[var(--border)]">/</span>
              <span>EDITORIAL & LEARN</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--ink)] tracking-tight">
              News that impacts
              <br />
              your wallet.
            </h2>
            <p className="text-base text-[var(--muted)]">
              Clear explanations for the financial headlines and policy changes that actually alter your personal net worth.
            </p>
          </div>

          <a
            href="#learn"
            className="inline-flex items-center gap-2 text-xs font-bold font-mono text-[var(--forest)] hover:underline self-start md:self-auto group"
          >
            <span>VIEW ALL DISPATCHES</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Editorial Layout: Asymmetric 60/40 Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Featured Article (7 cols) */}
          <div className="lg:col-span-7 bg-[var(--white)] border border-[var(--border)] rounded-3xl p-7 sm:p-10 flex flex-col justify-between shadow-sm hover:border-[var(--forest)] transition-all group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-[var(--surface-2)] text-[var(--forest)] font-bold">
                  {featuredArticle.category} · COVER DISPATCH
                </span>
                <div className="flex items-center gap-3 text-xs font-mono text-[var(--muted)]">
                  <span>{featuredArticle.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {featuredArticle.readTime}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--ink)] tracking-tight leading-[1.15] group-hover:text-[var(--forest)] transition-colors">
                {featuredArticle.title}
              </h3>

              <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed pt-2">
                {featuredArticle.excerpt}
              </p>
            </div>

            <div className="pt-8 mt-6 border-t border-[var(--border)] flex items-center justify-between">
              <span className="text-xs font-bold text-[var(--forest)] group-hover:underline inline-flex items-center gap-1.5">
                <span>Read full breakdown</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
              <span className="text-xs font-mono text-[var(--muted)]">
                Author: Research Desk
              </span>
            </div>
          </div>

          {/* Secondary Stacked Editorial Columns (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {secondaryArticles.map((article) => (
              <div
                key={article.id}
                className="bg-[var(--white)] border border-[var(--border)] rounded-2xl p-6 flex-1 flex flex-col justify-between shadow-sm hover:border-[var(--forest)] transition-all group"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-[var(--surface-2)] text-[var(--forest)] font-bold">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-2 text-[11px] font-mono text-[var(--muted)]">
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-[var(--ink)] tracking-tight group-hover:text-[var(--forest)] transition-colors leading-snug">
                    {article.title}
                  </h4>

                  <p className="text-xs text-[var(--muted)] line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                  <span className="font-bold text-[var(--forest)] group-hover:underline inline-flex items-center gap-1">
                    <span>Read analysis</span>
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
