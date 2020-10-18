room20.prototype = Object.create(THREE.Object3D.prototype);
room20.prototype.constructor = room20;

function room20(scene) {
    THREE.Object3D.call(this);
    var room20 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Bab Boujloud/20.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom18 = new NavigationArrow(scene, {
        degree: 100,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room20.remove();
            // Start a new room
            new room18(scene);
        },
    });

    this.navigationArrowToroom19 = new NavigationArrow(scene, {
        degree: 230,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room20.remove();
            // Start a new room
            new room19(scene);
            scene.rotation.y -= 300 ;
        },
    });
    
    this.navigationArrowToroom21= new NavigationArrow(scene, {
        degree: 10,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room20.remove();
            // Start a new room
            new room21(scene);
        },
    });

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom18.remove();
        this.navigationArrowToroom19.remove();
        this.navigationArrowToroom21.remove();
        //this.navigationArrowToroom21.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}