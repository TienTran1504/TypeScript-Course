interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string, 
    // startTrial: () => string
    startTrial(): string,
    getCoupon(couponName: string, value: number): number,
}

interface User { 
    githubToken: string,
    
}

interface Admin extends User, Another {
    role: "admin" | "ta" | "learner"
}
interface Another{
    
}
const newUser: User = {
    dbId: 22, email: "123", userId: 231, githubToken:"github",
    startTrial: () => {
        return "trial started";
    },
    getCoupon: (name: "Tien Tran", val: 123) => {
        return 10;
    }
}

const admin: Admin = {
    dbId: 22, email: "123", userId: 231, githubToken:"github", role:"admin",
    startTrial: () => {
        return "trial started";
    },
    getCoupon: (name: "Tien Tran", val: 123) => {
        return 10;
    }
}
    
