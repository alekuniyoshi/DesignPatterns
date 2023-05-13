interface Strategy {
    login(user: String, password: String): boolean;
}

class LoginContext {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    login(user: String, password: String): boolean {
        return this.strategy.login(user, password);
    }
}

class LoginDBStrategy implements Strategy {
    login(user: String, password: String): boolean {
        console.log("We go to the Data Base");
        if (user === "admin" && password === "pass") {
            return true;
        }
        return false;
    }
}

class LoginServicetrategy implements Strategy {
    login(user: String, password: String): boolean {
        console.log("We go to the Service");
        if (user === "admin" && password === "pass") {
            return true;
        }
        return false;
    }
}

const auth = new LoginContext(new LoginDBStrategy());
auth.login("admin", "pass");
auth.setStrategy(new LoginServicetrategy());
auth.login("admin", "pass");
