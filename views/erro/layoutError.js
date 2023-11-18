module.exports = ({ content }) => {
    return `
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Shop</title>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
          <link href="/style/error.css" rel="stylesheet">
        </head>
  
        <body class="admin">
          <div class="container">
            ${content}
          </div>
        </body>
      </html>
    `;
  };
  