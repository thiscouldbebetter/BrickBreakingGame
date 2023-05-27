
class InputHelper
{
	constructor()
	{
		this.keysPressed = [];
	}

	initialize()
	{
		document.body.onkeydown = this.handleEventKeyDown.bind(this);
		document.body.onkeyup = this.handleEventKeyUp.bind(this);
	}

	removeKey(key)
	{
		if (this.keysPressed[key] != null)
		{
			this.keysPressed.splice(this.keysPressed.indexOf(key), 1);
			delete this.keysPressed[key];
		}
	}

	// events

	handleEventKeyDown(event)
	{
		var key = event.key;
		if (this.keysPressed[key] == null)
		{
			this.keysPressed.push(key);
			this.keysPressed[key] = key;
		}
	}

	handleEventKeyUp(event)
	{
		this.removeKey(event.key);
	}
}
