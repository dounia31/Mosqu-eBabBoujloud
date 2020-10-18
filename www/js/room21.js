room21.prototype = Object.create(THREE.Object3D.prototype);
room21.prototype.constructor = room21;

function room21(scene) {
    THREE.Object3D.call(this);
    var room21 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Bab Boujloud/21.jpg');

    this.textLights = new TextLights(scene, {});

    
    this.navigationArrowToroom20= new NavigationArrow(scene, {
        degree: 180,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room21.remove();
            // Start a new room
            new room20(scene);
        },
    });

    this.navigationArrowToroom22= new NavigationArrow(scene, {
        degree: 90,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room21.remove();
            // Start a new room
            new room22(scene);
            scene.rotation.y -= 300 ;
        },
    });

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom20.remove();
        this.navigationArrowToroom22.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}