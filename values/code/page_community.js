const gamesData = [
    {"ID":"1028","author":"blockbuilder","content":"Najnowsza aktualizacja 'Ligo Lego' wprowadza niesamowite tryby budowania, Jak Efektywnie Planować i Budować Własne Projekty Budowlane\n" +
            "Wstęp\n" +
            "Budowa, czy to domu, czy innej konstrukcji, to zadanie wymagające skrupulatnego planowania, precyzji i wiedzy technicznej. Niezależnie od tego, czy jesteś doświadczonym konstruktorem, czy amatorem, istnieją kluczowe kroki, które należy podjąć, aby zapewnić powodzenie projektu. W tym artykule omówimy fundamentalne aspekty planowania i realizacji projektów budowlanych.\n" +
            "\n" +
            "1. Planowanie i Projektowanie\n" +
            "Pierwszym krokiem w każdym projekcie budowlanym jest szczegółowe planowanie i projektowanie. To etap, na którym decydujesz o rozmiarze, stylu, funkcjonalności i estetyce konstrukcji. Ważne jest, aby wziąć pod uwagę lokalne przepisy budowlane, dostępność materiał","date":"'2020-09-01 10:00:00'"},
    {"ID":"1029","author":"fantasygamer","content":"Odkryj nowe krainy w aktualizacji do 'Shkyrim'! \"Shkyrim\", z jego malowniczymi krajobrazami i głęboko rozbudowaną mitologią, jest jedną z najbardziej znanych i cenionych gier w świecie fantasy. Ta epicka gra role-playing oferuje graczom niezwykłą przygodę w świecie pełnym smoków, magii i bohaterskich wyzwań. W tym artykule zagłębimy się w to, co sprawia, że \"Shkyrim\" jest tak uwielbianym tytułem wśród graczy na całym świecie.\n" +
            "\n" +
            "1. Niezwykły Świat do Eksploracji\n" +
            "\"Shkyrim\" zabiera graczy do rozległego, otwartego świata, który tętni życiem i historią. Od zasypanych śniegiem szczytów gór po zielone doliny","date":"'2020-09-15 14:30:00'"},
    {"ID":"1030","author":"westernfan","content":"'Blue Life Redemption' z nowym trybem multiplayer","date":"'2020-10-05 18:00:00'"},
    {"ID":"1031","author":"heroquest","content":"'The Legend Of Link' - wprowadzono nowe poziomy i bossów","date":"'2020-10-20 09:00:00'"},
    {"ID":"1032","author":"mariobro","content":"Super Luigi32 teraz z nowymi światami do eksploracji","date":"'2020-11-04 12:00:00'"},
    {"ID":"1033","author":"sandboxguru","content":"'Meinkraft' prezentuje innowacyjne narzędzia tworzenia","date":"'2020-11-19 16:45:00'"},
    {"ID":"1028","author":"thrillseeker","content":"'Half-Dead 3' zapowiada największy update z serii z nowymi poziomami zagadek","date":"'2020-09-10 14:30:00'"},
    {"ID":"1029","author":"soulsfan","content":"Odkryj mroczne tajemnice w nowej aktualizacji do 'White Souls'","date":"'2020-10-05 18:00:00'"},
    {"ID":"1030","author":"casualgamer","content":"'\"The Wii Chair 3: Wild Hunt\" – Intrygująca Przygoda w Świecie Mebli i Magii\n" +
            "Wstęp\n" +
            "\"The Wii Chair 3: Wild Hunt\" to unikatowa gra z gatunku dark fantasy, która rzuca graczy w środek niezwykłego świata, gdzie jako krzesło do gry na konsolę Wii, wkraczają w pełen magii i niebezpieczeństw świat. Gra łączy bogatą mitologię z głęboką fabułą, oferując unikalne doświadczenie, w którym gracze polują na potwory i angażują się w skomplikowane wydarzenia tego fantastycznego świata.\n" +
            "\n" +
            "Świat \"The Wii Chair 3: Wild Hunt\"\n" +
            "W \"The Wii Chair 3: Wild Hunt\", gracze wcielają się w postać krzesła do gry, wyposażonego w magiczne moce i zdolności. Ten oryginalny bohater przemierza świat pełen fantastycznych istot i niezwykłych wyzwań. Celem jest polowanie na potwory, które zagrażają porządkowi świata gry, przy użyciu unikalnego ekwipunku - dwóch szmatek, jednej na sucho i drugiej na mokro, które służą jako główne narzędzia w walce.\n" +
            "\n" +
            "Rozgrywka i Mechanika\n" +
            "Rozgrywka w \"The Wii Chair 3: Wild Hunt\" wyróżnia się na tle innych gier dark fantasy unikalnym podejściem do walki i eksploracji. Gracz, jako krzesło, musi wykorzystać swoje umiejętności i magiczne przedmioty, aby skutecznie walczyć z wrogami i rozwiązywać zagadki. Gra zapewnia szeroki wachlarz misji i zadań, w których gracze mogą angażować się, eksplorując tajemnicze lokacje i odkrywając sekrety tego niezwykłego świata.\n" +
            "\n" +
            "Wnioski\n" +
            "\"The Wii Chair 3: Wild Hunt\" jest dowodem na to, że kreatywność w świecie gier wideo nie zna granic. Łącząc elementy gier przygodowych z unikalnym podejściem do narracji i rozgrywki, twórcy gry stworzyli coś, co z pewnością zaintryguje i zaskoczy graczy na całym świecie. Odważne połączenie świata mebli z klasycznymi elementami dark fantasy tworzy niezapomniane wrażenia, które pozostają w pamięci na długo po zakończeniu gry.'","date":"'2020-11-21 20:45:00'"},
    {"ID":"1031","author":"zombiehunter","content":"Nowy poziom 'Zombie City' dostępny w 'Already Dead Light'","date":"'2020-12-15 09:15:00'"},
    {"ID":"1021","author":"gamerfun","content":"Premiera 'Jumping Shadows 2' zbliża się wielkimi krokami","date":"'2020-03-20 09:00:00'"},
    {"ID":"1022","author":"arcadeking","content":"'Mystery Mansion' ustawia nowe standardy w grach przygodowych","date":"'2020-04-10 15:45:30'"},
    {"ID":"1023","author":"retroguru","content":"Powrót klasyka: 'Pixel Quest' w nowej odsłonie","date":"'2020-05-05 13:20:00'"},
    {"ID":"1024","author":"spaceexplorer","content":"Odkrywaj galaktykę w 'Star Voyager X'","date":"'2020-06-18 20:30:00'"},
    {"ID":"1025","author":"fantasyfan","content":"Wyczekiwane DLC do 'Elven Chronicles' już dostępne","date":"'2020-07-22 11:00:00'"},
    {"ID":"1026","author":"speedracer","content":"'Fast Track Legends' ustanawia nowy rekord prędkości","date":"'2020-08-15 17:45:00'"},
    {"ID":"1027","author":"puzzleaddict","content":"'Logic Maze' - nowa gra","date":"'2020-08-15 17:45:00'"}];
