//globalRouter
export const home = (req, res) => res.render("home", {pageTitle: "Home" });

export const search = (req, res) => {
    const {
        query: {term: searchingBy}
    } = req; //const searchingBy = req.query.term 같은 code 이지만 사용 된 code는 ES6
    res.render("Search", {pageTitle: "Serch", searchingBy } );
}//searchingBy : searchingBy


//videolRouter
export const upload = (req, res) => res.render("Upload", {pageTitle: "Upload" } );

export const videoDetail = (req, res) => res.render("Video Detail", {pageTitle: "Video Detail" } );

export const editVideo = (req, res) => res.render("Edit Video", {pageTitle: "Edit Video" } );

export const deleteVideo = (req, res) => res.render("Delete Video", {pageTitle: "Delete Video" } );
