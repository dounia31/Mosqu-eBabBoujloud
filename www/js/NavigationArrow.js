/**
 * Represents a NavigationArrow.
 * @constructor
 * @param {THREE.Scene} scene - La scéne.
 * @param {String} args - params.
 */
NavigationArrow.prototype = Object.create(THREE.Object3D.prototype);
NavigationArrow.prototype.constructor = PhotoSphere;

function NavigationArrow(rootThis, args) {

	this.arrow = new Textbox(rootThis, {
		lookAt: new THREE.Vector3( cardboard.camera.position.x, -300, cardboard.camera.position.z ),
		text: "v",
		radius: 7 * SCALE,
		degree: args.degree,
		verticalDegree: -10,
		color: 0x000000,
		size: 4
	});
	
	this.hotspot = new Hotspot(rootThis, {
		rectLength: 4,
		rectWidth: 4,
		degree: args.degree + 5.2,
		radius: 7 * SCALE,
		verticalDegree: 0,
		showHotspot: rootThis.showHotspots,
		onFocus: args.onFocus,
		idplz: args.idplz
	});
	this.arrow.textMesh.position.y -= args.verticalOffset;
	this.hotspot.rectMesh.position.y -= args.verticalOffset + 5.5;
		
	this.remove = function(){
		this.arrow.remove();
		this.hotspot.remove();
	}
}
