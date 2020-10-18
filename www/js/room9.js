room9.prototype = Object.create(THREE.Object3D.prototype);
room9.prototype.constructor = room9;

function room9(scene) {
    THREE.Object3D.call(this);
    var room9 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Bab Boujloud/9.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom10 = new NavigationArrow(scene, {
        degree: 280,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room9.remove();
            // Start a new room
            new room10(scene);
        },
    });


    this.navigationArrowToroom8 = new NavigationArrow(scene, {
        degree: 100,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room9.remove();
            // Start a new room
            new room8(scene);
        },
    });

    this.navigationArrowToroom16 = new NavigationArrow(scene, {
        degree: 190,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room9.remove();
            // Start a new room
            new room16(scene);
        },
    });


    
    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom10.remove();
        this.navigationArrowToroom8.remove();
        this.navigationArrowToroom16.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}