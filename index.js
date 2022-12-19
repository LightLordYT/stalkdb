import express from 'express'
import Sequelize from 'sequelize'
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

app.use(express.json())


app.use(express.static('public'))

//dynamic url
app.get('/:ip', (req, res) => {
    let user = req.params.ip
    if(user !== ''){
        res.send('dont mess with me')
    }else{
        return User.findAll().then((data) => {
            res.send(data)
        })
    }
}) 

app.post('/:ip', (req, res) => {
    let user = req.params.ip
    let data = JSON.parse(req.body)
            if(user !== ''){
                res.send('dont mess with me')
            }else{
                return User.create({
                    tab: data.tab,
                    date: data.date,
                    time: data.time,
                    ms: data.ms
                }).then(() => {
                    console.log('data inserted to database')
                    res.send('successful')
                })
            }
    })


User.sync({ alter: true })

app.listen(8080, () => console.log('server started'))
sequelize.authenticate().then(() => console.log('Connected to database'))