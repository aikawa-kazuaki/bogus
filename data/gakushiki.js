// 学識の過去問・練習問題データ（hoanの構造に合わせたフラットな形式）
const gakushikiQuestions = [

    // -------------------------------------------------------------------------
    // 令和3年度 学識 問1
    // -------------------------------------------------------------------------
    {
        category: "令和3年度 学識 問1-(1)",
        question: "二重管式熱交換器を使用して、内管内の油を外管と内管の間の飽和蒸気の凝縮熱によって加熱する。内管の内径 d2 [mm] および内管平均径 dav [mm] を求めよ。また、内管平均径基準の総括伝熱係数 U の式を選択せよ。",
        questionType: "multiple-choice",
        options: [
            "1/U = dav{ (1 / (h1 * d1)) + (x / (lambda * dav)) + (1 / (h2 * d2)) }",
            "U = 1 / { (1 / h1) + (x / lambda) + (1 / h2) }",
            "1/U = (1 / h1) + (x / lambda) + (1 / h2)"
        ],
        answer: "1/U = dav{ (1 / (h1 * d1)) + (x / (lambda * dav)) + (1 / (h2 * d2)) }",
        hasDiagram: false,
        diagramImage: "",
        explanation: "内径 d2 = 60 - 2×4 = 52 mm。平均径 dav = (60+52)/2 = 56 mm。これらを内管平均径基準の総括伝熱係数の式に代入して U = 503 W/(m²·K) を得る。"
    },
    {
        category: "令和3年度 学識 問1-(2)",
        question: "算術平均温度差 ΔTav を用い、所要伝熱管長さ L を導出する関係式を選択せよ。",
        questionType: "multiple-choice",
        options: [
            "L = (Gc(T2 - T1)) / (U * pi * dav * ΔTav)",
            "L = (U * A * ΔTav) / (Gc)",
            "L = (W(i1 - i2)) / (U * pi * dav)"
        ],
        answer: "L = (Gc(T2 - T1)) / (U * pi * dav * ΔTav)",
        hasDiagram: false,
        diagramImage: "",
        explanation: "伝熱面積 A = pi * dav * L と熱量バランス Q = Gc(T2 - T1) = UA * ΔTav から、長さ L について解く。計算結果は 39.8 m。"
    },
    {
        category: "令和3年度 学識 問1-(3)",
        question: "凝縮蒸気量 W [kg/h] を求めるための熱量バランスの式を選べ。",
        questionType: "multiple-choice",
        options: [
            "Gc(T2 - T1) = W(i1 - i2)",
            "Gc(T1 - T2) = W(i2 - i1)",
            "Q = W * c * ΔTav"
        ],
        answer: "Gc(T2 - T1) = W(i1 - i2)",
        hasDiagram: false,
        diagramImage: "",
        explanation: "油が受け取った熱量と、蒸気が放出した潜熱が等しいとして W を求める。計算結果は 609 kg/h。"
    },

    // -------------------------------------------------------------------------
    // 令和3年度 学識 問2
    // -------------------------------------------------------------------------
    {
        category: "令和3年度 学識 問2-(1)",
        question: "貯水槽から遠心ポンプを用いて水を流出させる系において、レイノルズ数 Re を求める式として正しいものを選べ。",
        questionType: "multiple-choice",
        options: [
            "Re = (D * u1 * rho) / mu",
            "Re = (u1 * D * mu) / rho",
            "Re = (4 * rho * q) / (pi * D * mu)"
        ],
        answer: "Re = (D * u1 * rho) / mu",
        hasDiagram: false,
        diagramImage: "",
        explanation: "流速 u1 = 3.54 m/s を求め、レイノルズ数の定義式に代入すると 2.95 × 10^5（乱流）となる。"
    },
    {
        category: "令和3年度 学識 問2-(2)",
        question: "ファニングの式を用いた管路の全損失 F [J/kg] の式を選べ。",
        questionType: "multiple-choice",
        options: [
            "F = 4f * (l / D) * (u1^2 / 2)",
            "F = f * (l / D) * u1^2",
            "F = 2f * (l / D) * u1^2"
        ],
        answer: "F = 4f * (l / D) * (u1^2 / 2)",
        hasDiagram: false,
        diagramImage: "",
        explanation: "代入して計算すると 125.32 J/kg となる。"
    },
    {
        category: "令和3年度 学識 問2-(3)",
        question: "ベルヌーイの式から単位質量当たりの機械的仕事 w を整理した式を選べ。",
        questionType: "multiple-choice",
        options: [
            "w = (u1^2 - u2^2)/2 + g(h1 - h2) + F",
            "w = (u2^2 - u1^2)/2 + g(h2 - h1) + F",
            "w = g(h2 - h1) - F"
        ],
        answer: "w = (u1^2 - u2^2)/2 + g(h1 - h2) + F",
        hasDiagram: false,
        diagramImage: "",
        explanation: "数値を代入すると w = 53.19 J/kg。理論動力 P_w = w * q_m = 1478 W となる。"
    },

    // -------------------------------------------------------------------------
    // 令和3年度 学識 問4
    // -------------------------------------------------------------------------
    {
        category: "令和3年度 学識 問4-(1)",
        question: "両端を閉じた薄肉円筒胴に内圧が作用する場合、C-C断面（横断面）における円周応力 σ_θ の導出式として正しいものを選べ。",
        questionType: "multiple-choice",
        options: [
            "σ_θ = (D * p) / (2 * t)",
            "σ_θ = (D * p) / (4 * t)",
            "σ_θ = (2 * D * p) / t"
        ],
        answer: "σ_θ = (D * p) / (2 * t)",
        hasDiagram: false,
        diagramImage: "",
        explanation: "軸方向単位長さあたりの内圧力 Dp と、2箇所の断面に働く円周応力 2t σ_θ のつり合いから導出される。"
    },
    {
        category: "令和3年度 学識 問4-(2)",
        question: "A-A断面（縦断面）における軸応力 σ_z の導出式として正しいものを選べ。",
        questionType: "multiple-choice",
        options: [
            "σ_z = (D * p) / (4 * t)",
            "σ_z = (D * p) / (2 * t)",
            "σ_z = (D * p) / t"
        ],
        answer: "σ_z = (D * p) / (4 * t)",
        hasDiagram: false,
        diagramImage: "",
        explanation: "底面の全内圧力と、円筒胴の断面積に働く軸応力のつり合いから導出される。"
    },
    {
        category: "令和3年度 学識 問4-(3)",
        question: "フックの法則を用いた内径増加量 ΔD の公式を選べ。",
        questionType: "multiple-choice",
        options: [
            "ΔD = ((2 - ν) / (4 * E)) * ((D^2 * p) / t)",
            "ΔD = ((1 - 2ν) / (2 * E)) * ((D^2 * p) / t)",
            "ΔD = (D^2 * p) / (E * t)"
        ],
        answer: "ΔD = ((2 - ν) / (4 * E)) * ((D^2 * p) / t)",
        hasDiagram: false,
        diagramImage: "",
        explanation: "円周ひずみに求めた応力を代入して整理する。"
    },

    // -------------------------------------------------------------------------
    // 令和3年度 学識 問5
    // -------------------------------------------------------------------------
    {
        category: "令和3年度 学識 問5-(1)",
        question: "1段圧縮サイクルのp-V線図において、絶対仕事 W_12 および正味の仕事（工業仕事）W_t に相当する面積の組み合わせを選べ。",
        questionType: "multiple-choice",
        options: [
            "W_12 = (2) + (4), W_t = (1) + (2)",
            "W_12 = (1) + (3), W_t = (3) + (4)",
            "W_12 = (1) + (2), W_t = (2) + (4)"
        ],
        answer: "W_12 = (2) + (4), W_t = (1) + (2)",
        hasDiagram: false,
        diagramImage: "",
        explanation: "絶対仕事は体積変化軸までの面積、工業仕事は圧力軸までの面積に相当する。"
    },
    {
        category: "令和3年度 学識 問5-(2)",
        question: "断熱変化（γ = 1.40）において、圧力 p1=0.1 MPa から p2=0.5 MPa に圧縮したときの温度 T2 を求める式を選べ。",
        questionType: "multiple-choice",
        options: [
            "T2 = T1 * (p2 / p1)^((γ - 1) / γ)",
            "T2 = T1 * (p1 / p2)^((γ - 1) / γ)",
            "T2 = T1 * (p2 / p1)^γ"
        ],
        answer: "T2 = T1 * (p2 / p1)^((γ - 1) / γ)",
        hasDiagram: false,
        diagramImage: "",
        explanation: "数値代入により T2 = 475 K を得る。"
    },
    {
        category: "令和3年度 学識 問5-(3)",
        question: "断熱圧縮の絶対仕事 W_12 [kJ] および工業仕事 W_t [kJ] の関係式として正しいものを選べ。",
        questionType: "multiple-choice",
        options: [
            "W_t = γ * W_12",
            "W_t = (1 / γ) * W_12",
            "W_t = W_12"
        ],
        answer: "W_t = γ * W_12",
        hasDiagram: false,
        diagramImage: "",
        explanation: "断熱変化では工業仕事は絶対仕事の γ 倍になる（W_12 = 146 kJ、W_t = 204 kJ）。"
    },
    
    // =========================================================================
    // 令和4年度 学識
    // =========================================================================
    {
        category: "令和4年度 学識 問1-(1)",
        question: "並流二重管式熱交換器において、内管の外径 d0 [m] および内管の平均径 dav [m] を求めよ。さらに、総括伝熱係数 U [W/(m²·K)] (内管平均径基準) を求めよ。",
        questionType: "text",
        options: [],
        answer: "d0 = 0.060 m, dav = 0.058 m, U = 249 W/(m²·K)",
        hasDiagram: false,
        diagramImage: "",
        explanation: "内径 56 mm、肉厚 2 mm より、外径 d0 = 56 + 2×2 = 60 mm。平均径 dav = (56+60)/2 = 58 mm。各熱伝達率等を式に代入して U = 249 W/(m²·K) を得る。"
    },
    {
        category: "令和4年度 学識 問1-(2)",
        question: "夏季に冷却水入口温度が 301 Kへ上昇したとき、平均温度差一定とすれば冷却水出口温度 t1' [K] は何度に設定すればよいか。また、その場合の必要な冷却水の流量 w1 は通常の運転条件の何倍になるか。",
        questionType: "text",
        options: [],
        answer: "t1' = 307 K, 流量は2倍",
        hasDiagram: false,
        diagramImage: "",
        explanation: "算術平均温度差の式より t1' = 307 K を得る。熱量バランスから流量は通常の2倍となる。"
    },
    {
        category: "令和4年度 学識 問1-(3)",
        question: "油の流量を1.2倍、冷却水の流量を1.3倍に能力増強した場合の冷却水出口温度 t2' [K] を求めよ。また、所要伝熱管長さ L2 は通常の運転条件の所要伝熱管長さ L0 の何倍になるか。",
        questionType: "text",
        options: [],
        answer: "t2' = 309 K, 管長さは 1.19 倍",
        hasDiagram: false,
        diagramImage: "",
        explanation: "熱量バランスおよび伝熱面積の関係式 A = pi * dav * L を用いて計算すると、t2' = 309 K、長さは 1.19 倍となる。"
    },
    {
        category: "令和4年度 学識 問2",
        question: "貯槽から配管による送水において、ベルヌーイの定理を用いた圧力損失 Δp [Pa] の導出、レイノルズ数の算出、および液体を水から密度・粘度の異なる「蜂蜜」に置換した場合の圧力損失の変化を求める問題。",
        questionType: "text",
        options: [],
        answer: "問(3) Δp = 98.0 kPa, 問(5) Δph = 167 kPa",
        hasDiagram: false,
        diagramImage: "",
        explanation: "ファニングの式およびレイノルズ数 Re < 2100（層流）における摩擦係数 f = 16/Re を適用して算出する。"
    },
    {
        category: "令和4年度 学識 問3",
        question: "高温高圧の水素環境における炭素鋼の水素侵食のメカニズム、Cr・Moの働き、ネルソン図の縦軸・横軸の名称とその利用目的、および高張力鋼の溶接部に発生する低温割れの発生メカニズム・検査時期・防止策に関する論述。",
        questionType: "text",
        options: [],
        answer: "（論述問題のため解説を参照）",
        hasDiagram: false,
        diagramImage: "",
        explanation: "水素侵食は炭化物との反応によるメタン生成と粒界き裂。ネルソン図は横軸に水素分圧、縦軸に温度をとる。低温割れは拡散性水素と残留応力が原因で施工後24〜48時間で発生しやすい。"
    },
    {
        category: "令和4年度 学識 問4",
        question: "内面に圧力が作用する薄肉球形胴の圧力容器について、A-A断面における力の釣合いから接線応力（円周応力）σ_θ および最大主応力を導出し、フックの法則を用いて内径増加量 ΔD の公式を導出せよ。",
        questionType: "text",
        options: [],
        answer: "σ_θ = Dp / (4t), ΔD = ((1 - ν) / (4E)) * ((D^2 * p) / t)",
        hasDiagram: false,
        diagramImage: "",
        explanation: "投影面積と接線応力の作用面積の釣合いから応力を求め、等二軸応力状態におけるフックの法則からひずみを経て ΔD を導出する。"
    },
    {
        category: "令和4年度 学識 問5",
        question: "ヘリウムと窒素の混合ガスの状態変化と圧縮仕事に関する問題。平均モル質量、モル分率、定容比熱容量、比熱比、断熱圧縮後の温度、および1段断熱圧縮時の動力 Wt [kW] を求めよ。",
        questionType: "text",
        options: [],
        answer: "M = 0.022 kg/mol, x_He = 0.25, c_v = 0.852 kJ/(kg·K), γ = 1.44, T3 = 642 K, W_t = 210 kW",
        hasDiagram: false,
        diagramImage: "",
        explanation: "理想気体の状態方程式、分圧・分率の法則、比熱比の関係式および断熱変化の公式を用いて順次算出する。"
    },

    // =========================================================================
    // 令和5年度 学識
    // =========================================================================
    {
        category: "令和5年度 学識 問1",
        question: "向流二重管式熱交換器の能力増強に関する問題。現状の運転条件を基に、能力増強後の伝熱速度 Q2 が Q1 の何倍になるか、冷却水の出口温度 t2' [K]、および必要な伝熱面積 A2 が A1 の何倍になるかを求めよ。",
        questionType: "text",
        options: [],
        answer: "Q2/Q1 = 1.32, t2' = 318 K, A2/A1 = 1.38",
        hasDiagram: false,
        diagramImage: "",
        explanation: "熱量バランス Q = W C (T_in - T_out) および算術平均温度差を用いて各値を導出する。"
    },
    {
        category: "令和5年度 学識 問2",
        question: "長方形断面のダクト（空気送風）における相当直径 De、レイノルズ数 Re と層流・乱流の判別、摩擦損失 F、機械的仕事 w、および所要動力 P [W] を求めよ。",
        questionType: "text",
        options: [],
        answer: "De = 1.20 m, Re = 3.19×10^5 (乱流), F = 48.0 J/kg, w = 56.0 J/kg, P = 678 W",
        hasDiagram: false,
        diagramImage: "",
        explanation: "相当直径の定義式、ファニングの式、ベルヌーイの式に基づく機械的仕事の計算を行う。"
    },
    {
        category: "令和5年度 学識 問3",
        question: "シャルピー衝撃試験の目的と破面遷移温度の求め方、低合金鋼におけるアルミニウムの役割、炭素鋼・アルミニウム合金の結晶構造と低温脆性の有無、およびC量増加に伴う機械的性質の変化に関する論述・穴埋め問題。",
        questionType: "text",
        options: [],
        answer: "（論述・選択事項：炭素鋼は体心立方格子、Al合金は面心立方格子など）",
        hasDiagram: false,
        diagramImage: "",
        explanation: "シャルピー衝撃試験で靭性や低温脆性を評価する。Alは脱酸およびAlN生成による結晶粒微細化に寄与する。"
    },
    {
        category: "令和5年度 学識 問4",
        question: "両端を閉じた薄肉円筒胴の圧力容器において、円周応力 σ_θ、軸応力 σ_z、厚さ方向の垂直応力 r、および最大せん断応力 tau_max を記号 p, D, t を用いて表せ。",
        questionType: "text",
        options: [],
        answer: "σ_θ = pD/(2t), σ_z = pD/(4t), σ_r = 0, tau_max = pD/(4t)",
        hasDiagram: false,
        diagramImage: "",
        explanation: "力の釣合いから円周応力と軸応力を求め、3つの主応力から最大せん断応力を算出する。"
    },
    {
        category: "令和5年度 学識 問5",
        question: "理想気体の1段断熱圧縮および中間冷却を伴う2段断熱圧縮に関する問題。圧縮後の体積 V2、温度 T2、絶対仕事 W12、工業仕事 Wt12、および2段圧縮時の工業仕事 Wt13 を求めよ。",
        questionType: "text",
        options: [],
        answer: "V2 = 0.208 m³, T2 = 561 K, W12 = 2.19×10^5 J, Wt12 = 3.07×10^5 J, Wt13 = 2.59×10^5 J",
        hasDiagram: false,
        diagramImage: "",
        explanation: "断熱変化の式 (pV^γ = 一定、Tとpの関係式) および多段圧縮の仕事の公式を用いる。"
    },

    // =========================================================================
    // 令和6年度 学識
    // =========================================================================
    {
        category: "令和6年度 学識 問1",
        question: "向流二重管式熱交換器において内表面に油の汚れが付着した場合の問題。外径 d2、平均径 dav、汚れ付着前の総括伝熱係数 U、汚れ付着後の冷却水の出口温度 ts2、および汚れ付着後の総括伝熱係数 Us を求めよ。",
        questionType: "text",
        options: [],
        answer: "d2 = 0.050 m, dav = 0.048 m, U = 308 W/(m²·K), ts2 = 301 K, Us = 261 W/(m²·K)",
        hasDiagram: false,
        diagramImage: "",
        explanation: "熱貫流率の公式、熱量バランスに基づく温度変化、算術平均温度差を用いた比率計算により求める。"
    },
    {
        category: "令和6年度 学識 問2",
        question: "貯水槽からポンプで高低差のある貯水槽へ送水する配管系において、レイノルズ数 Re と流れの判別、摩擦損失 F、機械的仕事 w、質量流量 q_m、および所要理論動力 P_w を求めよ。",
        questionType: "text",
        options: [],
        answer: "Re = 2.00×10^5 (乱流), F = 40.0 J/kg, w = 140 J/kg, q_m = 15.7 kg/s, P_w = 2200 W",
        hasDiagram: false,
        diagramImage: "",
        explanation: "レイノルズ数の定義、ファニングの式、ベルヌーイの式（エネルギー保存則）を適用する。"
    },
    {
        category: "令和6年度 学識 問3",
        question: "高圧ガス設備の溶接施工確認試験の目的と内容、およびSUS304の粒界腐食、アルミニウム合金の高熱割れ、疲労割れの「原因・発生時期・防止策」に関する論述。",
        questionType: "text",
        options: [],
        answer: "（論述問題のため解説を参照）",
        hasDiagram: false,
        diagramImage: "",
        explanation: "溶接施工確認試験により事前に適切な施工法であることを確認する。各欠陥に応じた原因と防止策（固溶化熱処理、パルス電源の採用、ビーム整形など）を記述する。"
    },
    {
        category: "令和6年度 学識 問4",
        question: "細長い真直棒の熱応力と座屈に関する問題。両端自由時のひずみ、両端固定時のひずみと熱応力 σ の導出、および熱応力によって座屈が生じる限界の温度上昇 ΔT を求めよ。",
        questionType: "text",
        options: [],
        answer: "ε0 = αΔT, σ = -αEΔT, ΔT = 4π²I / (α L² A)",
        hasDiagram: false,
        diagramImage: "",
        explanation: "フックの法則および熱応力と座屈応力 σ_k の釣合い式から導出する。"
    },
    {
        category: "令和6年度 学識 問5",
        question: "理想気体の状態変化と圧縮仕事に関する問題。定圧・定容モル熱容量の算出、可逆断熱圧縮後の温度 T2 と仕事 W12、定圧冷却時の除熱量 Q23 と仕事 W23、および等温圧縮時の仕事 W13 を求めよ。",
        questionType: "text",
        options: [],
        answer: "Cm,p = 29.1 J/(mol·K), Cm,V = 20.8 J/(mol·K), T2 = 543 K, W12 = 1.52×10^4 J, Q23 = 2.12×10^4 J, W23 = 6.06×10^3 J, W13 = 1.55×10^4 J",
        hasDiagram: false,
        diagramImage: "",
        explanation: "比熱比と気体定数の関係式、断熱変化・定圧変化・等温変化の熱力学公式を用いる。"
    },

    // =========================================================================
    // 令和7年度 学識
    // =========================================================================
    {
        category: "令和7年度 学識 問1",
        question: "飽和蒸気の凝縮熱で油を加熱する二重管式熱交換器において、内管の厚さ x、平均径 dav、総括伝熱係数 U、平均温度差 ΔTav、所要伝熱管長さ L、および油の流量 G0 を求めよ。",
        questionType: "text",
        options: [],
        answer: "x = 0.003 m, dav = 0.047 m, U = 510 W/(m²·K), ΔTav = 100 K, L = 57.9 m, G0 = 9720 kg/h",
        hasDiagram: false,
        diagramImage: "",
        explanation: "熱貫流率の公式、熱量バランス Q = Gw(i1 - i2) = G0 c (T2 - T1)、および伝熱面積の式から順次計算する。"
    },
    {
        category: "令和7年度 学識 問2",
        question: "貯槽から孔および直円管を通じて液体を流出させる系において、ベルヌーイの定理による流速 u2 の導出、直円管接続時の管内平均流速 u3、圧力損失 Δp、およびレイノルズ数 Re による乱流判定を行え。",
        questionType: "text",
        options: [],
        answer: "u2 = √(2g(h1 - h2)), u3 = 1.00 m/s, Δp = 20.0 kPa, Re = 50000 (乱流で妥当)",
        hasDiagram: false,
        diagramImage: "",
        explanation: "連続の式とベルヌーイの定理、管摩擦損失（ファニングの式）を組み合わせて立式・計算する。"
    },
    {
        category: "令和7年度 学識 問3",
        question: "金属材料のクリープ現象の説明、クリープ曲線の描き方（各期の特徴）、および低合金鋼やフェライト系耐熱鋼におけるMo・Crの役割、焼もどし脆化・475℃脆化・シグマ相に関する論述・穴埋め問題。",
        questionType: "text",
        options: [],
        answer: "（論述・選択事項：Mo, Cr, 焼もどし脆化, 475℃脆化, シグマ相）",
        hasDiagram: false,
        diagramImage: "",
        explanation: "クリープは一定荷重下での時間経過に伴うひずみ増加。各脆化現象の発生温度範囲や合金元素の特徴を整理して答える。"
    },
    {
        category: "令和4年度型・令和7年度 学識 問4",
        question: "薄肉球形胴の圧力容器について、A-A断面の力の釣合いから接線応力 σ_θ および最大主応力を導出し、フックの法則等を用いて内径増加量 ΔD を導出せよ。",
        questionType: "text",
        options: [],
        answer: "σ_θ = Dp / (4t), ΔD = ((1 - ν) / (4E)) * ((D^2 * p) / t)",
        hasDiagram: false,
        diagramImage: "",
        explanation: "投影面積と接線応力作用面積の釣合い、および平面応力状態のフックの法則から導出する。"
    },
    {
        category: "令和7年度 学識 問5",
        question: "混合ガスまたは理想気体の状態変化に関する圧縮仕事・熱量計算問題。等温圧縮仕事 W_AB、等温変化における除熱量 Q_AB、断熱変化後の温度 TC、断熱圧縮仕事 W_AC、および等圧変化時の仕事・熱量等を求めよ。",
        questionType: "text",
        options: [],
        answer: "W_AB = 322 kJ, Q_AB = 322 kJ, TC = 514 K, W_AC = 284 kJ, W_CB = 142 kJ など",
        hasDiagram: false,
        diagramImage: "",
        explanation: "等温変化、断熱変化、等圧変化における熱力学第一法則および積分仕事の公式を用いる。"
    }
];