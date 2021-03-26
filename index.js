const express = require('express')
const app = express()

app.set('PORT', process.env.PORT || 3000)

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'DEPLOYED WITH JEST, FIXED FAILED TEST IN PIPELINE!',
    })
})

app.listen(app.get('PORT'), () =>
    console.log(`Server running on port ${app.get('PORT')}`),
)