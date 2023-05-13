interface IObserve<T> {
    refresh(value: T): void;
}

interface ISubject<T> {
    observers: IObserve<T>[];
    subcribe(observer: IObserve<T>): void;
    unsubcribe(observer: IObserve<T>): void;
    notify(value: T): void;
}

class SubjectT<T> implements ISubject<T>{

    observers: IObserve<T>[];
    constructor() {
        this.observers = [];
    }
    subcribe(observer: IObserve<T>) {
        this.observers.push(observer);
    }
    unsubcribe(observer: IObserve<T>) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    notify(value: T) {
        this.observers.forEach(obs => obs.refresh(value));
    }

}

class ObserverT<T> implements IObserve<T>{
    private fn: (value: T) => void;

    constructor(fn: (value: T) => void) {
        this.fn = fn;
    }
    refresh(value: T): void {
        this.fn(value);
    }
}

const subject = new SubjectT<number>();
const obs1 = new ObserverT<number>((num) => {
    console.log(num * 2);
});

subject.subcribe(obs1);
subject.notify(2);