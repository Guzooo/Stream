<html lang="pl">

<head>
    <title>Stream • Społeczność </title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="../../values/images/logo128.png" type="image/png">
    <meta name="theme-color" content="javascript:var(--color-primary-second)" />

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik">
    <link rel="stylesheet" href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    <link rel="stylesheet" href="../../values/styles/communityStyle.css">

    <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>

    <link rel="stylesheet" href="../../values/dimensions.css">
    <link rel="stylesheet" href="../../values/colors.css">
    <link rel="stylesheet" href="../../values/styles/base.css">
    <link rel="stylesheet" href="../../values/styles/headers.css">

    <script src="../../values/code/user.js"></script>
    <script src="../../values/prefabs/headers.js"></script>
    <script src="../../values/code/page_community.js"></script>
    <script src="../../values/db/DB2ArrayCommunity.php"></script>
    <script src="../../values/prefabs/addCommunityContent.js"></script>

</head>

<body>
<script>
    PrefabHeader.get();
</script>
<main class="mdc-top-app-bar--fixed-adjust">
    <div id="postContainer">

    </div>
    <script>
        PrefabGeneratePosts.addPosts(gamesData.slice(0,10))
    </script>
    <div class="pagination">
        <span class="page-link">1</span>
        <span class="page-link">Następna strona</span>
    </div>
</main>
</body>
<script>
    let currentPage = 0;
    const itemsPerPage = 10;

    function loadPage(page) {
        const startIndex = page * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        PrefabGeneratePosts.addPosts(gamesData.slice(startIndex, endIndex));
    }

    document.addEventListener('DOMContentLoaded', function() {
        const pageLinks = document.querySelectorAll('.page-link');

        pageLinks.forEach(link => {
            link.addEventListener('click', function() {
                const isNextPage = this.textContent.includes('Następna strona');

                if (isNextPage) {
                    currentPage++;
                } else {
                    currentPage = 0; // Reset to the first page
                }

                loadPage(currentPage);
            });
        });
    });
</script>

</html>