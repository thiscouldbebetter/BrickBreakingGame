
class Projectile
{
	constructor(pos, vel)
	{
		this.pos = pos;
		this.vel = vel;

		this.radius = 2;
		this.color = "Gray";
	}

	updateForTimerTick(world)
	{
		this.pos.add(this.vel);

		if (this.pos.x < 0 || this.pos.x > world.size.x)
		{
			this.vel.x *= -1;
		}

		if (this.pos.y < 0)
		{
			this.vel.y *= -1;
		}
		else if (this.pos.y > world.size.y)
		{
			world.projectiles.length = 0;
		}

		this.updateForTimerTick_Collisions(world);
	}

	updateForTimerTick_Collisions(world)
	{
		var collisionHelper = CollisionHelper.Instance();

		var obstacles = world.obstacles;

		for (var i = 0; i < obstacles.length; i++)
		{
			var obstacle = obstacles[i];
			var doProjectileAndObstacleCollide = collisionHelper.doCirclesCollide
			(
				this.pos, this.radius,
				obstacle.pos, obstacle.radius
			);

			if (doProjectileAndObstacleCollide == true)
			{
				this.collideWithOther(obstacle);
				obstacles.remove(obstacle);
				i--;
				break;
			}
		}

		var actors = world.actors;

		for (var i = 0; i < actors.length; i++)
		{
			var actor = actors[i];
			var doProjectileAndActorCollide = collisionHelper.doCirclesCollide
			(
				this.pos, this.radius,
				actor.pos, actor.radius
			);
			if (doProjectileAndActorCollide == true)
			{
				this.collideWithOther(actor);
			}
		}
	}

	// drawable

	drawToDisplay(display)
	{
		display.drawLine
		(
			this.pos,
			this.pos.clone().subtract(this.vel),
			this.color
		);
		 
		display.drawCircle
		(
			this.pos, this.radius, this.color
		);
	}

	// collidable

	collideWithOther(other)
	{
		var posAfterCollision = new Coords();
		var velAfterCollision = new Coords();
		var displacementBetweenCenters = new Coords();
		var velocityRelative = new Coords();
		 
		var sumOfBodyRadii = this.radius + other.radius;
		 
		displacementBetweenCenters.overwriteWith
		(
			other.pos
		).subtract
		(
			this.pos
		);
		 
		var distanceBetweenCenters = displacementBetweenCenters.magnitude();
		 
		var normalAtCollision = displacementBetweenCenters.divideScalar
		(
			distanceBetweenCenters
		);
		 
		var velocityAlongNormal = normalAtCollision.multiplyScalar
		(
			this.vel.dotProduct
			(
				normalAtCollision
			)
		);
		 
		this.vel.add
		(
			velocityAlongNormal.multiplyScalar(-2)
		);
	}
}
