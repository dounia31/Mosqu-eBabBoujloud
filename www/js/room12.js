room12.prototype = Object.create(THREE.Object3D.prototype);
room12.prototype.constructor = room12;

function room12(scene) {
    THREE.Object3D.call(this);
    var room12 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Bab Boujloud/12.jpg');

    this.textLights = new TextLights(scene, {});

   this.navigationArrowToroom11 = new NavigationArrow(scene, {
        degree: 100,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room12.remove();
            // Start a new room
            new room11(scene);
        },
    });
    this.navigationArrowToroom13= new NavigationArrow(scene, {
        degree: 200,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room12.remove();
            // Start a new room
            new room13(scene);
        },
    });
    /*this.navigationArrowToroom14= new NavigationArrow(scene, {
        degree: 80,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room12.remove();
            // Start a new room
            new room14(scene);
        },
    });
    this.navigationArrowToroom15= new NavigationArrow(scene, {
        degree: 140,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room12.remove();
            // Start a new room
            new room15(scene);
        },
    });

    this.navigationArrowToroom19= new NavigationArrow(scene, {
        degree: 240,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room12.remove();
            // Start a new room
            new room19(scene);
        },
    });

    this.navigationArrowToroom20= new NavigationArrow(scene, {
        degree: 290,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room12.remove();
            // Start a new room
            new room20(scene);
        },
    });*/

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom11.remove();
        this.navigationArrowToroom13.remove();
        /*this.navigationArrowToroom14.remove();
        this.navigationArrowToroom15.remove();
        this.navigationArrowToroom19.remove();
        this.navigationArrowToroom20.remove();*/

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}