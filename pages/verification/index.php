<html lang="pl">
    <head>
        <title>Stream • Weryfikacja</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="../../values/images/logo128.png" type="image/png">
        <meta name="theme-color" content="javascript:var(--color-primary-second)"/>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik">
        <link rel="stylesheet" href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>

        <link rel="stylesheet" href="../../values/dimensions.css">
        <link rel="stylesheet" href="../../values/colors.css">
        <link rel="stylesheet" href="../../values/styles/base.css">
        <link rel="stylesheet" href="../../values/styles/headers.css">
        <link rel="stylesheet" href="../../values/styles/verification-block.css">

        <script src="../../values/prefabs/headers.js"></script>
        <script src="../../values/code/user.js"></script>
        <script src="../../values/prefabs/addVerificationList.js"></script>
        <script src="../../values/code/page_yourGames.js"></script>
        <script src="../../values/db/DB2ArrayController.php"></script>
    </head>
    <body>
        <script>
            PrefabHeader.get();
        </script>

        <main>
            <div id="verificationListContainer"></div>
            <script>
                PrefabVerificatorList.addGames(document.getElementById('verificationListContainer'), gamesData);
            </script>
        </main>
        </body>
    <script src="../../values/code/base.js"></script>
</html>
