
class Polar
{
	constructor(azimuthInTurns, radius)
	{
		this.azimuthInTurns = azimuthInTurns;
		this.radius = radius;
	}

	static RadiansPerTurn = Math.PI * 2;

	toCoords(coords)
	{
		var azimuthInRadians = this.azimuthInTurns * Polar.RadiansPerTurn;
		coords.x = Math.cos(azimuthInRadians) * this.radius;
		coords.y = Math.sin(azimuthInRadians) * this.radius;
		return coords;
	}

	trimAzimuthToRangeMinMax(min, max)
	{
		if (this.azimuthInTurns < min)
		{
			this.azimuthInTurns = min;
		}
		else if (this.azimuthInTurns > max)
		{
			this.azimuthInTurns = max;
		}
		return this;
	}
}
