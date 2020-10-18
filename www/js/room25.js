room25.prototype = Object.create(THREE.Object3D.prototype);
room25.prototype.constructor = room25;

function room25(scene) {
    THREE.Object3D.call(this);
    var room25 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/El Attarine/26.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom24 = new NavigationArrow(scene, {
        degree: 410,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room25.remove();
            // Start a new room
            new room24(scene);
        },
    });
    this.navigationArrowToroom26= new NavigationArrow(scene, {
        degree: 350,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room25.remove();
            // Start a new room
            new room26(scene);
        },
    });

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom24.remove();
        this.navigationArrowToroom26.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}