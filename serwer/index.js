'use strict'
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

const PORT = 3000

let count = 0

const USERS = [
    { 'id': count, 'username': 'D', 'password': 'd', 'date': new Date() }
]

app.get('/add', function(req, res) {
    if (req.query.username && req.query.password) {
        if (!USERS.some(element => {return element.username == req.query.username})) {
            count++

            USERS.push({
                'id': count,
                'username': req.query.username,
                'password': req.query.password,
                'date': new Date()
            })
            console.log(USERS)

            res.send({'error': false})
        } else {
            res.send({'error': 'USER_EXISTS'})
            console.log(USERS)
        }
    } else {
        res.send({'error': 'INVALID_DATA'})
    }
})

app.get('/delete', function(req, res) {
    for (const i in USERS) {
        if (USERS[i].id == req.query.id) {
            USERS.splice(i, 1)
        }
    }
    console.log(USERS)

    res.end()
})

app.get('/get', function(req, res) {
    if (req.query.username) {
        res.send(USERS.filter(element => {return element.username == req.query.username}))
    } else { res.send(USERS) }
})

app.listen(PORT, function() {
    console.log('start serwera na porcie ' + PORT)
})