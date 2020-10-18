room16.prototype = Object.create(THREE.Object3D.prototype);
room16.prototype.constructor = room16;

function room16(scene) {
    THREE.Object3D.call(this);
    var room16 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Bab Boujloud/16.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom9 = new NavigationArrow(scene, {
        degree: -10,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room16.remove();
            // Start a new room
            new room9(scene);
        },
    });

    this.navigationArrowToroom15 = new NavigationArrow(scene, {
        degree: 260,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room16.remove();
            // Start a new room
            new room15(scene);
        },
    });

    this.navigationArrowToroom19= new NavigationArrow(scene, {
        degree: 175,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room16.remove();
            // Start a new room
            new room19(scene);
            scene.rotation.y += 600 ;
        },
    });

    this.navigationArrowToroom7= new NavigationArrow(scene, {
        degree: 80,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room16.remove();
            // Start a new room
            new room7(scene);
        },
    });

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom15.remove();
        this.navigationArrowToroom9.remove();
        this.navigationArrowToroom19.remove();
        this.navigationArrowToroom7.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}