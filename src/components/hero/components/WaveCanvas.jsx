import React, { useRef, useEffect } from "react";

const WaveCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: width / 2, y: height / 2 };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    const cols = 50;
    const rows = 35;

    let spacingX = width / cols;
    let spacingY = height / rows;

    let time = 0;

    function getWave(x, y) {
      let wave = Math.sin(x * 0.4 + time) * 10 + Math.cos(y * 0.3 + time) * 10;

      let dx = x * spacingX - mouse.x;
      let dy = y * spacingY - mouse.y;
      let dist = Math.sqrt(dx * dx + dy * dy);

      let force = Math.max(0, 150 - dist) * 0.2;

      return wave + force;
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // ✅ STRONGER PRIMARY COLOR (adjust here)
      ctx.strokeStyle = "rgba(132, 0, 106, 0.5)";
      ctx.lineWidth = 1.2;

      // ======================
      // 🔥 HORIZONTAL LINES
      // ======================
      for (let y = 0; y < rows; y++) {
        ctx.beginPath();

        for (let x = 0; x < cols; x++) {
          let px = x * spacingX;
          let py = y * spacingY;

          let offset = getWave(x, y);
          let finalY = py + offset;

          if (x === 0) {
            ctx.moveTo(px, finalY);
          } else {
            ctx.lineTo(px, finalY);
          }
        }

        ctx.stroke();
      }

      // ======================
      // 🔥 VERTICAL LINES
      // ======================
      for (let x = 0; x < cols; x++) {
        ctx.beginPath();

        for (let y = 0; y < rows; y++) {
          let px = x * spacingX;
          let py = y * spacingY;

          let offset = getWave(x, y);
          let finalY = py + offset;

          if (y === 0) {
            ctx.moveTo(px, finalY);
          } else {
            ctx.lineTo(px, finalY);
          }
        }

        ctx.stroke();
      }

      time += 0.035;
      requestAnimationFrame(draw);
    }

    draw();

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      spacingX = width / cols;
      spacingY = height / rows;
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 z-0 w-full h-full"
    />
  );
};

export default WaveCanvas;
