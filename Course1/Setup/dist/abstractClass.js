"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some complex calculation
        return 8;
    }
}
class Instagram2 extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.burst = burst;
    }
    getSepia() {
        console.log("Hello");
    }
}
const ex = new Instagram2("test", "Test", 123);
ex.getReelTime;
// abstract class can not initialized
