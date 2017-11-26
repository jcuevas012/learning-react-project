const express = require('express')
const multer = require('multer')
const path = require('path')
const cors = require('cors')

//set multer storage

const storage = multer.diskStorage({
	destination: './public/uploads',
	filename: (req, file, callback) => {
		callback(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
	}
})

//set upload
const upload = multer({
	storage,
	limits: {fileSize: 100000000},
	fileFilter: (req, file, callback) => {
		checkFileType(file, callback)
	}
}).single('image')

function checkFileType(file, callback){
	//Allow ext
	const fileType = /jpg|jpeg|png|gif/
	//check ext
	const extname = fileType.test(path.extname(file.originalname).toLowerCase())
	//check mime
	const mimeType = fileType.test(file.mimetype)

	return extname && mimeType ? callback(null, true) : callback('Error: Img Only');
}

const port = 3000
const app = express()
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
	res.send('Up runnig')
})

app.post('/upload', (req, res) => {
	upload(req, res, (err) => {
		if (err) {
			res.status(500).json({msg: `Something went wrong, ${err.message}`})
		}
			res.status(200).json({msg: 'Imgage Uploaded', file: `http://localhost:3000/uploads/${req.file.filename}`})
	})
})

app.listen(port, (req, res) => {
	console.log(`server start on port ${port} `)
})
