import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import { LuImage, LuX } from 'react-icons/lu';
import { Button } from '../ui/button';

function EmojiPickerPopup({ icon, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-3 py-2 my-3 rounded-lg cursor-pointer  transition"
    >
        <div className="text-2xl text-violet-600 dark:text-violet-300">
            {icon ? (
            <span>{icon}</span>
            ) : (
            <LuImage />
            )}
        </div>
        <div>
        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
            {icon ? "Change Icon" : "Pick Icon"}
        </p>
        </div>

        {/* Emoji Picker */}
        {isOpen && (
        <div className="absolute z-50 mt-2 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl w-[300px]">
            <div className="flex justify-end mb-2">
            <Button
                size="icon"
                variant="ghost"
                onClick={() => setIsOpen(false)}
                className="text-red-500 hover:text-red-700"
            >
                <LuX />
            </Button>
            </div>
            <EmojiPicker
            theme="auto"
            onEmojiClick={(emojiData) => {
                onSelect(emojiData.emoji);
                setIsOpen(false);
            }}
            />
        </div>
        )}
    </div>
  );
}

export default EmojiPickerPopup;
