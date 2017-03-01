(function() {
    var N_OPTIONS = 8;

    var ALL_STATS = [
        {key: "hp",   name: "HP"},
        {key: "pp",   name: "PP"},
        {key: "sAtk", name: "打撃力"},
        {key: "rAtk", name: "射撃力"},
        {key: "tAtk", name: "法撃力"},
        {key: "dex",  name: "技量"},
        {key: "sDef", name: "打撃防御"},
        {key: "rDef", name: "射撃防御"},
        {key: "tDef", name: "法撃防御"},
    ];

    var ALL_RESISTS = [
        {key: "sRes", name: "打撃耐性"},
        {key: "rRes", name: "射撃耐性"},
        {key: "tRes", name: "法撃耐性"},
        {key: "fRes", name: "炎耐性"},
        {key: "iRes", name: "氷耐性"},
        {key: "eRes", name: "雷耐性"},
        {key: "wRes", name: "風耐性"},
        {key: "lRes", name: "光耐性"},
        {key: "dRes", name: "闇耐性"},
    ];

    var ALL_OPTIONS = [
        {group: 1, name: "グンネ・ソール",         effects: {hp: 45, sAtk: 15}},
        {group: 1, name: "ジグモル・ソール",       effects: {pp: 4, sAtk: 15}},
        {group: 1, name: "ヴォル・ソール",         effects: {hp: 20, sAtk: 30}},
        {group: 1, name: "グワナ・ソール",         effects: {hp: 10, pp: 2, sAtk: 30}},
        {group: 1, name: "クォーツ・ソール",       effects: {pp: 3, sAtk: 30}},
        {group: 1, name: "アクト・ジ・ソール",     effects: {pp: 3, sAtk: 35}},
        {group: 1, name: "デッドリオン・ソール",   effects: {hp: 30, sAtk: 35, dex: 5}},
        {group: 1, name: "レオーネ・ソール",       effects: {hp: 20, pp: 1, sAtk: 35, dex: 5}},
        {group: 1, name: "ベーアリ・ソール",       effects: {pp: 3, sAtk: 35, dex: 5}},
        {group: 1, name: "イーデッタ・ソール",     effects: {hp: 45, rAtk: 15}},
        {group: 1, name: "マドゥ・ソール",         effects: {pp: 4, rAtk: 15}},
        {group: 1, name: "ランサ・ソール",         effects: {hp: 20, rAtk: 30}},
        {group: 1, name: "ファング・ソール",       effects: {hp: 10, pp: 2, rAtk: 30}},
        {group: 1, name: "マイザー・ソール",       effects: {pp: 3, rAtk: 30}},
        {group: 1, name: "ティル・ジ・ソール",     effects: {pp: 3, rAtk: 35}},
        {group: 1, name: "レオパード・ソール",     effects: {hp: 30, rAtk: 35, dex: 5}},
        {group: 1, name: "ジオーグ・ソール",       effects: {hp: 20, pp: 1, rAtk: 35, dex: 5}},
        {group: 1, name: "グリュゾラス・ソール",   effects: {pp: 3, rAtk: 35, dex: 5}},
        {group: 1, name: "ジャドゥ・ソール",       effects: {hp: 45, tAtk: 15}},
        {group: 1, name: "ネプト・ソール",         effects: {pp: 4, tAtk: 15}},
        {group: 1, name: "ラグネ・ソール",         effects: {hp: 20, tAtk: 30}},
        {group: 1, name: "ウォルガ・ソール",       effects: {hp: 10, pp: 2, tAtk: 30}},
        {group: 1, name: "エルダー・ソール",       effects: {pp: 3, tAtk: 30}},
        {group: 1, name: "マギー・ジ・ソール",     effects: {pp: 3, tAtk: 35}},
        {group: 1, name: "ディアボ・ソール",       effects: {hp: 30, tAtk: 35, dex: 5}},
        {group: 1, name: "ドゥバルス・ソール",     effects: {hp: 20, pp: 1, tAtk: 35, dex: 5}},
        {group: 1, name: "グランゾ・ソール",       effects: {pp: 3, tAtk: 35, dex: 5}},
        {group: 1, name: "ニャウ・ソール",         effects: {pp: 4, dex: 15}},
        {group: 1, name: "シグノ・ソール",         effects: {hp: 20, pp: 1, dex: 30}},
        {group: 1, name: "クローム・ソール",       effects: {hp: 10, pp: 3, dex: 30}},
        {group: 1, name: "ラッピー・ソール",       effects: {pp: 4, dex: 30}},
        {group: 1, name: "シノワ・ソール",         effects: {hp: 25, pp: 2, sAtk: 5, dex: 30}},
        {group: 1, name: "スノウ・ソール",         effects: {hp: 20, pp: 1, sDef: 30}},
        {group: 1, name: "ロックベア・ソール",     effects: {hp: 10, pp: 3, sDef: 30}},
        {group: 1, name: "エクス・ソール",         effects: {pp: 4, sDef: 30}},
        {group: 1, name: "マルモ・ソール",         effects: {hp: 20, pp: 1, rDef: 30}},
        {group: 1, name: "ペルソナ・ソール",       effects: {hp: 10, pp: 3, rDef: 30}},
        {group: 1, name: "ヴァーダー・ソール",     effects: {pp: 4, rDef: 30}},
        {group: 1, name: "キャタ・ソール",         effects: {hp: 20, pp: 1, tDef: 30}},
        {group: 1, name: "シュレイダ・ソール",     effects: {hp: 10, pp: 3, tDef: 30}},
        {group: 1, name: "ゴロン・ソール",         effects: {pp: 4, tDef: 30}},
        {group: 1, name: "オルグ・ソール",         effects: {hp: 10, sAtk: 20, rAtk: 20}},
        {group: 1, name: "メデューナ・ソール",     effects: {hp: 5, pp: 1, sAtk: 20, rAtk: 20}},
        {group: 1, name: "ソーマ・ソール",         effects: {pp: 2, sAtk: 20, rAtk: 20}},
        {group: 1, name: "リンガ・ソール",         effects: {hp: 10, sAtk: 20, tAtk: 20}},
        {group: 1, name: "ルーサー・ソール",       effects: {hp: 5, pp: 1, sAtk: 20, tAtk: 20}},
        {group: 1, name: "マリューダ・ソール",     effects: {pp: 2, sAtk: 20, tAtk: 20}},
        {group: 1, name: "バル・ソール",           effects: {hp: 10, rAtk: 20, tAtk: 20}},
        {group: 1, name: "ビブラス・ソール",       effects: {hp: 5, pp: 1, rAtk: 20, tAtk: 20}},
        {group: 1, name: "タガミカヅチ・ソール",   effects: {pp: 2, rAtk: 20, tAtk: 20}},
        {group: 1, name: "リーリー・ソール",       effects: {hp: 20, sAtk: 20, sDef: 20}},
        {group: 1, name: "エスカード・ソール",     effects: {sAtk: 10, rAtk: 10, tAtk: 10, dex: 20}},
        {group: 1, name: "フルベガス・ソール",     effects: {sAtk: 15, rAtk: 15, tAtk: 15}},
        {group: 1, name: "クーガー・ソール",       effects: {hp: 10, pp: 2, sAtk: 15, rAtk: 15, tAtk: 15, dex: 15}},
        {group: 1, name: "グリフォン・ソール",     effects: {hp: 5, pp: 3, sAtk: 15, rAtk: 15, tAtk: 15, dex: 15}},
        {group: 1, name: "ナイトギア・ソール",     effects: {pp: 4, sAtk: 15, rAtk: 15, tAtk: 15, dex: 15}},
        {group: 1, name: "イザネカヅチ・ソール",   effects: {pp: 2, sAtk: 20, rAtk: 20, tAtk: 20}},
        {group: 1, name: "アンガ・ソール",         effects: {pp: 4, sAtk: 20, rAtk: 20, tAtk: 20}},
        {group: 1, name: "アプレンティス・ソール", effects: {sAtk: 40, rAtk: 40, tAtk: 40}},
        {group: 1, name: "マガツ・ソール",         effects: {hp: 30, pp: 3, sDef: 15, rDef: 15, tDef: 15}},
        {group: 1, name: "ダブル・ソール",         effects: {hp: 40, pp: 3}},
        {group: 1, name: "トウオウ・ソール",       effects: {sAtk: 10, rAtk: 10, tAtk: 10, dex: 10, sDef: 10, rDef: 10, tDef: 10}},
        {group: 1, name: "ダークネス・ソール",     effects: {hp: 15, pp: 2, sAtk: 15, rAtk: 15, tAtk: 15, dex: 15, sDef: 15, rDef: 15, tDef: 15}},
        {group: 1, name: "アストラル・ソール",     effects: {hp: 35, pp: 5, sAtk: 35, rAtk: 35, tAtk: 35, dex: 35, sDef: 35, rDef: 35, tDef: 35}},

        {group: 2, name: "ラヴィ・フィーバー",   effects: {hp: 10, sAtk: 10, dex: 5}},
        {group: 2, name: "セレモ・フィーバー",   effects: {hp: 5, pp: 1, sAtk: 10, dex: 5}},
        {group: 2, name: "ラブ・フィーバー",     effects: {pp: 2, sAtk: 10, dex: 5}},
        {group: 2, name: "エグ・フィーバー",     effects: {hp: 10, rAtk: 10, dex: 5}},
        {group: 2, name: "ノイヤ・フィーバー",   effects: {hp: 5, pp: 1, rAtk: 10, dex: 5}},
        {group: 2, name: "セント・フィーバー",   effects: {pp: 2, rAtk: 10, dex: 5}},
        {group: 2, name: "フログ・フィーバー",   effects: {hp: 10, tAtk: 10, dex: 5}},
        {group: 2, name: "ルーナ・フィーバー",   effects: {hp: 10, pp: 1, tAtk: 10}},
        {group: 2, name: "サマー・フィーバー",   effects: {hp: 5, pp: 1, tAtk: 10, dex: 5}},
        {group: 2, name: "ラタン・フィーバー",   effects: {pp: 2, tAtk: 10, dex: 5}},
        {group: 2, name: "トロクロ・フィーバー", effects: {hp: 5, pp: 1, dex: 15}},
        {group: 2, name: "サクラ・フィーバー",   effects: {hp: 5, pp: 1, dex: 5, sDef: 10}},
        {group: 2, name: "ソニック・フィーバー", effects: {hp: 5, pp: 1, sAtk: 10, rDef: 10}},
        {group: 2, name: "サンサン・フィーバー", effects: {hp: 5, pp: 1, sAtk: 5, rAtk: 5, tAtk: 5}},

        {group: 3, name: "スタミナ・ブースト",     effects: {hp: 45}},
        {group: 3, name: "スピリタ・ブースト",     effects: {pp: 5}},
        {group: 3, name: "パワー・ブースト",       effects: {sAtk: 25}},
        {group: 3, name: "シュート・ブースト",     effects: {rAtk: 25}},
        {group: 3, name: "テクニック・ブースト",   effects: {tAtk: 25}},
        {group: 3, name: "テノラ・ブースト",       effects: {sAtk: 35}},
        {group: 3, name: "GRM・ブースト",          effects: {rAtk: 35}},
        {group: 3, name: "ヨウメイ・ブースト",     effects: {tAtk: 35}},
        {group: 3, name: "ノーブル・スタミナ",     effects: {hp: 50, pp: 3}},
        {group: 3, name: "ノーブル・パワー",       effects: {pp: 3, sAtk: 30}},
        {group: 3, name: "ノーブル・シュート",     effects: {pp: 3, rAtk: 30}},
        {group: 3, name: "ノーブル・テクニック",   effects: {pp: 3, tAtk: 30}},
        {group: 3, name: "エレガント・スタミナ",   effects: {hp: 70, pp: 4}},
        {group: 3, name: "エレガント・パワー",     effects: {pp: 4, sAtk: 40}},
        {group: 3, name: "エレガント・シュート",   effects: {pp: 4, rAtk: 40}},
        {group: 3, name: "エレガント・テクニック", effects: {pp: 4, tAtk: 40}},
        {group: 3, name: "オフェンス・ブースト",   effects: {pp: 1, sAtk: 15, rAtk: 15, tAtk: 15, dex: 25}},
        {group: 3, name: "ディフェンス・ブースト", effects: {hp: 55, pp: 1, sDef: 25, rDef: 25, tDef: 25}},
        {group: 3, name: "アタックレセプター",     effects: {sAtk: 5, rAtk: 5, tAtk: 5, dex: 5, sDef: 5, rDef: 5, tDef: 5}},
        {group: 3, name: "ガードレセプター",       effects: {sAtk: 5, rAtk: 5, tAtk: 5, dex: 5, sDef: 5, rDef: 5, tDef: 5}},
        {group: 3, name: "フォトンレセプター",     effects: {sAtk: 5, rAtk: 5, tAtk: 5, dex: 5, sDef: 5, rDef: 5, tDef: 5}},

        {group: 4, name: "アルター・アルマ", effects: {hp: 30, sAtk: 20}},
        {group: 4, name: "アルター・ティロ", effects: {hp: 30, rAtk: 20}},
        {group: 4, name: "アルター・マギア", effects: {hp: 30, tAtk: 20}},
        {group: 4, name: "フリクト・アルマ", effects: {pp: 3, sAtk: 20}},
        {group: 4, name: "フリクト・ティロ", effects: {pp: 3, rAtk: 20}},
        {group: 4, name: "フリクト・マギア", effects: {pp: 3, tAtk: 20}},
        {group: 4, name: "スティグマ",       effects: {pp: 5, dex: 20}},

        {group: 5, name: "センテンス・パワー",     effects: {pp: 4, sAtk: 20}},
        {group: 5, name: "センテンス・シュート",   effects: {pp: 4, rAtk: 20}},
        {group: 5, name: "センテンス・テクニック", effects: {pp: 4, tAtk: 20}},

        {group: 6, name: "ヤマト・ファクター", effects: {hp: 20, pp: 1, sAtk: 10, rAtk: 20, tAtk: 10}},
        {group: 6, name: "マザー・ファクター", effects: {hp: 20, pp: 1, sAtk: 10, rAtk: 10, tAtk: 20}},

        {group: 7, name: "ウィンクルム",   effects: {sAtk: 20, rAtk: 20, tAtk: 20}},
        {group: 7, name: "モデュレイター", effects: {sAtk: 30, rAtk: 30, tAtk: 30}},

        {group: 8, name: "スタミナⅠ",         effects: {hp: 20}},
        {group: 8, name: "スタミナⅡ",         effects: {hp: 40}},
        {group: 8, name: "スタミナⅢ",         effects: {hp: 50}},
        {group: 8, name: "スタミナⅣ",         effects: {hp: 60}},
        {group: 8, name: "スタミナⅤ",         effects: {hp: 70}},
        {group: 8, name: "スピリタⅠ",         effects: {pp: 2}},
        {group: 8, name: "スピリタⅡ",         effects: {pp: 3}},
        {group: 8, name: "スピリタⅢ",         effects: {pp: 4}},
        {group: 8, name: "スピリタⅣ",         effects: {pp: 5}},
        {group: 8, name: "スピリタⅤ",         effects: {pp: 6}},
        {group: 8, name: "パワーⅠ",           effects: {sAtk: 10}},
        {group: 8, name: "パワーⅡ",           effects: {sAtk: 20}},
        {group: 8, name: "パワーⅢ",           effects: {sAtk: 30}},
        {group: 8, name: "パワーⅣ",           effects: {sAtk: 35}},
        {group: 8, name: "パワーⅤ",           effects: {sAtk: 40}},
        {group: 8, name: "シュートⅠ",         effects: {rAtk: 10}},
        {group: 8, name: "シュートⅡ",         effects: {rAtk: 20}},
        {group: 8, name: "シュートⅢ",         effects: {rAtk: 30}},
        {group: 8, name: "シュートⅣ",         effects: {rAtk: 35}},
        {group: 8, name: "シュートⅤ",         effects: {rAtk: 40}},
        {group: 8, name: "テクニックⅠ",       effects: {tAtk: 10}},
        {group: 8, name: "テクニックⅡ",       effects: {tAtk: 20}},
        {group: 8, name: "テクニックⅢ",       effects: {tAtk: 30}},
        {group: 8, name: "テクニックⅣ",       effects: {tAtk: 35}},
        {group: 8, name: "テクニックⅤ",       effects: {tAtk: 40}},
        {group: 8, name: "アームⅠ",           effects: {dex: 10}},
        {group: 8, name: "アームⅡ",           effects: {dex: 20}},
        {group: 8, name: "アームⅢ",           effects: {dex: 30}},
        {group: 8, name: "アームⅣ",           effects: {dex: 35}},
        {group: 8, name: "アームⅤ",           effects: {dex: 40}},
        {group: 8, name: "ボディⅠ",           effects: {sDef: 10}},
        {group: 8, name: "ボディⅡ",           effects: {sDef: 20}},
        {group: 8, name: "ボディⅢ",           effects: {sDef: 30}},
        {group: 8, name: "ボディⅣ",           effects: {sDef: 35}},
        {group: 8, name: "ボディⅤ",           effects: {sDef: 40}},
        {group: 8, name: "リアクトⅠ",         effects: {rDef: 10}},
        {group: 8, name: "リアクトⅡ",         effects: {rDef: 20}},
        {group: 8, name: "リアクトⅢ",         effects: {rDef: 30}},
        {group: 8, name: "リアクトⅣ",         effects: {rDef: 35}},
        {group: 8, name: "リアクトⅤ",         effects: {rDef: 40}},
        {group: 8, name: "マインドⅠ",         effects: {tDef: 10}},
        {group: 8, name: "マインドⅡ",         effects: {tDef: 20}},
        {group: 8, name: "マインドⅢ",         effects: {tDef: 30}},
        {group: 8, name: "マインドⅣ",         effects: {tDef: 35}},
        {group: 8, name: "マインドⅤ",         effects: {tDef: 40}},
        {group: 8, name: "リターナーⅠ",       effects: {hp: 3, pp: 1, sAtk: 3, rAtk: 3, tAtk: 3, dex: 3, sDef: 3, rDef: 3, tDef: 3}},
        {group: 8, name: "リターナーⅡ",       effects: {hp: 5, pp: 2, sAtk: 5, rAtk: 5, tAtk: 5, dex: 5, sDef: 5, rDef: 5, tDef: 5}},
        {group: 8, name: "リターナーⅢ",       effects: {hp: 10, pp: 3, sAtk: 10, rAtk: 10, tAtk: 10, dex: 10, sDef: 10, rDef: 10, tDef: 10}},
        {group: 8, name: "リターナーⅣ",       effects: {hp: 15, pp: 4, sAtk: 15, rAtk: 15, tAtk: 15, dex: 15, sDef: 15, rDef: 15, tDef: 15}},
        {group: 8, name: "リターナーⅤ",       effects: {hp: 30, pp: 5, sAtk: 30, rAtk: 30, tAtk: 30, dex: 30, sDef: 30, rDef: 30, tDef: 30}},
        {group: 8, name: "アビリティⅠ",       effects: {sAtk: 5, rAtk: 5, tAtk: 5, dex: 5, sDef: 5, rDef: 5, tDef: 5}},
        {group: 8, name: "アビリティⅡ",       effects: {sAtk: 10, rAtk: 10, tAtk: 10, dex: 10, sDef: 10, rDef: 10, tDef: 10}},
        {group: 8, name: "アビリティⅢ",       effects: {sAtk: 15, rAtk: 15, tAtk: 15, dex: 15, sDef: 15, rDef: 15, tDef: 15}},
        {group: 8, name: "アビリティⅣ",       effects: {sAtk: 20, rAtk: 20, tAtk: 20, dex: 20, sDef: 20, rDef: 20, tDef: 20}},
        {group: 8, name: "ミューテーションⅠ", effects: {hp: 10, sAtk: 10, rAtk: 10, tAtk: 10}},
        {group: 8, name: "ミューテーションⅡ", effects: {hp: 15, sAtk: 15, rAtk: 15, tAtk: 15}},
        {group: 8, name: "ソール・カタリスト", effects: {hp: 10, pp: 1}},
        {group: 8, name: "スピリタ・アルファ", effects: {pp: 3, dex: 30}},
        {group: 8, name: "ネッキー・スマイル", effects: {pp: 2, sAtk: 5, rAtk: 5, tAtk: 5}},
        {group: 8, name: "ドゥームブレイク",   effects: {pp: 2, sAtk: 15, rAtk: 15, tAtk: 15}},

        {group: 9, name: "マーク・ジョイオ",   effects: {hp: 50, sAtk: 40, rAtk: 40, tAtk: 40}},
        {group: 9, name: "マーク・カレジナ",   effects: {pp: 5, sAtk: 40, rAtk: 40, tAtk: 40}},
        {group: 9, name: "マーク・アンガル",   effects: {sAtk: 50, rAtk: 50, tAtk: 50, dex: 40}},
        {group: 9, name: "マーク・グリフ",     effects: {hp: 80, sDef: 50, rDef: 50, tDef: 50}},
        {group: 9, name: "ソールレセプター",   effects: {sAtk: 10, rAtk: 10, tAtk: 10, dex: 10, sDef: 10, rDef: 10, tDef: 10}},
        {group: 9, name: "ギフトレセプター",   effects: {sAtk: 10, rAtk: 10, tAtk: 10, dex: 10, sDef: 10, rDef: 10, tDef: 10}},
        {group: 9, name: "エクストレセプター", effects: {sAtk: 10, rAtk: 10, tAtk: 10, dex: 10, sDef: 10, rDef: 10, tDef: 10}},

        {group: 10, name: "ブロウレジストⅠ",   effects: {sRes: 3}},
        {group: 10, name: "ブロウレジストⅡ",   effects: {sRes: 4}},
        {group: 10, name: "ブロウレジストⅢ",   effects: {sRes: 5}},
        {group: 10, name: "ブロウレジストⅣ",   effects: {sRes: 6}},
        {group: 10, name: "ブロウレジストⅤ",   effects: {sRes: 7}},
        {group: 10, name: "ショットレジストⅠ", effects: {rRes: 3}},
        {group: 10, name: "ショットレジストⅡ", effects: {rRes: 4}},
        {group: 10, name: "ショットレジストⅢ", effects: {rRes: 5}},
        {group: 10, name: "ショットレジストⅣ", effects: {rRes: 6}},
        {group: 10, name: "ショットレジストⅤ", effects: {rRes: 7}},
        {group: 10, name: "マインドレジストⅠ", effects: {tRes: 3}},
        {group: 10, name: "マインドレジストⅡ", effects: {tRes: 4}},
        {group: 10, name: "マインドレジストⅢ", effects: {tRes: 5}},
        {group: 10, name: "マインドレジストⅣ", effects: {tRes: 6}},
        {group: 10, name: "マインドレジストⅤ", effects: {tRes: 7}},
        {group: 10, name: "フレイムレジストⅠ", effects: {fRes: 3}},
        {group: 10, name: "フレイムレジストⅡ", effects: {fRes: 4}},
        {group: 10, name: "フレイムレジストⅢ", effects: {fRes: 5}},
        {group: 10, name: "フレイムレジストⅣ", effects: {fRes: 6}},
        {group: 10, name: "フレイムレジストⅤ", effects: {fRes: 7}},
        {group: 10, name: "アイスレジストⅠ",   effects: {iRes: 3}},
        {group: 10, name: "アイスレジストⅡ",   effects: {iRes: 4}},
        {group: 10, name: "アイスレジストⅢ",   effects: {iRes: 5}},
        {group: 10, name: "アイスレジストⅣ",   effects: {iRes: 6}},
        {group: 10, name: "アイスレジストⅤ",   effects: {iRes: 7}},
        {group: 10, name: "ショックレジストⅠ", effects: {lRes: 3}},
        {group: 10, name: "ショックレジストⅡ", effects: {lRes: 4}},
        {group: 10, name: "ショックレジストⅢ", effects: {lRes: 5}},
        {group: 10, name: "ショックレジストⅣ", effects: {lRes: 6}},
        {group: 10, name: "ショックレジストⅤ", effects: {lRes: 7}},
        {group: 10, name: "ウィンドレジストⅠ", effects: {wRes: 3}},
        {group: 10, name: "ウィンドレジストⅡ", effects: {wRes: 4}},
        {group: 10, name: "ウィンドレジストⅢ", effects: {wRes: 5}},
        {group: 10, name: "ウィンドレジストⅣ", effects: {wRes: 6}},
        {group: 10, name: "ウィンドレジストⅤ", effects: {wRes: 7}},
        {group: 10, name: "ライトレジストⅠ",   effects: {lRes: 3}},
        {group: 10, name: "ライトレジストⅡ",   effects: {lRes: 4}},
        {group: 10, name: "ライトレジストⅢ",   effects: {lRes: 5}},
        {group: 10, name: "ライトレジストⅣ",   effects: {lRes: 6}},
        {group: 10, name: "ライトレジストⅤ",   effects: {lRes: 7}},
        {group: 10, name: "グルームレジストⅠ", effects: {dRes: 3}},
        {group: 10, name: "グルームレジストⅡ", effects: {dRes: 4}},
        {group: 10, name: "グルームレジストⅢ", effects: {dRes: 5}},
        {group: 10, name: "グルームレジストⅣ", effects: {dRes: 6}},
        {group: 10, name: "グルームレジストⅤ", effects: {dRes: 7}},
        {group: 10, name: "オールレジストⅠ",   effects: {sRes: 1, rRes: 1, tRes: 1, fRes: 1, iRes: 1, eRes: 1, wRes: 1, lRes: 1, dRes: 1}},
        {group: 10, name: "オールレジストⅡ",   effects: {sRes: 2, rRes: 2, tRes: 2, fRes: 2, iRes: 2, eRes: 2, wRes: 2, lRes: 2, dRes: 2}},
        {group: 10, name: "オールレジストⅢ",   effects: {sRes: 3, rRes: 3, tRes: 3, fRes: 3, iRes: 3, eRes: 3, wRes: 3, lRes: 3, dRes: 3}},

        {group: 11, name: "バーンⅠ",     effects: {extra: "バーンLv.1を付与する"}},
        {group: 11, name: "バーンⅡ",     effects: {extra: "バーンLv.2を付与する"}},
        {group: 11, name: "バーンⅢ",     effects: {extra: "バーンLv.3を付与する"}},
        {group: 11, name: "バーンⅣ",     effects: {extra: "バーンLv.4を付与する"}},
        {group: 11, name: "バーンⅤ",     effects: {extra: "バーンLv.5を付与する"}},
        {group: 11, name: "フリーズⅠ",   effects: {extra: "フリーズLv.1を付与する"}},
        {group: 11, name: "フリーズⅡ",   effects: {extra: "フリーズLv.2を付与する"}},
        {group: 11, name: "フリーズⅢ",   effects: {extra: "フリーズLv.3を付与する"}},
        {group: 11, name: "フリーズⅣ",   effects: {extra: "フリーズLv.4を付与する"}},
        {group: 11, name: "フリーズⅤ",   effects: {extra: "フリーズLv.5を付与する"}},
        {group: 11, name: "ショックⅠ",   effects: {extra: "ショックLv.1を付与する"}},
        {group: 11, name: "ショックⅡ",   effects: {extra: "ショックLv.2を付与する"}},
        {group: 11, name: "ショックⅢ",   effects: {extra: "ショックLv.3を付与する"}},
        {group: 11, name: "ショックⅣ",   effects: {extra: "ショックLv.4を付与する"}},
        {group: 11, name: "ショックⅤ",   effects: {extra: "ショックLv.5を付与する"}},
        {group: 11, name: "ミラージュⅠ", effects: {extra: "ミラージュLv.1を付与する"}},
        {group: 11, name: "ミラージュⅡ", effects: {extra: "ミラージュLv.2を付与する"}},
        {group: 11, name: "ミラージュⅢ", effects: {extra: "ミラージュLv.3を付与する"}},
        {group: 11, name: "ミラージュⅣ", effects: {extra: "ミラージュLv.4を付与する"}},
        {group: 11, name: "ミラージュⅤ", effects: {extra: "ミラージュLv.5を付与する"}},
        {group: 11, name: "ポイズンⅠ",   effects: {extra: "ポイズンLv.1を付与する"}},
        {group: 11, name: "ポイズンⅡ",   effects: {extra: "ポイズンLv.2を付与する"}},
        {group: 11, name: "ポイズンⅢ",   effects: {extra: "ポイズンLv.3を付与する"}},
        {group: 11, name: "ポイズンⅣ",   effects: {extra: "ポイズンLv.4を付与する"}},
        {group: 11, name: "ポイズンⅤ",   effects: {extra: "ポイズンLv.5を付与する"}},
        {group: 11, name: "パニックⅠ",   effects: {extra: "パニックLv.1を付与する"}},
        {group: 11, name: "パニックⅡ",   effects: {extra: "パニックLv.2を付与する"}},
        {group: 11, name: "パニックⅢ",   effects: {extra: "パニックLv.3を付与する"}},
        {group: 11, name: "パニックⅣ",   effects: {extra: "パニックLv.4を付与する"}},
        {group: 11, name: "パニックⅤ",   effects: {extra: "パニックLv.5を付与する"}},

        {group: 12, name: "ラッキーライズⅠ",   effects: {extra: "レアドロップ倍率が5%増加"}},
        {group: 12, name: "ラッキーライズⅡ",   effects: {extra: "レアドロップ倍率が7%増加"}},
        {group: 12, name: "ラッキーライズⅢ",   effects: {extra: "レアドロップ倍率が10%増加"}},
        {group: 12, name: "メセタフィーバーⅠ", effects: {extra: "出現するメセタが5%増加"}},
        {group: 12, name: "メセタフィーバーⅡ", effects: {extra: "出現するメセタが10%増加"}},
        {group: 12, name: "メセタフィーバーⅢ", effects: {extra: "出現するメセタが15%増加"}},
        {group: 12, name: "EXPブーストⅠ",      effects: {extra: "取得する経験値が5%増加"}},
        {group: 12, name: "EXPブーストⅡ",      effects: {extra: "取得する経験値が7%増加"}},
        {group: 12, name: "EXPブーストⅢ",      effects: {extra: "取得する経験値が10%増加"}},

        {group: 13, name: "フレイズ・チェイス",   effects: {extra: "状態異常のエネミーへの与ダメージが5%上昇"}},
        {group: 13, name: "フレイズ・レスポンス", effects: {extra: "通常攻撃のPP回復量が5%上昇"}},
        {group: 13, name: "フレイズ・ウィーク",   effects: {extra: "弱点属性で攻撃した時、与ダメージが2%上昇"}},
        {group: 13, name: "フレイズ・リカバリー", effects: {extra: "PPの自然回復速度が5%上昇"}},

        {group: 100, name: "テンプテーション",       effects: {extra: "レアドロップ倍率が10%増加"}},
        {group: 101, name: "アナザーヒストリー",     effects: {extra: "取得する経験値が10%増加"}},
        {group: 102, name: "フレッシュ・サイン",     effects: {extra: "Lv30に到達するまで取得する経験値が30%増加する"}},
        {group: 103, name: "フォトンコレクト",       effects: {extra: "状態異常と属性耐性の合成確率を上昇させる"}},
        {group: 104, name: "エンペエンブレイス",     effects: {extra: "新世武器強化時の経験値が90増加する"}},
        {group: 105, name: "アルティメットバスター", effects: {extra: "世壊種に与えるダメージが10%上昇"}},
    ];

    var ALL_OPTIONS_CACHE_BY_NAME = {};
    (function() {
            for (var i = 0; i < ALL_OPTIONS.length; i++) {
                ALL_OPTIONS_CACHE_BY_NAME[ALL_OPTIONS[i].name] = ALL_OPTIONS[i];
            }
    })();

    var ALL_CATEGORIES = [
        {
            name: "ソール系",
            options: ALL_OPTIONS.filter(function(option) {
                return option.group === 1;
            }),
        },
        {
            name: "ステータス上昇系",
            options: ALL_OPTIONS.filter(function(option) {
                return option.group === 8 && nKeys(option.effects) === 1;
            }),
        },
        {
            name: "ステータス上昇系(複合)",
            options: ALL_OPTIONS.filter(function(option) {
                return (option.group === 2)
                    || (option.group === 4)
                    || (option.group === 5)
                    || (option.group === 6)
                    || (option.group === 7)
                    || (option.group === 8 && nKeys(option.effects) >= 2)
                    || (option.group === 9)
                    ;
            }),
        },
        {
            name: "レジスト系",
            options: ALL_OPTIONS.filter(function(option) {
                return option.group === 10;
            }),
        },
        {
            name: "状態異常付与系",
            options: ALL_OPTIONS.filter(function(option) {
                return option.group === 11;
            }),
        },
        {
            name: "特殊能力系",
            options: ALL_OPTIONS.filter(function(option) {
                return (option.group === 12)
                    || (option.group === 13)
                    || (option.group >= 100)
                    ;
            }),
        },
        {
            name: "追加アイテム系",
            options: ALL_OPTIONS.filter(function(option) {
                return option.group === 3;
            }),
        },
    ];

    function nKeys(map) {
        return Object.keys(map).length;
    }

    function trimLevel(optionName) {
        return optionName.replace(/[ⅠⅡⅢⅣⅤ]$/, "");
    }

    function extractIndex(pathName) {
        return parseInt(pathName.replace(/^.*\./, ""));
    }

    function parseURLParams(url) {
        var params    = {};
        var rawParams = url.search.replace(/^\?/, "").split(/&/);
        for (var i = 0; i < rawParams.length; i++) {
            if (rawParams[i] !== "" && rawParams[i].match(/=/)) {
                var keyValue = rawParams[i].split(/=/);
                var key   = keyValue[0];
                var value = keyValue[1];
                params[key] = decodeURI(value);
            }
        }
        return params;
    }

    function URLParams(url) {
        this.params = parseURLParams(url);
    }
    URLParams.prototype = {
        get: function(key) {
            return this.params[key];
        },

        getOrElse: function(key, defaultValue) {
            return this.params[key] || defaultValue;
        },
    };

    function Option(optionName) {
        var original = ALL_OPTIONS_CACHE_BY_NAME[optionName];
        if (original) {
            this.group   = original.group;
            this.name    = original.name;
            this.effects = original.effects;
        } else {
            this.group   = -1;
            this.name    = "";
            this.effects = {};
        }
    }
    Option.prototype = {
        isEmpty: function() {
            return this.group === -1;
        },

        conflicts: function(anotherOption) {
            var a = this;
            var b = anotherOption;
            if (a.isEmpty() || b.isEmpty()) {
                return false;
            }
            if (a.group === b.group) {
                if (a.group === 8 || a.group === 10) {
                    if (trimLevel(a.name) === trimLevel(b.name)) {
                        return true;
                    }
                    return false;
                }
                if (a.group === 9) {
                    if (a.name.match(/^マーク/) && b.name.match(/^マーク/)) {
                        return true;
                    }
                    return false;
                }
                return true;
            }
            return false;
        }
    };

    function Category(categoryName, options) {
        this.name    = categoryName;
        this.options = options;
        this.opened  = false;
    }
    Category.prototype = {
        toggleOpeningAndClosing: function() {
            this.opened = !this.opened;
        }
    };

    function Equipment(equipmentName) {
        this.name    = name;
        this.options = [];
        for (var i = 0; i < N_OPTIONS; i++) {
            this.options[i] = new Option();
        }
    }
    Equipment.prototype = {
        nSelectedOptions: function() {
            var n = 0;
            for (var i = 0; i < N_OPTIONS; i++) {
                if (this.options[i].isEmpty()) {
                    break;
                }
                n++;
            }
            return n;
        },

        canAddOptionWithoutOverwrite: function(newOption) {
            for (var i = 0; i < N_OPTIONS; i++) {
                if (this.options[i].conflicts(newOption)) {
                    return false;
                }
            }
            return true;
        },

        indexOfNewOption: function(newOption) {
            for (var i = 0; i < N_OPTIONS; i++) {
                if (this.options[i].isEmpty()) {
                    return i;
                }
                if (this.options[i].conflicts(newOption)) {
                    return i;
                }
            }
            return -1;
        },

        addOption: function(newOption) {
            var i = this.indexOfNewOption(newOption);
            if (i !== -1) {
                this.options[i] = newOption;
            }
        },

        addOptionByName: function(newOptionName) {
            var newOption = new Option(newOptionName)
            if (!newOption.isEmpty()) {
                this.addOption(newOption);
            }
        },

        insertOption: function(newOption, requestI) {
            var n = this.nSelectedOptions();
            if (n === N_OPTIONS) {
                return 0;
            }
            if (this.canAddOptionWithoutOverwrite(newOption)) {
                if (requestI < n) {
                    for (var i = n; i > requestI; i--) {
                        this.options[i] = this.options[i-1];
                    }
                    this.options[requestI] = newOption;
                } else {
                    this.options[n] = newOption;
                }
            } else {
                var insertI = this.indexOfNewOption(newOption);
                this.options[insertI] = newOption;
            }
        },

        insertOptionByName: function(newOptionName, requestI) {
            var newOption = new Option(newOptionName);
            if (!newOption.isEmpty()) {
                this.insertOption(newOption, requestI);
            }
        },

        removeOption: function(removeI) {
            for (var i = removeI; i < N_OPTIONS-1; i++) {
                this.options[i] = this.options[i+1];
            }
            this.options[N_OPTIONS - 1] = new Option();
        },

        moveOption: function(srcI, dstI) {
            var src = this.options[srcI];
            this.removeOption(srcI);
            this.insertOption(src, dstI);
        },

        effectOn: function(key) {
            var effect = 0;
            for (var i = 0; i < this.options.length; i++) {
                if (this.options[i].effects[key]) {
                    effect += this.options[i].effects[key] || 0;
                }
            }
            return effect;
        },

        listExtraEffects: function() {
            var effects = [];
            for (var i = 0; i < this.options.length; i++) {
                if (this.options[i].effects.extra) {
                    effects.push(this.options[i].effects.extra);
                }
            }
            return effects;
        },
    };

    var firstEquipment = new Equipment("武器");
    (function() {
            var firstURL         = new URL(window.location.href);
            var firstURLParams   = new URLParams(firstURL);
            var firstOptionNames = firstURLParams.getOrElse("wpop", "").split(/,/);
            for (var i = 0; i < firstOptionNames.length; i++) {
                firstEquipment.addOptionByName(firstOptionNames[i]);
            }
    })();

    var firstCategories = [];
    (function() {
            for (var ci = 0; ci < ALL_CATEGORIES.length; ci++) {
                var name    = ALL_CATEGORIES[ci].name;
                var options = [];
                for (var oi = 0; oi < ALL_CATEGORIES[ci].options.length; oi++) {
                    options[oi] = new Option(ALL_CATEGORIES[ci].options[oi].name);
                }
                firstCategories[ci] = new Category(name, options);
            }
    })();

    var app = new Ractive({
        el: "app",
        template: "#template",
        data: {
            stats:      ALL_STATS,
            resists:    ALL_RESISTS,
            categories: firstCategories,
            equipment:  firstEquipment,

            dragOverI: -1,

            effectOn: function(key) {
                var equipment = this.get("equipment");
                var effect    = equipment.effectOn(key);
                return effect === 0 ? '' : '+'+effect;
            },

            extraEffects: function() {
                var equipment = this.get("equipment");
                return equipment.listExtraEffects();
            },
        },

        toggleCategory: function(category) {
            category.toggleOpeningAndClosing();
            this.update("categories");
        },

        addOption: function(newOption) {
            var equipment = this.get("equipment");
            equipment.addOption(newOption);
            this.update("equipment");
        },

        removeOption: function(removeI) {
            var equipment = this.get("equipment");
            equipment.removeOption(removeI);
            this.update("equipment");
        },

        queryOfCurrentOptions: function() {
            var equipment   = this.get("equipment");
            var optionNames = [];
            for (var i = 0; i < equipment.options.length; i++) {
                if (!equipment.options[i].isEmpty()) {
                    optionNames.push(equipment.options[i].name);
                }
            }
            return "?wpop="+optionNames.join(",");
        },

        urlOfCurrentOptions: function() {
            var currentURL = new URL(window.location.href);
            currentURL.search = this.queryOfCurrentOptions();
            return currentURL.toString();
        },
    });

    var dragSrcPath;
    var dragDstPath;
    app.on("dragOption", function(event) {
        switch (event.type) {
            case "dragstart":
                dragSrcPath = event.resolve();
                var option = this.get(dragSrcPath);
                if (!option.isEmpty()) {
                    event.original.dataTransfer.setData("text/plain", option.name);
                }
                break;
            case "dragover":
                dragDstPath = event.resolve();
                event.original.preventDefault();
                var dstI = extractIndex(dragDstPath);
                this.set("dragOverI", dstI);
                break;
            case "drop":
                event.original.preventDefault();
                if (dragSrcPath.match(/^equipment/)) {
                    var equipment = this.get("equipment");
                    var srcI      = extractIndex(dragSrcPath);
                    var dstI      = extractIndex(dragDstPath);
                    equipment.moveOption(srcI, dstI);
                } else {
                    var equipment = this.get("equipment");
                    var srcName   = event.original.dataTransfer.getData("text/plain");
                    var dstI      = extractIndex(dragDstPath);
                    equipment.insertOptionByName(srcName, dstI);
                }
                this.update("equipment");
                break;
            case "dragend":
                this.set("dragOverI", -1);
                break;
        }
    });
    app.on("dragOptionFromSource", function(event) {
        switch (event.type) {
            case "dragstart":
                dragSrcPath = event.resolve();
                event.original.dataTransfer.setData("text/plain", this.get(dragSrcPath).name);
                break;
            case "dragend":
                this.set("dragOverI", -1);
                break;
        }
    });

    var clipboard = new Clipboard(".clip-options-button", {
        text: function() {
            return app.urlOfCurrentOptions();
        },
    });
    clipboard.on("success", function() {
        history.replaceState("", "", app.queryOfCurrentOptions());
    });
})();
