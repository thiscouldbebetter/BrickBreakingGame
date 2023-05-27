
class CollisionHelper
{
	constructor()
	{
		this.displacement = new Coords();
		this.edgeForward = new Coords();
		this.edgeRight = new Coords();
	}

	static Instance = new CollisionHelper();

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
