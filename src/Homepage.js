import React from 'react';
import axios from 'axios';
const Homepage = () => {


    const [selectedFile, setSelectedFile] = React.useState(null);
    const [fileSelected, setFileSelected] = React.useState(false);
    const [ImageURLVectorizer, setImageURLVectorizer] = React.useState(null);
    const [ImageURLBG, setImageURLBG] = React.useState();


    function filechange(e) {
        e.preventDefault();
        setSelectedFile( e.target.files[0] );
    }

    function fileupload() {
        if ( selectedFile === null ) console.log("there is no image to uplaod");
        console.log("This is the file that was uploaded", selectedFile.name);

        const vectorizerForm = new FormData();
        vectorizerForm.append("image", selectedFile );

        axios({
            method: 'POST',
            url: 'https://api.picsart.io/tools/1.0/vectorizer', 
            data: vectorizerForm, 
            headers:{ 
                "accept": "application/json", 
                "X-Picsart-API-Key": "63k4QybyC31Z5pR7xcNNGA2bcEzvc6Rz",
                "Content-Type" : "multipart/form-data"
            }}
        )
        .then((res) => {
            setImageURLVectorizer( res.data.data.url );
        })
        .catch((err) => {
            console.log(err);
        });


        const backgroundForm = new FormData();
        backgroundForm.append('bg_blur', 10);
        backgroundForm.append('image', selectedFile);

        axios({
            method: 'POST',
            url: 'https://api.picsart.io/tools/1.0/removebg', 
            data: backgroundForm, 
            headers:{ 
                "accept": "application/json", 
                "X-Picsart-API-Key": "63k4QybyC31Z5pR7xcNNGA2bcEzvc6Rz",
                "Content-Type" : "multipart/form-data"
            }}
        )
        .then((res) => {
            setImageURLBG( res.data.data.url );
        })
        .catch((err) => {
            console.log(err);
        });
    }


    return (
        
        <div>
            <div>
                <input type="file" onChange={filechange} />
                <button onClick={fileupload}> press me </button>
                {ImageURLVectorizer && <img src={ImageURLVectorizer} style={{ height: '500px' , width:'500px'}}/>}
                {ImageURLBG && <img src={ImageURLBG} style={{ height: '500px' , width:'500px'}}/>}
            </div>
        </div>
    )
}

export default Homepage;
