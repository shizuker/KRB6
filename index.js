class Shape {
    getArea() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    getArea() {
        return this.base * this.height / 2;
    }
}

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    calculateBonus() {
        return 0;
    }
}

class Developer extends Employee {
    calculateBonus() {
        return this.salary * 0.1;
    }
}

class Designer extends Employee {
    calculateBonus() {
        return this.salary * 0.08;
    }
}

class Manager extends Employee {
    calculateBonus() {
        return this.salary * 0.15;
    }
}

class NotificationSender {
    send(message) {
        console.log(message);
    }
}

class EmailSender extends NotificationSender {
    send(message) {
        console.log(`Email: ${message}`);
    }
}

class SmsSender extends NotificationSender {
    send(message) {
        console.log(`SMS: ${message}`);
    }
}

class PushSender extends NotificationSender {
    send(message) {
        console.log(`Push: ${message}`);
    }
}

function notifyAll(senders, message) {
    for (let sender of senders) {
        sender.send(message);
    }
}

const shapes = [new Circle(3), new Rectangle(4, 5), new Triangle(6, 4)];
const employees = [
    new Developer("Анна", 60000),
    new Designer("Иван", 50000),
    new Manager("Олег", 80000)
];
const senders = [new EmailSender(), new SmsSender(), new PushSender()];

const totalArea = shapes.reduce((sum, shape) => sum + shape.getArea(), 0);
const totalBonus = employees.reduce((sum, employee) => sum + employee.calculateBonus(), 0);

console.log(totalArea);
console.log(totalBonus);
notifyAll(senders, "Новое сообщение");

