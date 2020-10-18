room27.prototype = Object.create(THREE.Object3D.prototype);
room27.prototype.constructor = room27;

function room27(scene) {
    THREE.Object3D.call(this);
    var room27 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/El Attarine/28.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom5 = new NavigationArrow(scene, {
        degree: 100,//250,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room27.remove();
            // Start a new room
            new room5(scene);
        },
    });
    this.navigationArrowToroom26= new NavigationArrow(scene, {
        degree: 270,//150
        verticalOffset: 10,
        onFocus: function () {
            // remove the room
            room27.remove();
            // Start a new room
            new room26(scene);
        },
    });

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom5.remove();
        this.navigationArrowToroom26.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}