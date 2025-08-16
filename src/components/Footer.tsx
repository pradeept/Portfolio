import React from "react";
import quotes from "@/lib/data/quotes.json";
import { IconQuote } from "@tabler/icons-react";

function getRandomQuote() {
  if (!quotes || !Array.isArray(quotes) || quotes.length === 0) return null;
  const idx = Math.floor(Math.random() * quotes.length);
  return quotes[idx];
}

function Footer() {
  const quote = getRandomQuote();
  return (
    <footer className='w-full flex flex-col items-center justify-center mt-12 md:pb-22 px-4'>
      <div className='w-full  flex flex-col items-center justify-center gap-6 rounded-2xl bg-white/60 dark:bg-neutral-900/60 shadow-xl backdrop-blur-lg border border-neutral-200 dark:border-neutral-800 py-6 px-4'>
        {quote && (
          <div className='flex flex-col items-center justify-center text-center w-full'>
            <span className='mb-2 text-blue-500 dark:text-blue-300'>
              <IconQuote size={36} stroke={1.5} />
            </span>
            <blockquote className='text-base md:text-lg font-medium italic text-neutral-800 dark:text-neutral-200 max-w-xl mx-auto'>
              “{quote.quote}”
              <span className='block mt-2 text-xs md:text-sm text-neutral-500 dark:text-neutral-400 font-normal'>
                — {quote.author}
              </span>
            </blockquote>
          </div>
        )}
        <div className='w-full flex items-center justify-center mt-4'>
          <p className='text-xs md:text-base font-semibold text-neutral-700 dark:text-neutral-300 bg-white/40 dark:bg-neutral-800/40 px-4 py-2 rounded-full shadow-sm backdrop-blur-md border border-neutral-200 dark:border-neutral-700'>
            Made with <span className='text-red-500'>❤️</span> by Pradeep
            Tarakar in 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
