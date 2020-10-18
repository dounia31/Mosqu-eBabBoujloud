room15.prototype = Object.create(THREE.Object3D.prototype);
room15.prototype.constructor = room15;

function room15(scene) {
    THREE.Object3D.call(this);
    var room15 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Bab Boujloud/15.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom10 = new NavigationArrow(scene, {
        degree: 10,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room15.remove();
            // Start a new room
            new room10(scene);
        },
    });

    this.navigationArrowToroom14 = new NavigationArrow(scene, {
        degree: 280,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room15.remove();
            // Start a new room
            new room14(scene);
        },
    });

    this.navigationArrowToroom16= new NavigationArrow(scene, {
        degree: 100,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room15.remove();
            // Start a new room
            new room16(scene);
        },
    });

    this.navigationArrowToroom19= new NavigationArrow(scene, {
        degree: 180,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room15.remove();
            // Start a new room
            new room19(scene);
            scene.rotation.y += 300 ;
        },
    });

    /*this.navigationArrowToroom17= new NavigationArrow(scene, {
        degree: 130,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room15.remove();
            // Start a new room
            new room17(scene);
        },
    });*/

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom10.remove();
        this.navigationArrowToroom14.remove();
        this.navigationArrowToroom16.remove();
        this.navigationArrowToroom19.remove();
        //this.navigationArrowToroom17.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}