room22.prototype = Object.create(THREE.Object3D.prototype);
room22.prototype.constructor = room22;

function room22(scene) {
    THREE.Object3D.call(this);
    var room22 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Bab Boujloud/22.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom21 = new NavigationArrow(scene, {
        degree: 540,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room22.remove();
            // Start a new room
            new room21(scene);
            scene.rotation.y += 300 ;
        },
    });

    /*this.navigationArrowToroom10 = new NavigationArrow(scene, {
        degree: 370,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room22.remove();
            // Start a new room
            new room10(scene);
        },
    });

    this.navigationArrowToroom21 = new NavigationArrow(scene, {
        degree: 550,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room22.remove();
            // Start a new room
            new room21(scene);
        },
    });
    this.navigationArrowToroom24= new NavigationArrow(scene, {
        degree: 260,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room22.remove();
            // Start a new room
            new room24(scene);
        },
    });*/

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom21.remove();
        //this.navigationArrowToroom11.remove();
        //this.navigationArrowToroom21.remove();
        //this.navigationArrowToroom24.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}