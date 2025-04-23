import React, { useEffect, useRef } from "react";

const GridBackground: React.FC = function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const activeCellsRef = useRef<any[]>([]); // Reference to track active squares across renders
  const hoverStateRef = useRef(false); // Reference to track hover state across event handlers

  // Active glowing cell data
  type Cell = {
    x: number; // Grid cell X position
    y: number; // Grid cell Y position
    intensity: number; // Current glow intensity
    fadeSpeed: number; // How quickly the cell fades out
    lastActive: number; // Timestamp when the cell was last active
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();

    window.addEventListener("resize", updateCanvasSize);

    // Grid settings
    const gridSize = 50;
    const lineWidth = 0.5;
    const lineColor = "rgba(50, 205, 50, 0.25)";
    const glowColor = "rgba(120, 255, 40, 0.7)";

    // Mouse position tracking
    let mouseX = 0;
    let mouseY = 0;
    let lastMoveTime = 0;

    // Initialize with any existing active grid cells
    const activeCells: Cell[] = [...activeCellsRef.current];

    const drawGrid = () => {
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = lineWidth;

      // Draw horizontal lines
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw vertical lines
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
    };

    const drawGlowingCell = (cell: Cell) => {
      const { x, y, intensity } = cell;

      // Calculate pixel coordinates for the cell
      const x1 = x * gridSize;
      const y1 = y * gridSize;
      const x2 = (x + 1) * gridSize;
      const y2 = (y + 1) * gridSize;

      // Cell Styling
      ctx.strokeStyle = glowColor;
      ctx.lineWidth = 3;
      ctx.globalAlpha = intensity;
      ctx.shadowColor = glowColor;
      ctx.shadowBlur = 8 * intensity;

      // Top edge
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y1);
      ctx.stroke();

      // Right edge
      ctx.beginPath();
      ctx.moveTo(x2, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      // Bottom edge
      ctx.beginPath();
      ctx.moveTo(x1, y2);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      // Left edge
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x1, y2);
      ctx.stroke();

      // Reset shadow and alpha
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    };

    // Track mouse position and movement
    const handleMouseMove = (event: MouseEvent) => {
      if (hoverStateRef.current) return; // Don't illuminate a cell if hovering over a card or interactive element

      // Get mouse position
      mouseX = event.clientX;
      mouseY = event.clientY;

      lastMoveTime = Date.now();

      illuminateCellsNearMouse();
    };

    const illuminateCellsNearMouse = () => {
      // Calculate which grid cell the mouse is currently in
      const cellX = Math.floor(mouseX / gridSize);
      const cellY = Math.floor(mouseY / gridSize);

      addOrUpdateCell(cellX, cellY, 1.0);

      const radius = 1; // How many cells away from the mouse to illuminate

      // Randomly select up to 3 nearby cells
      for (let i = 0; i < 3; i++) {
        if (Math.random() < 0.3) {
          // Pick a random cell within the radius of the mouse
          const randomOffsetX =
            Math.floor(Math.random() * (radius * 2 + 1)) - radius;
          const randomOffsetY =
            Math.floor(Math.random() * (radius * 2 + 1)) - radius;

          const randomCellX = cellX + randomOffsetX;
          const randomCellY = cellY + randomOffsetY;

          // Calculate the distance from the mouse in grid cells
          const dx = randomCellX - cellX;
          const dy = randomCellY - cellY;

          const distance = Math.sqrt(dx * dx + dy * dy);

          // Only add to active cells if the cell is within the radius of the mouse
          if (distance <= radius) {
            // Glow intensity is based on the distance from the mouse
            const intensity = 0.6 + 0.4 * (1 - distance / radius);

            addOrUpdateCell(randomCellX, randomCellY, intensity);
          }
        }
      }
    };

    const addOrUpdateCell = (x: number, y: number, intensity: number) => {
      // Check to see if the current cell is already active
      const existingCellIndex = activeCells.findIndex(
        (cell) => cell.x === x && cell.y === y
      );

      const now = Date.now();

      if (existingCellIndex >= 0) {
        // Update existing cell
        const cell = activeCells[existingCellIndex];

        // Update intensity if the new value is higher
        cell.intensity = Math.max(cell.intensity, intensity);
        cell.lastActive = now;
      } else {
        // Add new cell
        const fadeSpeed = 0.02;

        activeCells.push({
          x,
          y,
          intensity,
          fadeSpeed,
          lastActive: now,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      drawGrid();

      // Update and draw active cells (even when hovering over cards, to allow fade-out) new cells are not drawn only updated or faded out
      const now = Date.now();
      const timeSinceLastMove = now - lastMoveTime;

      for (let i = activeCells.length - 1; i >= 0; i--) {
        const cell = activeCells[i];

        // Start fading out cells that have been inactive for a while or if the mouse has stopped moving or if the mouse is hovering over a card or interactive element
        const timeSinceActive = now - cell.lastActive;

        if (
          timeSinceActive > 100 ||
          timeSinceLastMove > 300 ||
          hoverStateRef.current
        ) {
          cell.intensity -= cell.fadeSpeed;
        }

        // Remove cells from being active that have faded out completely
        if (cell.intensity <= 0) {
          activeCells.splice(i, 1);
          continue;
        }

        drawGlowingCell(cell);
      }

      // Update the ref to keep track of active cells across renders
      activeCellsRef.current = [...activeCells];

      requestAnimationFrame(animate);
    };

    // Add event listeners to detect when hovering over cards or interactive elements
    const setupCardHoverListeners = () => {
      const cardContainers = document.querySelectorAll(
        ".card-container, .right-container, .about-card, .project-card, .skill-card, .contact-card"
      );

      const interactiveElements = document.querySelectorAll(
        ".hero-button, .contact-button, .social-link"
      );

      const handleMouseEnter = () => {
        hoverStateRef.current = true;
      };

      const handleMouseLeave = (event: Event) => {
        const mouseEvent = event as MouseEvent;

        const relatedTarget = mouseEvent.relatedTarget as HTMLElement;

        // Only set hovering to false if we're not entering another card or interactive element
        if (
          !relatedTarget ||
          (!relatedTarget.closest(".card-container") &&
            !relatedTarget.closest(".about-card") &&
            !relatedTarget.closest(".right-container") &&
            !relatedTarget.closest(".project-card") &&
            !relatedTarget.closest(".skill-card") &&
            !relatedTarget.closest(".contact-card") &&
            !relatedTarget.closest(".hero-button") &&
            !relatedTarget.closest(".contact-button") &&
            !relatedTarget.closest(".social-link"))
        ) {
          hoverStateRef.current = false;
        }
      };

      // Add listeners to all card containers
      cardContainers.forEach((card) => {
        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);
      });

      // Add listeners to all interactive elements
      interactiveElements.forEach((element) => {
        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);
      });

      return {
        cardContainers,
        interactiveElements,
        handleMouseEnter,
        handleMouseLeave,
      };
    };

    const listeners = setupCardHoverListeners();

    animate();

    // Cleanup event listeners
    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);

      if (listeners) {
        listeners.cardContainers.forEach((card) => {
          card.removeEventListener("mouseenter", listeners.handleMouseEnter);
          card.removeEventListener("mouseleave", listeners.handleMouseLeave);
        });

        listeners.interactiveElements.forEach((element) => {
          element.removeEventListener("mouseenter", listeners.handleMouseEnter);
          element.removeEventListener("mouseleave", listeners.handleMouseLeave);
        });
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-1"
    />
  );
};

export default GridBackground;
