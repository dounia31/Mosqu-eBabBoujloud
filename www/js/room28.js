room28.prototype = Object.create(THREE.Object3D.prototype);
room28.prototype.constructor = room28;

function room28(scene) {
    THREE.Object3D.call(this);
    var room28 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Dar moaqqit/zb.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom27 = new NavigationArrow(scene, {
        degree: 20,//50
        verticalOffset: 30,
        onFocus: function () {

            // remove the room
            room28.remove();
            // Start a new room
            new room27(scene);
        },
    });
    this.navigationArrowToroom29= new NavigationArrow(scene, {
        degree: 290,//250
        verticalOffset: 10,
        onFocus: function () {
            // remove the room
            room28.remove();
            // Start a new room
            new room29(scene);
        },
    });

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom27.remove();
        this.navigationArrowToroom29.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}