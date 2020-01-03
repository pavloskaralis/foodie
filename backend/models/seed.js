const db = mongoose.connection;
const Lists = require('./models/list.js')
const listsToStart = [
    {
        "list": "test",
        "items":[
            {
                "name": "avocado",
                "quantity": '9',
                "crossed": false
            },
            {
                "name": "tuna",
                "quantity": '3',
                "crossed": false
            },
            {
                "name": "ice cream",
                "quantity": '1',
                "crossed": false
            },
            {
                "name": "bread",
                "quantity": '8',
                "crossed": false
            },
            {
                "name": "lettuce",
                "quantity": '99',
                "crossed": false
            }
        ]
    }
    {
        "list": "test33",
        "items":[
            {
                "name": "avocado",
                "quantity": '9',
                "crossed": false
            },
            {
                "name": "tuna",
                "quantity": '3',
                "crossed": false
            },
            {
                "name": "ice cream",
                "quantity": '1',
                "crossed": false
            },
            {
                "name": "bread",
                "quantity": '8',
                "crossed": false
            },
            {
                "name": "lettuce",
                "quantity": '99',
                "crossed": false
            }
        ]
    }
    {
        "list": "test9",
        "items":[
            {
                "name": "avocado",
                "quantity": '9',
                "crossed": false
            },
            {
                "name": "tuna",
                "quantity": '3',
                "crossed": false
            },
            {
                "name": "ice cream",
                "quantity": '1',
                "crossed": false
            },
            {
                "name": "bread",
                "quantity": '8',
                "crossed": false
            },
            {
                "name": "lettuce",
                "quantity": '99',
                "crossed": false
            }
        ]
    }
    {
        "list": "test",
        "items":[
            {
                "name": "avocado",
                "quantity": '9',
                "crossed": false
            },
            {
                "name": "tuna",
                "quantity": '3',
                "crossed": false
            },
            {
                "name": "ice cream",
                "quantity": '1',
                "crossed": false
            },
            {
                "name": "bread",
                "quantity": '8',
                "crossed": false
            },
            {
                "name": "lettuce",
                "quantity": '99',
                "crossed": false
            }
        ]
    }
    {
        "list": "test80",
        "items":[
            {
                "name": "avocado",
                "quantity": '9',
                "crossed": false
            },
            {
                "name": "tuna",
                "quantity": '3',
                "crossed": false
            },
            {
                "name": "ice cream",
                "quantity": '1',
                "crossed": false
            },
            {
                "name": "bread",
                "quantity": '8',
                "crossed": false
            },
            {
                "name": "lettuce",
                "quantity": '99',
                "crossed": false
            }
        ]
    }
    {
        "list": "test12",
        "items":[
            {
                "name": "avocado",
                "quantity": '9',
                "crossed": false
            },
            {
                "name": "tuna",
                "quantity": '3',
                "crossed": false
            },
            {
                "name": "ice cream",
                "quantity": '1',
                "crossed": false
            },
            {
                "name": "bread",
                "quantity": '8',
                "crossed": false
            },
            {
                "name": "lettuce",
                "quantity": '99',
                "crossed": false
            }
        ]
    }
    {
        "list": "test56",
        "items":[
            {
                "name": "avocado",
                "quantity": '9',
                "crossed": false
            },
            {
                "name": "tuna",
                "quantity": '3',
                "crossed": false
            },
            {
                "name": "ice cream",
                "quantity": '1',
                "crossed": false
            },
            {
                "name": "bread",
                "quantity": '8',
                "crossed": false
            },
            {
                "name": "lettuce",
                "quantity": '99',
                "crossed": false
            }
        ]
    }
const seed = ()=> {
    return Lists.bulkCreate(listsToStart)
}
seed().then(() =>{
    process.exit()
})