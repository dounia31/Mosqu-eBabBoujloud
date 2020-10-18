room8.prototype = Object.create(THREE.Object3D.prototype);
room8.prototype.constructor = room8;

function room8(scene) {
    THREE.Object3D.call(this);
    var room8 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Bab Boujloud/8.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom7 = new NavigationArrow(scene, {
        degree: 550,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room8.remove();
            // Start a new room
            new room7(scene);
        },
    });

    this.navigationArrowToroom9 = new NavigationArrow(scene, {
        degree: 300,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room8.remove();
            // Start a new room
            new room9(scene);
        },
    });
   
    /*this.navigationArrowToroom10 = new NavigationArrow(scene, {
        degree: 320,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room8.remove();
            // Start a new room
            new room10(scene);
        },
    });*/

    

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom7.remove();
        this.navigationArrowToroom9.remove();
        //this.navigationArrowToroom10.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}