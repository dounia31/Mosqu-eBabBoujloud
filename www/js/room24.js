room24.prototype = Object.create(THREE.Object3D.prototype);
room24.prototype.constructor = room24;

function room24(scene) {
    THREE.Object3D.call(this);
    var room24 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/El Attarine/25.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom23 = new NavigationArrow(scene, {
        degree: 550,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room24.remove();
            // Start a new room
            new room23(scene);
        },
    });
    this.navigationArrowToroom22= new NavigationArrow(scene, {
        degree: 80,//270
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room24.remove();
            // Start a new room
            new room22(scene);
        },
    });
    this.navigationArrowToroom26= new NavigationArrow(scene, {
        degree: 280,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room24.remove();
            // Start a new room
            new room26(scene);
        },
    });

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom23.remove();
        this.navigationArrowToroom22.remove();
        this.navigationArrowToroom26.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}