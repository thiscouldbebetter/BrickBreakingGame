
class Activity
{
	constructor(perform)
	{
		this.perform = perform;
	}

	static Instances()
	{
		if (Activity._instances == null)
		{
			Activity._instances = new Activity_Instances();
		}
		return Activity._instances;
	}
}
 
class Activity_Instances
{
	constructor()
	{
		this.DoNothing = new Activity(function perform() {});

		this.UserInputAccept = new Activity
		(

			function perform(world, actor)
			{
				var inputHelper = Globals.Instance.inputHelper;
				var inputsActive = inputHelper.keysPressed;
				 
				for (var i = 0; i < inputsActive.length; i++)
				{
					var inputActive = inputsActive[i];
					if (inputActive == "ArrowLeft")
					{
						actor.vel.x -= actor.accelPerTick;
					}
					else if (inputActive == "ArrowRight")
					{
						actor.vel.x += actor.accelPerTick;
					}
				}
			}
		);
	}
}
