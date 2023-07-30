const htmlCanvas = require("htmlcanvas");

function generatePreviewComponent(article) {
  getLinkPreview("https://www.youtube.com/watch?v=MejbOFk7H6c").then((data) =>
    console.debug(data)
  );
  //   return (
  //     <div>
  //       <h1>{article.title}</h1>
  //       <p>{article.body}</p>
  //     </div>
  //   );
}
