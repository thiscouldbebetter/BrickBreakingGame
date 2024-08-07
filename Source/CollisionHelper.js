
class CollisionHelper
{
	constructor()
	{
		this.displacement = new Coords();
		this.edgeForward = new Coords();
		this.edgeRight = new Coords();
	}

	static Instance()
	{
		if (this._instance == null)
		{
			this._instance = new CollisionHelper();
		}
		return this._instance;
	}

	doCirclesCollide
	(
		circle0Center, circle0Radius, circle1Center, circle1Radius
	)
	{
		var distanceBetweenCenters = this.displacement.overwriteWith
		(
			circle1Center
		).subtract
		(
			circle0Center
		).magnitude();
		 
		var sumOfRadii = circle0Radius + circle1Radius;
		 
		var returnValue = (distanceBetweenCenters < sumOfRadii);
		 
		return returnValue;
	}
}
