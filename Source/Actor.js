
class Actor
{
	constructor(pos, activity)
	{
		this.pos = pos;
		this.activity = activity;

		this.color = "Gray";
		this.radius = 8;

		this.vel = new Coords(0, 0);

		this.accelPerTick = .005;
		this.speedMax = .25;

		this.projectileRadius = this.radius / 4;
		this.projectileSpeed = .3;

		// Helper variables.

		this.coordsTemp = new Coords();
		this.vertices =
		[
			new Coords(), new Coords(), new Coords()
		];
	}

	updateForTimerTick(world)
	{
		this.activity.perform(world, this);

		var speed = this.vel.magnitude();
		if (speed >= this.speedMax)
		{
			this.vel.normalize().multiplyScalar(this.speedMax);
		}

		this.pos.add(this.vel);
		this.pos.trimToRangeMinMax
		(
			world.actorPosMin,
			world.actorPosMax
		);

		this.vel.multiplyScalar(.98); // friction
	}

	// drawable

	drawToDisplay(display)
	{
		display.drawCircle
		(
			this.pos, this.radius, "Gray"
		);
	}
}
