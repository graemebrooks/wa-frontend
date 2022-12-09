import React, { useRef, useState, useEffect } from 'react';

const DraggableCircle = () => {
  const canvasRef = useRef(null);
  const [x, setX] = useState(100);
  const [y, setY] = useState(100);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const handleMouseDown = (event) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const clickY = event.clientY - rect.top;
      if (
        clickX > x - 25 &&
        clickX < x + 25 &&
        clickY > y - 25 &&
        clickY < y + 25
      ) {
        setIsDragging(true);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseMove = (event) => {
      if (isDragging) {
        const rect = canvas.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const clickY = event.clientY - rect.top;
        setX(clickX);
        setY(clickY);
      }
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [x, y, isDragging]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, 2 * Math.PI);
    ctx.fillStyle = '#0000ff';
    ctx.fill();
  }, [x, y]);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      style={{ backgroundColor: '#ffffff' }}
    />
  );
};

export default DraggableCircle;
