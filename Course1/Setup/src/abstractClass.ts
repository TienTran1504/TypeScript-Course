abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,

    ) { }
    
    abstract getSepia(): void

    getReelTime(): number{
        //some complex calculation
        return 8;
    }

}



class Instagram2 extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter);
        this.burst = burst;
    }
    
    getSepia(): void {
        console.log("Hello")
    }
}

const ex = new Instagram2("test", "Test", 123);

ex.getReelTime

// abstract class can not initialized
