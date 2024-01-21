<html lang="pl">
    <head>
        <title>Stream • Logowanie</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="../../values/images/logo128.png" type="image/png">

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik">
        <link rel="stylesheet" href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>

        <link rel="stylesheet" href="../../values/dimensions.css">
        <link rel="stylesheet" href="../../values/colors.css">
        <link rel="stylesheet" href="../../values/styles/base.css">
        <link rel="stylesheet" href="../../values/styles/headers.css">
        <link rel="stylesheet" href="../../values/styles/input-fields.css">
        <link rel="stylesheet" href="../../values/styles/buttons.css">
        <link rel="stylesheet" href="../../values/styles/texts.css">

        <script src="../../values/code/user.js"></script>
        <script src="../../values/code/user.php"></script>
        <script src="../../values/code/user_db.js"></script>
        <script src="../../values/prefabs/headers.js"></script>
        <script src="../../values/code/page_loggin.js"></script>
    </head>
    <body>
        <script>
            PrefabHeader.get();
        </script>
        <main class="mdc-top-app-bar--fixed-adjust">
            <div class="mdc-layout-grid">
                <div class="mdc-layout-grid__inner">
                    <div class="mdc-layout-grid__cell--span-4-desktop
                                mdc-layout-grid__cell--span-2-tablet
                                mdc-layout-grid__cell--span-4-phone">
                    </div>
                    <div class="mdc-layout-grid__cell--span-4
                                mdc-layout-grid__inner"
                         style="margin: 0 auto;">
                        <label class="mdc-text-field mdc-text-field--outlined
                                      mdc-layout-grid__cell--span-12"
                               data-mdc-auto-init="MDCTextField">
                            <span class="mdc-notched-outline">
                                <span class="mdc-notched-outline__leading"></span>
                                <span class="mdc-notched-outline__notch">
                                    <span class="mdc-floating-label">E-mail</span>
                                </span>
                                <span class="mdc-notched-outline__trailing"></span>
                            </span>
                            <input type="email" class="mdc-text-field__input" aria-labelledby="my-label-id" required>
                        </label>
                        <label class="mdc-text-field mdc-text-field--outlined
                                      mdc-layout-grid__cell--span-12"
                               data-mdc-auto-init="MDCTextField">
                            <span class="mdc-notched-outline">
                                <span class="mdc-notched-outline__leading"></span>
                                <span class="mdc-notched-outline__notch">
                                    <span class="mdc-floating-label">Password</span>
                                </span>
                                <span class="mdc-notched-outline__trailing"></span>
                            </span>
                            <input type="password" class="mdc-text-field__input" aria-labelledby="my-label-id" required>
                        </label>
                        <button class="mdc-button mdc-button--outlined
                                       mdc-layout-grid__cell--span-12
                                       mdc-layout-grid--align-right"
                                onclick="PageLoggin.loggin()">
                            <span class="mdc-button__ripple"></span>
                            <span class="mdc-button__label">Zaloguj się</span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </body>
    <script src="../../values/code/base.js"></script>
    <script>
        Base.centerContent();
    </script>
</html>