/**
 * Represents a NavigationInformation.
 * @constructor
 * @param {THREE.Scene} scene - La scéne.
 * @param {String} args - params.
 */
NavigationInformation.prototype = Object.create(THREE.Object3D.prototype);
NavigationInformation.prototype.constructor = PhotoSphere;

function NavigationInformation(rootThis, args) {

	this.arrow = new Textbox(rootThis, {
		lookAt: new THREE.Vector3( cardboard.camera.position.x, cardboard.camera.position.y , cardboard.camera.position.z ),
		text: "!",
		radius: 7 * SCALE,
		degree: args.degree,
		verticalDegree: -8,
		color: 0x75FFFF,
		size: 2.5
	});
	
	this.hotspot = new Hotspot(rootThis, {
		rectLength: 4,
		rectWidth: 4,
		degree: args.degree+5.2,
		radius: 7 * SCALE,
		verticalDegree: 0,
		showHotspot: rootThis.showHotspots,
		onFocus: args.onFocus,
		idplz: args.idplz
	});
	this.arrow.textMesh.position.y -= args.verticalOffset;
	this.hotspot.rectMesh.position.y -= args.verticalOffset + 5.2;
		
	this.remove = function(){
		this.arrow.remove();
		this.hotspot.remove();
	}
}
