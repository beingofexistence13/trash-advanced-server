const jwt = require('jsonwebtoken'); //JSONTOKEN
const dotenv = require('dotenv'); //DOT ENV
dotenv.config({ path: './config.env' }); //CONFIGURE PATH
const express = require('express'); //EXPRESS
const bcrypt = require('bcryptjs'); //NOT NEEDED
const cors = require('cors'); //CORS
const app = express(); //DECLARATION OF APP
app.use(cors()); //USING CORS
const port = process.env.PORT || 5000; //PORT FOR HOSTING
const connectDb = require('./db/connect'); //MONGOOSE 1
const DB = process.env.DATABASE; //ENV DATABASE URL
const UserSchema = require('./models/user'); //USER MODEL
const Checklist1Schema = require('./models/checklist_commonday'); //USER MODEL

const VideoSchema = require('./models/video'); //VIDEO MODEL
const ImageSchema = require('./models/image'); //IMAGE MODEL
app.use(express.json()); //JSON EXPRESS MIDDLEWARE 

//                              All Routes
const home = require('./routes/home'); // ("/")
const register = require('./routes/register'); // ("/register")
const checklist_commonday = require('./routes/checklist_commonday'); // ("/register")

// const profile = require('./routes/profile'); // ("/profile")
// const login = require('./routes/login'); // ("/login")
const about = require('./routes/about'); // ("/about")
// const contact = require('./routes/contact'); // ("/contact")



// Graphql //////////////////////////////////////////////////////////////////////////////
let { graphqlHTTP } = require('express-graphql');
let { buildSchema } = require('graphql');
// Construct a schema, using GraphQL schema language
let schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
let root = {
  hello: () => {
    return 'Hello world!';
  },
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));



// Graphql //////////////////////////////////////////////////////////////////////////////

// app.get('/', (req,res) => {
//     res.status(200).send('yeh bro that whatup😎😎😎')
// })



//Middleware /////////////////////////////////////////////////////////////////////////////
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Origin', '*')

//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
//         return res.status(200).json({})
//     }

//     next();
// })
// const middleware = (req, res, next) => {
//     console.log('middleware');
//     next();
// };
//Middleware ////////////////////////////////////////////////////////////////////////////





//Routes  ///////////////////////////////////////////////////////////////////////////////
app.get('/checklist1', async (req, res) => {
    const user = await Checklist1Schema.find({});
    console.log(user);
    try {
        res.status(200).json(user);
    } catch (e) {
        console.log(e);
        res.send('error')
    }
});

app.get('/register', async (req, res) => {
    const user = await UserSchema.find({});
    console.log(user);
    try {
        res.status(200).json(user);
    } catch (e) {
        console.log(e);
        res.send('error')
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserSchema.find({});
        // All data filled
        if (!email || !password) {
            res.status(404).send('Plz fill all data')
        }
        else {
            // Already had an account
            const userLogin = await UserSchema.findOne({ email:email });
            const userpassword = await UserSchema.findOne({ password: password });
            if ( userLogin ) {
                // Using some respone but not needed
                // Some days later
                // const isMatch = await bcrypt.compare(password, userLogin.password);
                // if (!isMatch) {
                // }
                // else {
                const token = await userLogin.generateAuthToken();
                console.log('You logged in');
                res.json({ massage : 'User login Successful'});
                // let Thapa = 'Emon'
                // res.cookie('jwttoken', Thapa)
                // }
            }
            else if(!userpassword){
                console.log("Password");
                res.status(400).send('Password');
            }
            else {
                console.log("This email is not registered");
                res.status(400).json({ error : 'Invalid Creadintials' });
            }
        }
    } catch (e) {
        console.log(e);
        res.status(400).send('Error');
    };
});
app.get('/login', async (req,res) => {
    res.status(200).send('Login')

})
app.get('/contact', async (req,res) => {
    res.status(200).send('contact')
    
})

app.get('/profile', async (req,res) => {
    res.status(200).send('profile')
    
})







// ///////////////////////////////////////////  Video  ///////////////////////////////////////////
app.get('/video', async (req,res) => {
    res.status(200).send('upload video')
})

app.post('/video', async (req,res) => {
    try {
        
        const { tittle, description, vurl } = req.body;
        // res.json(req.body)
        console.log(req.body);
        console.log(tittle);
        console.log(vurl);
        // const user = await ImageSchema.find({});
        
        // All data filled
        if (!tittle || !vurl) {
            res.status(404).send('Plz fill all data')
        }
        else {
            // Already had an account
            const geniunvideo = new VideoSchema({ tittle, description, vurl });
            const Newrvideo = await geniunvideo.save();
            res.status(201).json({ geniunvideo });
            console.log('New video upload successful');
            console.log(geniunvideo);
        }
    } catch (e) {
        console.log(e);
        res.status(400).send('Error');
    };    
    
})
// ///////////////////////////////////////////  Image  ///////////////////////////////////////////
app.get('/image', async (req,res) => {
        const images = await ImageSchema.find({});
    res.status(200).json(images)
})

app.post('/image', async (req,res) => {
    try {
        const { post, iurl } = req.body;
        // res.json(req.body)
        // console.log(req.body);
        console.log(post);
        console.log(iurl);
        // const user = await ImageSchema.find({});
        // All data filled
        if (!post || !iurl) {
            res.status(404).send('Plz fill all data')
        }
        else {
            // Already had an account
            const geniunimage = new ImageSchema({ post, iurl });
            const Newrvideo = await geniunimage.save();
            res.status(201).json({ geniunimage });
            console.log('New image upload successful');
            console.log(geniunimage);
        }
    } catch (e) {
        console.log(e);
        res.status(400).send('Error');
    };    
})




//Routes  ///////////////////////////////////////////////////////////////////////////////
app.use('/', home);
app.use('/register', register);
app.use('/checklist1', checklist_commonday);
app.use('/about', about);

// app.use('/login', login);
// app.use('/about', about);
// app.use('/contact', contact);
// app.use('/profile', profile);







const start = async () => {
    try {
        await connectDb(DB);
        app.listen(port, (req, res) => {
            console.log('server is running at http://localhost:5000');
        })
    } catch (error) {
        console.log(error);
    }
}

start();