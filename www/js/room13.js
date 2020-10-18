room13.prototype = Object.create(THREE.Object3D.prototype);
room13.prototype.constructor = room13;

function room13(scene) {
    THREE.Object3D.call(this);
    var room13 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Bab Boujloud/13.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom12 = new NavigationArrow(scene, {
        degree: 350,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room13.remove();
            // Start a new room
            new room12(scene);
        },
    });
    this.navigationArrowToroom17= new NavigationArrow(scene, {
        degree: 180,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room13.remove();
            // Start a new room
            new room17(scene);
            scene.rotation.y += 600 ;
        },
    });

    this.navigationArrowToroom14= new NavigationArrow(scene, {
        degree: 80,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room13.remove();
            // Start a new room
            new room14(scene);
        },
    });

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom12.remove();
        this.navigationArrowToroom17.remove();
        this.navigationArrowToroom14.remove();
        /*this.navigationArrowToroom16.remove();
        this.navigationArrowToroom17.remove();
        this.navigationArrowToroom18.remove();
        this.navigationArrowToroom19.remove();
        this.navigationArrowToroom20.remove();*/

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}