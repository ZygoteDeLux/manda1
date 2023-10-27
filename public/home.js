let alignmentSlider, cohesionSlider, seperationSlider;


//array of boids
const boids = [];

function setup(){
    createCanvas(1175,600);
    alignmentSlider = createSlider(0, 5, 1, 0.1);
    cohesionSlider = createSlider(0, 5, 1, 0.1);
    seperationSlider = createSlider(0, 5, 1, 0.1);
    //pushes boid objects into the array
    for(let i = 0; i < 100; i ++){
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
