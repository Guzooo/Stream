<html lang="pl">
    <head>
        <title>Stream • Profil</title>
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
        <link rel="stylesheet" href="../../values/styles/opinion_box.css">
        <link rel="stylesheet" href="../../values/styles/avatar.css">
        <link rel="stylesheet" href="../../values/styles/profile-buttons.css">

        <script src="../../values/prefabs/headers.js"></script>
        <script src="../../values/code/user.js"></script>
        <script src="../../values/code/page_profile.js"></script>
        <script src="../../values/prefabs/addDescription.js"></script>
        <script src="../../values/prefabs/addUserProfile.js"></script>
        <script src="../../values/prefabs/addGameTabs.js"></script>
        <script src="../../values/db/DB2ArrayProfileController.php"></script>
        <script src="../../values/db/UsernameToDBController.php"></script>
    </head>
    <body>
        <script>
            PrefabHeader.get();
        </script>
        <main>
            <div id="yourDescription"></div>
            <div id="yourAvatar"></div>
            <div id="yourGameBoxes"></div>
            <script>
                PrefabgenerateDesc.addDescriptions(document.getElementById('yourDescription'), userData);
                PrefabGenerateUser.addUserProfiles(document.getElementById('yourAvatar'),userData);
                PrefabGenerateBoxes.addBoxItems(document.getElementById('yourGameBoxes'),userData);
            </script>
        </main>
    </body>
    <script src="../../values/code/base.js"></script>
</html>