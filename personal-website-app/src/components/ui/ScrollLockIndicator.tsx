import React from 'react';

interface ScrollLockIndicatorProps {
  hasStartedTyping: boolean;
  isTypewriterComplete: boolean;
}

export function ScrollLockIndicator({ hasStartedTyping, isTypewriterComplete }: ScrollLockIndicatorProps) {
  if (!hasStartedTyping || isTypewriterComplete) {
    return null;
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="flex flex-col items-center space-y-2 text-black bg-white bg-opacity-90 rounded-lg p-3 shadow-lg">
        <div className="animate-pulse">
          <div className="w-2 h-2 bg-black rounded-full animate-bounce"></div>
        </div>
        <p className="text-xs font-light">Please wait...</p>
      </div>
    </div>
  );
}