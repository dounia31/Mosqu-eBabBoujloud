room11.prototype = Object.create(THREE.Object3D.prototype);
room11.prototype.constructor = room11;

function room11(scene) {
    THREE.Object3D.call(this);
    var room11 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Bab Boujloud/11.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom10 = new NavigationArrow(scene, {
        degree: 100,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room11.remove();
            // Start a new room
            new room10(scene);
        },
    });
    this.navigationArrowToroom12= new NavigationArrow(scene, {
        degree: 280,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room11.remove();
            // Start a new room
            new room12(scene);
        },
    });

    this.navigationArrowToroom14= new NavigationArrow(scene, {
        degree: 190,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room11.remove();
            // Start a new room
            new room14(scene);
        },
    });
 
    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom10.remove();
        this.navigationArrowToroom12.remove();
        this.navigationArrowToroom14.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}