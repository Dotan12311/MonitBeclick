const fs = require('fs');

const data = [
    {
    Name:'תל אביב צפון  ',
        NameE:'tel aviv north',
    PriceDayTo:'145 ' ,
    PriceNightTo:'150 ' ,
    PriceDayFrom:'155 ' ,
    PriceNightFrom:'165 ',
    fivePlus: '110'
    },
    {
    Name:'תל אביב  ',
        NameE:'tel aviv',
    PriceDayTo:'135' ,
    PriceNightTo:'140' ,
    PriceDayFrom:'150' ,
    PriceNightFrom:'155',
    fivePlus: '110'
    },
    {
    Name:'רמת גן  ',
        NameE:'ramat gan',
    PriceDayTo:'135 ' ,
    PriceNightTo:'140 ' ,
    PriceDayFrom:'150 ' ,
    PriceNightFrom:'160',
    fivePlus: '110'
    },
    {
    Name:'גבעתיים ',
        NameE:'givatayim',
    PriceDayTo:'140 ' ,
    PriceNightTo:'145 ' ,
    PriceDayFrom:'150 ' ,
    PriceNightFrom:'160 ',
    fivePlus: '110'
    },
    {
    Name:'בני ברק ',
        NameE:'bnei brak',
    PriceDayTo:'140 ' ,
    PriceNightTo:'145 ' ,
    PriceDayFrom:'150 ' ,
    PriceNightFrom:'150 '
    },
    {
    Name:'גבעת שמואל ',
        NameE:"giv'at shmuel",
    PriceDayTo:'135 ' ,
    PriceNightTo:'140 ' ,
    PriceDayFrom:'150 ' ,
    PriceNightFrom:'150 ',
    fivePlus: '110'
    },
    {
    Name:'פתח תקוה ',
        NameE:'petah tiqva',
    PriceDayTo:'140' ,
    PriceNightTo:'140 ' ,
    PriceDayFrom:'145' ,
    PriceNightFrom:'150'
    },
    {
    Name:'ראש העין ',
        NameE:"rosh ha'ayin",
    PriceDayTo:'140 ' ,
    PriceNightTo:'150' ,
    PriceDayFrom:'155 ' ,
    PriceNightFrom:' 160'
    },
    {
    Name:'גני תקווה ',
        NameE:'ganei tikva',
    PriceDayTo:'130 ' ,
    PriceNightTo:' 140' ,
    PriceDayFrom:'140 ' ,
    PriceNightFrom:'140 '
    },
    {
    Name:'הרצליה ',
        NameE:'herzliya',
    PriceDayTo:' 170' ,
    PriceNightTo:'180 ' ,
    PriceDayFrom:'185 ' ,
    PriceNightFrom:'185 '
    },
    {
    Name:'רמת השרון ',
        NameE:'ramat hasharon',
    PriceDayTo:'170 ' ,
    PriceNightTo:'180 ' ,
    PriceDayFrom:'175 ' ,
    PriceNightFrom:' 185'
    },
    {
    Name:'הוד השרון ',
        NameE:'hod haSharon',
    PriceDayTo:'160 ' ,
    PriceNightTo:'165 ' ,
    PriceDayFrom:'165 ' ,
    PriceNightFrom:'170 '
    },
    {
    Name:'רעננה ',
        NameE:"ra'anana",
    PriceDayTo:'170 ' ,
    PriceNightTo:' 180' ,
    PriceDayFrom:'180 ' ,
    PriceNightFrom:'185 '
    },
    {
    Name:'כפר סבא ',
        NameE:'kfar sava',
    PriceDayTo:'170 ' ,
    PriceNightTo:' 180' ,
    PriceDayFrom:'180 ' ,
    PriceNightFrom:'185 '
    },
    {
    Name:'נתניה ',
        NameE:'netania',
    PriceDayTo:'230 ' ,
    PriceNightTo:' 240' ,
    PriceDayFrom:'240 ' ,
    PriceNightFrom:'240 '
    },
    {
    Name:'חדרה ',
        NameE:'hadera',
    PriceDayTo:' 280' ,
    PriceNightTo:' 285',
    PriceDayFrom:'285 ' ,
    PriceNightFrom:'285 '
    },
    {
    Name:'קיסריה ',
        NameE:'caesarea',
    PriceDayTo:'310 ' ,
    PriceNightTo:'310 ' ,
    PriceDayFrom:'320 ' ,
    PriceNightFrom:'320 '
    },
    {
    Name:'בנימינה ',
        NameE:'binyamina',
    PriceDayTo:'315' ,
    PriceNightTo:'320 ' ,
    PriceDayFrom:'330 ' ,
    PriceNightFrom:'345 '
    },
                
                {
    Name:'גבעת עדה ',
        NameE:'givat ada',
    PriceDayTo:'315' ,
    PriceNightTo:'320 ' ,
    PriceDayFrom:'330 ' ,
    PriceNightFrom:'345 '
    },
    {
    Name:'זיכרון יעקב',
        NameE:"zikhron ya'akov",
    PriceDayTo:'330' ,
    PriceNightTo:'330' ,
    PriceDayFrom:'330' ,
    PriceNightFrom:'340'
    },
    {
    Name:'חיפה',
        NameE:'haifa',
    PriceDayTo:'400' ,
    PriceNightTo:'400' ,
    PriceDayFrom:'415' ,
    PriceNightFrom:'415'
    },
    {
    Name:'עכו',
        NameE:'acre',
    PriceDayTo:'460' ,
    PriceNightTo:'475' ,
    PriceDayFrom:'480' ,
    PriceNightFrom:'500'
    },
    {
    Name:'נהריה',
        NameE:'nahariya',
    PriceDayTo:'495' ,
    PriceNightTo:'520' ,
    PriceDayFrom:'500' ,
    PriceNightFrom:'540'
    },
    {
    Name:'קרית ענבים',
        NameE:'kiryat anavim',
    PriceDayTo:'235' ,
    PriceNightTo:'245' ,
    PriceDayFrom:'245' ,
    PriceNightFrom:'260'
    },
    {
    Name:'קרית שמונה',
        NameE:'kiryat shmona',
    PriceDayTo: '745' ,
    PriceNightTo:'745' ,
    PriceDayFrom:'745' ,
    PriceNightFrom:'765'
    },
    {
    Name:'קרית חיים',
        NameE:'kiryat haim',
    PriceDayTo:'425' ,
    PriceNightTo:'425' ,
    PriceDayFrom:'435' ,
    PriceNightFrom:'435'
    },
    {
    Name:'קרית מוצקין',
        NameE:'kiryat motzkin',
    PriceDayTo:'425' ,
    PriceNightTo:'425' ,
    PriceDayFrom:'435' ,
    PriceNightFrom:'435'
    },
    {
    Name:'קרית אתא',
        NameE:'kiryat ata',
    PriceDayTo:'425' ,
    PriceNightTo:'425' ,
    PriceDayFrom:435 ,
    PriceNightFrom:435
    },
    {
    Name:'קרית גת',
        NameE:'kiryat gat',
    PriceDayTo:'290' ,
    PriceNightTo:'320' ,
    PriceDayFrom:'330' ,
    PriceNightFrom:'345'
    },
    {
    Name:'אשקלון',
        NameE:'ashkelon',
    PriceDayTo:'310' ,
    PriceNightTo:'330' ,
    PriceDayFrom:'320' ,
    PriceNightFrom:'330'
    },
    {
    Name:'אשדוד',
        NameE:'ashdod',
    PriceDayTo:230 ,
    PriceNightTo:'250' ,
    PriceDayFrom:'235' ,
    PriceNightFrom:'250'
    },
    {
    Name:'ראשון לציון',
        NameE:'rishon le zion',
    PriceDayTo:'140' ,
    PriceNightTo:'140' ,
    PriceDayFrom:'150' ,
    PriceNightFrom:'150',
    fivePlus: '110'
    },
    {
    Name:'בת ים',
        NameE:'bat yam',
    PriceDayTo:'135' ,
    PriceNightTo:'145' ,
    PriceDayFrom:'145' ,
    PriceNightFrom:'150',
    fivePlus: '100'
    },
    {
    Name:'נס ציונה',
        NameE:'nes-ziona',
    PriceDayTo:'140' ,
    PriceNightTo:'145' ,
    PriceDayFrom:'145' ,
    PriceNightFrom:'155',
    fivePlus: '95'
    },
    {
    Name:'רחובות',
        NameE:'rehovot',
    PriceDayTo:'140' ,
    PriceNightTo:'145' ,
    PriceDayFrom:'150' ,
    PriceNightFrom:'155',
    fivePlus: '110'
    },
    {
    Name:'באר שבע',
        NameE:'beer-sheba',
    PriceDayTo:'420' ,
    PriceNightTo:'460' ,
    PriceDayFrom:'420' ,
    PriceNightFrom:'475'
    },
    {
    Name:'אילת',
        NameE:'eilat',
    PriceDayTo:'1450' ,
    PriceNightTo:'1550' ,
    PriceDayFrom:'1500' ,
    PriceNightFrom:'1650'
    },
    {
    Name:'פרדס חנה כרכור',
        NameE:'pardes hanna karkur',
    PriceDayTo:'310' ,
    PriceNightTo:'310' ,
    PriceDayFrom:'310' ,
    PriceNightFrom:'310'
    },
    {
    Name:'עתלית',
        NameE:'atlit',
    PriceDayTo:'390' ,
    PriceNightTo:'400' ,
    PriceDayFrom:'415' ,
    PriceNightFrom:'415'
    },
    {
    Name:'ירושלים',
        NameE:'jerusalem',
    PriceDayTo:'220' ,
    PriceNightTo:'240' ,
    PriceDayFrom:'230' ,
    PriceNightFrom:'240',
    fivePlus: '160'
    },
    {
    Name:'מודיעין',
        NameE:"modi'in",
    PriceDayTo:'140' ,
    PriceNightTo:'150' ,
    PriceDayFrom:'150' ,
    PriceNightFrom:'150'
    },
    {
    Name:'בית שמש',
        NameE:'beth shemesh',
    PriceDayTo:'220' ,
    PriceNightTo:'225' ,
    PriceDayFrom:'230' ,
    PriceNightFrom:'240'
    },
    {
    Name:'בית אל',
        NameE:'beit el',
    PriceDayTo:'355' ,
    PriceNightTo:'400' ,
    PriceDayFrom:'355' ,
    PriceNightFrom:'400'
    },
    {
    Name:'בית אלפא',
        NameE:'beit alfa',
    PriceDayTo:'490' ,
    PriceNightTo:'510' ,
    PriceDayFrom:'490' ,
    PriceNightFrom:'510'
    },
    {
    Name:'ירושלים מעלה אדומים',
        NameE:"jerusalem ma'ale adumim",
    PriceDayTo:'310' ,
    PriceNightTo:'310' ,
    PriceDayFrom:320 ,
    PriceNightFrom:'340'
    },
    {
    Name:'מעלות',
        NameE:'maalot',
    PriceDayTo:'535' ,
    PriceNightTo:550 ,
    PriceDayFrom:'545' ,
    PriceNightFrom:'560'
    },
    {
    Name:'גדרה',
        NameE:'gedera',
    PriceDayTo:'175' ,
    PriceNightTo:'185' ,
    PriceDayFrom:'190' ,
    PriceNightFrom:'200'
    },
    {
    Name:'גן יבנה',
        NameE:'gan yavne',
    PriceDayTo:'210' ,
    PriceNightTo:'230' ,
    PriceDayFrom:'225' ,
    PriceNightFrom:'235'
    },
    {
    Name:'יבנה',
        NameE:'yavneh',
    PriceDayTo:'175' ,
    PriceNightTo:'180' ,
    PriceDayFrom:'185' ,
    PriceNightFrom:'200'
    },
    {
    Name:'רמלה',
        NameE:'ramla',
    PriceDayTo:'125' ,
    PriceNightTo:'125' ,
    PriceDayFrom:'125' ,
    PriceNightFrom:'130'
    },
    {
    Name:'לוד',
        NameE:'lod',
    PriceDayTo:'95' ,
    PriceNightTo:'100' ,
    PriceDayFrom:'90' ,
    PriceNightFrom:'115'
    },
    {
    Name:'שוהם',
        NameE:'shoham',
    PriceDayTo:'100' ,
    PriceNightTo:'110' ,
    PriceDayFrom:'115' ,
    PriceNightFrom:'115'
    },
    {
    Name:'אור יהודה',
        NameE:'or yehuda',
    PriceDayTo:'100' ,
    PriceNightTo:'115' ,
    PriceDayFrom:'115' ,
    PriceNightFrom:'130'
    },
    {
    Name:'קרית אונו',
        NameE:'kiryat ono',
    PriceDayTo:'125' ,
    PriceNightTo:'135' ,
    PriceDayFrom:'135' ,
    PriceNightFrom:'145'
    },
    {
    Name:'יהוד',
        NameE:'yehud',
    PriceDayTo:'100' ,
    PriceNightTo:'110' ,
    PriceDayFrom:'100' ,
    PriceNightFrom:'110'
    },
    {
    Name:'אזור',
        NameE:'azor',
    PriceDayTo:'120' ,
    PriceNightTo:'120' ,
    PriceDayFrom:'120' ,
    PriceNightFrom:'120'
    },
    {
    Name:'טבריה',
        NameE:'tiberias',
    PriceDayTo:'550' ,
    PriceNightTo:'590' ,
    PriceDayFrom:'620' ,
    PriceNightFrom:'620'
    },
    {
    Name:'כפר יונה',
        NameE:'kfar yona',
    PriceDayTo:'255' ,
    PriceNightTo:'280' ,
    PriceDayFrom:'255' ,
    PriceNightFrom:'280'
    },
    {
    Name:'תל מונד',
        NameE:'tel mond',
    PriceDayTo:'230' ,
    PriceNightTo:'240' ,
    PriceDayFrom:'240' ,
    PriceNightFrom:'240'
    },
    {
    Name:'כפר שמריהו',
        NameE:'kfar shmaryahu',
    PriceDayTo:'180' ,
    PriceNightTo:'180' ,
    PriceDayFrom:185 ,
    PriceNightFrom:185
    },
    {
    Name:'פרדסיה',
        NameE:'pardesia',
    PriceDayTo:'230' ,
    PriceNightTo:'240' ,
    PriceDayFrom:240 ,
    PriceNightFrom:240
    },
    {
    Name:'רינתיה',
        NameE:'rinatya',
    PriceDayTo:'120' ,
    PriceNightTo:'130' ,
    PriceDayFrom:'130' ,
    PriceNightFrom:'130'
    },
    {
    Name:'אחיסמך',
        NameE:'ahisamakh',
    PriceDayTo:'120' ,
    PriceNightTo:'125' ,
    PriceDayFrom:'125' ,
    PriceNightFrom:'125'
    },
    {
    Name:'רישפון',
        NameE:'rishpon',
    PriceDayTo:200 ,
    PriceNightTo:210 ,
    PriceDayFrom:215 ,
    PriceNightFrom:220
    },
    {
    Name:'קרית מלאכי',
        NameE:'kiryat Malakhi',
    PriceDayTo:'250' ,
    PriceNightTo:'250' ,
    PriceDayFrom:255 ,
    PriceNightFrom:'260'
    },
    {
    Name:'בני עיש',
        NameE:'bnei ayish',
    PriceDayTo:185 ,
    PriceNightTo:'210' ,
    PriceDayFrom:'230' ,
    PriceNightFrom:'240'
    },
    {
    Name:'כפר ורבורג',
        NameE:'kfar warburg',
    PriceDayTo:'235' ,
    PriceNightTo:'260' ,
    PriceDayFrom:'235' ,
    PriceNightFrom:'260'
    },
    {
    Name:'מבקיעים',
        NameE:"mavki'im",
    PriceDayTo:'335' ,
    PriceNightTo:'360' ,
    PriceDayFrom:'335' ,
    PriceNightFrom:'360'
    },
    {
    Name:'מבשרת ציון',
        NameE:'mevasseret zion',
    PriceDayTo:'220' ,
    PriceNightTo:'235' ,
    PriceDayFrom:'235' ,
    PriceNightFrom:'240'
    },
    {
    Name:'שדרות',
        NameE:'sderot',
    PriceDayTo:'350' ,
    PriceNightTo:'425' ,
    PriceDayFrom:'360' ,
    PriceNightFrom:'425'
    },
    {
    Name:'ערד',
        NameE:'arad',
    PriceDayTo:'540' ,
    PriceNightTo:'620' ,
    PriceDayFrom:'550' ,
    PriceNightFrom:'630'
    },
    {
    Name:'נתיבות',
        NameE:'netivot',
    PriceDayTo:'365' ,
    PriceNightTo:'435' ,
    PriceDayFrom:'370' ,
    PriceNightFrom:'440'
    },
    {
    Name:'אופקים',
        NameE:'ofaqim',
    PriceDayTo:'435' ,
    PriceNightTo:'495' ,
    PriceDayFrom:'435' ,
    PriceNightFrom:'495'
    },
    {
    Name:'מיתר',
        NameE:'metar',
    PriceDayTo:'420' ,
    PriceNightTo:'440' ,
    PriceDayFrom:'420' ,
    PriceNightFrom:'440'
    },
    {
    Name:'יד בנימין',
        NameE:'yad binyamin',
    PriceDayTo:185 ,
    PriceNightTo:'205' ,
    PriceDayFrom:'180' ,
    PriceNightFrom:'205'
    },
    {
    Name:'מזכרת בתיה',
        NameE:'mazkeret batya',
    PriceDayTo:'155' ,
    PriceNightTo:'170' ,
    PriceDayFrom:'180' ,
    PriceNightFrom:'185'
    },
    {
    Name:'קרית עקרון',
        NameE:'kiryat ekron',
    PriceDayTo:'145' ,
    PriceNightTo:'155' ,
    PriceDayFrom:'155' ,
    PriceNightFrom:'170'
    },
    {
    Name:'באר יעקב',
        NameE:"be'er ya'akov",
    PriceDayTo:'140' ,
    PriceNightTo:'140' ,
    PriceDayFrom:'145' ,
    PriceNightFrom:'150'
    },
    {
    Name:'צור יגאל',
        NameE:"tzur yig'al",
    PriceDayTo:215 ,
    PriceNightTo:230 ,
    PriceDayFrom:'220' ,
    PriceNightFrom:'240'
    },
    {
    Name:'צור יצחק',
        NameE:'tzur yitzhak',
    PriceDayTo: 245,
    PriceNightTo:275 ,
    PriceDayFrom:'245' ,
    PriceNightFrom:'280'
    },
    {
    Name:'טירה',
        NameE:'tira',
    PriceDayTo:250 ,
    PriceNightTo:265 ,
    PriceDayFrom:260 ,
    PriceNightFrom:'285'
    },
    
    {
    Name:'סכנין',
        NameE:'sakhnin',
    PriceDayTo:485 ,
    PriceNightTo: 485,
    PriceDayFrom:'485' ,
    PriceNightFrom:'485'
    },
    
    {
    Name:'אלפי מנשה',
        NameE:'alfei menashe',
    PriceDayTo:220 ,
    PriceNightTo: 235,
    PriceDayFrom:'220' ,
    PriceNightFrom:'235'
    },
    
    {
    Name:'חריש',
        NameE:'harish',
    PriceDayTo:320 ,
    PriceNightTo: 320,
    PriceDayFrom:'320' ,
    PriceNightFrom:'320'
    },
    
    {
    Name:'יקום',
        NameE:'yakum',
    PriceDayTo:215 ,
    PriceNightTo:235 ,
    PriceDayFrom:'220' ,
    PriceNightFrom:'240'
    },
    
    {
    Name:'אודים',
        NameE:'udim',
    PriceDayTo: 235,
    PriceNightTo:245 ,
    PriceDayFrom:240 ,
    PriceNightFrom:'250'
    },
    
    {
    Name:'תל יצחק',
        NameE:'tel yitzhak',
    PriceDayTo:240 ,
    PriceNightTo: 245,
    PriceDayFrom:'240' ,
    PriceNightFrom:'255'
    },
    
    {
    Name:'בני ציון',
        NameE:'bnei zion',
    PriceDayTo:220 ,
    PriceNightTo:240 ,
    PriceDayFrom:'220' ,
    PriceNightFrom:'245'
    },
    
    {
    Name:'בית יהושע',
        NameE:'beit yehoshua',
    PriceDayTo:225 ,
    PriceNightTo: 230,
    PriceDayFrom:'230' ,
    PriceNightFrom:'235'
    },
    
    {
    Name:'שפיים',
        NameE:'shefayim',
    PriceDayTo: 220,
    PriceNightTo:235 ,
    PriceDayFrom:'220' ,
    PriceNightFrom:'245'
    },
    
    {
    Name:'כפר ויתקין',
        NameE:'kfar vitkin',
    PriceDayTo:260 ,
    PriceNightTo:280 ,
    PriceDayFrom:'260' ,
    PriceNightFrom:'280'
    },
    
    {
    Name:'רמות השבים',
        NameE:'ramot haShavim',
    PriceDayTo:170 ,
    PriceNightTo: 180,
    PriceDayFrom:'175' ,
    PriceNightFrom:'185'
    },
    
    {
    Name:'כפר מלל',
        NameE:'kfar malal',
    PriceDayTo:165 ,
    PriceNightTo: 175,
    PriceDayFrom:'170' ,
    PriceNightFrom:'175'
    },
    
    {
    Name:'בית ברל',
        NameE:'beit berl',
    PriceDayTo:195 ,
    PriceNightTo:200 ,
    PriceDayFrom:'195' ,
    PriceNightFrom:'205'
    },
    
    {
    Name:'צופית',
        NameE:'tzofit',
    PriceDayTo: 190,
    PriceNightTo:200 ,
    PriceDayFrom:'195' ,
    PriceNightFrom:'205'
    },
    
    {
    Name:'גן חיים',
        NameE:'gan haim',
    PriceDayTo: 175,
    PriceNightTo: 185,
    PriceDayFrom:'185' ,
    PriceNightFrom:'205'
    },
    
    {
    Name:'מכמורת',
        NameE:'michmoret',
    PriceDayTo: 290,
    PriceNightTo: 290,
    PriceDayFrom:'290' ,
    PriceNightFrom:'290'
    },
    
    {
    Name:'גן שמואל',
        NameE:'gan shmuel',
    PriceDayTo:300 ,
    PriceNightTo:325 ,
    PriceDayFrom:'300' ,
    PriceNightFrom:'325'
    },
    
    {
    Name:'מעגן מיכאל',
        NameE:"ma'agan michael",
    PriceDayTo:340 ,
    PriceNightTo:340 ,
    PriceDayFrom:'340' ,
    PriceNightFrom:'340'
    },
    
    {
    Name:'להבים',
        NameE:'lehavim',
    PriceDayTo:395 ,
    PriceNightTo: 415,
    PriceDayFrom:'405' ,
    PriceNightFrom:'420'
    },
    
    {
    Name:'בת שלמה',
        NameE:'bat shlomo',
    PriceDayTo: 355,
    PriceNightTo:385 ,
    PriceDayFrom:'385' ,
    PriceNightFrom:'410'
    },
    
    {
    Name:'נצרת עילית',
        NameE:'nazareth illit',
    PriceDayTo:420 ,
    PriceNightTo: 420,
    PriceDayFrom:'420' ,
    PriceNightFrom:'420'
    },
                
    {
    Name:'נוף הגליל',
        NameE:'nof haGalil',
    PriceDayTo:420 ,
    PriceNightTo: 420,
    PriceDayFrom:'420' ,
    PriceNightFrom:'420'
    },
    {
    Name:'יוקנעם עילית',
        NameE:'yokneam illit',
    PriceDayTo: 360,
    PriceNightTo:360 ,
    PriceDayFrom:'365' ,
    PriceNightFrom:'365'
    },
    
    {
    Name:'טירת הכרמל',
        NameE:'tirat carmel',
    PriceDayTo: 415,
    PriceNightTo: 415,
    PriceDayFrom:'415' ,
    PriceNightFrom:'415'
    },
    
    {
    Name:'מגדל העמק',
        NameE:'migdal haEmek',
    PriceDayTo: 415,
    PriceNightTo: 415,
    PriceDayFrom:'415' ,
    PriceNightFrom:'415'
    },
    
    {
    Name:'רמת ישי',
        NameE:'ramat yishai',
    PriceDayTo: 420,
    PriceNightTo:420 ,
    PriceDayFrom:'420' ,
    PriceNightFrom:'420'
    },
    
    {
    Name:'נצרת',
        NameE:'nazareth',
    PriceDayTo: 420,
    PriceNightTo:420 ,
    PriceDayFrom:'420' ,
    PriceNightFrom:'420'
    },
    
    {
    Name:'כפר כנא',
        NameE:'kafr kana',
    PriceDayTo:420 ,
    PriceNightTo: 420,
    PriceDayFrom:'420' ,
    PriceNightFrom:'420'
    },
    
    {
    Name:'צפת',
        NameE:'safed',
    PriceDayTo:625 ,
    PriceNightTo:625 ,
    PriceDayFrom:'630' ,
    PriceNightFrom:'630'
    },
    
    {
    Name:'להבות חביבה ',
            NameE:'lehavot haviva',
    PriceDayTo: 300,
    PriceNightTo: 325,
    PriceDayFrom:'300' ,
    PriceNightFrom:'325'
    },
    
    {
    Name:'כרמיאל',
        NameE:'karmiel',
    PriceDayTo: 470,
    PriceNightTo:470 ,
    PriceDayFrom:'470' ,
    PriceNightFrom:'470'
    },
    
    {
    Name:'מעלות תרשיחא',
        NameE:"ma'alot tarshiha",
    PriceDayTo:515 ,
    PriceNightTo:515 ,
    PriceDayFrom:515 ,
    PriceNightFrom:'515'
    },
    
    {
    Name:'קצרין',
        NameE:'katzrin',
    PriceDayTo:705 ,
    PriceNightTo:705 ,
    PriceDayFrom :705,
    PriceNightFrom:705
    },
    
    {
    Name:'עפולה',
        NameE:'afula',
    PriceDayTo:415,
    PriceNightTo: 420,
    PriceDayFrom:'415' ,
    PriceNightFrom:'420'
    },
                
    {
    Name:'חולון',
        NameE:'holon',
    PriceDayTo:135,
    PriceNightTo: 135,
    PriceDayFrom:'150' ,
    PriceNightFrom:'150',
    fivePlus: '85'
    },
    
    {
    Name:'אבן יהודה',
        NameE:'even yehuda',
    PriceDayTo:'230' ,
    PriceNightTo:'240' ,
    PriceDayFrom:240 ,
    PriceNightFrom:240
    },
    
    {
    Name:'צור הדסה',
        NameE:'tzur hadassah',
    PriceDayTo:'265' ,
    PriceNightTo:'280' ,
    PriceDayFrom:280 ,
    PriceNightFrom:295
    },
    
    {
    Name:'כפר הס',
        NameE:'kfar hess',
    PriceDayTo:'240' ,
    PriceNightTo:'250' ,
    PriceDayFrom:240 ,
    PriceNightFrom:255
    },
    
    {
    Name:'נירית',
        NameE:'nirit',
    PriceDayTo:'180' ,
    PriceNightTo:'200' ,
    PriceDayFrom:185 ,
    PriceNightFrom:200
    },
    
    {
    Name:'עלי זהב',
        NameE:'alei zahav',
    PriceDayTo:'220' ,
    PriceNightTo:'220' ,
    PriceDayFrom:220 ,
    PriceNightFrom:220
    },
    
    {
    Name:'יעף',
        NameE:"ye'af",
    PriceDayTo:'265' ,
    PriceNightTo:'265' ,
    PriceDayFrom:275 ,
    PriceNightFrom:275
    },
    
    {
    Name:'גשר הזיו',
        NameE:'gesher haziv',
    PriceDayTo:'480' ,
    PriceNightTo:'490' ,
    PriceDayFrom:480 ,
    PriceNightFrom:490
    },
    
    {
    Name:'עין צורים',
        NameE:'ein Tzurim',
    PriceDayTo:'250' ,
    PriceNightTo:'250' ,
    PriceDayFrom:260 ,
    PriceNightFrom:260
    },
    
    {
    Name:'טירת יהודה',
        NameE:'tirat yehuda',
    PriceDayTo:'95' ,
    PriceNightTo:'100' ,
    PriceDayFrom:100 ,
    PriceNightFrom:110
    },
    
    {
    Name:'מתן',
        NameE:'matan',
    PriceDayTo:'170' ,
    PriceNightTo:'180' ,
    PriceDayFrom:175 ,
    PriceNightFrom:185
    },
    
    
    {
    Name:'טל שחר',
        NameE:'tal shahar',
    PriceDayTo:'180' ,
    PriceNightTo:'180' ,
    PriceDayFrom:185 ,
    PriceNightFrom:200
    },
    
    {
    Name:'קדימה צורן',
        NameE:'kadima zoran',
    PriceDayTo:'230' ,
    PriceNightTo:'240' ,
    PriceDayFrom:240 ,
    PriceNightFrom:240
    },
    
    {
    Name:'כפר נטר',
        NameE:'kfar netter',
    PriceDayTo:'230' ,
    PriceNightTo:'240' ,
    PriceDayFrom:230 ,
    PriceNightFrom:240
    },
    
    {
    Name:'קרית יערים',
        NameE:'kiriyat yearim',
    PriceDayTo:'220' ,
    PriceNightTo:'240' ,
    PriceDayFrom:220 ,
    PriceNightFrom:240
    },
    
    {
    Name:'נוף איילון',
        NameE:'nof ayalon',
    PriceDayTo:'155' ,
    PriceNightTo:'165' ,
    PriceDayFrom:160 ,
    PriceNightFrom:170
    },
    
    {
    Name:'עדנים',
        NameE:'adanym',
    PriceDayTo:'150' ,
    PriceNightTo:'165' ,
    PriceDayFrom:150 ,
    PriceNightFrom:165
    },
    
    
    {
    Name:'צלפון',
        NameE:'tzelafon',
    PriceDayTo:'170' ,
    PriceNightTo:'180' ,
    PriceDayFrom:170 ,
    PriceNightFrom:180
    },
    
    {
    Name:'משמר איילון',
        NameE:'mishmar ayalon',
    PriceDayTo:'160' ,
    PriceNightTo:'170' ,
    PriceDayFrom:160 ,
    PriceNightFrom:170
    },
    
    {
    Name:'כפר ורדים',
        NameE:'kfar vradim',
    PriceDayTo:'500' ,
    PriceNightTo:'500' ,
    PriceDayFrom:510 ,
    PriceNightFrom:510
    },
    
    {
    Name:'מגל',
        NameE:'magal',
    PriceDayTo:'280' ,
    PriceNightTo:'280' ,
    PriceDayFrom:280 ,
    PriceNightFrom:280
    },
    
    {
    Name:'מאור',
        NameE:'maor',
    PriceDayTo:'300' ,
    PriceNightTo:'320' ,
    PriceDayFrom:300 ,
    PriceNightFrom:320
    },
    
    {
    Name:'שדה יצחק',
        NameE:'itzhak field',
    PriceDayTo:'300' ,
    PriceNightTo:'325' ,
    PriceDayFrom:300 ,
    PriceNightFrom:325
    },
    
    {
    Name:'פורים עילית',
        NameE:'itzhak field',
    PriceDayTo:'500' ,
    PriceNightTo:'520' ,
    PriceDayFrom:500 ,
    PriceNightFrom:520
    },
    
    ]
  
    const formattedData = [];

// Iterate over each location in the data
data.forEach(item => {
    // Create a template string with common properties
    var formattedString = `
{
Name: "${item.Name.trim()}",
NameE: "${item.NameE.trim()}",
PriceDayTo: ${item.PriceDayTo},
PriceNightTo: ${item.PriceNightTo},
PriceDayFrom: ${item.PriceDayFrom},
PriceNightFrom: ${item.PriceNightFrom}
},`;

    // Check if the fivePlus property exists for the current location
    if (item.fivePlus) {
        // formattedString += `,fivePlus: ${item.fivePlus}`;

        var formattedString = `
{
Name: "${item.Name.trim()}",
NameE: "${item.NameE.trim()}",
PriceDayTo: ${item.PriceDayTo},
PriceNightTo: ${item.PriceNightTo},
PriceDayFrom: ${item.PriceDayFrom},
PriceNightFrom: ${item.PriceNightFrom},
fivePlus: ${item.fivePlus}
},`;
    }

    // Add the formatted string to the array
    formattedData.push(formattedString);
});

// Join the array into a single string with line breaks
const outputString = formattedData.join('\n');

// Write the output to a file
fs.writeFileSync('output.txt', outputString, 'utf-8');

console.log('Output has been written to output.txt');