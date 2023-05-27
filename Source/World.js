
class World
{
	constructor(size, actor, obstacles, projectiles)
	{
		this.size = size;
		this.actors = [ actor ];
		this.obstacles = obstacles;
		this.projectiles = projectiles;

		this.actorPosMin = new Coords(actor.radius, actor.pos.y);
		this.actorPosMax = new Coords(this.size.x - actor.radius, actor.pos.y);
	}

	static random(size)
	{
		var obstacleGridSizeInCells = new Coords(8, 8);
		var spaceBetweenObstacles = new Coords(1, 1).multiplyScalar
		(
			size.x / (obstacleGridSizeInCells.x + 1)
		);

		var actorPos = new Coords
		(
			size.x / 2,
			size.y - spaceBetweenObstacles.y
		);

		var actor = new Actor
		(
			actorPos,
			Activity.Instances().UserInputAccept
		);

		var obstacleRadius = Math.floor(spaceBetweenObstacles.x / 2);

		var obstacles = [];
		for (var y = 1; y <= obstacleGridSizeInCells.y; y++)
		for (var x = 1; x <= obstacleGridSizeInCells.x; x++)
		{
			var pos = new Coords(x, y).multiply(spaceBetweenObstacles);

			var obstacle = new Obstacle
			(
			obstacleRadius, pos
			);

			obstacles.push(obstacle);
		}

		var projectile = new Projectile
		(
			actor.pos.clone().subtract
			(
				new Coords(0, actor.radius + actor.projectileRadius)
			),
			new Coords(1, -1).normalize().multiplyScalar
			(
				actor.projectileSpeed
			)
		);

		var projectiles = [ projectile ];

		var returnValue = new World
		(
			size,
			actor,
			obstacles,
			projectiles
		);

		return returnValue;
	}

	// instance methods

	updateForTimerTick()
	{
		for (var i = 0; i < this.actors.length; i++)
		{
			var actor = this.actors[i];
			actor.updateForTimerTick(this);
		}

		for (var i = 0; i < this.projectiles.length; i++)
		{
			var projectile = this.projectiles[i];
			projectile.updateForTimerTick(this);
		}
	}

	// drawable

	drawToDisplay(display)
	{
		display.clear();

		for (var i = 0; i < this.obstacles.length; i++)
		{
			var obstacle = this.obstacles[i];
			obstacle.drawToDisplay(display);
		}

		for (var i = 0; i < this.actors.length; i++)
		{
			var actor = this.actors[i];
			actor.drawToDisplay(display);
		}

		for (var i = 0; i < this.projectiles.length; i++)
		{
			var projectile = this.projectiles[i];
			projectile.drawToDisplay(display);
		}
	}
}
