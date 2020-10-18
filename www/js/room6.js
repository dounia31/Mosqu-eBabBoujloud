room6.prototype = Object.create(THREE.Object3D.prototype);
room6.prototype.constructor = room6;
 
function room6(scene) {
    THREE.Object3D.call(this);
    var room6 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Bab Boujloud/6.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom4 = new NavigationArrow(scene, {
        degree: 200,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room6.remove();
            // Start a new room
            new room4(scene);
            scene.rotation.y += 600 ;
        },
    });

    this.navigationArrowToroom7 = new NavigationArrow(scene, {
        degree: 10,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room6.remove();
            // Start a new room
            new room7(scene);
        },
    });

    this.navigationArrowToroom19 = new NavigationArrow(scene, {
        degree: 290,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room6.remove();
            // Start a new room
            new room19(scene);
            //scene.rotation.y += 600 ;
        },
    });
   
    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom4.remove();
        this.navigationArrowToroom7.remove();
        this.navigationArrowToroom19.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}