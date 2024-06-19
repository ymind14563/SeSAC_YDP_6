const express = require(`express`);
const app = express();
const multer = require(`multer`);
const path = require(`path`);

const PORT = 8090;

app.set(`view engine`, `ejs`);
app.set(`views`, `./views`);

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use(`/uploads`, express.static(__dirname + `/uploads`))

const uploadDetail = multer({
    storage : multer.diskStorage({
        destination(req, file, done) {
            done(null, `uploads/`);
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        }
    }),
    limits : { fileSize : 5 * 1024 * 1024}
})

app.get(`/`, (req, res) => {
    res.render(`prac_index`);
})

app.post(`/upload`, uploadDetail.single(`thumbnail`), (req, res) => {
    console.log(req.file)
    res.render(`prac_uploaded`, { userInfo : req.body, src : req.file.path});
})

app.listen(PORT, () => {
    console.log(`${PORT} 서버 연결`);
})