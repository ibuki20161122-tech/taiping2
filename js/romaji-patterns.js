/**
 * 日本語→ローマ字変換パターン
 * 複数の打ち方に対応（例: しゅ→sh/sy, ふ→hu/fu など）
 */

const RomajiPatterns = {
    // 基本のひらがな→ローマ字マッピング（複数パターン対応）
    basePatterns: {
        'あ': ['a'], 'い': ['i'], 'う': ['u'], 'え': ['e'], 'お': ['o'],
        'か': ['ka'], 'き': ['ki'], 'く': ['ku'], 'け': ['ke'], 'こ': ['ko'],
        'さ': ['sa'], 'し': ['si', 'shi'], 'す': ['su'], 'せ': ['se'], 'そ': ['so'],
        'た': ['ta'], 'ち': ['ti', 'chi'], 'つ': ['tu', 'tsu'], 'て': ['te'], 'と': ['to'],
        'な': ['na'], 'に': ['ni'], 'ぬ': ['nu'], 'ね': ['ne'], 'の': ['no'],
        'は': ['ha'], 'ひ': ['hi'], 'ふ': ['hu', 'fu'], 'へ': ['he'], 'ほ': ['ho'],
        'ま': ['ma'], 'み': ['mi'], 'む': ['mu'], 'め': ['me'], 'も': ['mo'],
        'や': ['ya'], 'ゆ': ['yu'], 'よ': ['yo'],
        'ら': ['ra'], 'り': ['ri'], 'る': ['ru'], 'れ': ['re'], 'ろ': ['ro'],
        'わ': ['wa'], 'を': ['wo'], 'ん': ['n', 'nn'],
        'が': ['ga'], 'ぎ': ['gi'], 'ぐ': ['gu'], 'げ': ['ge'], 'ご': ['go'],
        'ざ': ['za'], 'じ': ['zi', 'ji'], 'ず': ['zu'], 'ぜ': ['ze'], 'ぞ': ['zo'],
        'だ': ['da'], 'ぢ': ['di', 'ji', 'dzi'], 'づ': ['du', 'zu', 'dzu'], 'で': ['de'], 'ど': ['do'],
        'ば': ['ba'], 'び': ['bi'], 'ぶ': ['bu'], 'べ': ['be'], 'ぼ': ['bo'],
        'ぱ': ['pa'], 'ぴ': ['pi'], 'ぷ': ['pu'], 'ぺ': ['pe'], 'ぽ': ['po'],
        'ぁ': ['la', 'xa', 'a'], 'ぃ': ['li', 'xi', 'i'], 'ぅ': ['lu', 'xu', 'u'],
        'ぇ': ['le', 'xe', 'e'], 'ぉ': ['lo', 'xo', 'o'],
        'ゃ': ['lya', 'xya', 'ya'], 'ゅ': ['lyu', 'xyu', 'yu'], 'ょ': ['lyo', 'xyo', 'yo'],
        'っ': ['ltu', 'xtu', 'ltsu', 'xtsu'],
        'ゔ': ['vu'],
    },

    // 拗音パターン（小さいやゆよ）
    yoonPatterns: {
        'きゃ': ['kya'], 'きゅ': ['kyu'], 'きょ': ['kyo'],
        'しゃ': ['sya', 'sha'], 'しゅ': ['syu', 'shu'], 'しょ': ['syo', 'sho'],
        'ちゃ': ['tya', 'cha'], 'ちゅ': ['tyu', 'chu'], 'ちょ': ['tyo', 'cho'],
        'にゃ': ['nya'], 'にゅ': ['nyu'], 'にょ': ['nyo'],
        'ひゃ': ['hya'], 'ひゅ': ['hyu'], 'ひょ': ['hyo'],
        'みゃ': ['mya'], 'みゅ': ['myu'], 'みょ': ['myo'],
        'りゃ': ['rya'], 'りゅ': ['ryu'], 'りょ': ['ryo'],
        'ぎゃ': ['gya'], 'ぎゅ': ['gyu'], 'ぎょ': ['gyo'],
        'じゃ': ['zya', 'ja', 'jya'], 'じゅ': ['zyu', 'ju', 'jyu'], 'じょ': ['zyo', 'jo', 'jyo'],
        'びゃ': ['bya'], 'びゅ': ['byu'], 'びょ': ['byo'],
        'ぴゃ': ['pya'], 'ぴゅ': ['pyu'], 'ぴょ': ['pyo'],
        // イェ系
        'いぇ': ['ye', 'ile', 'ixe'],
        // ウィ・ウェ・ウォ系
        'うぃ': ['wi', 'whi', 'uxi', 'uli'],
        'うぇ': ['we', 'whe', 'uxe', 'ule'],
        'うぉ': ['wo', 'who', 'uxo', 'ulo'],
        // ヴ系
        'ゔぁ': ['va', 'vula', 'vuxa'],
        'ゔぃ': ['vi', 'vuli', 'vuxi', 'vyi'],
        'ゔぇ': ['ve', 'vule', 'vuxe', 'vye'],
        'ゔぉ': ['vo', 'vulo', 'vuxo'],
        // ティ・ディ系
        'てぃ': ['thi', 'texi', 'teli', 'tyi'],
        'でぃ': ['dhi', 'dexi', 'deli', 'dyi'],
        'でゅ': ['dhu', 'dexyu', 'delyu', 'dyu'],
        // トゥ・ドゥ系
        'とぅ': ['twu', 'toxu', 'tolu'],
        'どぅ': ['dwu', 'doxu', 'dolu'],
        // チェ・ジェ系
        'ちぇ': ['tye', 'che', 'texi', 'teli'],
        'じぇ': ['zye', 'je', 'jye', 'zeli', 'zexi'],
        // ファ系
        'ふぁ': ['fa', 'hula', 'huxa'],
        'ふぃ': ['fi', 'huli', 'huxi', 'fyi'],
        'ふぇ': ['fe', 'hule', 'huxe', 'fye'],
        'ふぉ': ['fo', 'hulo', 'huxo'],
        // ツァ・ツィ・ツェ・ツォ
        'つぁ': ['tsa', 'tula', 'tuxa'],
        'つぃ': ['tsi', 'tuli', 'tuxi'],
        'つぇ': ['tse', 'tule', 'tuxe'],
        'つぉ': ['tso', 'tulo', 'tuxo'],
        // クァ・クィ・クェ・クォ
        'くぁ': ['kwa', 'kuxa', 'kula', 'qa', 'qwa'],
        'くぃ': ['kwi', 'kuxi', 'kuli', 'qi', 'qwi'],
        'くぇ': ['kwe', 'kuxe', 'kule', 'qe', 'qwe'],
        'くぉ': ['kwo', 'kuxo', 'kulo', 'qo', 'qwo'],
        // グァ
        'ぐぁ': ['gwa', 'guxa', 'gula'],
    },

    // 促音（っ）のパターン
    sokuonPatterns: {
        'っか': ['kka', 'xka', 'lka'], 'っき': ['kki', 'xki', 'lki'],
        'っく': ['kku', 'xku', 'lku'], 'っけ': ['kke', 'xke', 'lke'],
        'っこ': ['kko', 'xko', 'lko'],
        'っさ': ['ssa', 'xsa', 'lsa'], 'っし': ['ssi', 'sshi', 'xi', 'li'],
        'っす': ['ssu', 'xsu', 'lsu'], 'っせ': ['sse', 'xse', 'lse'],
        'っそ': ['sso', 'xso', 'lso'],
        'った': ['tta', 'xta', 'lta'], 'っち': ['tti', 'cchi', 'xti', 'lti'],
        'っつ': ['ttu', 'ttsu', 'xtu', 'ltu'], 'って': ['tte', 'xte', 'lte'],
        'っと': ['tto', 'xto', 'lto'],
        'っは': ['hha', 'xha', 'lha'], 'っひ': ['hhi', 'xhi', 'lhi'],
        'っふ': ['hhu', 'ffu', 'xhu', 'lhu'], 'っへ': ['hhe', 'xhe', 'lhe'],
        'っほ': ['hho', 'xho', 'lho'],
        'っま': ['mma', 'xma', 'lma'], 'っみ': ['mmi', 'xmi', 'lmi'],
        'っむ': ['mmu', 'xmu', 'lmu'], 'っめ': ['mme', 'xme', 'lme'],
        'っも': ['mmo', 'xmo', 'lmo'],
        'っや': ['yya', 'xya', 'lya'], 'っゆ': ['yyu', 'xyu', 'lyu'],
        'っよ': ['yyo', 'xyo', 'lyo'],
        'っら': ['rra', 'xra', 'lra'], 'っり': ['rri', 'xri', 'lri'],
        'っる': ['rru', 'xru', 'lru'], 'っれ': ['rre', 'xre', 'lre'],
        'っろ': ['rro', 'xro', 'lro'],
        'っわ': ['wwa', 'xwa', 'lwa'],
        'っが': ['gga', 'xga', 'lga'], 'っぎ': ['ggi', 'xgi', 'lgi'],
        'っぐ': ['ggu', 'xgu', 'lgu'], 'っげ': ['gge', 'xge', 'lge'],
        'っご': ['ggo', 'xgo', 'lgo'],
        'っざ': ['zza', 'xza', 'lza'], 'っじ': ['zzi', 'jji', 'xzi', 'lzi'],
        'っず': ['zzu', 'xzu', 'lzu'], 'っぜ': ['zze', 'xze', 'lze'],
        'っぞ': ['zzo', 'xzo', 'lzo'],
        'っだ': ['dda', 'xda', 'lda'], 'っぢ': ['ddi', 'xdi', 'ldi'],
        'っづ': ['ddu', 'xdu', 'ldu'], 'っで': ['dde', 'xde', 'lde'],
        'っど': ['ddo', 'xdo', 'ldo'],
        'っば': ['bba', 'xba', 'lba'], 'っび': ['bbi', 'xbi', 'lbi'],
        'っぶ': ['bbu', 'xbu', 'lbu'], 'っべ': ['bbe', 'xbe', 'lbe'],
        'っぼ': ['bbo', 'xbo', 'lbo'],
        'っぱ': ['ppa', 'xpa', 'lpa'], 'っぴ': ['ppi', 'xpi', 'lpi'],
        'っぷ': ['ppu', 'xpu', 'lpu'], 'っぺ': ['ppe', 'xpe', 'lpe'],
        'っぽ': ['ppo', 'xpo', 'lpo'],
    },

    // 長音（ー）のパターン
    chouonPatterns: {
        'aー': ['aa', 'a-'], 'iー': ['ii', 'i-'], 'uー': ['uu', 'u-'],
        'eー': ['ee', 'e-'], 'oー': ['oo', 'o-'],
    },

    /**
     * ひらがな文字列をローマ字パターン配列に変換
     * @param {string} hiragana - ひらがな文字列
     * @returns {string[][]} - 各文字のローマ字パターン配列
     */
    convertToRomajiPatterns(hiragana) {
        const result = [];
        const len = hiragana.length;

        for (let i = 0; i < len; i++) {
            let matched = false;

            // 3文字パターン（拗音+促音など）をチェック
            if (i + 2 < len) {
                const triple = hiragana.substring(i, i + 3);
                // 促音+拗音のパターン（例：っしゅ）
                if (this.sokuonYoonPatterns[triple]) {
                    result.push(this.sokuonYoonPatterns[triple]);
                    i += 2;
                    matched = true;
                }
            }

            // 2文字パターンをチェック
            if (!matched && i + 1 < len) {
                const double = hiragana.substring(i, i + 2);

                // 拗音パターン
                if (this.yoonPatterns[double]) {
                    result.push(this.yoonPatterns[double]);
                    i += 1;
                    matched = true;
                }
                // 促音パターン
                else if (this.sokuonPatterns[double]) {
                    result.push(this.sokuonPatterns[double]);
                    i += 1;
                    matched = true;
                }
                // ん+母音（n'のパターン）
                else if (double === 'んあ' || double === 'んい' || double === 'んう' || double === 'んえ' || double === 'んお') {
                    result.push(["n'a", "nna", "n'i", "nni", "n'u", "nnu", "n'e", "nne", "n'o", "nno"]);
                    i += 1;
                    matched = true;
                }
            }

            // 1文字パターン
            if (!matched) {
                const char = hiragana[i];
                if (this.basePatterns[char]) {
                    result.push(this.basePatterns[char]);
                } else if (char === 'ー') {
                    // 長音は前の音に依存するので、ここではスキップ（後で処理）
                    result.push(['-']);
                } else {
                    // 不明な文字はそのまま
                    result.push([char]);
                }
            }
        }

        return result;
    },

    // 促音+拗音のパターン
    sokuonYoonPatterns: {
        'っきゃ': ['kkya'], 'っきゅ': ['kkyu'], 'っきょ': ['kkyo'],
        'っしゃ': ['ssya', 'ssha'], 'っしゅ': ['ssyu', 'sshu'], 'っしょ': ['ssyo', 'ssho'],
        'っちゃ': ['ttya', 'ccha'], 'っちゅ': ['ttyu', 'cchu'], 'っちょ': ['ttyo', 'ccho'],
        'っにゃ': ['nnya'], 'っにゅ': ['nnyu'], 'っにょ': ['nnyo'],
        'っひゃ': ['hhya'], 'っひゅ': ['hhyu'], 'っひょ': ['hhyo'],
        'っみゃ': ['mmya'], 'っみゅ': ['mmyu'], 'っみょ': ['mmyo'],
        'っりゃ': ['rrya'], 'っりゅ': ['rryu'], 'っりょ': ['rryo'],
        'っぎゃ': ['ggya'], 'っぎゅ': ['ggyu'], 'っぎょ': ['ggyo'],
        'っじゃ': ['zzya', 'jja', 'zzha'], 'っじゅ': ['zzyu', 'jju', 'zzhu'], 'っじょ': ['zzyo', 'jjo', 'zzho'],
        'っびゃ': ['bbya'], 'っびゅ': ['bbyu'], 'っびょ': ['bbyo'],
        'っぴゃ': ['ppya'], 'っぴゅ': ['ppyu'], 'っぴょ': ['ppyo'],
    },

    /**
     * 入力されたローマ字が正しいかチェック
     * @param {string} input - ユーザー入力
     * @param {string[][]} patterns - 正解パターン配列
     * @returns {object} - チェック結果
     */
    checkInput(input, patterns) {
        // パターンをフラット化してすべての可能な正解文字列を生成
        const validStrings = this.generateValidStrings(patterns);

        // 入力がどの正解文字列のプレフィックスとして有効かチェック
        let isValidPrefix = false;
        let isComplete = false;
        let matchedPattern = null;

        for (const valid of validStrings) {
            if (valid === input) {
                isComplete = true;
                matchedPattern = valid;
                break;
            }
            if (valid.startsWith(input)) {
                isValidPrefix = true;
            }
        }

        return {
            isValid: isValidPrefix || isComplete,
            isComplete: isComplete,
            matchedPattern: matchedPattern
        };
    },

    /**
     * すべての有効なローマ字文字列を生成
     * @param {string[][]} patterns
     * @returns {string[]}
     */
    generateValidStrings(patterns) {
        if (patterns.length === 0) return [''];

        let results = [''];

        for (const patternGroup of patterns) {
            const newResults = [];
            for (const result of results) {
                for (const pattern of patternGroup) {
                    newResults.push(result + pattern);
                }
            }
            results = newResults;
        }

        return results;
    },

    /**
     * 入力の現在位置までの正誤を判定
     * @param {string} input - ユーザー入力
     * @param {string[][]} patterns - 正解パターン配列
     * @returns {object} - 各文字の正誤状態
     */
    getCharStatus(input, patterns) {
        const validStrings = this.generateValidStrings(patterns);
        const status = [];

        for (let i = 0; i < input.length; i++) {
            const prefix = input.substring(0, i + 1);
            let isValid = false;

            for (const valid of validStrings) {
                if (valid.startsWith(prefix)) {
                    isValid = true;
                    break;
                }
            }

            status.push({
                char: input[i],
                isValid: isValid
            });
        }

        return status;
    },

    /**
     * ひらがなを表示用のローマ字ヒントに変換
     * @param {string} hiragana
     * @returns {string} - 主要なローマ字表記
     */
    getRomajiHint(hiragana) {
        const patterns = this.convertToRomajiPatterns(hiragana);
        // 各パターングループの最初のパターンを使用
        return patterns.map(p => p[0]).join('');
    },

    /**
     * すべての可能なローマ字表記を取得
     * @param {string} hiragana
     * @returns {string[]}
     */
    getAllRomajiVariations(hiragana) {
        const patterns = this.convertToRomajiPatterns(hiragana);
        return this.generateValidStrings(patterns);
    }
};

// グローバルに公開
if (typeof window !== 'undefined') {
    window.RomajiPatterns = RomajiPatterns;
}
