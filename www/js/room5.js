room5.prototype = Object.create(THREE.Object3D.prototype);
room5.prototype.constructor = room5;

function room5(scene) {
    THREE.Object3D.call(this);
    var room5 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Bab Boujloud/5.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom4 = new NavigationArrow(scene, {
        degree: 180,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room5.remove();
            // Start a new room
            new room4(scene);
        },
    });


   /* this.navigationArrowToroom6 = new NavigationArrow(scene, {
        degree: 100,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room5.remove();
            // Start a new room
            new room6(scene);
        },
    });

    this.navigationArrowToroom7 = new NavigationArrow(scene, {
        degree: 550,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room5.remove();
            // Start a new room
            new room7(scene);
        },
    });*/
    
   
    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom4.remove();
        //this.navigationArrowToroom6.remove();
        //this.navigationArrowToroom7.remove();
        
        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}