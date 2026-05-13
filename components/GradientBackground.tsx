"use client";

import { useEffect, useRef } from "react";

export default function GradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { antialias: true, alpha: false });
    if (!gl) return;

    const VS = `
      attribute vec2 a_pos;
      void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
    `;

    const FS = `
      precision highp float;
      uniform float u_t;
      uniform vec2  u_res;

      float h2r(float p, float q, float t) {
        if (t < 0.) t += 1.; if (t > 1.) t -= 1.;
        if (t < 1./6.) return p + (q-p)*6.*t;
        if (t < .5)    return q;
        if (t < 2./3.) return p + (q-p)*(2./3.-t)*6.;
        return p;
      }
      vec3 hsl(float h, float s, float l) {
        float q = l < .5 ? l*(1.+s) : l+s-l*s;
        float p = 2.*l - q;
        return vec3(h2r(p,q,h+1./3.), h2r(p,q,h), h2r(p,q,h-1./3.));
      }

      float wdist(vec2 uv, vec2 p) {
        float dx = uv.x - p.x;
        float dy = uv.y - p.y;
        if (dy >  0.5) dy -= 1.0;
        if (dy < -0.5) dy += 1.0;
        return sqrt(dx*dx + dy*dy);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_res;

        vec3 cTeal = hsl(177.41/360., 0.6105, 0.6275);
        vec3 cBlue = hsl(221.9 /360., 0.7412, 0.6667);

        float scrollPeriod = 28.0;
        float scroll = mod(u_t, scrollPeriod) / scrollPeriod;
        float sw = u_t * 0.06;

        vec2 pA = vec2(0.18 + 0.22 * sin(sw * 0.80 + 0.0), fract(0.55 - scroll + 0.00));
        vec2 pB = vec2(0.12 + 0.18 * cos(sw * 0.65 + 1.8), fract(0.20 - scroll + 0.35));
        vec2 pC = vec2(0.88 + 0.12 * sin(sw * 0.72 + 3.2), fract(0.35 - scroll + 0.68));
        vec2 pD = vec2(0.80 + 0.14 * cos(sw * 0.55 + 0.9), fract(0.78 - scroll + 0.12));
        vec2 pE = vec2(0.62 + 0.20 * sin(sw * 0.48 + 2.5), fract(0.50 - scroll + 0.80));

        float fo = 3.2;
        float wA = 1.0 / pow(wdist(uv, pA) + 0.001, fo);
        float wB = 1.0 / pow(wdist(uv, pB) + 0.001, fo);
        float wC = 1.0 / pow(wdist(uv, pC) + 0.001, fo);
        float wD = 1.0 / pow(wdist(uv, pD) + 0.001, fo);
        float wE = 1.0 / pow(wdist(uv, pE) + 0.001, fo);

        float sumTeal = wA + wB + wC;
        float sumBlue = wD + wE;
        float total   = sumTeal + sumBlue;

        vec3 colour = (cTeal * sumTeal + cBlue * sumBlue) / total;

        float bloom = 1.0 - smoothstep(0.0, 0.75, distance(uv, vec2(0.5, 0.65)));
        colour += bloom * 0.045;

        gl_FragColor = vec4(clamp(colour, 0.0, 1.0), 1.0);
      }
    `;

    function mkShader(type: number, src: string) {
      const s = gl!.createShader(type)!;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      return s;
    }

    const prog = gl.createProgram()!;
    gl.attachShader(prog, mkShader(gl.VERTEX_SHADER, VS));
    gl.attachShader(prog, mkShader(gl.FRAGMENT_SHADER, FS));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uT = gl.getUniformLocation(prog, "u_t");
    const uRes = gl.getUniformLocation(prog, "u_res");

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = window.innerWidth * dpr;
      canvas!.height = window.innerHeight * dpr;
      canvas!.style.width = window.innerWidth + "px";
      canvas!.style.height = window.innerHeight + "px";
      gl!.viewport(0, 0, canvas!.width, canvas!.height);
    }
    window.addEventListener("resize", resize);
    resize();

    let rafId: number;
    function frame(ms: number) {
      gl!.uniform1f(uT, ms * 0.001);
      gl!.uniform2f(uRes, canvas!.width, canvas!.height);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
      rafId = requestAnimationFrame(frame);
    }
    rafId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
