class Boid{
    constructor(){
        this.position = createVector(random(width), random(height));
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(2, 4))
        this.acceleration = createVector();
        //limit to the steer force;
        this.maxForce = 2;
        this.maxSpeed = 6;
    }

    edges(){
        if(this.position.x > width){
            this.position.x = 0;
        } else if(this.position.x < 0){
            this.position.x = width;
        }
        if(this.position.y > height){
            this.position.y = 0;
        } else if(this.position.y < 0){
            this.position.y = height;
        }
    }

    align(boids){
        //the perception of the boid.
        let visionRadius = 50;
        //force vector to enforce steering on the boid.
        let steering = createVector();
        //keeps track of total boids within vision radius.
        let total = 0;


        for(let other of boids){
            //calculating the distance between boids (d)
            let d = dist(
                this.position.x,
                this.position.y,
                other.position.x,
                other.position.y
            );
            //if the distance is less then 100 add the velocity to steering 
            //for set boid    
            if(other != this && d < visionRadius){
                steering.add(other.velocity);
                total ++;
            }
        }

        if(total > 0){
            //divide the the accumalated vectors with toal amount of boids within
            //perception
            steering.div(total);
            //force magnitude for steering upper limit.
            steering.setMag(this.maxSpeed);
            //subtract the velocity from the boid from the steering to get the real vector
            //for steering force.
            steering.sub(this.velocity);
            //force magnitude to steering
            steering.limit(this.maxForce);
        }
        //returns the steering vector value;
        return steering;
    }

    seperation(boids){
        //the perception of the boid.
        let visionRadius = 50  ;
        //force vector to enforce steering on the boid.
        let steering = createVector();
        //keeps track of total boids within vision radius.
        let total = 0;


        for(let other of boids){
            //calculating the distance between boids (d)
            let d = dist(
                this.position.x,
                this.position.y,
                other.position.x,
                other.position.y
            );
            //if the distance is less then visionRadius add the position to steering 
            //for set boid    
            if(other != this && d < visionRadius){
                //vector between set boids position and others position
                let diff = p5.Vector.sub(this.position, other.position);
                //difference invertly proportianal to the distance.
                diff.mult(d);
                //adding all the diff vectors up.
                steering.add(diff);
                total ++;
            }
        }
        

        if(total > 0){
            //divide the the accumalated vectors with toal amount of boids within
            //perception to find the avereage location
            steering.div(total);
            //force magnitude for steering upper limit.
            steering.setMag(this.maxSpeed);
            //subtract the velocity from the steering to get the real vector
            //for steering force.
            steering.sub(this.velocity);
            //force magnitude to steering
            steering.limit(this.maxForce);
        }
        //returns the steering vector value;
        return steering;
    }

    cohesion(boids){
        //the perception of the boid.
        let visionRadius = 50;
        //force vector to enforce steering on the boid.
        let steering = createVector();
        //keeps track of total boids within vision radius.
        let total = 0;


        for(let other of boids){
            //calculating the distance between boids (d)
            let d = dist(
                this.position.x,
                this.position.y,
                other.position.x,
                other.position.y
            );
            //if the distance is less then visionRadius add the position to steering 
            //for set boid    
            if(other != this && d < visionRadius){
                steering.add(other.position);
                total ++;
            }
        }
        

        if(total > 0){
            //divide the the accumalated vectors with toal amount of boids within
            //perception to find the avereage location
            steering.div(total);
            //subract the avereage location from set boid location.
            steering.sub(this.position);
            //force magnitude for steering upper limit.
            steering.setMag(this.maxSpeed);
            //subtract the velocity from the steering to get the real vector
            //for steering force.
            steering.sub(this.velocity);
            //force magnitude to steering
            steering.limit(this.maxForce);
        }
        //returns the steering vector value;
        return steering;
    }




    flock(boids){
        
        //alignment is set to the steering force of set boid in boids.
        let alignment = this.align(boids);
        //cohesion is set to the steering force of set boid in boids. 
        let cohesion = this.cohesion(boids);
        //spereration is set to the steering force of set boid in boids.
        let seperation = this.seperation(boids);

        seperation.mult(seperationSlider.value());
        cohesion.mult(cohesionSlider.value());
        alignment.mult(alignmentSlider.value());

        //force accumulation
        this.acceleration.add(seperation);
        this.acceleration.add(alignment);
        this.acceleration.add(cohesion);
        
    }

    update(){
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        //so the acceleration doesnt accumalate over time.
        this.acceleration.set(0,0);
    }

    show(){
        strokeWeight(16);
        stroke(255);
        point(this.position.x, this.position.y);
    }
}

