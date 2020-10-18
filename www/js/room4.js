room4.prototype = Object.create(THREE.Object3D.prototype);
room4.prototype.constructor = room4;

function room4(scene) {
    THREE.Object3D.call(this);
    var room4 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Bab Boujloud/4.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom3 = new NavigationArrow(scene, {
        degree: 280,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room4.remove();
            // Start a new room
            new room3(scene);
            scene.rotation.y -= 300 ;
        },
    });


    this.navigationArrowToroom5 = new NavigationArrow(scene, {
        degree: 10,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room4.remove();
            // Start a new room
            new room5(scene);
        },
    });

    this.navigationArrowToroom6 = new NavigationArrow(scene, {
        degree: 185,
        verticalOffset: 15,
        onFocus: function () { 

            // remove the room
            room4.remove();
            // Start a new room
            new room6(scene);
            scene.rotation.y += 600 ;
        },
    });

    this.navigationArrowToroom19 = new NavigationArrow(scene, {
        degree: 110,
        verticalOffset: 15,
        onFocus: function () { 

            // remove the room
            room4.remove();
            // Start a new room
            new room19(scene);
            scene.rotation.y -= 300 ;
        },
    });
   
    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom3.remove();
        this.navigationArrowToroom6.remove();
        this.navigationArrowToroom5.remove();
        this.navigationArrowToroom19.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}