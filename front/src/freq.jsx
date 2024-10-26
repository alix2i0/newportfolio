import React, { useEffect, useRef } from 'react';

const FrequencyVisualizer = ({ analyser }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const draw = () => {
      const freqData = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(freqData);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
    //   const barWidth = canvas.width / freqData.length;
    const barWidth = canvas.width / (freqData.length * 2); // Adjust for half-width mirroring

      freqData.forEach((value, index) => {
        const barHeight = value;
        const x = barWidth * index;
        ctx.fillStyle = 'rgba(50, 100, 200, 0.5)';
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        ctx.fillRect(canvas.width - x - barWidth, canvas.height - barHeight, barWidth, barHeight);

      });
      requestAnimationFrame(draw);
    };

    draw();
  }, [analyser]);

  return <canvas ref={canvasRef} width={600} height={300} />;
};

export default FrequencyVisualizer;
