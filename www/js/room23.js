room23.prototype = Object.create(THREE.Object3D.prototype);
room23.prototype.constructor = room23;

function room23(scene) {
    THREE.Object3D.call(this);
    var room23 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/El Attarine/24.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom24 = new NavigationArrow(scene, {
        degree: 360,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room23.remove();
            // Start a new room
            new room24(scene);
        },
    });
    
    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom24.remove();
        //this.navigationArrowToroom22.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}