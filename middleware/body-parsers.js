import express from 'express'

export default [
    express.json({limit: '2mb'}),
    express.urlencoded({limit:'2mb'})
]