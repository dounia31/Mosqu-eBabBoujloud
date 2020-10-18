room14.prototype = Object.create(THREE.Object3D.prototype);
room14.prototype.constructor = room14;

function room14(scene) {
    THREE.Object3D.call(this);
    var room14 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Bab Boujloud/14.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom11 = new NavigationArrow(scene, {
        degree: 10,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room14.remove();
            // Start a new room
            new room11(scene);
        },
    });

    this.navigationArrowToroom15 = new NavigationArrow(scene, {
        degree: 90,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room14.remove();
            // Start a new room
            new room15(scene);
        },
    });
    this.navigationArrowToroom13= new NavigationArrow(scene, {
        degree: 280,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room14.remove();
            // Start a new room
            new room13(scene);
        },
    });

    this.navigationArrowToroom19= new NavigationArrow(scene, {
        degree: 180,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room14.remove();
            // Start a new room
            new room19(scene);
            scene.rotation.y += 300 ;
        },
    });

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom11.remove();
        this.navigationArrowToroom15.remove();
        this.navigationArrowToroom13.remove();
        this.navigationArrowToroom19.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}