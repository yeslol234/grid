
window.onload = function() {
    const canvas = document.getElementById('gridCanvas');
    const context = canvas.getContext('2d');
    let gridSize = calculateGridSize(); // Calculate initial grid size
    let cubeSize;
  
    // Function to calculate grid size based on window inner size
    function calculateGridSize() {
      const minCubeSize = 50; // Minimum cube size
      const maxGridSize = 10; // Maximum grid size (number of rows/columns)
  
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const maxSize = Math.min(windowWidth, windowHeight);
  
      return Math.min(Math.floor(maxSize / minCubeSize), maxGridSize);
    }

    function text(font, txt, x, y, color) {
        context.font = font;
        context.fillStyle = color
        context.fillText(txt, x, y)
    }
    // Function to handle window resize and adjust the grid size
    function handleResize() {
      gridSize = calculateGridSize();
      cubeSize = canvas.width / gridSize;
      redrawGrid();
    }
  
    // Function to draw the grid
    function redrawGrid() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      context.clearRect(0, 0, canvas.width, canvas.height);
  
      // Draw grid lines
      context.strokeStyle = '#000';
      for (let x = 0; x < canvas.width; x += cubeSize) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, canvas.height);
        context.stroke();
      }
      for (let y = 0; y < canvas.height; y += cubeSize) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(canvas.width, y);
        context.stroke();
      }
    }
  
    // Initial setup
    handleResize();
  
    // Event listener for window resize
    window.addEventListener('resize', handleResize);
  
    canvas.addEventListener('click', function(event) {
      const rect = canvas.getBoundingClientRect();
      const x = Math.floor((event.clientX - rect.left) / cubeSize);
      const y = Math.floor((event.clientY - rect.top) / cubeSize);
      
      context.fillStyle = 'red';
      context.fillRect(x * cubeSize, y * cubeSize, cubeSize, cubeSize);
    });
    let AlwaysInFront = 
    // text
    text("30px Courier New", "Logic Cubes", 50, 50, "rgb(255,255,255)")
}