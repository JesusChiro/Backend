const express = require('express');
const app = express();

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        status: true,
        content: 'servidor con prisma activo'
    })
})

app.get('/categoria', async (req, res) => {
    const data = await prisma.tbl_categoria.findMany()
    res.json({
        status: true,
        content: data
    })
})

app.post('/categoria', async (req, res) => {
    const newData = await prisma.tbl_categoria.create({
        data: req.body
    })
    res.json({
        status: true,
        content: newData
    })

})

app.get('/categoria/:id', async (req, res) => {
    const data = await prisma.tbl_categoria.findUnique({
        where: {
            categoria_id: parseInt(req.params.id)
        }
    })
    res.json({
        status: true,
        content: data
    })
})

app.put('/categoria/:id', async (req, res) => {
    const data = await prisma.tbl_categoria.update({
        where: {
            categoria_id: parseInt(req.params.id)
        }, data: req.body
    })
    res.json({
        status: true,
        content: data
    })
})

app.delete('/categoria/:id', async (req, res) => {
    const data = await prisma.tbl_categoria.delete({
        where: {
            categoria_id: parseInt(req.params.id)
        }
    })
    res.sendStatus(200)
})

app.listen(5000, () => console.log("http://localhost:5000"))