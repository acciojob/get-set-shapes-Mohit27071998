//complete this code
class Rectangle {
	constructor(width,height){
		this._width = width;
		this._height = height;
}

	get width(){
		return this._width;
	}
	get height(){
		return this._height;
	}
	
	getArea(){
		return  ${this.width} * ${this.heigth}
		
	}
	
}

class Square extends Rectangle {
	getPerimeter(){
		return 2(${this.width} + ${this.heigth})
		
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
