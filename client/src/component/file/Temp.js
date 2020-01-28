import React from 'react'

class FileUpload extends React.Component{
    constructor(){
        super()
    }


    Post = e => {
        e.preventDefault()
        const file = document.getElementById('inputGroupFile01').files
        const formData = new FormData()
      
        formData.append('img', file[0])
      
        fetch('http://localhost:3015/', {
          method: 'POST',
          body: formData,
        }).then(r => {
          console.log(r)
        })
        console.log(file[0])
      }

    render(){
        return(
                            <div>

                    <html>
                    <body>
                        <form ref='uploadForm' 
                        id='uploadForm' 
                        action='http://localhost:3015/upload' 
                        method='post' 
                        encType="multipart/form-data">
                            <input type="file" name="sampleFile" />
                            <input type='submit' value='Upload!' />
                        </form>     
                    </body>
                    </html>
            </div>
        )
    }
}

export default FileUpload















// import React from 'react'

// class FileUpload extends React.Component{
//     constructor(){
//         super()
//     }


//     Post = e => {
//         e.preventDefault()
//         const file = document.getElementById('inputGroupFile01').files
//         const formData = new FormData()
      
//         formData.append('img', file[0])
      
//         fetch('http://localhost:3015/', {
//           method: 'POST',
//           body: formData,
//         }).then(r => {
//           console.log(r)
//         })
//         console.log(file[0])
//       }

//     render(){
//         return(
//                             <div>

//                 <link
//                     href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//                     rel="stylesheet"
//                     integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
//                     crossorigin="anonymous"
//                     />
//                 <script
//                     src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
//                     integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
//                     crossorigin="anonymous"
//                     ></script>
//                                         <div className="container">
//                         <div className="jumbotron">
//                             <h1 className="display-4">Image Uplaoder</h1>
//                             <p className="lead">
//                             This is a simple application to upload and retrieve images from a database
//                             </p>
//                             <hr className="my-4" />
//                         </div>
//                         <div className="input-group mb-3">
//                             <div className="custom-file">
//                             <input
//                                 type="file"
//                                 className="custom-file-input"
//                                 id="inputGroupFile01"
//                                 aria-describedby="inputGroupFileAddon01"
//                             />
//                             <label className="custom-file-label" htmlFor="inputGroupFile01">
//                                 Choose file
//                             </label>
//                             </div>
//                         </div>
//                         <button type="button" className="btn btn-primary">
//                             Upload
//                         </button>
//                         </div>
//             </div>
//         )
//     }
// }

// export default FileUpload


