const users = [
    {
        id: 1,
        name: "Paulo",
        age: 20,
        active: true
    },
    {
        id: 2,
        name: "Ana",
        age: 17,
        active: false
    },
    {
        id: 3,
        name: "Carlos",
        age: 30,
        active: true
    }
];

function processUsers(users, callback) {
    for (const user of users) {
        callback(user);
    }
}

function transformUsers(users, callback) {
    const result = [];

    for (const user of users) {
        result.push(callback(user));
    }

    return result;
}

function filterUsers(users, callback) {
    const result = [];

    for (const user of users) {
        if (callback(user)) {
            result.push(user);
        }
    }

    return result;
}

function getUser(id, callback) {
    setTimeout(() => {
        const user = users.find(user => user.id === id);

        if (!user) {
            callback(new Error("Usuário não encontrado"), null);
            return;
        }

        callback(null, user);
    }, 1000);
}

console.log("=== USUÁRIOS ===");

processUsers(users, user => {
    console.log(`${user.id} - ${user.name}`);
});

const names = transformUsers(users, user => user.name);

console.log("");
console.log("Nomes:");
console.log(names);

const activeUsers = filterUsers(users, user => user.active);

console.log("");
console.log("Usuários ativos:");
console.log(activeUsers);

console.log("");
console.log("Buscando usuário...");

getUser(2, (error, user) => {
    if (error) {
        console.log(error.message);
        return;
    }

    console.log("Usuário encontrado:");
    console.log(user);
});