room19.prototype = Object.create(THREE.Object3D.prototype);
room19.prototype.constructor = room19;

function room19(scene) {
    THREE.Object3D.call(this);
    var room19 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Bab Boujloud/19.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom17 = new NavigationArrow(scene, {
        degree: 380,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room19.remove();
            // Start a new room
            new room17(scene);
            //scene.rotation.y += 600 ;
        },
    });

    this.navigationArrowToroom20 = new NavigationArrow(scene, {
        degree: 320,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room19.remove();
            // Start a new room
            new room20(scene);
            scene.rotation.y += 300 ;
        },
    });

    this.navigationArrowToroom14 = new NavigationArrow(scene, {
        degree: 410,//290
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room19.remove();
            // Start a new room
            new room14(scene);
            scene.rotation.y -= 300 ;
        },
    });

    this.navigationArrowToroom15 = new NavigationArrow(scene, {
        degree: 450,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room19.remove();
            // Start a new room
            new room15(scene);
            scene.rotation.y -= 300 ;
        },
    });

    this.navigationArrowToroom16= new NavigationArrow(scene, {
        degree: 480,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room19.remove();
            // Start a new room
            new room16(scene);
            scene.rotation.y -= 600 ;
        },
    });

    this.navigationArrowToroom6= new NavigationArrow(scene, {
        degree: 510,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room19.remove();
            // Start a new room
            new room6(scene);
        },
    });

    this.navigationArrowToroom4= new NavigationArrow(scene, {
        degree: 570,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room19.remove();
            // Start a new room
            new room4(scene);
            scene.rotation.y += 300 ;
        },
    });

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom17.remove();
        this.navigationArrowToroom20.remove();
        this.navigationArrowToroom14.remove();
        this.navigationArrowToroom15.remove();
        this.navigationArrowToroom16.remove();
        this.navigationArrowToroom6.remove();
        this.navigationArrowToroom4.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}