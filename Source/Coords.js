
class Coords
{
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
	}

	static Instances()
	{
		if (Coords._instances == null)
		{
			Coords._instances = new Coords_Instances();
		}
		return Coords._instances;
	}

	add(other)
	{
		this.x += other.x;
		this.y += other.y;
		return this;
	}

	clear()
	{
		this.x = 0;
		this.y = 0;
	}

	clone()
	{
		return new Coords(this.x, this.y);
	}

	divideScalar(scalar)
	{
		this.x /= scalar;
		this.y /= scalar;
		return this;
	}

	dotProduct(other)
	{
		return this.x * other.x + this.y * other.y;
	}

	magnitude()
	{
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}

	multiply(other)
	{
		this.x *= other.x;
		this.y *= other.y;
		return this;
	}

	multiplyScalar(scalar)
	{
		this.x *= scalar;
		this.y *= scalar;
		return this;
	}

	normalize()
	{
		return this.divideScalar(this.magnitude());
	}

	overwriteWith(other)
	{
		this.x = other.x;
		this.y = other.y;
		return this;
	}

	random()
	{
		this.x = Math.random();
		this.y = Math.random();
		return this;
	}
	 
	right()
	{
		var temp = this.x;
		this.x = 0 - this.y;
		this.y = temp;
		return this;
	}
	 
	subtract(other)
	{
		this.x -= other.x;
		this.y -= other.y;
		return this;
	}
	 
	trimToRangeMinMax(min, max)
	{
		if (this.x < min.x)
		{
			this.x = min.x;
		}
		else if (this.x > max.x)
		{
			this.x = max.x;
		}
		 
		while (this.y < min.y)
		{
			this.y = min.y;
		}
		while (this.y > max.y)
		{
			this.y = max.y;
		}
		 
		return this;
	}
}

class Coords_Instances
{
	constructor()
	{
		this.Zeroes = new Coords(0, 0);
	}
}
