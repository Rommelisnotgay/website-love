"use client";
import { useEffect, useState } from "react";
import styles from "./hearts.module.css";

type HeartItem = {
  id: number;
  left: number;
  size: number;
  duration: number;
};

export default function Heart() {
  const [hearts, setHearts] = useState<HeartItem[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        {
          id: Date.now(),
          left: Math.random() * 100,
          size: 14 + Math.random() * 26,
          duration: 3 + Math.random() * 4,
        },
      ]);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className={styles.heart}
          style={{
            left: `${heart.left}vw`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}
