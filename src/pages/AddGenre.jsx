import { useEffect, useRef, useState } from "react";

function AddGenre() {

  const canvasRef = useRef(null);
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });


  useEffect(() => {
    // Sử dụng canvasRef.current để truy cập context và vẽ vào canvas
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const handleMouseMove = (event) => {
      // Lấy tọa độ chuột trong canvas
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // In tọa độ vào console
      console.log(`Mouse Coordinates: (${x}, ${y})`);

      // Cập nhật state để hiển thị tọa độ trên giao diện nếu cần
      setMouseCoordinates({ x, y });
      
      context.clearRect(x, y, 10, 10);
      context.beginPath();
      context.arc(x, y, 10, 0, 2 * Math.PI);
      context.fillStyle = 'red';
      context.fill();
     
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    
    // Vẽ một hình chữ nhật đơn giản
    context.fillStyle = 'blue';
    context.fillRect(0, 80, 80, 80);
    context.fillRect(150, 0, 20, 200);
    context.fillRect(150, 200, 350, 20);
    context.fillRect(320, 0, 20, 200);
    context.fillRect(480, 0, 20, 200);
    context.fillRect(150, 250, 300, 200);
    context.fillStyle = 'red';
    context.fillRect(0, 0, 10, 10);
  }, []); // Chạy một lần sau khi component được render
  return (
    <div className="w-full">
    <p>Mouse Coordinates: ({mouseCoordinates.x}, {mouseCoordinates.y})</p>
      <canvas ref={canvasRef} className="border-4 " width="600" height="450">
      
      </canvas>
      
    </div>
  );
}

export default AddGenre;
