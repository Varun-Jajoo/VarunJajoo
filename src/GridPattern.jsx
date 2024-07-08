import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "./lib/utils";

function GridPattern({
  width = 70,
  height = 70,
  x = -2,
  y = -2,
  strokeDasharray = 0,
  numSquares = 30,
  className,
  maxOpacity = 0.4,
  duration = 4,
  repeatDelay = 0.5,
  ...props
}) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState(() => generateSquares(numSquares));

  const containerRef = useRef(null);

  function getPos() {
    return [
      Math.floor((Math.random() * dimensions.width) / width),
      Math.floor((Math.random() * dimensions.height) / height),
    ];
  }

  function generateSquares(count) {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      pos: getPos(),
    }));
  }

  const updateSquarePosition = (id) => {
    setSquares((currentSquares) =>
      currentSquares.map((sq) =>
        sq.id === id
          ? {
              ...sq,
              pos: getPos(),
            }
          : sq
      )
    );
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(generateSquares(numSquares));
    }
  }, [dimensions, numSquares]);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-200/30 stroke-gray-100/30 border-white",
        className
      )}
      width="100%"
      height="100%"
      {...props}
    >
      <defs>
        <pattern
          id="gridPattern"
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M0 ${height}V1H${width}V0`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#gridPattern)" />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(({ pos: [x, y], id }, index) => (
          <motion.rect
            key={`${x}-${y}-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: maxOpacity }}
            transition={{
              duration,
              repeat: 1,
              delay: index * 0.1,
              repeatType: "reverse",
            }}
            onAnimationComplete={() => updateSquarePosition(id)}
            width={width - 1}
            height={height - 1}
            x={x * width + 1}
            y={y * height + 1}
            fill="white"
            strokeWidth="0"
          />
        ))}
      </svg>
    </svg>
  );
}

export default GridPattern;
