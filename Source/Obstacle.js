
class Obstacle
{
	constructor(radius, pos)
	{
		this.radius = radius;
		this.pos = pos;
	}

	// drawable

	drawToDisplay(display)
	{
		display.drawCircle(this.pos, this.radius, "Gray");
	}
}
