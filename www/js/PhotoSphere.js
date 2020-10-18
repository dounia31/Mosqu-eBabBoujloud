/**
 * Represents a PhotoSphere.
 * @constructor
 * @param {THREE.Scene} scene - La scéne.
 * @param {String} textureUrl - url de la texture.
 * @param {String} args - params.
 */

PhotoSphere.prototype = Object.create(THREE.Object3D.prototype);
PhotoSphere.prototype.constructor = PhotoSphere;

function PhotoSphere(rootThis, textureUrl, args) {
	args = {} || args;
        var texture = THREE.ImageUtils.loadTexture(textureUrl);
        texture.minFilter = THREE.NearestFilter;
	var sphere = new THREE.Mesh(
		new THREE.SphereGeometry(args.depth || 50, 32, 32),
		new THREE.MeshBasicMaterial({
			map: texture, transparent: args.transparent || false, opacity: 0.5
		})
	);
	
	// Invert the mesh inside-out
	sphere.scale.x = -1;
	
	this.sphere = sphere;
	
	rootThis.add(sphere);
	
	this.remove = function(){
		// Remove from scene
		rootThis.remove(sphere);
	}
}
