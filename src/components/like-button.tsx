// components/like-button.js
"use client";

import { Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={(e: { stopPropagation: () => void }) => {
        e.stopPropagation();
        setLiked(!liked);
      }}
      className="h-10 w-10"
    >
      <Heart
        className={`h-5 w-5 ${
          liked ? "fill-red-500 text-red-500" : "text-gray-500"
        }`}
      />
    </Button>
  );
}
