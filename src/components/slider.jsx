import { useRef, useState } from 'react';
import '../components/slider.css';

export default function RightClickScroll() {
  const wrapperRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [velocity, setVelocity] = useState(0);
  let animationFrame;

  const getEventX = (e) => {
    // для touch берем первый touch
    return e.touches ? e.touches[0].pageX : e.pageX;
  };

  const mouseDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return; // только правая кнопка мыши
    e.preventDefault();
    setIsDragging(true);
    setStartX(getEventX(e) - wrapperRef.current.offsetLeft);
    setScrollLeft(wrapperRef.current.scrollLeft);
    cancelAnimationFrame(animationFrame);
  };

  const mouseMove = (e) => {
    if (!isDragging) return;
    const x = getEventX(e) - wrapperRef.current.offsetLeft;
    const walk = x - startX;
    wrapperRef.current.scrollLeft = scrollLeft - walk;
    setVelocity(walk);
  };

  const mouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    momentumScroll();
  };

  const momentumScroll = () => {
    let v = velocity;
    const step = () => {
      v *= 0.95; // трение
      wrapperRef.current.scrollLeft -= v;
      if (Math.abs(v) > 0.3) {
        animationFrame = requestAnimationFrame(step);
      }
    };
    step();
  };

  return (
    <div
      className={`wrapper ${isDragging ? "active" : ""}`}
      ref={wrapperRef}
      onContextMenu={(e) => e.preventDefault()} // отключаем контекстное меню
      onMouseDown={mouseDown}
      onMouseMove={mouseMove}
      onMouseUp={mouseUp}
      onMouseLeave={() => isDragging && mouseUp()}
      onTouchStart={mouseDown}
      onTouchMove={mouseMove}
      onTouchEnd={mouseUp}
    >
      <div className="card">
        <img src="/Eventos Premium 1.svg" alt="" className='card-img' />
        <h3 className='card-title'>Eventos Premium</h3>
        <p className='card-subtitle'>Elegante - Serio - Estatus</p>
      </div>
      <div className="card">
        <img src="/MacBook Pro 14_ - 1 3.svg" alt="" className='card-img'/>
        <h3 className='card-title'>Eventos Premium</h3>
        <p className='card-subtitle'>Elegante - Serio - Estatus</p>
      </div>
      <div className="card">
        <img src="/Eventos Premium 1.svg" alt="" className='card-img'/>
        <h3 className='card-title'>Eventos Premium</h3>
        <p className='card-subtitle'>Elegante - Serio - Estatus</p>
      </div>
    </div>
  );
}
