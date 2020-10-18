room26.prototype = Object.create(THREE.Object3D.prototype);
room26.prototype.constructor = room26;

function room26(scene) {
    THREE.Object3D.call(this);
    var room26 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/El Attarine/27.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom25 = new NavigationArrow(scene, {
        degree: 200,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room26.remove();
            // Start a new room
            new room25(scene);
        },
    });
    this.navigationArrowToroom24 = new NavigationArrow(scene, {
        degree: 450,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room26.remove();
            // Start a new room
            new room24(scene);
        },
    });
    this.navigationArrowToroom27= new NavigationArrow(scene, {
        degree: 320,
        verticalOffset: 10,
        onFocus: function () {
            // remove the room
            room26.remove();
            // Start a new room
            new room27(scene);
        },
    });

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom25.remove();
        this.navigationArrowToroom24.remove();
        this.navigationArrowToroom27.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}