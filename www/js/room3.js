room3.prototype = Object.create(THREE.Object3D.prototype);
room3.prototype.constructor = room3;

function room3(scene) {
    THREE.Object3D.call(this);
    var room3 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Bab Boujloud/3.jpg');

    this.textLights = new TextLights(scene, {});


    this.navigationArrowToroom2 = new NavigationArrow(scene, {
        degree: 180,
        verticalOffset: 13,
        onFocus: function () {

            // remove the room
            room3.remove();
            // Start a new room
            new room2(scene);
        },
    });
    this.navigationArrowToroom4 = new NavigationArrow(scene, {
        degree: 360,
        verticalOffset: 10,
        onFocus: function () {
            // remove the room
            room3.remove();
            // Start a new room
            new room4(scene);
            scene.rotation.y += 300 ;
        },
    });

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom2.remove();
        this.navigationArrowToroom4.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}