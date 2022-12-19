const express = require('express')
const Sequelize = require('sequelize')
const app = express()

const sequelize = new Sequelize('', '', '', {
    dialect: 'mysql'
})

const User = sequelize.define('user', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    tab: {
        type: Sequelize.DataTypes.STRING
    },
    date: {
        type: Sequelize.DataTypes.STRING
    },
    time: {
        type: Sequelize.DataTypes.INTEGER
    },
    ms: {
        type: Sequelize.DataTypes.INTEGER
    },
}, 
{
    timestamps: false
})

app.use('/', express.static('public'))
app.use(express.json())

//dynamic url
app.get('/:ip', (req, res) => {
    let user = req.params.ip
}) 

app.post('/:ip', (req, res) => {
    let user = req.params.ip
    let data = JSON.parse(req.body)
    //if user is not in database create it then add data to table
    //else just update it
})

User.sync().then(() => {
    console.log('db synced')
})

app.listen(8080, () => console.log('server started'))
sequelize.authenticate().then(() => console.log('Connected to database'))