"use client";
import { useEffect, useRef } from "react";

export default function NetworkBG() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -999, y: -999 });
  const raf = useRef(0);

  useEffect(() => {
    const c = canvasRef.current!;
    const ctx = c.getContext("2d")!;
    const COUNT = 90;
    const DIST = 170;
    const MOUSE_R = 220;

    interface N { x: number; y: number; vx: number; vy: number; r: number; p: number; }
    let nodes: N[] = [];

    const resize = () => { c.width = window.innerWidth; c.height = window.innerHeight; };
    const init = () => {
      resize();
      nodes = Array.from({ length: COUNT }, () => ({
        x: Math.random() * c.width, y: Math.random() * c.height,
        vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.5 + 0.8, p: Math.random() * Math.PI * 2,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      const mx = mouse.current.x, my = mouse.current.y;
      const t = Date.now() * 0.001;

      for (const n of nodes) {
        const dm = Math.hypot(mx - n.x, my - n.y);
        if (dm < MOUSE_R && dm > 0) {
          const f = (MOUSE_R - dm) / MOUSE_R * 0.015;
          n.vx += ((mx - n.x) / dm) * f;
          n.vy += ((my - n.y) / dm) * f;
        }
        n.vx *= 0.997; n.vy *= 0.997;
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0) n.x = c.width; if (n.x > c.width) n.x = 0;
        if (n.y < 0) n.y = c.height; if (n.y > c.height) n.y = 0;

        const pulse = Math.sin(t * 1.5 + n.p) * 0.3 + 0.7;
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 6);
        g.addColorStop(0, `rgba(59,130,246,${0.4 * pulse})`);
        g.addColorStop(1, "transparent");
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r * 6, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill();

        ctx.beginPath(); ctx.arc(n.x, n.y, n.r * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147,197,253,${0.8 * pulse})`; ctx.fill();
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (d < DIST) {
            ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(59,130,246,${(1 - d / DIST) * 0.2})`;
            ctx.lineWidth = 1.5; ctx.stroke();
          }
        }
      }

      if (mx > 0) {
        for (const n of nodes) {
          const d = Math.hypot(n.x - mx, n.y - my);
          if (d < MOUSE_R) {
            const o = (1 - d / MOUSE_R) * 0.35;
            const gr = ctx.createLinearGradient(mx, my, n.x, n.y);
            gr.addColorStop(0, `rgba(6,182,212,${o})`);
            gr.addColorStop(1, `rgba(59,130,246,${o * 0.4})`);
            ctx.beginPath(); ctx.moveTo(n.x, n.y); ctx.lineTo(mx, my);
            ctx.strokeStyle = gr; ctx.lineWidth = 2; ctx.stroke();
          }
        }
      }

      raf.current = requestAnimationFrame(draw);
    };

    init(); draw();
    const onR = () => init();
    const onM = (e: MouseEvent) => { mouse.current = { x: e.clientX, y: e.clientY }; };
    const onL = () => { mouse.current = { x: -999, y: -999 }; };
    window.addEventListener("resize", onR);
    window.addEventListener("mousemove", onM);
    window.addEventListener("mouseleave", onL);
    return () => { cancelAnimationFrame(raf.current); window.removeEventListener("resize", onR); window.removeEventListener("mousemove", onM); window.removeEventListener("mouseleave", onL); };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
}
