room18.prototype = Object.create(THREE.Object3D.prototype);
room18.prototype.constructor = room18;

function room18(scene) {
    THREE.Object3D.call(this);
    var room18 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Bab Boujloud/18.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom17 = new NavigationArrow(scene, {
        degree: 180,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room18.remove();
            // Start a new room
            new room17(scene);
        },
    });

    /*this.navigationArrowToroom13 = new NavigationArrow(scene, {
        degree: 330,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room18.remove();
            // Start a new room
            new room13(scene);
        },
    });*/

    this.navigationArrowToroom20= new NavigationArrow(scene, {
        degree: 260,
        verticalOffset: 10,
        onFocus: function () {
            // remove the room
            room18.remove();
            // Start a new room
            new room20(scene);
        },
    });

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom17.remove();
       // this.navigationArrowToroom13.remove();
        this.navigationArrowToroom20.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}