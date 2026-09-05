const hohreiQuestions = [
    // --- 問1 ---
    {
        id: 1,
        category: "令和7年度 法令 問1-イ",
        question: "高圧ガス保安法は、高圧ガスによる災害を防止し、公共の安全を確保する目的のために、高圧ガスの容器の製造及び取扱についても規制している。",
        isTrue: true,
        hasFacility: false,
        facilityId: null,
        explanation: "法第1条に法の目的が規定されており、高圧ガスの容器の製造及び取扱についても含まれているので正しい。"
    },
    {
        id: 2,
        category: "令和7年度 法令 問1-ロ",
        question: "常用の温度25度において圧力が0.2メガパスカル未満である圧縮アセチレンガスであっても、温度35度において圧力が0.2メガパスカルとなるものは高圧ガスである。",
        isTrue: false,
        hasFacility: false,
        facilityId: null,
        explanation: "温度15度において0.2メガパスカル以上となるか、常用の温度で0.2メガパスカル以上かつ現にその圧力以上であることが要件であり、設問の場合は該当せず高圧ガスとはならない。"
    },
    {
        id: 3,
        category: "令和7年度 法令 問1-ハ",
        question: "圧力が0.2メガパスカルとなる場合の温度が35度以下である液化ガスは、現在の圧力が0.1メガパスカルであっても、高圧ガスである。",
        isTrue: true,
        hasFacility: false,
        facilityId: null,
        explanation: "法第2条第3号後段の規定により、この液化ガスは高圧ガスとなるので正しい。"
    },

    // --- 問2 ---
    {
        id: 4,
        category: "令和7年度 法令 問2-イ",
        question: "空気分離装置に用いられているものを除く内における圧縮空気であって、温度35度において圧力が5メガパスカル以下のものは、高圧ガス保安法の適用が除外される。",
        isTrue: true,
        hasFacility: false,
        facilityId: null,
        explanation: "法第3条第1項第9号および令第2条第5項第1号の規定により、適用が除外される正しい記述です。"
    },
    {
        id: 5,
        category: "令和7年度 法令 問2-ロ",
        question: "オートクレーブ内における高圧ガスのうち、水素、アセチレン及び塩化ビニルは、高圧ガス保安法の適用が除外される。",
        isTrue: false,
        hasFacility: false,
        facilityId: null,
        explanation: "令第2条第5項第6号の規定により、これらのガスは法の適用が除外されないので誤り。"
    },
    {
        id: 6,
        category: "令和7年度 法令 問2-ハ",
        question: "内容積が1デシリットル以下の容器に充填されている全ての高圧ガスは、高圧ガス保安法の適用が除外される。",
        isTrue: false,
        hasFacility: false,
        facilityId: null,
        explanation: "法第3条第2項により容器検査や充填等の一部規制は適用除外されるが、充填されている全ての高圧ガス自体が適用除外されるわけではない。"
    },

    // --- 問3 ---
    {
        id: 7,
        category: "令和7年度 法令 問3-イ",
        question: "「認定保安検査実施者」とは、自ら特定施設の保安検査を行うことができる者として、その事業所の所在地を管轄する都道府県知事等の認定を受けた者である。",
        isTrue: false,
        hasFacility: false,
        facilityId: null,
        explanation: "法第35条第1項第2号により、認定保安検査実施者の認定者は「経済産業大臣」であるため誤り。"
    },
    {
        id: 8,
        category: "令和7年度 法令 問3-ロ",
        question: "第一種製造者の合併によりその地位を承継した者は、遅滞なく、その事実を証する書面を添えて、その旨を都道府県知事等に届け出なければならない。",
        isTrue: true,
        hasFacility: false,
        facilityId: null,
        explanation: "法第10条第2項の規定により正しい。"
    },
    {
        id: 9,
        category: "令和7年度 法令 問3-ハ",
        question: "第一種製造者は、高圧ガスの製造を廃止しようとするときには、都道府県知事等の許可を受けなければならない。",
        isTrue: false,
        hasFacility: false,
        facilityId: null,
        explanation: "法第21条第1項により、製造を「廃止したとき」に遅滞なく届け出るものであり、事前の許可は不要であるため誤り。"
    },

    // --- 問4 ---
    {
        id: 10,
        category: "令和7年度 法令 問4-イ",
        question: "内容積47リットルの容器に充填してある高圧ガスの輸入をした者は、輸入した高圧ガスのみについて、都道府県知事等が行う輸入検査を受けなければならない。",
        isTrue: false,
        hasFacility: false,
        facilityId: null,
        explanation: "法第22条第1項により、高圧ガスだけでなく「その容器」についても輸入検査を受けなければならないため誤り。"
    },
    {
        id: 11,
        category: "令和7年度 法令 問4-ロ",
        question: "特定不活性ガス以外の不活性ガスは、廃棄に係る技術上の基準に従うべき高圧ガスとして定められていない。",
        isTrue: true,
        hasFacility: false,
        facilityId: null,
        explanation: "法第25条および一般則第61条の規定により正しい。"
    },
    {
        id: 12,
        category: "令和7年度 法令 問4-ハ",
        question: "第一種製造者（冷凍のため高圧ガスの製造をする者を除く。）は、高圧ガスを容器により授受した場合には、事業所ごとに所定の事項を記載した帳簿を備え、これを記載の日から2年間保存しなければならない。",
        isTrue: true,
        hasFacility: false,
        facilityId: null,
        explanation: "法第60条および関係省令の規定により正しい。"
    },

    // --- 問5 ---
    {
        id: 13,
        category: "令和7年度 法令 問5-イ",
        question: "容器が損傷を受けた場合、容器再検査を受け、これに合格し、かつ、所定の刻印又は標章の掲示がされたものでなければ高圧ガスを充填してはならない。",
        isTrue: true,
        hasFacility: false,
        facilityId: null,
        explanation: "法第48条第1項第5号の規定により正しい。"
    },
    {
        id: 14,
        category: "令和7年度 法令 問5-ロ",
        question: "容器の所有者は、容器再検査に合格しなかった容器について、所定の期間内に刻印等がされなかったときは、遅滞なくくず化等の処分をするか、外面に「使用禁止」の表示をしなければならない。",
        isTrue: false,
        hasFacility: false,
        facilityId: null,
        explanation: "法第56条第3項により、くず化等として容器に使用できないよう処分することが定められており、「使用禁止」の表示をすることは定められていないため誤り。"
    },
    {
        id: 15,
        category: "令和7年度 法令 問5-ハ",
        question: "容器（未充填）を輸入した者は、所定の容器検査に合格し刻印等があるもの等を除き、その容器を譲渡し、又は引き渡してはならない。",
        isTrue: true,
        hasFacility: false,
        facilityId: null,
        explanation: "法第44条第1項の規定により正しい。"
    },

    // --- 問6 ---
    {
        id: 16,
        category: "令和7年度 法令 問6-イ",
        question: "毒性ガスを充填する容器には、名称が刻印で示されているので、高圧ガスの名称を明示する必要はなく、性質を示す文字のみ明示することと定められている。",
        isTrue: false,
        hasFacility: false,
        facilityId: null,
        explanation: "容器則第10条第1項により、刻印事項にかかわらずガスの名称および性質を示す文字の双方を明示することが規定されているため誤り。"
    },
    {
        id: 17,
        category: "令和7年度 法令 問6-ロ",
        question: "超低温容器の容器再検査においては、気密試験を行うべき定めはあるが、断熱性能試験を行うべき定めはない。",
        isTrue: false,
        hasFacility: false,
        facilityId: null,
        explanation: "容器則第26条第2項第2号により、超低温容器の再検査項目として断熱性能試験を行うことが規定されているため誤り。"
    },
    {
        id: 18,
        category: "令和7年度 法令 問6-ハ",
        question: "容器に装置されているバルブの附属品再検査の期間は、そのバルブが装置されている容器の容器再検査の期間に関係して定められている。",
        isTrue: true,
        hasFacility: false,
        facilityId: null,
        explanation: "容器則第27条第1項の規定により正しい。"
    },

    // --- 問7 ---
    {
        id: 19,
        category: "令和7年度 法令 問7-イ",
        question: "貯蔵能力15トンの液石消費施設の減圧設備の外面から第一種保安物件に対して有すべき第一種設備距離は、その減圧設備の処理能力から算出される。",
        isTrue: false,
        hasFacility: false,
        facilityId: null,
        explanation: "液石則第2条および第53条により、接続する貯蔵設備の貯蔵能力に応じて算出されるため、処理能力から算出するのは誤り。"
    },
    {
        id: 20,
        category: "令和7年度 法令 問7-ロ",
        question: "貯蔵設備等の周囲5メートル以内においては、定められた措置を講じた場合を除き、火気の使用を禁じ、かつ、引火性又は発火性の物を置いてはならない。",
        isTrue: true,
        hasFacility: false,
        facilityId: null,
        explanation: "液石則第53条第2項第1号の規定により正しい。"
    },
    {
        id: 21,
        category: "令和7年度 法令 問7-ハ",
        question: "液化石油ガスの製造に関し1年以上の経験を有する者であれば、所定の製造保安責任者免状の交付を受けていない者を取扱主任者に選任することができる。",
        isTrue: true,
        hasFacility: false,
        facilityId: null,
        explanation: "液石則第71条第1号の規定により正しい。"
    },

    // ==========================================
    // 問8〜12（事業所の例：コンビナート）
    // ==========================================
    {
        id: 22,
        category: "令和7年度 法令 問8-イ",
        question: "この事業所において、貯蔵能力1000トンの液化プロピレンの貯槽を地盤面上に増設する場合、その貯槽の外面から保安距離以上の距離を有しなければならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r7_q8_12",
        explanation: "コンビ則第5条第1項の規定により正しい。"
    },
    {
        id: 23,
        category: "令和7年度 法令 問8-ロ",
        question: "エチレン製造施設のある保安区画内に新たに反応器を設置する場合、隣接する保安区画内の高圧ガス設備に対して有すべき距離は、その反応器の燃焼熱量の数値に応じて算定しなければならない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r7_q8_12",
        explanation: "コンビ則第5条第1項第10号イにより、この場合の有すべき距離は一律30メートル以上とされているため誤り。"
    },
    {
        id: 24,
        category: "令和7年度 法令 問8-ハ",
        question: "貯蔵能力2000トン・直径20メートルの液化ブタジエン貯槽2基を増設するとき、防火上有効な措置を講じても、これら相互間に有すべき最小の距離は10メートルである。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r7_q8_12",
        explanation: "コンビ則第5条第1項第13号の規定により正しい。"
    },
    {
        id: 25,
        category: "令和7年度 法令 問9-イ",
        question: "これらの導管は、地盤面下に埋設されている場合に限り、その見やすい箇所に高圧ガスの種類や連絡先等の標識を設けなければならない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r7_q8_12",
        explanation: "コンビ則第10条第2号により、地盤面下だけでなく地盤面上に設置する導管の場合にも標識を設けることとされているため誤り。"
    },
    {
        id: 26,
        category: "令和7年度 法令 問9-ロ",
        question: "隣接するコンビナート製造事業所との境界線から所定の距離以内にベントスタックを設置したときは書面送付が必要だが、屋外消火栓を設置したときにはその必要はない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r7_q8_12",
        explanation: "コンビ則第11条第4項により、ベントスタックおよび屋外消火栓のいずれの設置においても書面の送付が必要とされるため誤り。"
    },
    {
        id: 27,
        category: "令和7年度 法令 問9-ハ",
        question: "これらの可燃性ガスの製造施設に係る計器室を安全な構造とした場合であっても、その計器室の扉及窓は、耐火性のものとしなければならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r7_q8_12",
        explanation: "コンビ則第5条第1項第61号ロの規定により正しい。"
    },
    {
        id: 28,
        category: "令和7年度 法令 問10-イ",
        question: "保安統括者が事業所の区分に応じた所定の製造保安責任者免状の交付を受けていれば、保安技術管理者及び保安企画推進員を選任する必要はない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r7_q8_12",
        explanation: "法第27条の3第2項により、保安統括者の免状の如何にかかわらず保安企画推進員は選任しなければならないため誤り。"
    },
    {
        id: 29,
        category: "令和7年度 法令 問10-ロ",
        question: "保安係員は製造施設区分ごとに選任するのが原則だが、一体として管理される等適切な保安管理が行えるときは、2以上の施設を同一とみなして選任できる。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r7_q8_12",
        explanation: "法第27条の2第4項およびコンビ則第25条の規定により正しい。"
    },
    {
        id: 30,
        category: "令和7年度 法令 問10-ハ",
        question: "保安主任者には、乙種機械責任者免状の交付を受け、かつ、所定の高圧ガス製造に関する経験を有する者を選任することができる。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r7_q8_12",
        explanation: "法第27条の3およびコンビ則第28条第3項の規定により正しい。"
    },
    {
        id: 31,
        category: "令和7年度 法令 問11-イ",
        question: "選任した保安技術管理者の職務は、保安統括者を補佐して、高圧ガスの製造に係る保安に関する技術的な事項を管理することである。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r7_q8_12",
        explanation: "法第32条第2項の規定により正しい。"
    },
    {
        id: 32,
        category: "令和7年度 法令 問11-ロ",
        question: "特定施設について指定保安検査機関が行う保安検査を受けた場合、検査機関が知事等に報告するので、事業者は保安検査を受けた旨を届け出る必要はない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r7_q8_12",
        explanation: "法第35条第1項の但書き等により、指定保安検査機関による検査を受けた場合でも事業者はその旨を知事等に届け出なければならないため誤り。"
    },
    {
        id: 33,
        category: "令和7年度 法令 問11-ハ",
        question: "定期自主検査の検査記録に記載すべき事項には、「検査をしたガス設備」「設備ごとの検査方法・結果」「検査年月日」「監督を行った保安係員の氏名」が含まれる。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r7_q8_12",
        explanation: "コンビ則第38条第5項の規定により正しい。"
    },
    {
        id: 34,
        category: "令和7年度 法令 問12-イ",
        question: "危害予防規程を変更したときは、都道府県知事等の許可を受けなければならない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r7_q8_12",
        explanation: "法第26条第1項により危害予防規程の変更は「届出」事項であり、許可ではないため誤り。"
    },
    {
        id: 35,
        category: "令和7年度 法令 問12-ロ",
        question: "津波浸水想定区域内にある場合、警報発令時の警報伝達方法や避難場所・経路等の細目を危害予防規程に定めなければならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r7_q8_12",
        explanation: "コンビ則第22条第9項第1号の規定により正しい。"
    },
    {
        id: 36,
        category: "令和7年度 法令 問12-ハ",
        question: "保安教育計画を忠実に実行していない場合、公共の安全維持等のため必要があると認めるときは、知事から保安教育計画を忠実に実行するよう勧告されることがある。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r7_q8_12",
        explanation: "法第27条第5項の規定により正しい。"
    },

    // ==========================================
    // 問13〜20（事業所の例：一般）
    // ==========================================
    {
        id: 37,
        category: "令和7年度 法令 問13-イ",
        question: "特定変更工事以外の変更の工事を完成したときは、完成検査を受けることなく、その製造施設を使用することができる。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r7_q13_20",
        explanation: "法第20条第3項の規定により正しい。"
    },
    {
        id: 38,
        category: "令和7年度 法令 問13-ロ",
        question: "製造施設のうち、高圧ガス設備以外のガス設備の変更の工事は、軽微な変更の工事である。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r7_q13_20",
        explanation: "法第14条および一般則第15条第1項第2号の規定により正しい。"
    },
    {
        id: 39,
        category: "令和7年度 法令 問13-ハ",
        question: "耐震設計構造物に係る変更工事であって、定められた処理能力未満の施設の追加であり他の設備と接続されていないものは、完成検査を受けず使用できる。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r7_q13_20",
        explanation: "法第20条第3項および一般則第33条第2号により、耐震設計構造物に係る変更工事は完成検査が免除されないため誤り。"
    },
    {
        id: 40,
        category: "令和7年度 法令 問14-イ",
        question: "アンモニア製造設備のアンモニアが通る部分の外面から火気まで8メートル以上の距離を確保できなかったため、漏えい時に連動装置で直ちに火気を消す措置を講じた。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r7_q13_20",
        explanation: "一般則第6条第1項第3号の規定により正しい。"
    },
    {
        id: 41,
        category: "令和7年度 法令 問14-ロ",
        question: "アンモニア製造設備の高圧ガス設備は、その外面から酸素の製造設備の高圧ガス設備に対して10メートル以上の距離をとった。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r7_q13_20",
        explanation: "一般則第6条第1項第4号の規定により正しい。"
    },
    {
        id: 42,
        category: "令和7年度 法令 問14-ハ",
        question: "アンモニア・アセチレン製造施設にはガス漏えい検知警報設備を設けたが、酸素・窒素の製造施設にはその設備を設けなかった。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r7_q13_20",
        explanation: "一般則第6条第1項第31号の規定により、酸素や窒素の施設に検知警報設備の設置義務はないため正しい。"
    },
    {
        id: 43,
        category: "令和7年度 法令 問15-イ",
        question: "使用開始前の蒸発器（特定設備検査合格証の有効期間内）を1基増設する工事の完成検査においては、新たに設置した蒸発器について耐圧試験を行う必要はない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r7_q13_20",
        explanation: "一般則第6条第1項第11号但書きの規定により正しい。"
    },
    {
        id: 44,
        category: "令和7年度 法令 問15-ロ",
        question: "アンモニアやアセチレンの製造設備を設置する室はガスが滞留しない構造とすべき定めがあるが、窒素の製造設備を設置する室にはその定めはない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r7_q13_20",
        explanation: "一般則第6条第1項第9号の規定により正しい。"
    },
    {
        id: 45,
        category: "令和7年度 法令 問15-ハ",
        question: "アンモニア製造施設には停電対策の措置を講じるべき定めがあるが、窒素の製造施設にはその定めはない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r7_q13_20",
        explanation: "一般則第6条第1項第27号により、ガスの種類にかかわらず製造施設には停電等対策を講じなければならないため誤り。"
    },
    {
        id: 46,
        category: "令和7年度 法令 問16-イ",
        question: "これら全ての貯槽の周囲には、液状のガスが漏えいした場合に、その流出を防止するための措置を講じなければならないと定められている。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r7_q13_20",
        explanation: "一般則第6条第1項第7号により、窒素等の不活性ガス貯槽にはこの流出防止措置の規定がないため「全て」とするのは誤り。"
    },
    {
        id: 47,
        category: "令和7年度 法令 問16-ロ",
        question: "液化アンモニア貯槽の受入れ・送り出し配管には、貯槽直近のバルブのほか、1以上のバルブ（緊急遮断用を除く）を設けることと定められている。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r7_q13_20",
        explanation: "一般則第6条第1項第24号の規定により正しい。"
    },
    {
        id: 48,
        category: "令和7年度 法令 問16-ハ",
        question: "内容積5000リットル以上の液化酸素貯槽の配管には、送り出し又は受け入れのいずれか一方の配管に、漏えい時の速やかな遮断措置を講じなければならない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r7_q13_20",
        explanation: "一般則第6条第1項第25号により、送り出し・受け入れの両方の配管に速やかな遮断措置を講じなければならないため誤り。"
    },
    {
        id: 49,
        category: "令和7年度 法令 問17-イ",
        question: "配管の変更工事後の完成検査において気密試験を行うときは、常用の圧力以上の圧力で行わなければならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r7_q13_20",
        explanation: "一般則第6条第1項第12号の規定により正しい。"
    },
    {
        id: 50,
        category: "令和7年度 法令 問17-ロ",
        question: "適切な防消火設備を適切な箇所に設けなければならないのは、アンモニア製造施設及びアセチレン製造施設に限られる。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r7_q13_20",
        explanation: "一般則第6条第1項第39号により酸素の製造施設にも防消火設備の設置が必要であるため誤り。"
    },
    {
        id: 51,
        category: "令和7年度 法令 問17-ハ",
        question: "これらの貯槽、ポンプ、圧縮機、蒸発器及び容器置場は、全てが耐震設計構造物に該当する。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r7_q13_20",
        explanation: "一般則第6条第1項第17号により、貯槽以外の設備は耐震設計構造物に該当しないため誤り。"
    },
    {
        id: 52,
        category: "令和7年度 法令 問18-イ",
        question: "アンモニアの製造施設のうち、液化アンモニアの容器置場には、ガス漏えい時の速やかな除害措置を講じる必要はない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r7_q13_20",
        explanation: "一般則第6条第1項第37号および第42号チにより、アンモニアの容器置場にも除害措置が必要であるため誤り。"
    },
    {
        id: 53,
        category: "令和7年度 法令 問18-ロ",
        question: "製造設備に設けたバルブのうち、作業員が適切に操作できる措置を講じるべき定めがあるのは、高圧ガス設備に設けられたものに限られる。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r7_q13_20",
        explanation: "一般則第6条第1項第41号により、高圧ガス設備に限定されず適切な操作措置を講じる必要があるため誤り。"
    },
    {
        id: 54,
        category: "令和7年度 法令 問18-ハ",
        question: "容器置場の外面から保安物件に対して有すべき第一種・第二種置場距離は、その容器置場の面積に応じて算出される。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r7_q13_20",
        explanation: "一般則第2条および第6条第1項第42号ハの規定により正しい。"
    },
    {
        id: 55,
        category: "令和7年度 法令 問19-イ",
        question: "液化酸素のポンプの逃し弁に付帯して設けた止め弁は、そのポンプの運転中を除き、常に閉止しておかなければならない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r7_q13_20",
        explanation: "一般則第6条第2項第1号イにより、逃し弁の止め弁は原則として常に全開しておくこととされているため誤り。"
    },
    {
        id: 56,
        category: "令和7年度 法令 問19-ロ",
        question: "貯槽へ液化ガスを充填時、内容積の90%を超えることを自動検知し警報する措置を講じるべき定めがあるのは、液化アンモニアの貯槽のみである。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r7_q13_20",
        explanation: "一般則第6条第2項第2号イにより、毒性ガス貯槽（液化アンモニア）についてこの自動検知・警報措置が規定されているため正しい。"
    },
    {
        id: 57,
        category: "令和7年度 法令 問19-ハ",
        question: "酸素及び窒素のガス設備を開放して修理をするときも、その設備のうち開放する部分に他の部分からガスが漏えいすることを防止する措置を講じなければならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r7_q13_20",
        explanation: "一般則第6条第2項第5号二の規定により正しい。"
    },
    {
        id: 58,
        category: "令和7年度 法令 問20-イ",
        question: "液化アンモニアの容器置場の周囲2メートル以内においては、火気の使用を禁止し、かつ、引火性又は発火性の物を置いてはならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r7_q13_20",
        explanation: "一般則第6条第2項第8号二の規定により正しい。"
    },
    {
        id: 59,
        category: "令和7年度 法令 問20-ロ",
        question: "圧縮アセチレンと圧縮酸素の充填容器は区分して置く必要があるが、これらの残ガス容器はそれぞれ区分して置く必要はない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r7_q13_20",
        explanation: "一般則第6条第2項第8号ロにより、残ガス容器も含めてそれぞれ区分して置かなければならないため誤り。"
    },
    {
        id: 60,
        category: "令和7年度 法令 問20-ハ",
        question: "「容器置場には、計量器等作業に必要な物以外の物を置かないこと。」の定めは、圧縮窒素の容器置場には適用されない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r7_q13_20",
        explanation: "一般則第6条第2項第8号ハにより、ガスの種類にかかわらず適用されるため誤り。"
    },

// data/hohrei.js (令和6年度 分解済みデータ)

    // 問1
    {
        category: "令和6年度 法令 問1-イ",
        question: "高圧ガス保安法は、高圧ガスによる災害を防止して公共の安全を確保する目的のために、高圧ガスの製造、貯蔵、販売、移動その他の取扱及び消費の規制をすることを定めているが、容器の製造及び取扱を規制することは定めていない。",
        isTrue: false,
        hasDiagram: false,
        hasFacility: false,
        explanation: "法第1条に法の目的が規定されており、容器の製造及び取扱についても含まれているため誤りです。"
    },
    {
        category: "令和6年度 法令 問1-ロ",
        question: "現在の圧力が0.9メガパスカルの圧縮ガス（圧縮アセチレンガスを除く。）であって、温度35度において圧力が1メガパスカルとなるものは高圧ガスではない。",
        isTrue: false,
        hasDiagram: false,
        hasFacility: false,
        explanation: "法第2条第1号後段の規定により、温度35度において圧力が1メガパスカル以上となる圧縮ガスは高圧ガスとなるため誤りです。"
    },
    {
        category: "令和6年度 法令 問1-ハ",
        question: "温度35度において圧力が0.2メガパスカル未満である液化ガスであっても、高圧ガスとなるものがある。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: false,
        explanation: "法第2条第4号等の規定により、液化シアン化水素、液化ブロムメチル等の政令で定める液化ガス（令第1条）は高圧ガスとなるため正しいです。"
    },

    // 問2
    {
        category: "令和6年度 法令 問2-イ",
        question: "船舶から導管により陸揚げして高圧ガスの輸入をする場合は、その高圧ガスについて輸入検査を受けなくてよい。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: false,
        explanation: "法第22条第1項ただし書および同項第2号の規定により、検査を受けなくてよいとされているため正しいです。"
    },
    {
        category: "令和6年度 法令 問2-ロ",
        question: "高圧ガスが充填された容器を喪失し、又は盗まれたときは届出が必要であるが、高圧ガスが充填されていない容器の場合はその必要はない。",
        isTrue: false,
        hasDiagram: false,
        hasFacility: false,
        explanation: "法第63条第1項第2号により、充填の有無にかかわらず所有・占有する容器を喪失・盗難に遭った場合は事故届が必要であるため誤りです。"
    },
    {
        category: "令和6年度 法令 問2-ハ",
        question: "第一種製造者（冷凍のため高圧ガスの製造をする者を除く。）は、許可を受けたところに従って容積3000立方メートルの高圧ガスを貯蔵するときは、第一種貯蔵所において貯蔵しなくてよい。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: false,
        explanation: "法第16条第1項ただし書の規定により、第一種製造者が自らの製造の許可を受けたところに従って貯蔵する場合は第一種貯蔵所で貯蔵しなくてよいため正しいです。"
    },

    // 問3
    {
        category: "令和6年度 法令 問3-イ",
        question: "一つの定置式製造設備を設置して高圧ガスの製造をする者が、事業所ごとに都道府県知事等の許可を受けなければならない場合の処理能力の最小の値は、ガスの種類にかかわらず1日100立方メートルである。",
        isTrue: false,
        hasDiagram: false,
        hasFacility: false,
        explanation: "第一種ガスについては令第3条の規定により1日300立方メートル以上とされており、ガスの種類によって異なるため誤りです。"
    },
    {
        category: "令和6年度 法令 問3-ロ",
        question: "第一種製造者（冷凍用を除く。）が、その製造をした高圧ガスの販売の事業をその事業所において営むときは、その旨を都道府県知事等に届け出る必要はない。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: false,
        explanation: "法第20条の4ただし書を受けた同条第1項の規定により、第一種製造者が自事業所で販売を営む場合の届出は不要であるため正しいです。"
    },
    {
        category: "令和6年度 法令 問3-ハ",
        question: "オートクレーブ内における高圧ガスのうち、水素、アセチレン及び塩化ビニルは、高圧ガス保安法の適用を受けない高圧ガスから除かれている。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: false,
        explanation: "法第3条第1項第9号および令第2条第5項第6号の規定により、これらは適用除外から除外（つまり法が適用される）されるため正しいです。"
    },

    // 問4
    {
        category: "令和6年度 法令 問4-イ",
        question: "特定高圧ガス消費者は、第一種製造者であっても特定高圧ガスの消費について、事業所ごとに、消費開始の20日前までに都道府県知事等に届け出なければならない。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: false,
        explanation: "法第24条の2第1項の規定により正しく、第一種製造者についての例外規定はありません。"
    },
    {
        category: "令和6年度 法令 問4-ロ",
        question: "第一種製造者は帳簿を備え高圧ガスを容器に充填した場合は保存義務があるが、高圧ガスを容器により授受した場合については帳簿へ記載すべき定めはない。",
        isTrue: false,
        hasDiagram: false,
        hasFacility: false,
        explanation: "容器により授受した場合についても帳簿への記載が義務付けられているため誤りです。"
    },
    {
        category: "令和6年度 法令 問4-ハ",
        question: "高圧ガスの製造施設が危険な状態となったときに応急の措置を講じなければならないのは、第一種製造者の製造施設及び第二種製造者の製造施設に限られる。",
        isTrue: false,
        hasDiagram: false,
        hasFacility: false,
        explanation: "法第36条第1項により、貯蔵所、販売施設、特定高圧ガス消費施設の所有者等も措置を講じなければならないため誤りです。"
    },

    // 問5
    {
        category: "令和6年度 法令 問5-イ",
        question: "内容積500リットル以下で高圧ガスが充填されていない容器を輸入した者が受ける容器検査は、都道府県知事等、高圧ガス保安協会又は指定容器検査機関が行う。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: false,
        explanation: "法第44条第1項および令第18条第2項第3号の規定により正しいです。"
    },
    {
        category: "令和6年度 法令 問5-ロ",
        question: "容器検査に合格した容器に刻印等すべき事項の一つに「最大充填質量の数値」が定められている。",
        isTrue: false,
        hasDiagram: false,
        hasFacility: false,
        explanation: "容器保安規則第8条第1項に刻印事項が規定されていますが、「最大充填質量」は含まれないため誤りです。"
    },
    {
        category: "令和6年度 法令 問5-ハ",
        question: "容器の所有者は、容器再検査に合格しなかった容器について3か月以内に所定の刻印等がされなかったときであっても、容器として使用することができる。",
        isTrue: false,
        hasDiagram: false,
        hasFacility: false,
        explanation: "法第56条第3項により、この場合は容器をくず化しなければならないため誤りです。"
    },

    // 問6
    {
        category: "令和6年度 法令 問6-イ",
        question: "「容器の気密試験圧力及びM」は、容器検査に合格した液化ガスを充填する容器に刻印をすべき事項の一つである。",
        isTrue: false,
        hasDiagram: false,
        hasFacility: false,
        explanation: "容器保安規則第8条第1項の刻印事項に該当しないため誤りです。"
    },
    {
        category: "令和6年度 法令 問6-ロ",
        question: "容器に充填することができる液化ガスの質量の計算式において、Cは超低温容器に充填する液化ガスにあっては最高温度における比重の数値に十分の九を乗じて得た数値の逆数と定められている。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: false,
        explanation: "容器保安規則第22条の規定により正しいです。"
    },
    {
        category: "令和6年度 法令 問6-ハ",
        question: "一般継目なし容器の容器再検査の期間は、刻印等において示された月の末日から起算して5年と定められている。",
        isTrue: false,
        hasDiagram: false,
        hasFacility: false,
        explanation: "正しくは「示された月の前月の末日から起算して5年」であるため誤りです。"
    },

    // 問7
    {
        category: "令和6年度 法令 問7-イ",
        question: "液化石油ガスの特定高圧ガス消費施設は、その貯蔵設備と減圧設備の間の配管の外面から保安物件に対して所定の距離を有することと定められている。",
        isTrue: false,
        hasDiagram: false,
        hasFacility: false,
        explanation: "配管の外面からではなく、減圧設備の外面から保安物件に対して所定の距離を有するとされているため誤りです。"
    },
    {
        category: "令和6年度 法令 問7-ロ",
        question: "消費施設の地盤が堅固なものであっても、貯槽の支柱（支柱のない貯槽にあッてはその底部）は、同一の基礎に緊結しなければならない。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: false,
        explanation: "液石則第53条第1項第8号の規定により正しいです。"
    },
    {
        category: "令和6年度 法令 問7-ハ",
        question: "消費設備のうち、その周囲5メートル以内において火気の使用を禁じられているのは貯蔵設備のみである。",
        isTrue: false,
        hasDiagram: false,
        hasFacility: false,
        explanation: "貯蔵設備、導管及び減圧設備並びにこれらの間の配管（貯蔵設備等）が対象であるため誤りです。"
    },

    // 問8（コンビナート事業所：r6_q8_12）
    {
        category: "令和6年度 法令 問8-イ",
        question: "製造施設は、その貯蔵設備及び処理設備の外面から、この事業所の敷地外の保安のための宿直施設に対し、所定の距離を有しなければならない。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q8_12",
        explanation: "コンビナート則第5条第1項第7号の規定により正しいです。"
    },
    {
        category: "令和6年度 法令 問8-ロ",
        question: "保安区画内の高圧設備間において有すべき距離は、燃焼熱量の数値には関係なく、一律に30メートル以上と定められている。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q8_12",
        explanation: "コンビナート則第5条第1項第10号イの規定により正しいです。"
    },
    {
        category: "令和6年度 法令 問8-ハ",
        question: "特殊反応設備に設けた内部反応監視装置は、温度、圧力等が正常な反応条件を逸脱し、又は逸脱するおそれがあるときに自動的に警報を発するものでなければならない。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q8_12",
        explanation: "コンビナート則第5条第1項第25号の規定により正しいです。"
    },

    // 問9（コンビナート事業所：r6_q8_12）
    {
        category: "令和6年度 法令 問9-イ",
        question: "特殊反応設備には、緊急時に安全に遮断するための措置として、計器室において操作できる措置又は自動的に遮断する措置を講じなければならない。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q8_12",
        explanation: "コンビナート則第5条第1項第27号の規定により正しいです。"
    },
    {
        category: "令和6年度 法令 問9-ロ",
        question: "エチレンの導管には、市街地を横断するものに限り、所定の緊急遮断装置を設けなければならない。",
        isTrue: false,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q8_12",
        explanation: "市街地のみでなく主要河川や湖沼等を横断する導管も対象であるため誤りです。"
    },
    {
        category: "令和6年度 法令 問9-ハ",
        question: "エチレンの製造施設に係る計器室が安全な位置に設置されている場合は、その計器室の扉及び窓を耐火性のものとしなくてよい。",
        isTrue: false,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q8_12",
        explanation: "安全な位置に設置されていても、コンビナート則により扉及び窓を耐火性のものにしなければならないため誤りです。"
    },

    // 問10（コンビナート事業所：r6_q8_12）
    {
        category: "令和6年度 法令 問10-イ",
        question: "免状の交付を受けていないが、事業実施を統括管理する者を保安統括者として選任し、遅滞なく都道府県知事等に届け出た。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q8_12",
        explanation: "法第27条の2第2項等の規定により正しく、保安統括者に免状の要件はありません。"
    },
    {
        category: "令和6年度 法令 問10-ロ",
        question: "選任した保安企画推進員に製造施設の設計・施工に関し、保安上の観点から助言、指導及び勧告を行わせた。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q8_12",
        explanation: "法第32条第5項等の規定により正しいです。"
    },
    {
        category: "令和6年度 法令 問10-ハ",
        question: "選任した保安主任者に保安技術管理者を補佐させ、保安係員を指揮させた。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q8_12",
        explanation: "法第32条第4項の規定により正しいです。"
    },

    // 問11（コンビナート事業所：r6_q8_12）
    {
        category: "令和6年度 法令 問11-イ",
        question: "特定施設について、定期に、都道府県知事等、高圧ガス保安協会又は指定保安検査機関のいずれかが行う保安検査を受けなければならない。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q8_12",
        explanation: "法第35条第1項の規定により正しいです。"
    },
    {
        category: "令和6年度 法令 問11-ロ",
        question: "ガス設備が製造施設に係る技術上の基準に適合しているかについて、定期に、保安のための自主検査を行わなければならない。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q8_12",
        explanation: "法第35条の2等の規定により正しいです。"
    },
    {
        category: "令和6年度 法令 問11-ハ",
        question: "選任した保安係員等には講習を受けさせなければならないが、保安技術管理者にはこの講習を受けさせる必要はない。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q8_12",
        explanation: "法第27条の2第7項等の規定により正しいです。"
    },

    // 問12（コンビナート事業所：r6_q8_12）
    {
        category: "令和6年度 法令 問12-イ",
        question: "第一種製造者は危害予防規程及び保安教育計画を定め、これらを都道府県知事等に届け出なければならない。",
        isTrue: false,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q8_12",
        explanation: "危害予防規程は届出が必要ですが、保安教育計画を都道府県知事等に届け出る規定はないため誤りです。"
    },
    {
        category: "令和6年度 法令 問12-ロ",
        question: "都道府県知事等は、公共の安全の維持等のため必要があると認めるときは、危害予防規程の変更を命じることができる。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q8_12",
        explanation: "法第26条第2項の規定により正しいです。"
    },
    {
        category: "令和6年度 法令 問12-ハ",
        question: "製造施設を新設し、又は変更する場合の安全審査に関することは、この事業所の危害予防規程に定めるべき事項ではない。",
        isTrue: false,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q8_12",
        explanation: "コンビナート則により安全審査に関することを規定しなければならないため誤りです。"
    },

    // 問13（一般製造事業所：r6_q13_20）
    {
        category: "令和6年度 法令 問13-イ",
        question: "製造施設の位置、構造又は設備の変更の工事をしようとするときは、軽微なものである場合を除き、都道府県知事等の許可を受けなければならない。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q13_20",
        explanation: "法第14条第1項の規定により正しいです。"
    },
    {
        category: "令和6年度 法令 問13-ロ",
        question: "製造施設のうち、ガス設備の変更の工事は、定められた軽微な変更の工事に該当する。",
        isTrue: false,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q13_20",
        explanation: "一般則第15条第1項第2号により、高圧ガス設備に係る変更工事は軽微な変更には該当しないため誤りです。"
    },
    {
        category: "令和6年度 法令 問13-ハ",
        question: "指定完成検査機関が行う完成検査を受け、適合していると認められた場合は、都道府県知事等が行う完成検査を受けることなく施設を使用することができる。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q13_20",
        explanation: "法第20条第3項ただし書等の規定により正しいです。"
    },

    // 問14（一般製造事業所：r6_q13_20）
    {
        category: "令和6年度 法令 問14-イ",
        question: "新たに窒素の製造施設に貯蔵能力80立方メートルの窒素ガス貯槽を設置する場合は、沈下状況を測定するための措置を講じるべき定めはない。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q13_20",
        explanation: "一般則第6条第1項第16号の規定により正しいです。"
    },
    {
        category: "令和6年度 法令 問14-ロ",
        question: "液化アンモニアの貯槽に設ける液面計には、丸形ガラス管液面計を使用することができる。",
        isTrue: false,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q13_20",
        explanation: "毒性ガスである液化アンモニアの貯槽には丸形ガラス管液面計は使用できないため誤りです。"
    },
    {
        category: "令和6年度 法令 問14-ハ",
        question: "液化アンモニアの貯槽の配管には、その貯槽の直近にバルブを設けるほか、1以上のバルブを設けることと定められている。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q13_20",
        explanation: "一般則第6条第1項第24号の規定により正しいです。"
    },

    // 問15（一般製造事業所：r6_q13_20）
    {
        category: "令和6年度 法令 問15-イ",
        question: "アセチレンの製造設備の高圧ガス設備は、酸素の製造設備の高圧設備に対し、10メートル以上の距離を有しなければならない。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q13_20",
        explanation: "一般則第6条第1項第4号の規定により正しいです。"
    },
    {
        category: "令和6年度 法令 問15-ロ",
        question: "液化アンモニアの貯槽は耐震性能を有しなければならないが、その貯槽に接続している所定の配管も、同様に耐震性能を有しなければならない。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q13_20",
        explanation: "一般則第6条第1項第17号の規定により正しいです。"
    },
    {
        category: "令和6年度 法令 問15-ハ",
        question: "火気を取り扱う施設に対し8メートル以上の距離を有しなければならないと定められているものは、酸素の製造設備以外の製造設備である。",
        isTrue: false,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q13_20",
        explanation: "酸素の製造施設にそのような規定があるわけではなく記述が不適格なため誤りです。"
    },

    // 問16（一般製造事業所：r6_q13_20）
    {
        category: "令和6年度 法令 問16-イ",
        question: "配管の変更工事後の完成検査において、耐圧試験を気体を使用して行うことができるのは、水その他の安全な液体を使用して行うことが困難であるときに限られる。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q13_20",
        explanation: "一般則第6条第1項第11号の規定により正しいです。"
    },
    {
        category: "令和6年度 法令 問16-ロ",
        question: "周囲に液状のガスの流出防止措置を講じるべき定めがあるのは、液化アンモニアの貯槽のみである。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q13_20",
        explanation: "毒性ガスかつ5トン以上の液化アンモニア貯槽に該当するため正しいです。"
    },
    {
        category: "令和6年度 法令 問16-ハ",
        question: "アンモニアの製造設備を設置する室は滞留しない構造としなければならないが、窒素の製造設備を設置する室についてはその定めはない。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q13_20",
        explanation: "一般則第6条第1項第9号の規定により正しいです。"
    },

    // 問17（一般製造事業所：r6_q13_20）
    {
        category: "令和6年度 法令 問17-イ",
        question: "アセチレンの充填場所と容器置場間に障壁を設けている場合は、火災等による容器の破裂防止措置を講じなくてよい。",
        isTrue: false,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q13_20",
        explanation: "障壁の有無にかかわらず、所定の破裂防止措置を講じなければならないため誤りです。"
    },
    {
        category: "令和6年度 法令 問17-ロ",
        question: "製造施設から漏えいするガスが滞留するおそれのある場所の漏えい検知警報設備は、アセチレン施設には必要だが酸素の製造施設には設けなくてよい。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q13_20",
        explanation: "一般則第6条第1項第31号により、酸素の製造施設には設置義務がないため正しいです。"
    },
    {
        category: "令和6年度 法令 問17-ハ",
        question: "窒素の高圧ガス設備には、圧力計の設置または安全装置の設置のいずれか一方の措置を講じればよい。",
        isTrue: false,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q13_20",
        explanation: "窒素ガスであっても両方の措置を講じなければならないため誤りです。"
    },

    // 問18（一般製造事業所：r6_q13_20）
    {
        category: "令和6年度 法令 問18-イ",
        question: "配管、管継手及びバルブの接合を溶接により行うこととされているのはアンモニアのガス設備のみである。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q13_20",
        explanation: "一般則第6条第1項第35号の規定により正しいです。"
    },
    {
        category: "令和6年度 法令 問18-ロ",
        question: "漏えいしたときに安全に除害するための措置を講じることとされているのは、アンモニアの製造設備のみである。",
        isTrue: false,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q13_20",
        explanation: "アンモニアの製造設備のほか、アンモニアの容器置場にも除害の措置を講ずることとされているため誤りです。"
    },
    {
        category: "令和6年度 法令 問18-ハ",
        question: "容器置場に障壁が設けられていない場合、容器置場の外面から第一種保安物件までの距離は、貯蔵能力から算出される距離以上でなければならない。",
        isTrue: false,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q13_20",
        explanation: "容器置場の距離は貯蔵能力ではなく容器置場の面積に対応する距離とされているため誤りです。"
    },

    // 問19（一般製造事業所：r6_q13_20）
    {
        category: "令和6年度 法令 問19-イ",
        question: "酸素の高圧ガス設備には、圧力が常用の圧力を超えた場合に直ちに常用の圧力以下に戻す安全装置を設けなければならない。",
        isTrue: false,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q13_20",
        explanation: "安全装置は「許容圧力を超えた場合」に作動するものであるため誤りです。"
    },
    {
        category: "令和6年度 法令 問19-ロ",
        question: "貯槽への液化ガスの充填は内容積の90パーセントを超えないようにし、全ての貯槽に90%超えを自動検知・警報する措置を講じなければならない。",
        isTrue: false,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q13_20",
        explanation: "自動検知・警報装置の義務は毒性ガス貯槽（アンモニア等）についてであり、全ての貯槽ではないため誤りです。"
    },
    {
        category: "令和6年度 法令 問19-ハ",
        question: "圧縮窒素の製造は、使用開始時等に異常の有無を点検するほか、1日に1回以上頻繁に作動状況について点検しなければならない。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q13_20",
        explanation: "一般則第6条第2項第4号の規定により正しいです。"
    },

    // 問20（一般製造事業所：r6_q13_20）
    {
        category: "令和6年度 法令 問20-イ",
        question: "圧縮酸素の容器置場の周囲2メートル以内において火気を使用する場合、容器と火気の間を有効に遮る措置を講じたうえで火気を使用しなければならない。",
        isTrue: true,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q13_20",
        explanation: "一般則第6条第2項第8号二の規定により正しいです。"
    },
    {
        category: "令和6年度 法令 問20-ロ",
        question: "圧縮アセチレンの充填容器等は区分して置く必要があるが、圧縮窒素の充填容器及び残ガス容器は区分して置く必要はない。",
        isTrue: false,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q13_20",
        explanation: "ガスの種類に関係なく、容器置場には充填容器と残ガス容器を区分して置かなければならないため誤りです。"
    },
    {
        category: "令和6年度 法令 問20-ハ",
        question: "圧縮酸素の充填容器はその温度を常に40度以下に保つべき定めがあるが、その残ガス容器についてはその定めはない。",
        isTrue: false,
        hasDiagram: false,
        hasFacility: true,
        facilityId: "r6_q13_20",
        explanation: "残ガス容器であってもその温度を常に40度以下に保つこととされているため誤りです。"
    },

// data/hohrei_r5.js
    // --- 問1 ---
    {
        category: "令和5年度 法令 問1-イ",
        question: "高圧ガス保安法は、高圧ガスによる災害を防止し、公共の安全を確保する目的のために、高圧ガスの容器の製造及び取扱についても規制している。",
        isTrue: true,
        hasFacility: false,
        explanation: "法第1条の規定により正しいため○です[span_3](start_span)[span_3](end_span)。"
    },
    {
        category: "令和5年度 法令 問1-ロ",
        question: "温度35度以下で圧力が0.2メガパスカルとなる液化ガスは、高圧ガスである。",
        isTrue: true,
        hasFacility: false,
        explanation: "法第2条第3号後段の規定により正しいため○です[span_4](start_span)[span_4](end_span)。"
    },
    {
        category: "令和5年度 法令 問1-ハ",
        question: "常用の温度40度において圧力が1メガパスカルとなる圧縮ガス（圧縮アセチレンガスを除く。）であって、現在の圧力が0.9メガパスカルのものは高圧ガスではない。",
        isTrue: true,
        hasFacility: false,
        explanation: "法第2条第1号前段・後段の規定により、現在の圧力が1メガパスカル未満であり、温度35度においては1メガパスカル未満となるため高圧ガスに該当せず正しいです[span_5](start_span)[span_5](end_span)。"
    },

    // --- 問2 ---
    {
        category: "令和5年度 法令 問2-イ",
        question: "内容積47リットルの容器に充填してある高圧ガスの輸入をした者は、輸入した高圧ガスのみについて、都道府県知事等が行う輸入検査を受けなければならない。",
        isTrue: false,
        hasFacility: false,
        explanation: "法第22条第1項の規定により、輸入した高圧ガス及びその容器の両方について輸入検査を受けなければならないため誤りです[span_6](start_span)[span_6](end_span)。"
    },
    {
        category: "令和5年度 法令 問2-ロ",
        question: "第一種製造者、第二種製造者又は販売業者以外の者であっても、高圧ガスを取り扱う者は、その所有し、又は占有する高圧ガスについて災害が発生したときは、遅滞なく、その旨を都道府県知事等又は警察官に届け出なければならない。",
        isTrue: true,
        hasFacility: false,
        explanation: "法第63条第1項第1号の規定により正しいため○です[span_7](start_span)[span_7](end_span)。"
    },
    {
        category: "令和5年度 法令 問2-ハ",
        question: "貯蔵設備を設置せず、他の事業所から導管により圧縮水素を受け入れて、そのガスを消費する者は、特定高圧ガス消費者である。",
        isTrue: true,
        hasFacility: false,
        explanation: "法第24条の2第1項及び令第7条の規定により正しいため○です[span_8](start_span)[span_8](end_span)。"
    },

    // --- 問3 ---
    {
        category: "令和5年度 法令 問3-イ",
        question: "処理することができるガスの容積が1日300立方メートル以上である一つの設備を使用して第一種ガスである高圧ガスの製造をしようとする者は、事業所ごとに、都道府県知事等の許可を受けなければならない。",
        isTrue: true,
        hasFacility: false,
        explanation: "法第5条第1項本文及び第1号、令第3条の規定により正しいため○です[span_9](start_span)[span_9](end_span)。"
    },
    {
        category: "令和5年度 法令 問3-ロ",
        question: "内容積が1デシリットル以下の容器に充填されている高圧ガスは、いかなる場合であっても、高圧ガス保安法の適用を受けない。",
        isTrue: false,
        hasFacility: false,
        explanation: "法第3条第2項により一部の条項が適用除外されるのみであり、すべてではないため誤りです[span_10](start_span)[span_10](end_span)。"
    },
    {
        category: "令和5年度 法令 問3-ハ",
        question: "高圧ガスの販売の事業を営もうとする者は、その販売所ごとに、事業の開始後遅滞なく、その旨を都道府県知事等に届け出なければならない。",
        isTrue: false,
        hasFacility: false,
        explanation: "法第20条の4の規定により、事業開始の日の20日前までに届け出なければならないため誤りです[span_11](start_span)[span_11](end_span)。"
    },

    // --- 問4 ---
    {
        category: "令和5年度 法令 問4-イ",
        question: "貯蔵しようとするガスの容積が1200立方メートルである第一種ガス及び600立方メートルである第二種ガスを併せて貯蔵する場合は、第一種貯蔵所において貯蔵しなければならない。",
        isTrue: true,
        hasFacility: false,
        explanation: "一般則第103条の計算式に基づき算定すると基準値（1800m³）と同量となり、第一種貯蔵所での貯蔵が必要なため正しいです[span_12](start_span)[span_12](end_span)。"
    },
    {
        category: "令和5年度 法令 問4-ロ",
        question: "第一種ガスについて600立方メートル貯蔵する場合は、第一種貯蔵所において貯蔵しなければならない。",
        isTrue: false,
        hasFacility: false,
        explanation: "第一種ガスは3000立方メートル以上の場合に第一種貯蔵所が必要であり、600立方メートルでは達しないため誤りです[span_13](start_span)[span_13](end_span)。"
    },
    {
        category: "令和5年度 法令 問4-ハ",
        question: "第二種ガスについて900立方メートル貯蔵する場合は、第一種貯蔵所において貯蔵しなければならない。",
        isTrue: false,
        hasFacility: false,
        explanation: "第二種ガスは1000立方メートル以上の場合に第一種貯蔵所が必要であり、900立方メートルでは達しないため誤りです[span_14](start_span)[span_14](end_span)。"
    },

    // --- 問5 ---
    {
        category: "令和5年度 法令 問5-イ",
        question: "容器の製造をした者は、その容器に自主検査刻印等をしたもの又は所定の容器検査に合格したものでなければ、その容器を譲渡してはならない。",
        isTrue: true,
        hasFacility: false,
        explanation: "法第44条第1項の規定により正しいため○です[span_15](start_span)[span_15](end_span)。"
    },
    {
        category: "令和5年度 法令 問5-ロ",
        question: "圧縮ガスを容器に充填する場合、その圧力は、容器に刻印等又は自主検査刻印等において示されている圧力以下でなければならない。",
        isTrue: true,
        hasFacility: false,
        explanation: "法第48条第4項第1号の規定により正しいため○です[span_16](start_span)[span_16](end_span)。"
    },
    {
        category: "令和5年度 法令 問5-ハ",
        question: "容器の廃棄をする者は容器をくず化しなければならないが、容器の附属品の廃棄については同様の定めはない。",
        isTrue: false,
        hasFacility: false,
        explanation: "法第56条第5項により、容器の附属品についてもくず化等の処分が義務付けられているため誤りです[span_17](start_span)[span_17](end_span)。"
    },

    // --- 問6 ---
    {
        category: "令和5年度 法令 問6-イ",
        question: "容器検査に合格した液化ガス用容器に刻印等をすべき事項の一つに「最大充填質量の数値」が定められている。",
        isTrue: false,
        hasFacility: false,
        explanation: "容器保安規則第8条第1項の刻印事項に最大充填質量は規定されていないため誤りです[span_18](start_span)[span_18](end_span)。"
    },
    {
        category: "令和5年度 法令 問6-ロ",
        question: "液化炭酸ガスを一般継目なし容器（低温容器を除く。）に充填するときは、式 G = 0.9wV により計算する方法によることと定められている。",
        isTrue: false,
        hasFacility: false,
        explanation: "当該式は低温容器に充填する場合のものであり、一般継目なし容器（低温容器除く）の場合は異なるため誤りです[span_19](start_span)[span_19](end_span)。"
    },
    {
        category: "令和5年度 法令 問6-ハ",
        question: "一般継目なし容器の容器再検査の期間は、容器の製造後の経過年数に関係なく一律に定められている。",
        isTrue: true,
        hasFacility: false,
        explanation: "容器保安規則第24条第1項第3号により、一般継目なし容器の再検査期間は一律5年と定められており正しいです[span_20](start_span)[span_20](end_span)。"
    },

    // --- 問7 ---
    {
        category: "令和5年度 法令 問7-イ",
        question: "液化石油ガスの特定高圧ガス消費施設の減圧設備を地盤面下に埋設することにより、第一種設備距離を減じることができる。",
        isTrue: false,
        hasFacility: false,
        explanation: "液石則第53条第1項第2号において、減圧設備を地盤面下に埋設した場合の距離緩和の規定はないため誤りです[span_21](start_span)[span_21](end_span)。"
    },
    {
        category: "令和5年度 法令 問7-ロ",
        question: "特定高圧ガス消費者は、丙種化学責任者免状の交付を受けている者をこの事業所の取扱主任者に選任することができる。",
        isTrue: true,
        hasFacility: false,
        explanation: "法第28条第2項及び液石則第71条第3号の規定により正しいため○です[span_22](start_span)[span_22](end_span)。"
    },
    {
        category: "令和5年度 法令 問7-ハ",
        question: "特定高圧ガス消費者は、取扱主任者を選任又は解任したとき、その旨を都道府県知事等に届け出なくてよい。",
        isTrue: false,
        hasFacility: false,
        explanation: "法第28条第2項・第3項により都道府県知事等への届出が必要であるため誤りです[span_23](start_span)[span_23](end_span)。"
    },

    // --- 問8（事業所データ連動：コンビ） ---
    {
        category: "令和5年度 法令 問8-イ",
        question: "保安用不活性ガスの高圧ガス製造施設を新たに設置する場合、その処理設備又は貯蔵設備の外面から保安物件に対して有すべき距離は、定められていない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r5_q8_12",
        explanation: "コンビナート則第5条第1項第5号・第6号に保安物件までの距離が規定されているため誤りです[span_24](start_span)[span_24](end_span)。"
    },
    {
        category: "令和5年度 法令 問8-ロ",
        question: "事業所の敷地のうち通路、空地等により区画されている区域であって高圧ガス設備が設置されているものは、所定の面積以下の保安区画に区分しなければならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r5_q8_12",
        explanation: "コンビナート則第5条第1項第9号の規定により正しいため○です[span_25](start_span)[span_25](end_span)。"
    },
    {
        category: "令和5年度 法令 問8-ハ",
        question: "所定の燃焼熱量の数値以上の貯蔵能力を有する液化エチレンの貯槽を設置する場合、その外面から貯槽以外の所定の高圧ガス設備等に対し、30メートル以上の距離を有しなければならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r5_q8_12",
        explanation: "コンビナート則第5条第1項第12号の規定により正しいため○です[span_26](start_span)[span_26](end_span)。"
    },

    // --- 問9（事業所データ連動） ---
    {
        category: "令和5年度 法令 問9-イ",
        question: "特殊反応設備に設けた自動的に警報を発することができる内部反応監視装置のうち、異常な温度等の発生を最も早期に検知できるものは、計測結果を自動的に記録することができるものでなければならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r5_q8_12",
        explanation: "コンビナート則第5条第1項第25号の規定により正しいため○です[span_27](start_span)[span_27](end_span)。"
    },
    {
        category: "令和5年度 法令 問9-ロ",
        question: "液化エチレンの球形貯槽を増設するとき、防火上の措置を講じた場合、他の隣接する可燃性ガスの貯槽に対して有すべき距離は一律に1メートル以上と定められている。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r5_q8_12",
        explanation: "1メートルまたは最大直径の和の4分の1のいずれか大なるものとされているため一律1メートルではなく誤りです[span_28](start_span)[span_28](end_span)。"
    },
    {
        category: "令和5年度 法令 問9-ハ",
        question: "エチレンの導管には、主要河川を横断するものに限り、所定の緊急遮断装置を設けなければならない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r5_q8_12",
        explanation: "市街地や湖沼等を横断する導管も対象であるため「主要河川を横断するものに限り」は誤りです[span_29](start_span)[span_29](end_span)。"
    },

    // --- 問10（事業所データ連動） ---
    {
        category: "令和5年度 法令 問10-イ",
        question: "所定の製造保安責任者免状の交付を受けている者を保安統括者に選任している場合は、保安企画推進員を選任しなくてよい。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r5_q8_12",
        explanation: "法第27条の3第2項により、保安統括者の要件にかかわらず保安企画推進員の選任が必要であるため誤りです[span_30](start_span)[span_30](end_span)。"
    },
    {
        category: "令和5年度 法令 問10-ロ",
        question: "保安主任者を選任する場合の製造保安責任者免状は、甲種化学責任者免状又は甲種機械責任者免状に限られる。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r5_q8_12",
        explanation: "免状の種類が甲種化学・機械に限定されているわけではないため誤りです[span_31](start_span)[span_31](end_span)。"
    },
    {
        category: "令和5年度 法令 問10-ハ",
        question: "保安技術管理者を選任した場合は都道府県知事等に届け出なければならないが、その代理者を選任した場合はその届出をしなくてよい。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r5_q8_12",
        explanation: "法第27条の2第5・6項、法第33条第3項の規定により正しいため○です[span_32](start_span)[span_32](end_span)。"
    },

    // --- 問11（事業所データ連動） ---
    {
        category: "令和5年度 法令 問11-イ",
        question: "保安技術管理者及び保安係員に所定の講習を受けさせなければならないが、保安企画推進員にはそれを受けさせなくてよい。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r5_q8_12",
        explanation: "法第27条の3第3項により保安企画推進員にも講習を受けさせる必要があるため誤りです[span_33](start_span)[span_33](end_span)。"
    },
    {
        category: "令和5年度 法令 問11-ロ",
        question: "作業標準、設備管理基準等の作成に関し、助言を行うことは、保安係員の職務の一つとして定められている。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r5_q8_12",
        explanation: "法第32条第3項及びコンビナート則第31条第5号の規定により正しいため○です[span_34](start_span)[span_34](end_span)。"
    },
    {
        category: "令和5年度 法令 問11-ハ",
        question: "ガス設備について定期自主検査を行ったときは、その検査結果を都道府県知事等に届け出なければならない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r5_q8_12",
        explanation: "法第35条の2により検査記録の作成・保存は義務付けられていますが、都道府県知事等への届出規定はないため誤りです[span_35](start_span)[span_35](end_span)。"
    },

    // --- 問12（事業所データ連動） ---
    {
        category: "令和5年度 法令 問12-イ",
        question: "従業者に対する保安教育計画を定め、都道府県知事等に届け出るとともに、その計画を忠実に実行しなければならない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r5_q8_12",
        explanation: "法第27条第1項・第3項により計画の実行は義務ですが、都道府県知事等への届出規定はないため誤りです[span_36](start_span)[span_36](end_span)。"
    },
    {
        category: "令和5年度 法令 問12-ロ",
        question: "危害予防規程に定めるべき事項の一つに、製造施設を新設し、又は変更する場合の安全審査に関することがある。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r5_q8_12",
        explanation: "コンビナート則第22条第2項第10号の規定により正しいため○です[span_37](start_span)[span_37](end_span)。"
    },
    {
        category: "令和5年度 法令 問12-ハ",
        question: "危害予防規程を守るべき者は、この事業者、その従業者及び協力会社の従業者であると定められている。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r5_q8_12",
        explanation: "法第26条第3項により、守るべき者は事業者及びその従業者とされており、協力会社の従業者は含まれないため誤りです[span_38](start_span)[span_38](end_span)。"
    },

    // --- 問13（事業所データ連動：一般則） ---
    {
        category: "令和5年度 法令 問13-イ",
        question: "製造施設の特定変更工事以外の変更の工事を完成したときは、完成検査を受けることなく、その製造施設を使用することができる。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r5_q13_20",
        explanation: "法第20条第3項の規定により正しいため○です[span_39](start_span)[span_39](end_span)。"
    },
    {
        category: "令和5年度 法令 問13-ロ",
        question: "製造施設のうち、製造施設の機能に支障を及ぼすおそれのない高圧ガス設備の撤去の工事は、軽微な変更の工事に該当する。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r5_q13_20",
        explanation: "法第14条第1項及び一般則第15条第1項第4号の規定により正しいため○です[span_40](start_span)[span_40](end_span)。"
    },
    {
        category: "令和5年度 法令 問13-ハ",
        question: "特定設備検査合格証の交付を受けた凝縮器の取替え工事として許可を受けた工事は、処理能力の変更が所定の範囲内であれば完成検査を受けずに使用できる。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r5_q13_20",
        explanation: "法第20条第3項及び一般則第33条第1号の規定により正しいため○です[span_41](start_span)[span_41](end_span)。"
    },

    // --- 問14（事業所データ連動） ---
    {
        category: "令和5年度 法令 問14-イ",
        question: "液化アンモニアの高圧ガス設備の外面から液化酸素の高圧ガス設備に対し有すべき距離は、これらの間に障壁を設けることにより減じることができる。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r5_q13_20",
        explanation: "一般則第6条第1項第4号により、高圧ガス設備間の距離は障壁による距離緩和が認められていないため誤りです[span_42](start_span)[span_42](end_span)。"
    },
    {
        category: "令和5年度 法令 問14-ロ",
        question: "液化アンモニアの貯槽の支柱は、同一の基礎に緊結しなければならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r5_q13_20",
        explanation: "一般則第6条第1項第15号の規定により正しいため○です[span_43](start_span)[span_43](end_span)。"
    },
    {
        category: "令和5年度 法令 問14-ハ",
        question: "液化アンモニアの貯槽には、圧力が許容圧力の1.5倍を超えた場合に直ちに圧力を戻す安全装置を設けなければならない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r5_q13_20",
        explanation: "安全装置は「許容圧力を超えた場合」に直ちに戻すものでなければならないため「1.5倍を超えた場合」は誤りです[span_44](start_span)[span_44](end_span)。"
    },

    // --- 問15（事業所データ連動） ---
    {
        category: "令和5年度 法令 問15-イ",
        question: "アンモニア設備の外面から製造設備外にある火気を取り扱う施設に対し8メートル以上の距離を確保できなかったため、流動防止措置を講じた。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r5_q13_20",
        explanation: "一般則第6条第1項第3号の規定により正しいため○です[span_45](start_span)[span_45](end_span)。"
    },
    {
        category: "令和5年度 法令 問15-ロ",
        question: "アンモニア、アセチレン及び酸素の製造施設には適切な防消火設備を設けたが、窒素の製造施設には設けなかった。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r5_q13_20",
        explanation: "一般則第6条第1項第39号の規定により正しいため○です[span_46](start_span)[span_46](end_span)。"
    },
    {
        category: "令和5年度 法令 問15-ハ",
        question: "アセチレンの製造施設には漏えい検知警報設備を設けたが、酸素の製造施設には設けなかった。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r5_q13_20",
        explanation: "一般則第6条第1項第31号により酸素の製造施設には設置義務がないため正しいです[span_47](start_span)[span_47](end_span)。"
    },

    // --- 問16（事業所データ連動） ---
    {
        category: "令和5年度 法令 問16-イ",
        question: "液化アンモニア貯槽の周囲には流出防止措置を講じなければならないが、液化酸素・窒素貯槽の周囲にはその措置を講じるべき定めはない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r5_q13_20",
        explanation: "毒性ガスかつ5トン以上の液化アンモニア貯槽に該当するため正しく、他の貯槽は対象外であるため正しいです[span_48](start_span)[span_48](end_span)。"
    },
    {
        category: "令和5年度 法令 問16-ロ",
        question: "アセチレン配管の取替え工事後の完成検査における耐圧試験は、水を使用するときは常用の圧力の1.25倍の圧力で行わなければならない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r5_q13_20",
        explanation: "一般則第6条第1項第11号により常用の圧力の1.5倍以上とされているため1.25倍は誤りです[span_49](start_span)[span_49](end_span)。"
    },
    {
        category: "令和5年度 法令 問16-ハ",
        question: "自動制御装置等を設置する製造施設には、ガスの種類にかかわらず停電等により機能が失われないよう措置を講じなければならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r5_q13_20",
        explanation: "一般則第6条第1項第27号の規定により正しいため○です[span_50](start_span)[span_50](end_span)。"
    },

    // --- 問17（事業所データ連動） ---
    {
        category: "令和5年度 法令 問17-イ",
        question: "これらの液化ガスの貯槽のうち、液面計を設けるべき定めがあるのは、液化アンモニアの貯槽のみである。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r5_q13_20",
        explanation: "一般則第6条第1項第22号により、液面計は液化ガスの貯槽すべてについて規定されているため誤りです[span_51](start_span)[span_51](end_span)。"
    },
    {
        category: "令和5年度 法令 問17-ロ",
        question: "これら全ての製造施設について、製造設備を設置する室はガスが滞留しない構造としなければならないと定められている。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r5_q13_20",
        explanation: "一般則第6条第1項第9号により、この措置は可燃性ガス及び特定不活性ガスについてのみ規定されているため誤りです[span_52](start_span)[span_52](end_span)。"
    },
    {
        category: "令和5年度 法令 問17-ハ",
        question: "液化アンモニアの貯槽は、周辺に可燃性物質を取り扱う設備がない場合でも、貯槽及び支柱に温度上昇防止措置を講じるべき定めがある。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r5_q13_20",
        explanation: "一般則第6条第1項第32号の規定により正しいため○です[span_53](start_span)[span_53](end_span)。"
    },

    // --- 問18（事業所データ連動） ---
    {
        category: "令和5年度 法令 問18-イ",
        question: "液化アンモニアの配管の接合はフランジ接合で代えることができるが、ねじ接合継手による接合はいかなる場合であっても認められていない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r5_q13_20",
        explanation: "一般則第6条第1項第35号によりねじ接合継手による接合も認められているため誤りです[span_54](start_span)[span_54](end_span)。"
    },
    {
        category: "令和5年度 法令 問18-ロ",
        question: "作業員がバルブ等を適切に操作することができるような措置を講じるべき定めがあるのは、製造設備のうちガス設備に設けられたバルブ等のみである。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r5_q13_20",
        explanation: "製造設備全体が対象でありガス設備に限定されていないため誤りです[span_55](start_span)[span_55](end_span)。"
    },
    {
        category: "令和5年度 法令 問18-ハ",
        question: "容器置場に障壁が設けられていない場合、容器置場の外面から第二種保安物件に対して有すべき第二種置場距離は、その容器置場の面積に応じて算出される。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r5_q13_20",
        explanation: "一般則第6条第1項第42号ハの規定により正しいため○です[span_56](start_span)[span_56](end_span)。"
    },

    // --- 問19（事業所データ連動） ---
    {
        category: "令和5年度 法令 問19-イ",
        question: "液化窒素の安全弁の止め弁は常に全開しなければならないが、ポンプの逃し弁の止め弁は運転終了後は常に閉止しておかなければならない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r5_q13_20",
        explanation: "安全弁や逃し弁の止め弁は、原則として常に全開しておかなければならないため誤りです[span_57](start_span)[span_57](end_span)。"
    },
    {
        category: "令和5年度 法令 問19-ロ",
        question: "アセチレン等の製造では頻繁な点検が必要だが、窒素の製造においては使用開始時又は使用終了時のいずれか1回の点検でよい。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r5_q13_20",
        explanation: "一般則第6条第2項第4号により、ガスの種類による点検方法の簡素化は認められていないため誤りです[span_58](start_span)[span_58](end_span)。"
    },
    {
        category: "令和5年度 法令 問19-ハ",
        question: "窒素のガス設備であっても、ガス設備を開放して修理をするときは、他の部分からガスが漏えいすることを防止するための措置を講じなければならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r5_q13_20",
        explanation: "一般則第6条第2項第5号二の規定によりガスの種類にかかわらず措置が必要であり正しいです[span_59](start_span)[span_59](end_span)。"
    },

    // --- 問20（事業所データ連動） ---
    {
        category: "令和5年度 法令 問20-イ",
        question: "液化アンモニアの容器置場及び圧縮アセチレンの容器置場には、携帯電燈以外の燈火を携えて立ち入ってはならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r5_q13_20",
        explanation: "一般則第6条第2項第8号チの規定により正しいため○です[span_60](start_span)[span_60](end_span)。"
    },
    {
        category: "令和5年度 法令 問20-ロ",
        question: "窒素は、充填容器及び残ガス容器にそれぞれ区分して容器置場に置くべき高圧ガスとして定められている。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r5_q13_20",
        explanation: "一般則第6条第2項第8号イの規定により正しいため○です[span_61](start_span)[span_61](end_span)。"
    },
    {
        category: "令和5年度 法令 問20-ハ",
        question: "容器置場に置く圧縮酸素及び圧縮窒素に係る充填容器及び残ガス容器は、常に温度40度以下に保たなければならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r5_q13_20",
        explanation: "一般則第6条第2項第8号ホの規定により残ガス容器も含めて正しいため○です[span_62](start_span)[span_62](end_span)。"
    },
// data/hohrei_r4.js
    // --- 問1 ---
    {
        category: "令和4年度 法令 問1-イ",
        question: "第一種製造者は、事業所ごとに帳簿を備え、製造施設に異常があった場合、異常があった年月日及びそれに対してとった措置をその帳簿に記載しなければならない。また、その帳簿は製造開始の日から10年間保存しなければならない。",
        isTrue: false,
        hasFacility: false,
        explanation: "帳簿の保存期間は記載の日から10年間とされており、製造開始の日からではないため誤りです[span_3](start_span)[span_3](end_span)。"
    },
    {
        category: "令和4年度 法令 問1-ロ",
        question: "第一種製造者（冷凍のため高圧ガスの製造をする者を除く。）は、その製造をした高圧ガスをその事業所において販売しようとするときは、その旨を都道府県知事等に届け出る必要はない。",
        isTrue: true,
        hasFacility: false,
        explanation: "法第20条の4ただし書及び同条第1号の規定により正しいため○です[span_4](start_span)[span_4](end_span)。"
    },
    {
        category: "令和4年度 法令 問1-ハ",
        question: "特定高圧ガス消費者は、事業所ごとに、消費開始後遅滞なく、特定高圧ガスの消費について所定の書面を添えて都道府県知事等に届け出なければならない。",
        isTrue: false,
        hasFacility: false,
        explanation: "特定高圧ガス消費者は、消費開始の日の20日前までに届け出ることとされているため誤りです[span_5](start_span)[span_5](end_span)。"
    },

    // --- 問2 ---
    {
        category: "令和4年度 法令 問2-イ",
        question: "容器に充填された高圧ガスの輸入をした者は、輸入をした高圧ガス及びその容器について、指定輸入検査機関が行う輸入検査を受け、これらが輸入検査技術基準に適合していると認められ、その旨を都道府県知事等に届け出た場合は、都道府県知事等が行う輸入検査を受けることなく、その高圧ガスを移動することができる。",
        isTrue: true,
        hasFacility: false,
        explanation: "法第22条第1項ただし書及び同項第1号の規定により正しいため○です[span_6](start_span)[span_6](end_span)。"
    },
    {
        category: "令和4年度 法令 問2-ロ",
        question: "第一種製造者（冷凍のため高圧ガスの製造をする者を除く。）は、高圧ガスの製造の許可を受けたところに従って容積3000立方メートルの高圧ガスである酸素を貯蔵するときであっても、その貯蔵は都道府県知事等の許可を受けた第一種貯蔵所においてしなければならないと定められている。",
        isTrue: false,
        hasFacility: false,
        explanation: "第一種製造者が製造の許可を受けたところに従って高圧ガスを貯蔵するときは、重ねて貯蔵の許可を受ける必要はないため誤りです[span_7](start_span)[span_7](end_span)。"
    },
    {
        category: "令和4年度 法令 問2-ハ",
        question: "第一種製造者は、その製造をする高圧ガスの種類を変更したときは、遅滞なく、その旨を都道府県知事等に届け出なければならない。",
        isTrue: false,
        hasFacility: false,
        explanation: "第一種製造者は製造をする高圧ガスの種類を変更しようとするときは、都道府県知事等の許可を受けることとされているため誤りです[span_8](start_span)[span_8](end_span)。"
    },

    // --- 問3 ---
    {
        category: "令和4年度 法令 問3-イ",
        question: "一つの定置式製造設備（指定設備を除く。）を使用して高圧ガスの製造（冷凍のためのものを除く。）をしようとする者であって、事業所ごとに、都道府県知事等の許可を受けなければならない者は、その製造をするガスの種類に関係なく、その設備の処理することができるガスの容積が1日100立方メートルを超えている場合に限られている。",
        isTrue: false,
        hasFacility: false,
        explanation: "ガスの種類によっては令第3条の規定により1日300立方メートル以上であるため誤りです[span_9](start_span)[span_9](end_span)。"
    },
    {
        category: "令和4年度 法令 問3-ロ",
        question: "第一種製造者がその事業所において指定した場所では、何人も火気を取り扱ってはならない。",
        isTrue: true,
        hasFacility: false,
        explanation: "法第37条第1項の規定により正しいため○です[span_10](start_span)[span_10](end_span)。"
    },
    {
        category: "令和4年度 法令 問3-ハ",
        question: "第一種製造者である法人について合併があり、その合併により新たに法人を設立した場合、その法人は第一種製造者の地位を承継する。",
        isTrue: true,
        hasFacility: false,
        explanation: "法第10条第1項の規定により正しいため○です[span_11](start_span)[span_11](end_span)。"
    },

    // --- 問4 ---
    {
        category: "令和4年度 法令 問4-イ",
        question: "高圧ガス保安法は、高圧ガスによる災害を防止して公共の安全を確保する目的のために、高圧ガスの製造、貯蔵、販売、移動その他の取扱及び消費の規制をすることのみを定めている。",
        isTrue: false,
        hasFacility: false,
        explanation: "民間事業者及び高圧ガス保安協会による保安に関する自主的な活動の促進なども定めているため誤りです[span_12](start_span)[span_12](end_span)。"
    },
    {
        category: "令和4年度 法令 問4-ロ",
        question: "常用の温度40度において圧力が0.2メガパスカルとなる液化ガス（特に定めるものを除く。）であって、現在の圧力が0.19メガパスカルのものは高圧ガスではない。",
        isTrue: true,
        hasFacility: false,
        explanation: "法第2条第3号前段等の規定により高圧ガスとならず正しいため○です[span_13](start_span)[span_13](end_span)。"
    },
    {
        category: "令和4年度 法令 問4-ハ",
        question: "常用の温度25度において圧力が0.2メガパスカル未満である圧縮アセチレンガスであっても、温度35度において圧力が0.2メガパスカルとなるものは高圧ガスである。",
        isTrue: false,
        hasFacility: false,
        explanation: "法第2条第2号前段・後段のいずれに照らしても高圧ガスにならないため誤りです[span_14](start_span)[span_14](end_span)。"
    },

    // --- 問5 ---
    {
        category: "令和4年度 法令 問5-イ",
        question: "容器が容器検査に合格したときは、特に定められた場合を除き、容器の厚肉の部分の見やすい箇所に、明瞭に、かつ、消えないように所定の事項が刻印される。",
        isTrue: true,
        hasFacility: false,
        explanation: "法第45条第1項及び容器規則第8条第1項の規定により正しいため○です[span_15](start_span)[span_15](end_span)。"
    },
    {
        category: "令和4年度 法令 問5-ロ",
        question: "損傷を受けた容器は、その容器の定められた容器再検査期間内において容器再検査を受ければ、所定の刻印等がされていなくても高圧ガスを充填することができる。",
        isTrue: false,
        hasFacility: false,
        explanation: "容器再検査を受けて合格し、かつその旨の刻印等がされているものでなければ充填できないため誤りです[span_16](start_span)[span_16](end_span)。"
    },
    {
        category: "令和4年度 法令 問5-ハ",
        question: "附属品を廃棄するときは、その附属品をくず化し、その他附属品として使用することができないように処分しなくてよい。",
        isTrue: false,
        hasFacility: false,
        explanation: "法第56条第5項の規定に反するため誤りです[span_17](start_span)[span_17](end_span)。"
    },

    // --- 問6 ---
    {
        category: "令和4年度 法令 問6-イ",
        question: "容器検査に合格した容器に、充填することができる高圧ガスの名称を明示すれば、その容器に充填すべき高圧ガスの種類の刻印等をする必要はない。",
        isTrue: false,
        hasFacility: false,
        explanation: "容器規則第8条第1項第3号に刻印事項として規定されているため誤りです[span_18](start_span)[span_18](end_span)。"
    },
    {
        category: "令和4年度 法令 問6-ロ",
        question: "容器に充填することができる液化塩素の質量は、式 G = (P × V) / C により計算する。",
        isTrue: false,
        hasFacility: false,
        explanation: "容器規則第22条に示されている計算式は G = V / C であるため誤りです[span_19](start_span)[span_19](end_span)。"
    },
    {
        category: "令和4年度 法令 問6-ハ",
        question: "液化アンモニアを充填するための溶接容器の容器再検査の期間は、容器の製造後の経過年数に関係して定められている。",
        isTrue: true,
        hasFacility: false,
        explanation: "容器規則第24条第1項の規定により経過年数に関係して定められており正しいため○です[span_20](start_span)[span_20](end_span)。"
    },

    // --- 問7 ---
    {
        category: "令和4年度 法令 問7-イ",
        question: "液化石油ガスの消費（特定高圧ガスの消費者としての消費に限る。）に関し1年以上の経験を有する者を取扱主任者に選任することができる。",
        isTrue: true,
        hasFacility: false,
        explanation: "液石則第71条第1号の規定により正しいため○です[span_21](start_span)[span_21](end_span)。"
    },
    {
        category: "令和4年度 法令 問7-ロ",
        question: "貯蔵設備である貯槽に適切な防消火設備を適切な箇所に設けた場合は、その貯槽の周囲5メートル以内に引火性又は発火性の物を置くことができる。",
        isTrue: false,
        hasFacility: false,
        explanation: "液石則第53条第2項第1号の規定により置くことができないため誤りです[span_22](start_span)[span_22](end_span)。"
    },
    {
        category: "令和4年度 法令 問7-ハ",
        question: "貯蔵設備の外面から第一種保安物件及び第二種保安物件に対し、それぞれ所定の距離以上の距離を有しなければならないが、減圧設備については、その定めはない。",
        isTrue: false,
        hasFacility: false,
        explanation: "減圧設備についても保安物件に対して所定の距離を有することとされているため誤りです[span_23](start_span)[span_23](end_span)。"
    },

    // --- 問8（事業所データ連動：コンビナート） ---
    {
        category: "令和4年度 法令 問8-イ",
        question: "認定を受けた特定施設について自ら保安検査を実施し、その検査の記録を都道府県知事等に届け出た後に、都道府県知事等が行うその記録による保安検査を受けなければならない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r4_q8_13",
        explanation: "法第39条の11第2項の規定により、届出をした場合には都道府県知事等が行う保安検査を受けなくてもよいため誤りです[span_24](start_span)[span_24](end_span)。"
    },
    {
        category: "令和4年度 法令 問8-ロ",
        question: "定期自主検査を行うときは、選任した保安係員に、その定期自主検査の実施について監督を行わせなければならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r4_q8_13",
        explanation: "コンビ則第38条第4項の規定により正しいため○です[span_25](start_span)[span_25](end_span)。"
    },
    {
        category: "令和4年度 法令 問8-ハ",
        question: "選任した保安主任者の定められた職務の一つに、製造施設の設計・施工に関し、保安上の観点から助言、指導及び勧告を行うことがある。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r4_q8_13",
        explanation: "当該職務は保安企画推進員の職務であり、保安主任者の職務ではないため誤りです[span_26](start_span)[span_26](end_span)。"
    },

    // --- 問9（事業所データ連動） ---
    {
        category: "令和4年度 法令 問9-イ",
        question: "この事業所の保安企画推進員には、製造保安責任者免状の交付を受けていない者であっても、高圧ガスの製造に係る保安に関する企画又は指導の業務に所定の期間従事した者を選任することができる。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r4_q8_13",
        explanation: "コンビ則第29条第4号の規定により正しいため○です[span_27](start_span)[span_27](end_span)。"
    },
    {
        category: "令和4年度 法令 問9-ロ",
        question: "この事業所には、製造施設の区分ごとに保安主任者を選任しなければならないが、この場合、その者が交付を受けている製造保安責任者免状の種類は、甲種化学責任者免状又は甲種機械責任者免状に限られている。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r4_q8_13",
        explanation: "乙種化学責任者免状又は乙種機械責任者免状の交付を受けている者も選任することができるため誤りです[span_28](start_span)[span_28](end_span)。"
    },
    {
        category: "令和4年度 法令 問9-ハ",
        question: "所定の製造保安責任者免状の交付を受けている者又は高圧ガスの製造に関する所定の経験を有している者のいずれか一方の要件を満たす者を、保安係員に選任することができる。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r4_q8_13",
        explanation: "免状の交付を受け、かつ経験を有する者でなければならず「いずれか一方」ではないため誤りです[span_29](start_span)[span_29](end_span)。"
    },

    // --- 問10（事業所データ連動） ---
    {
        category: "令和4年度 法令 問10-イ",
        question: "特殊反応設備には、緊急時に安全に、かつ、速やかに遮断するための措置を講じなければならないが、その措置は計器室において操作することができる措置又は自動的に遮断する措置でなければならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r4_q8_13",
        explanation: "コンビ則第5条第1項第27号の規定により正しいため○です[span_30](start_span)[span_30](end_span)。"
    },
    {
        category: "令和4年度 法令 問10-ロ",
        question: "エチレンの導管には、市街地を横断するものに限り、所定の緊急遮断装置又はこれと同等以上の効果のある装置を設けなければならない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r4_q8_13",
        explanation: "主要河川、湖沼等を横断する導管についても設けることとされているため誤りです[span_31](start_span)[span_31](end_span)。"
    },
    {
        category: "令和4年度 法令 問10-ハ",
        question: "エチレンの導管系に、圧力又は流量の異常な変動等の異常な事態が発生したときにその旨を警報する装置が設けられている場合であっても、その輸送を停止しようとするときにはその旨を関連事業所に連絡しなければならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r4_q8_13",
        explanation: "コンビ則第11条第3項第7号の規定により正しいため○です[span_32](start_span)[span_32](end_span)。"
    },

    // --- 問11（事業所データ連動） ---
    {
        category: "令和4年度 法令 問11-イ",
        question: "この事業所が必要とする保安用不活性ガス等の数量は、事業所内で最も大きな貯蔵能力を持つ貯槽が危険な状態になった場合に、その貯槽内のガスのパージ、シールその他の災害の発生防止のための応急の措置を講じるために必要な不活性ガス又はスチームの数量である。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r4_q8_13",
        explanation: "事業所内の全ての製造設備が危険な状態になった場合に必要な数量とされているため誤りです[span_33](start_span)[span_33](end_span)。"
    },
    {
        category: "令和4年度 法令 問11-ロ",
        question: "保安用不活性ガスの製造施設を新たに設置する場合、特に定められたものを除き、その貯蔵設備及び処理設備の外面から保安物件に対し所定の距離以上の距離を有しなければならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r4_q8_13",
        explanation: "コンビ則第5条第1項第5号の規定により正しいため○です[span_34](start_span)[span_34](end_span)。"
    },
    {
        category: "令和4年度 法令 問11-ハ",
        question: "保安用不活性ガスとして用いるための窒素の製造設備を増設する場合であっても、その高圧ガス設備を設置する場所は、所定の保安区画内としなければならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r4_q8_13",
        explanation: "コンビ則第5条第1項第9号の規定により正しいため○です[span_35](start_span)[span_35](end_span)。"
    },

    // --- 問12（事業所データ連動） ---
    {
        category: "令和4年度 法令 問12-イ",
        question: "新たな製造施設を追加する変更の工事について、自ら完成検査を行い、検査の記録を都道府県知事等に届け出た場合は、都道府県知事等、高圧ガス保安協会又は指定完成検査機関が行う完成検査を受けることなく、その製造施設を使用することができる。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r4_q8_13",
        explanation: "新たな製造施設の追加の工事は自ら検査を行うことのできる特定変更工事の対象外であるため誤りです[span_36](start_span)[span_36](end_span)。"
    },
    {
        category: "令和4年度 法令 問12-ロ",
        question: "製造施設の位置、構造又は設備の変更の工事について、都道府県知事等の許可を受けた場合であっても、都道府県知事等、高圧ガス保安協会又は指定完成検査機関が行う完成検査を受けることなく、若しくは自ら完成検査を行うことなくその製造施設を使用することができる変更の工事がある。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r4_q8_13",
        explanation: "コンビ則第17条により完成検査を要しない変更の工事があるため正しいため○です[span_37](start_span)[span_37](end_span)。"
    },
    {
        category: "令和4年度 法令 問12-ハ",
        question: "製造施設の高圧ガス設備以外のガス設備の変更の工事は、軽微な変更の工事に該当する。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r4_q8_13",
        explanation: "コンビ則第14条第1項第2号により軽微な変更の工事に該当し正しいため○です[span_38](start_span)[span_38](end_span)。"
    },

    // --- 問13（事業所データ連動） ---
    {
        category: "令和4年度 法令 問13-イ",
        question: "所定の事項を記載した危害予防規程を定め、これを都道府県知事等に届け出なければならない。また、この危害予防規程を守るべき者は、この事業者及びその従業者である。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r4_q8_13",
        explanation: "法第26条第1項及び第3項の規定により正しいため○です[span_39](start_span)[span_39](end_span)。"
    },
    {
        category: "令和4年度 法令 問13-ロ",
        question: "認定保安検査実施者として保安検査のための組織又は保安検査の方法に変更があったときは、その変更後の認定の更新時にその旨を経済産業大臣に届け出なければならない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r4_q8_13",
        explanation: "更新時ではなく「遅滞なく」経済産業大臣に届け出なければならないため誤りです[span_40](start_span)[span_40](end_span)。"
    },
    {
        category: "令和4年度 法令 問13-ハ",
        question: "認定を受けた特定施設の保安検査を行ったときに都道府県知事等に届け出る検査の記録は、検査をした特定施設とその施設の設備ごとの検査の方法、記録及びその結果について記載したものである。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r4_q8_13",
        explanation: "コンビ則第49条第2項の規定により正しいため○です[span_41](start_span)[span_41](end_span)。"
    },

    // --- 問14（事業所データ連動：一般則） ---
    {
        category: "令和4年度 法令 問14-イ",
        question: "ガス設備内の圧力が許容圧力を超えた場合、直ちにその圧力を許容圧力以下に戻すことができる安全装置を設けなければならない定めがあるのは、高圧ガス設備のみである。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r4_q14_20",
        explanation: "一般則第6条第1項第19号の規定により正しいため○です[span_42](start_span)[span_42](end_span)。"
    },
    {
        category: "令和4年度 法令 問14-ロ",
        question: "アンモニアの製造施設、アセチレンの製造施設及び酸素の製造施設には、その規模に応じ、適切な防消火設備を適切な箇所に設けなければならないが、窒素の製造施設については、その定めはない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r4_q14_20",
        explanation: "一般則第6条第1項第39号の規定により正しいため○です[span_43](start_span)[span_43](end_span)。"
    },
    {
        category: "令和4年度 法令 問14-ハ",
        question: "この事業所の製造設備（ガスが通る部分に限る。）のうち、特に定められた場合を除き、その外面から火気（その製造設備内のものを除く。）を取り扱う施設に対し8メートル以上の距離を有しなければならないと定められているものは、窒素の製造設備以外の製造設備である。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r4_q14_20",
        explanation: "酸素の製造設備についてもこの措置を講ずる必要はないため「窒素以外」とする記述は誤りです[span_44](start_span)[span_44](end_span)。"
    },

    // --- 問15（事業所データ連動） ---
    {
        category: "令和4年度 法令 問15-イ",
        question: "耐震設計構造物は、所定の耐震に関する性能を有するものとしなければならないが、ポンプ、圧縮機及び容器置場はその耐震設計構造物に該当しない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r4_q14_20",
        explanation: "一般則第6条第1項第17号の規定により該当しないため正しいため○です[span_45](start_span)[span_45](end_span)。"
    },
    {
        category: "令和4年度 法令 問15-ロ",
        question: "アセチレンの製造設備に使用する材料のうち、その材料が、ガスの種類、性状、温度、圧力等に応じ、その設備の材料に及ぼす化学的影響及び物理的影響に対し、安全な化学的成分及び機械的性質を有するものであることと定められているのは、高圧ガス設備に使用する材料に限られている。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r4_q14_20",
        explanation: "高圧ガス設備以外のガス設備もこの規定が適用されるため「限られている」は誤りです[span_46](start_span)[span_46](end_span)。"
    },
    {
        category: "令和4年度 法令 問15-ハ",
        question: "液化アンモニアのポンプの外面から液化酸素のポンプに対して有すべき距離は、これらの間に所定の強度を有する障壁を設けることにより減じることができる。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r4_q14_20",
        explanation: "一般則第6条第1項第4号により設備間距離についての障壁による緩和規定がないため誤りです[span_47](start_span)[span_47](end_span)。"
    },

    // --- 問16（事業所データ連動） ---
    {
        category: "令和4年度 法令 問16-イ",
        question: "アセチレンの高圧ガス設備に係る配管の耐圧試験を行うときは、空気、窒素等の気体を使用して常用の圧力の1.25倍以上の圧力で行うことと定められており、水を使用することは禁じられている。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r4_q14_20",
        explanation: "水その他の安全な液体を使用して行うこととされており、アセチレンに関して気体による耐圧試験が義務付けられているわけではないため誤りです[span_48](start_span)[span_48](end_span)。"
    },
    {
        category: "令和4年度 法令 問16-ロ",
        question: "これらの貯槽は、所定の基準によりその沈下状況を測定しなければならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r4_q14_20",
        explanation: "一般則第6条第1項第16号の規定により貯蔵能力1トン以上の貯槽について沈下状況を測定することとされており正しいため○です[span_49](start_span)[span_49](end_span)。"
    },
    {
        category: "令和4年度 法令 問16-ハ",
        question: "この液化アンモニア貯槽に設ける液面計は、丸形ガラス管液面計以外のものとし、ガラス液面計を使用する場合は、その破損を防止するための措置及びその貯槽とその液面計とを接続する配管には、その液面計の破損による液化アンモニアの漏えいを防止するための措置が講じられたものでなければならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r4_q14_20",
        explanation: "一般則第6条第1項第22号の規定により正しいため○です[span_50](start_span)[span_50](end_span)。"
    },

    // --- 問17（事業所データ連動） ---
    {
        category: "令和4年度 法令 問17-イ",
        question: "内容積が5000リットル以上の貯槽には、その貯槽に取り付けた液化ガスを送り出すための配管及び受け入れるための配管に、その液化ガスが漏えいしたときに安全に、かつ、速やかに遮断するための措置を講じなければならないものがあるが、液化窒素の貯槽にはその定めはない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r4_q14_20",
        explanation: "一般則第6条第1項第25号の規定により正しいため○です[span_51](start_span)[span_51](end_span)。"
    },
    {
        category: "令和4年度 法令 問17-ロ",
        question: "この事業所が夜間には稼働しない場合であっても、製造施設にはその保安の確保に必要な所定の設備が、停電等によりその機能が失われることのないよう措置を講じるべき定めがある。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r4_q14_20",
        explanation: "一般則第6条第1項第27号の規定により正しいため○です[span_52](start_span)[span_52](end_span)。"
    },
    {
        category: "令和4年度 法令 問17-ハ",
        question: "液化酸素の貯槽及び液化窒素の貯槽並びにそれらの支柱には、可燃性ガスの貯槽又は可燃性物質を取り扱う設備が周辺にある場合、温度の上昇を防止するための措置を講じなければならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r4_q14_20",
        explanation: "一般則第6条第1項第32号の規定により正しいため○です[span_53](start_span)[span_53](end_span)。"
    },

    // --- 問18（事業所データ連動） ---
    {
        category: "令和4年度 法令 問18-イ",
        question: "これらの高圧ガスの製造施設のうち、ポンプ、バルブ及び継手その他ガスが漏えいするおそれのある箇所に、その旨の危険標識を掲げなければならない製造施設は、アンモニアのものに限られている。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r4_q14_20",
        explanation: "一般則第6条第1項第33号の規定により正しいため○です[span_54](start_span)[span_54](end_span)。"
    },
    {
        category: "令和4年度 法令 問18-ロ",
        question: "アンモニアの製造施設のガス設備に係る配管の接合は、いかなる場合であっても、溶接以外は認められていない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r4_q14_20",
        explanation: "毒性ガスのガス設備の配管接合は、フランジ接合又はねじ接合継手による接合も認められるため誤りです[span_55](start_span)[span_55](end_span)。"
    },
    {
        category: "令和4年度 法令 問18-ハ",
        question: "この容器置場の外面から第一種保安物件に対して有すべき距離は、第一種保安物件に対して所定の強度を有する構造の障壁を設けた場合には、第一種置場距離の2分の1の距離となる。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r4_q14_20",
        explanation: "一般則第6条第1項第42号ハの規定により正しいため○です[span_56](start_span)[span_56](end_span)。"
    },

    // --- 問19（事業所データ連動） ---
    {
        category: "令和4年度 法令 問19-イ",
        question: "高圧ガス設備の安全弁に付帯して設けた止め弁は、製造設備の使用終了年から使用開始時までの間は、不用意なガスの放出を防ぐため、閉止しておかなければならない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r4_q14_20",
        explanation: "修理又は清掃のため特に必要な場合を除き、常に全開しておかなければならないため誤りです[span_57](start_span)[span_57](end_span)。"
    },
    {
        category: "令和4年度 法令 問19-ロ",
        question: "全ての高圧ガスの製造は、その製造設備の使用開始時及び使用終了時にその製造設備の属する製造施設の異常の有無を点検するほか、1日に1回以上製造をする高圧ガスの種類及び製造設備の態様に応じ頻繁に製造設備の作動状況について点検し、異常のあるときは、その設備の補修その他の危険を防止する措置を講じて行わなければならない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r4_q14_20",
        explanation: "ガスの種類等による簡素化や免除の規定はないが、問題文の前半や後半の解釈において一般則第6条第2項第4号に基づく正確な規定と照らし合わされ検証される（解説では誤りとされる部分を含む）[span_58](start_span)[span_58](end_span)。"
    },
    {
        category: "令和4年度 法令 問19-ハ",
        question: "液化窒素のポンプについて、その修理が終了したときはそのポンプが正常に作動することを確認した後でなければ高圧ガスの製造をしてはならないが、その内部の清掃の場合はそのポンプが正常に作動することを確認することなく高圧ガスの製造をすることができる。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r4_q14_20",
        explanation: "修理等の「等」には清掃も含まれるため、確認が必要であり誤りです[span_59](start_span)[span_59](end_span)。"
    },

    // --- 問20（事業所データ連動） ---
    {
        category: "令和4年度 法令 問20-イ",
        question: "圧縮酸素の容器置場については、容器と火気又は引火性若しくは発火性の物の間を有効に遮る措置を講じていない場合、その容器置場の周囲2メートル以内においては、火気の使用を禁じ、かつ、引火性又は発火性の物を置いてはならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r4_q14_20",
        explanation: "一般則第6条第2項第8号二の規定により正しいため○です[span_60](start_span)[span_60](end_span)。"
    },
    {
        category: "令和4年度 法令 問20-ロ",
        question: "圧縮窒素の容器のみを容器置場に置くときは、充填容器及び残ガス容器にそれぞれ区分して置くべき定めはない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r4_q14_20",
        explanation: "圧縮窒素の容器についても充填容器及び残ガス容器に区分して置くこととされているため誤りです[span_61](start_span)[span_61](end_span)。"
    },
    {
        category: "令和4年度 法令 問20-ハ",
        question: "液化アンモニアの充填容器と圧縮酸素の充填容器は、それぞれ区分して容器置場に置かなければならないが、液化アンモニアの充填容器と圧縮窒素の充填容器をそれぞれ区分して容器置場に置くべき定めはない。",
        isTrue: false, // 選択肢解説では (4) イ、ハ が正解。問題文ハは誤り扱い、あるいは「置くべき定めはない」が誤り。
        hasFacility: true,
        facilityId: "r4_q14_20",
        explanation: "液化アンモニアの充填容器と圧縮窒素の充填容器についても区分すべき定めがあるため誤りです[span_62](start_span)[span_62](end_span)。"
    },

    // data/hohrei_r3.js
    // --- 問1 ---
    {
        category: "令和3年度 法令 問1-イ",
        question: "高圧ガス保安法は、高圧ガスによる災害を防止して公共の安全を確保する目的のために、高圧ガスの製造、貯蔵、販売、移動その他の取扱及び消費について規制するほか、容器の製造及び取扱について規制することも定めている。",
        isTrue: true,
        hasFacility: false,
        explanation: "法第1条の目的に合致しているため正しく○です[span_2](start_span)[span_2](end_span)。"
    },
    {
        category: "令和3年度 法令 問1-ロ",
        question: "圧力が0.2メガパスカルとなる場合の温度が35度以下である液化ガス（液化シアン化水素、液化ブロムメチル及び液化酸化エチレンを除く。）であって、常用の温度において圧力が0.2メガパスカル未満であるものは高圧ガスではない。",
        isTrue: false,
        hasFacility: false,
        explanation: "法第2条第3号後段の規定により高圧ガスに該当するため誤りです[span_3](start_span)[span_3](end_span)。"
    },
    {
        category: "令和3年度 法令 問1-ハ",
        question: "常用の温度40度において圧力が1メガパスカルとなる圧縮ガス（圧縮アセチレンガスを除く。）であって、現在の圧力が0.9メガパスカルのものは高圧ガスではない。",
        isTrue: true,
        hasFacility: false,
        explanation: "法第2条第1号の規定により高圧ガスとならず正しいため○です[span_4](start_span)[span_4](end_span)。"
    },

    // --- 問2 ---
    {
        category: "令和3年度 法令 問2-イ",
        question: "第一種製造者がその高圧ガスの製造事業の全部を譲り渡したときは、その事業の全部を譲り受けた者はその第一種製造者の地位を承継する。",
        isTrue: false,
        hasFacility: false,
        explanation: "事業の譲渡における第一種製造者の地位承継の規定はないため誤りです[span_5](start_span)[span_5](end_span)。"
    },
    {
        category: "令和3年度 法令 問2-ロ",
        question: "一つの定置式製造設備（指定設備であるものを除く。）を使用して高圧ガスの製造をしようとする者は、その設備の処理することができるガスの容積が1日300立方メートルを超えている場合には、その製造をするガスの種類に関係なく、事業所ごとに、都道府県知事等の許可を受けなければならない。",
        isTrue: true,
        hasFacility: false,
        explanation: "第一種ガス等の処理容積要件を満たしており正しいため○です[span_6](start_span)[span_6](end_span)。"
    },
    {
        category: "令和3年度 法令 問2-ハ",
        question: "第二種貯蔵所の所有者又は占有者は、その第二種貯蔵所を定められた技術上の基準に適合するように維持しなければならないが、その技術上の基準は、第一種貯蔵所に適用される技術上の基準と同じである。",
        isTrue: true,
        hasFacility: false,
        explanation: "第二種貯蔵所の基準は第一種貯蔵所の基準を準用しており正しいため○です[span_7](start_span)[span_7](end_span)。"
    },

    // --- 問3 ---
    {
        category: "令和3年度 法令 問3-イ",
        question: "第一種製造者は、製造をする高圧ガスの種類を変更することなく製造の方法を変更しようとするときには、都道府県知事等の許可を受けなければならない。",
        isTrue: true,
        hasFacility: false,
        explanation: "法第14条第1項の規定により正しいため○です[span_8](start_span)[span_8](end_span)。"
    },
    {
        category: "令和3年度 法令 問3-ロ",
        question: "高圧ガスの販売の事業を営もうとする者は、販売所ごとに、事業の開始後遅滞なく、その旨を都道府県知事等に届け出なければならない。",
        isTrue: false,
        hasFacility: false,
        explanation: "販売事業の届出は事業開始の日の20日前までに行う必要があるため誤りです[span_9](start_span)[span_9](end_span)。"
    },
    {
        category: "令和3年度 法令 問3-ハ",
        question: "オートクレーブ内における高圧ガスは、そのガスの種類にかかわらず高圧ガス保安法の適用を受けない。",
        isTrue: false,
        hasFacility: false,
        explanation: "水素、アセチレン及び塩化ビニル以外のガスについて法が適用されないため、「ガスの種類にかかわらず」は誤りです[span_10](start_span)[span_10](end_span)。"
    },

    // --- 問4 ---
    {
        category: "令和3年度 法令 問4-イ",
        question: "第一種製造者は、事業所ごとに帳簿を備え、その製造施設に異常があった場合、異常があった年月日及びそれに対してとった措置をその帳簿に記載し、記載の日から10年間保存しなければならない。",
        isTrue: true,
        hasFacility: false,
        explanation: "法第60条第1項等の規定により正しいため○です[span_11](start_span)[span_11](end_span)。"
    },
    {
        category: "令和3年度 法令 問4-ロ",
        question: "特定不活性ガス以外の不活性ガスを廃棄する場合の廃棄の場所、数量その他廃棄の方法についての技術上の基準は、定められていない。",
        isTrue: true,
        hasFacility: false,
        explanation: "法第25条及び一般則第61条の規定により正しいため○です[span_12](start_span)[span_12](end_span)。"
    },
    {
        category: "令和3年度 法令 問4-ハ",
        question: "第一種製造者は、その所有又は占有する高圧ガスについて災害が発生したときは、遅滞なく、その旨を都道府県知事等又は警察官に届け出なければならない。",
        isTrue: true,
        hasFacility: false,
        explanation: "法第63条第1項第1号の規定により正しいため○です[span_13](start_span)[span_13](end_span)。"
    },

    // --- 問5 ---
    {
        category: "令和3年度 法令 問5-イ",
        question: "容器の製造をした者は、特に定められた容器を除き、所定の容器検査を受け、これに合格したものとして所定の刻印等がされているものでなければ、その容器を譲渡し、又は引き渡してはならない。",
        isTrue: true,
        hasFacility: false,
        explanation: "法第44条第1項の規定により正しいため○です[span_14](start_span)[span_14](end_span)。"
    },
    {
        category: "令和3年度 法令 問5-ロ",
        question: "高圧ガスが充填されている容器を輸入し、所定の輸入検査に合格したときは、所定の容器検査を受けることなくその容器を譲渡し、又は引き渡すことができる。",
        isTrue: true,
        hasFacility: false,
        explanation: "法第44条第1項第4号の規定により正しいため○です[span_15](start_span)[span_15](end_span)。"
    },
    {
        category: "令和3年度 法令 問5-ハ",
        question: "圧縮ガスを容器に充填する場合は、その容器に刻印等又は自主検査刻印等において示されている圧力以下で充填しなければならない。",
        isTrue: true,
        hasFacility: false,
        explanation: "法第48条第4項第1号の規定により正しいため○です[span_16](start_span)[span_16](end_span)。"
    },

    // --- 問6 ---
    {
        category: "令和3年度 法令 問6-イ",
        question: "容器検査に合格した容器であって、液化ガスを充填するものに刻印等をすべき事項の一つに「容器の内容積」があるが、圧縮ガスを充填するものについてはその定めはない。",
        isTrue: false,
        hasFacility: false,
        explanation: "容器の内容積の刻印は圧縮ガス容器・液化ガス容器双方に適用されるため誤りです[span_17](start_span)[span_17](end_span)。"
    },
    {
        category: "令和3年度 法令 問6-ロ",
        question: "酸素ガスを充填する容器に装置するバルブであって附属品検査に合格したものに刻印をすべき事項の一つに、「耐圧試験における圧力（記号TP単位メガパスカル）及びM」がある。",
        isTrue: true,
        hasFacility: false,
        explanation: "容器規則第18条第1項第6号の規定により正しいため○です[span_18](start_span)[span_18](end_span)。"
    },
    {
        category: "令和3年度 法令 問6-ハ",
        question: "水素ガスを充填する容器に表示すべき事項のうちには、「その容器の表面積の2分の1以上について行う青色の塗色」及び「水素ガスの性質を示す文字「爆」の明示」がある。",
        isTrue: false,
        hasFacility: false,
        explanation: "水素容器の塗色は赤色、文字は「燃」であるため誤りです[span_19](start_span)[span_19](end_span)。"
    },

    // --- 問7 ---
    {
        category: "令和3年度 法令 問7-イ",
        question: "この貯槽の基礎は、その立地する地盤が堅固であれば、貯槽の支柱を同一の基礎に緊結する必要はない。",
        isTrue: false,
        hasFacility: false,
        explanation: "地盤の如何にかかわらず貯槽の支柱を同一の基礎に緊結しなければならないため誤りです[span_20](start_span)[span_20](end_span)。"
    },
    {
        category: "令和3年度 法令 問7-ロ",
        question: "貯蔵設備等の周囲5メートル以内においては、特に定める場合を除き、火気（その設備内のものを除く。）の使用を禁じ、かつ、引火性又は発火性の物を置いてはならない。",
        isTrue: true,
        hasFacility: false,
        explanation: "液石則第53条第2項第1号の規定により正しいため○です[span_21](start_span)[span_21](end_span)。"
    },
    {
        category: "令和3年度 法令 問7-ハ",
        question: "消費施設は、第一種保安物件に対して所定の強度を有する構造の障壁を設ければ、その減圧設備の外面から第一種保安物件に対して有すべき第一種設備距離は減じられる。",
        isTrue: false,
        hasFacility: false,
        explanation: "障壁による減圧設備の距離緩和規定はないため誤りです[span_22](start_span)[span_22](end_span)。"
    },

    // --- 問8（事業所データ連動：コンビナート） ---
    {
        category: "令和3年度 法令 問8-イ",
        question: "保安統括者として選任した者が交付を受けている製造保安責任者免状の種類及びその者が有している高圧ガスの製造に関する経験にかかわらず、この事業所には保安技術管理者を必ず選任しなければならないと定められている。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r3_q8_13",
        explanation: "保安統括者の免状や経験によっては保安技術管理者の選任が不要な場合もあるため誤りです[span_23](start_span)[span_23](end_span)。"
    },
    {
        category: "令和3年度 法令 問8-ロ",
        question: "保安主任者には、乙種化学責任者免状の交付を受け、かつ、所定の高圧ガスの製造に関する経験を有する者を選任することができる。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r3_q8_13",
        explanation: "コンビ則第28条第3項の規定により正しいため○です[span_24](start_span)[span_24](end_span)。"
    },
    {
        category: "令和3年度 法令 問8-ハ",
        question: "保安係員の代理者は、所定の製造保安責任者免状の交付を受けている者であって、かつ、所定の高圧ガスの製造に関する経験を有する者のうちから、あらかじめ選任しておかなければならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r3_q8_13",
        explanation: "法第33条第1項の規定により正しいため○です[span_25](start_span)[span_25](end_span)。"
    },

    // --- 問9（事業所データ連動） ---
    {
        category: "令和3年度 法令 問9-イ",
        question: "選任した保安企画推進員の定められた職務の一つに、「災害が発生した場合におけるその原因の調査及び対策の検討を行うこと。」がある。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r3_q8_13",
        explanation: "コンビ則第32条第6号の規定により正しいため○です[span_26](start_span)[span_26](end_span)。"
    },
    {
        category: "令和3年度 法令 問9-ロ",
        question: "認定保安検査実施者の認定に係る特定施設について自ら保安検査を行い、所定の技術上の基準に適合していることを確認し、その検査の記録を都道府県知事等に届け出た場合は、都道府県知事等が行う保安検査を受けなくてよい。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r3_q8_13",
        explanation: "法第35条第1項ただし書および第39条の11第2項の規定により正しいため○です[span_27](start_span)[span_27](end_span)。"
    },
    {
        category: "令和3年度 法令 問9-ハ",
        question: "従業者に対する保安教育計画を定め、これを忠実に実行しなければならない。また、その実行の結果を都道府県知事等に届け出なければならない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r3_q8_13",
        explanation: "保安教育計画の実行結果を都道府県知事等へ届け出る義務はないため誤りです[span_28](start_span)[span_28](end_span)。"
    },

    // --- 問10（事業所データ連動） ---
    {
        category: "令和3年度 法令 問10-イ",
        question: "液化エチレンの貯槽の外面から、この事業所の存する敷地外にある保安のための宿直施設に対して、所定の距離以上の距離を有しなければならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r3_q8_13",
        explanation: "コンビ則第5条第1項第7号の規定により正しいため○です[span_29](start_span)[span_29](end_span)。"
    },
    {
        category: "令和3年度 法令 問10-ロ",
        question: "保安区画内の高圧ガス設備（特に定めるものを除く。）の外面から、隣接する保安区画内の高圧ガス設備（特に定めるものを除く。）に対して有すべき距離は、保安区画内の高圧ガスの燃焼熱量の数値には関係なく、一律に30メートル以上と定められている。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r3_q8_13",
        explanation: "コンビ則第5条第1項第10号イの規定により正しいため○です[span_30](start_span)[span_30](end_span)。"
    },
    {
        category: "令和3年度 法令 問10-ハ",
        question: "可燃性ガスの製造施設には、その規模に応じ、適切な防消火設備を適切な箇所に設けなければならないが、この場合、この設備の作動のために必要な数量の水を常時保有することについての定めはない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r3_q8_13",
        explanation: "設備の作動に必要な数量の水を常時保有することが義務付けられているため誤りです[span_31](start_span)[span_31](end_span)。"
    },

    // --- 問11（事業所データ連動） ---
    {
        category: "令和3年度 法令 問11-イ",
        question: "特殊反応設備には、内部反応監視装置を設けた場合であっても、緊急時に安全に、かつ、速やかに遮断するための措置を講じなければならないが、その措置は計器室において操作することができるもの又は自動的に遮断するものでなければならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r3_q8_13",
        explanation: "コンビ則第5条第1項第25号および第27号の規定により正しいため○です[span_32](start_span)[span_32](end_span)。"
    },
    {
        category: "令和3年度 法令 問11-ロ",
        question: "エチレンの製造設備に設ける計器室は、その扉及び窓を耐火性のものとすれば、その設置位置については制限を受けない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r3_q8_13",
        explanation: "計器室の設置位置には制限があるため誤りです[span_33](start_span)[span_33](end_span)。"
    },
    {
        category: "令和3年度 法令 問11-ハ",
        question: "この事業所に隣接するコンビナート製造事業所との境界線から所定の距離以内にベントスタックを設置したときは、所定の事項を記載した書面を隣接事業所に送付する必要があるが、その所定の距離以内に屋外消火栓を設置したときには、その必要はない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r3_q8_13",
        explanation: "屋外消火栓を設置したときも書面の送付が必要であるため誤りです[span_34](start_span)[span_34](end_span)。"
    },

    // --- 問12（事業所データ連動） ---
    {
        category: "令和3年度 法令 問12-イ",
        question: "特定設備検査合格証の交付を受けた設備（耐震設計構造物でないもの）の取替え工事として都道府県知事等の許可を受けた工事であっても、その処理能力の変更がない場合は、完成検査を受けず、又は自ら完成検査を行うことなく、この製造施設を使用することができる。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r3_q8_13",
        explanation: "特定変更工事に該当せず完成検査を要しないため正しく○です[span_35](start_span)[span_35](end_span)。"
    },
    {
        category: "令和3年度 法令 問12-ロ",
        question: "特定変更工事であって、事業者が自ら完成検査を実施する場合は、都道府県知事等による完成検査を受けることなく、また、検査の記録を都道府県知事等に届け出ることなくこの製造施設を使用することができる。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r3_q8_13",
        explanation: "完成検査の記録を都道府県知事等に届け出なければ施設を使用できないため誤りです[span_36](start_span)[span_36](end_span)。"
    },
    {
        category: "令和3年度 法令 問12-ハ",
        question: "高圧ガス設備以外のガス設備の変更の工事については、都道府県知事等の許可を受けることなく工事を行うことができるが、完成後に遅滞なくその旨を都道府県知事等に届け出なければならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r3_q8_13",
        explanation: "軽微な変更の工事に該当し、完成後の届出でよいため正しく○です[span_37](start_span)[span_37](end_span)。"
    },

    // --- 問13（事業所データ連動） ---
    {
        category: "令和3年度 法令 問13-イ",
        question: "この事業所において、都道府県知事等の許可を受けて新たな高圧ガスの製造施設を追加する特定変更工事を行う場合、認定完成検査実施者であるこの事業者が自らその完成検査を行うことができる。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r3_q8_13",
        explanation: "新たな製造施設の追加工事は「特定変更工事」の自ら行う完成検査の対象外であるため誤りです[span_38](start_span)[span_38](end_span)。"
    },
    {
        category: "令和3年度 法令 問13-ロ",
        question: "この事業所に新たに高圧ガス製造施設を追加し、これを自ら保安検査を行うことができる特定施設とするためには、その施設が高圧ガスの製造を開始した後に継続して1年以上経過し、2年経過する前に経済産業大臣に申請しなければならないと定められている。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r3_q8_13",
        explanation: "継続して2年以上高圧ガスを製造しているものに限定されているため誤りです[span_39](start_span)[span_39](end_span)。"
    },
    {
        category: "令和3年度 法令 問13-ハ",
        question: "認定保安検査実施者に係る保安検査のための組織又は保安検査の方法に変更があったときは、遅滞なく、その旨を経済産業大臣に届け出なければならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r3_q8_13",
        explanation: "法第39条の9第2項の規定により正しいため○です[span_40](start_span)[span_40](end_span)。"
    },

    // --- 問14（事業所データ連動：一般則） ---
    {
        category: "令和3年度 法令 問14-イ",
        question: "アンモニアの製造設備のアンモニアが通る部分の外面からその製造設備外の火気を取り扱う施設まで8メートル以上の距離を有している場合は、その設備から漏えいしたアンモニアがその火気を取り扱う施設に流動することを防止するための措置を講じる必要はない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r3_q14_20",
        explanation: "一般則第6条第1項第3号の規定により正しいため○です[span_41](start_span)[span_41](end_span)。"
    },
    {
        category: "令和3年度 法令 問14-ロ",
        question: "高圧ガス設備には、その設備内の圧力を一定の圧力を超えた場合に直ちにその圧力を一定の圧力以下に戻すことができる安全装置を設けなければならないが、その一定の圧力とはその高圧ガス設備の許容圧力である。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r3_q14_20",
        explanation: "一般則第6条第1項第19号の規定により正しいため○です[span_42](start_span)[span_42](end_span)。"
    },
    {
        category: "令和3年度 法令 問14-ハ",
        question: "酸素は可燃性ガスに該当しないので、液化酸素の貯槽に設置した安全弁には放出管を設けなくてよい。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r3_q14_20",
        explanation: "不活性ガス・空気以外の高圧ガス設備等に設ける安全弁には放出管が必要であり、液化酸素の貯槽にも放出管を設けなければならないため誤りです[span_43](start_span)[span_43](end_span)。"
    },

    // --- 問15（事業所データ連動） ---
    {
        category: "令和3年度 法令 問15-イ",
        question: "アンモニアの製造設備の高圧ガス設備は、その外面から酸素の製造設備の高圧ガス設備（酸素が通る部分に限る。）に対して5メートル以上の距離を有しなければならないと定められている。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r3_q14_20",
        explanation: "可燃性ガスと酸素の製造設備の間は10メートル以上の距離が必要であるため誤りです[span_44](start_span)[span_44](end_span)。"
    },
    {
        category: "令和3年度 法令 問15-ロ",
        question: "アセチレンの製造施設の圧縮アセチレンガスに係る圧縮機とそのガスを容器に充填する場所との間、その充填する場所とその充填容器に係る容器置場との間及び圧縮アセチレンガスに係る圧縮機とその充填容器に係る容器置場との間の全てに、所定の強度を有する構造の障壁を設けなければならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r3_q14_20",
        explanation: "一般則第6条第1項第29号の規定により正しいため○です[span_45](start_span)[span_45](end_span)。"
    },
    {
        category: "令和3年度 法令 問15-ハ",
        question: "これらの製造施設のうち、その製造施設の規模に応じ、適切な防消火設備を適切な箇所に設けなければならないのは、アンモニアの製造施設及びアセチレンの製造施設に限られている。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r3_q14_20",
        explanation: "酸素の製造施設にも防消火設備の設置が必要であるため誤りです[span_46](start_span)[span_46](end_span)。"
    },

    // --- 問16（事業所データ連動） ---
    {
        category: "令和3年度 法令 問16-イ",
        question: "高圧ガス設備の配管の変更の工事の完成検査における耐圧試験は、水その他の安全な液体を使用して行う場合は、常用の圧力の1.25倍以上の圧力で行わなければならないと定められている。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r3_q14_20",
        explanation: "水その他の安全な液体を使用する場合は常用の圧力の1.5倍以上の圧力で行うため誤りです[span_47](start_span)[span_47](end_span)。"
    },
    {
        category: "令和3年度 法令 問16-ロ",
        question: "液化アンモニアの貯槽に丸形ガラス管液面計を使用するときは、その貯槽とガラス液面計とを接続する配管には、そのガラス液面計の破損による液化アンモニアの漏えいを防止するための措置を講じなければならない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r3_q14_20",
        explanation: "液化アンモニアの貯槽に丸形ガラス管液面計を使用してはならないとされているため誤りです[span_48](start_span)[span_48](end_span)。"
    },
    {
        category: "令和3年度 法令 問16-ハ",
        question: "液化アンモニアの貯槽の周囲に、液状のガスが漏えいした場合にその流出を防止するための措置として防液堤を設置する場合、その内側及びその外面から所定の距離以内には、その貯槽の付属設備その他の設備又は施設であって定められたもの以外のものを設けてはならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r3_q14_20",
        explanation: "一般則第6条第1項第8号の規定により正しいため○です[span_49](start_span)[span_49](end_span)。"
    },

    // --- 問17（事業所データ連動） ---
    {
        category: "令和3年度 法令 問17-イ",
        question: "アセチレンの高圧ガス設備に係る電気設備は、その設置場所及びそのガスの種類に応じた防爆性能を有する構造のものとしなければならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r3_q14_20",
        explanation: "一般則第6条第1項第26号の規定により正しいため○です[span_50](start_span)[span_50](end_span)。"
    },
    {
        category: "令和3年度 法令 問17-ロ",
        question: "液化アンモニアの貯槽には、温度の上昇を防止するための措置を講じなければならないが、その支柱にはその措置を講じる必要はない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r3_q14_20",
        explanation: "貯槽の支柱にも温度上昇防止措置が必要であるため誤りです[span_51](start_span)[span_51](end_span)。"
    },
    {
        category: "令和3年度 法令 問17-ハ",
        question: "液化窒素の貯槽の基礎については、所定の耐震に関する性能を有するものとした場合、その貯槽の沈下状況を測定する必要はない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r3_q14_20",
        explanation: "不活性ガスの貯槽（貯蔵能力1t以上）は耐震性能の有無にかかわらず沈下状況の測定が必要なため誤りです[span_52](start_span)[span_52](end_span)。"
    },

    // --- 問18（事業所データ連動） ---
    {
        category: "令和3年度 法令 問18-イ",
        question: "アンモニアの製造施設には、ポンプ、バルブ及び継手その他アンモニアが漏えいするおそれのある箇所に、その旨の危険標識を掲げれば、他の製造施設と区分して、その外部から毒性ガスの製造施設である旨を容易に識別することができるような措置を講じる必要はない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r3_q14_20",
        explanation: "危険標識の掲示に加え、外部から毒性ガスの製造施設である旨を容易に識別できる措置が必要であるため誤りです[span_53](start_span)[span_53](end_span)。"
    },
    {
        category: "令和3年度 法令 問18-ロ",
        question: "アンモニアの製造設備及び容器置場には、アンモニアが漏えいしたときに安全に、かつ、速やかに除害するための措置を講じなければならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r3_q14_20",
        explanation: "一般則第6条第1項第37号および第42号チの規定により正しいため○です[span_54](start_span)[span_54](end_span)。"
    },
    {
        category: "令和3年度 法令 問18-ハ",
        question: "この高圧ガス製造施設に係る容器置場の外面から第一種保安物件及び第二種保安物件に対し有すべき距離は、その処理能力及び貯蔵能力に応じて算出される。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r3_q14_20",
        explanation: "容器置場の距離は処理・貯蔵能力ではなく容器置場の「面積」に応じて定められているため誤りです[span_55](start_span)[span_55](end_span)。"
    },

    // --- 問19（事業所データ連動） ---
    {
        category: "令和3年度 法令 問19-イ",
        question: "高圧ガス設備の安全弁に付帯して設けた止め弁は、高圧ガス設備の使用終了後は、ガスの漏えいを防止するため閉止しておかなければならない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r3_q14_20",
        explanation: "修理等特別に必要な場合を除き常に全開しておかなければならないため誤りです[span_56](start_span)[span_56](end_span)。"
    },
    {
        category: "令和3年度 法令 問19-ロ",
        question: "液化アンモニアの貯槽に液化ガスを充填するときは、常用の温度においてその内容積の90パーセントを超えないように充填しなければならない。また、貯槽には90パーセントを超えることを自動的に検知し、警報するための措置を講じなければならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r3_q14_20",
        explanation: "一般則第6条第2項第2号イの規定により正しいため○です[span_57](start_span)[span_57](end_span)。"
    },
    {
        category: "令和3年度 法令 問19-ハ",
        question: "窒素の製造については、その製造設備の使用開始時又は使用終了時に1日1回以上異常の有無を点検すればよい。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r3_q14_20",
        explanation: "使用開始時・終了時の点検に加え、1日に1回以上頻繁に作動状況の点検を行う必要があるため誤りです[span_58](start_span)[span_58](end_span)。"
    },

    // --- 問20（事業所データ連動） ---
    {
        category: "令和3年度 法令 問20-イ",
        question: "これらの製造設備のうち、ガス設備を開放して修理するときにその開放する部分に他の部分からガスが漏えいすることを防止するための措置を講じなければならない旨の定めがあるのは、アセチレンとアンモニアの製造設備に限られている。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r3_q14_20",
        explanation: "ガスの性質・種類にかかわらず酸素や窒素の製造設備も含めすべての設備に必要なため誤りです[span_59](start_span)[span_59](end_span)。"
    },
    {
        category: "令和3年度 法令 問20-ロ",
        question: "液化アンモニアの充填容器及び残ガス容器は、それぞれ区分して容器置場に置かなければならないが、圧縮窒素の充填容器及び残ガス容器は、それぞれ区分して容器置場に置くべき定めはない。",
        isTrue: false,
        hasFacility: true,
        facilityId: "r3_q14_20",
        explanation: "圧縮窒素の容器についても充填容器と残ガス容器に区分して置く必要があるため誤りです[span_60](start_span)[span_60](end_span)。"
    },
    {
        category: "令和3年度 法令 問20-ハ",
        question: "液化アンモニアの容器置場の周囲2メートル以内においては、特に定める場合を除き、火気の使用を禁止し、かつ、引火性又は発火性の物を置いてはならない。",
        isTrue: true,
        hasFacility: true,
        facilityId: "r3_q14_20",
        explanation: "一般則第6条第2項第8号二の規定により正しいため○です[span_61](start_span)[span_61](end_span)。"
    }
];