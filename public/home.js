let alignmentSlider, cohesionSlider, seperationSlider;


//array of boids
const boids = [];

function setup(){
    createCanvas(1408,600);
    alignmentSlider = createSlider(0, 5, 4, 0.1);
    alignmentSlider.position(10, 760);
  
    cohesionSlider = createSlider(0, 5, 1, 0.1);
    cohesionSlider.position(150, 760);
  
    seperationSlider = createSlider(0, 5, 3, 0.1);
    seperationSlider.position(290, 760);

    //pushes boid objects into the array
    for(let i = 0; i < 70; i ++){
    boids.push(new Boid());
    }
}

function draw(){
    background(100);
    
    for (let boid of boids){
        boid.edges();
        boid.flock(boids);
        boid.update();
        boid.show();
    }
} 
