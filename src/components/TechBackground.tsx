"use client";
import React, { useEffect, useRef } from "react";

export default function TechBackground() {
    const ref = useRef<SVGSVGElement>(null);

    useEffect(() => {
        let frame: number;
        const svg = ref.current;
        if (!svg) return;
        const width = window.innerWidth;
        const height = window.innerHeight;
        const particles = Array.from({ length: 32 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            dx: (Math.random() - 0.5) * 0.3,
            dy: (Math.random() - 0.5) * 0.3,
            r: 1.5 + Math.random() * 1.5,
        }));
        function animate() {
            if (!svg) return;
            const ctx = svg as unknown as SVGSVGElement;
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.dx;
                p.y += p.dy;
                if (p.x < 0 || p.x > width) p.dx *= -1;
                if (p.y < 0 || p.y > height) p.dy *= -1;
            }
            // update circles
            for (let i = 0; i < particles.length; i++) {
                const circle = svg.children[i] as SVGCircleElement;
                circle.setAttribute("cx", particles[i].x.toString());
                circle.setAttribute("cy", particles[i].y.toString());
            }
            // update lines
            let lineIdx = particles.length;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dist = Math.hypot(
                        particles[i].x - particles[j].x,
                        particles[i].y - particles[j].y
                    );
                    const line = svg.children[lineIdx] as SVGLineElement;
                    if (dist < 120) {
                        line.setAttribute("x1", particles[i].x.toString());
                        line.setAttribute("y1", particles[i].y.toString());
                        line.setAttribute("x2", particles[j].x.toString());
                        line.setAttribute("y2", particles[j].y.toString());
                        line.setAttribute("stroke-opacity", "0.15");
                    } else {
                        line.setAttribute("x1", "0");
                        line.setAttribute("y1", "0");
                        line.setAttribute("x2", "0");
                        line.setAttribute("y2", "0");
                        line.setAttribute("stroke-opacity", "0");
                    }
                    lineIdx++;
                }
            }
            frame = requestAnimationFrame(animate);
        }
        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
    }, []);

    const N = 32;
    const lines = (N * (N - 1)) / 2;
    return (
        <svg
            ref={ref}
            width="100vw"
            height="100vh"
            className="fixed inset-0 w-full h-full z-0 pointer-events-none select-none"
            style={{ minHeight: "100vh", minWidth: "100vw" }}
        >
            {Array.from({ length: N }).map((_, i) => (
                <circle key={i} r={2.5} fill="#a78bfa" opacity={0.7} />
            ))}
            {Array.from({ length: lines }).map((_, i) => (
                <line
                    key={N + i}
                    stroke="#a78bfa"
                    strokeWidth={1}
                    strokeOpacity={0.15}
                />
            ))}
        </svg>
    );
}
