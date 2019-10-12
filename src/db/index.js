import mongoose from 'mongoose';

const uri = process.env.DB_URI;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(uri, options)
    /**
     * TODO create handleError method
     */
    .catch(error =>
      console.log(error)
        // handleError(error);
    );

export default mongoose;
