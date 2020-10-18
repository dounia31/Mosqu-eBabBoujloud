room17.prototype = Object.create(THREE.Object3D.prototype);
room17.prototype.constructor = room17;

function room17(scene) {
    THREE.Object3D.call(this);
    var room17 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Bab Boujloud/17.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom13 = new NavigationArrow(scene, {
        degree: 180,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room17.remove();
            // Start a new room
            new room13(scene);
            scene.rotation.y += 600 ;
        },
    });

    this.navigationArrowToroom18 = new NavigationArrow(scene, {
        degree: 370,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room17.remove();
            // Start a new room
            new room18(scene);
        },
    });

    this.navigationArrowToroom19 = new NavigationArrow(scene, {
        degree: 280,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room17.remove();
            // Start a new room
            new room19(scene);
            scene.rotation.y += 600 ;
        },
    });

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom13.remove();
        this.navigationArrowToroom18.remove();
        this.navigationArrowToroom19.remove();
        

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}