/**
 *
 *       - applies Utopia GamePad orientation on object rotation
 *
 * @constructor
 *
 * @author ilyas Maach
 *
 * Utopia GamePad Orientation control
 */

THREE.UtopiaController = function () {
    this.axisAngle = 0;
    this.gamepadpressdown = {};
    this.onGamePadPressDown = (function (evtData) {

        this.gamepadpressdown = evtData;

    }).bind(this);

    this.gamepadaxismovedown = {};
    this.onGamePadAxisMoveDown = (function (evtData) {
        this.gamepadaxismovedown = evtData;
        if (this.gamepadaxismovedown.which === 1) {
            if (this.gamepadaxismovedown.currentvalue === 0) {//TOP
                this.axisAngle = 0;
                this.axisMoveAction(this.axisAngle);

            } else {//Down
                this.axisAngle = 180;
                this.axisMoveAction(this.axisAngle);

            }
        } else {
            if (this.gamepadaxismovedown.currentvalue === 0) {//Left
                this.axisAngle = 90;
                this.axisMoveAction(this.axisAngle);

            } else {//Right
                this.axisAngle = -90;
                this.axisMoveAction(this.axisAngle);
            }
        }
    }).bind(this);
    this.axisMoveAction = function (axisAngle) {
        var camEul = cardboard.camera.rotation.clone();
        camEul.reorder('YXZ');
        var cameraAngle = camEul.y;
        if (cameraAngle < 0) cameraAngle = 2 * Math.PI + cameraAngle;
        cameraAngle += THREE.Math.degToRad(axisAngle);
        if (cameraAngle > 2 * Math.PI) cameraAngle -= 2 * Math.PI;
        var nearestObjectToCamera = mainController.intersectables[0];
        var nearestAngle;
        var intersectableLenth = mainController.intersectables.length;
        for (var i = 0; i < intersectableLenth; i++) {
            if (mainController.intersectables[i].parent.args.idplz !== 2) {
                var vector2 = mainController.intersectables[i].getWorldDirection();
                var theta2 = Math.atan2(vector2.x, vector2.z);
                if (theta2 < 0) theta2 = 2 * Math.PI + theta2;
                delta_theta = 180 - Math.abs(Math.abs(THREE.Math.radToDeg(cameraAngle) - THREE.Math.radToDeg(theta2)) - 180);
                if (i === 0) nearestAngle = delta_theta;
                if (nearestAngle > delta_theta) {
                    nearestAngle = delta_theta;
                    nearestObjectToCamera = mainController.intersectables[i];
                }
            }
        }
        if (nearestAngle < 45)
            nearestObjectToCamera.parent.onFocus();
    };
    this.connect = function () {
        document.addEventListener('gamepadpressdown', this.onGamePadPressDown, false);
        document.addEventListener('gamepadaxismovedown', this.onGamePadAxisMoveDown, false);

        return this;

    };
    this.disconnect = function () {
        document.removeEventListener('deviceorientation', this.onDeviceOrientationChangeEvent, false);
        document.removeEventListener('gamepadaxismovedown', this.onDeviceOrientationChangeEvent, false);

    };


};