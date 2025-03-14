/**
 * ZH_TW language
 */
const robot = {
    robotType: '機器人類型',
    robotTypePlaceholder: '請選擇機器人類型',
    robotToken: 'WebHook',
    robotTokenPlaceholder: '請輸入群機器人的WebHook',
    robotSecret: 'Secret',
    robotSecretPlaceholder: '（可選）請輸入群機器人的金鑰'
}
const agent = {
    newAgent: "新增Agent",
    clickToCopy: '點擊複製',
    status: {
        name: '狀態',
        online: '線上',
        offline: '離線',
        s2ae: 'S2AE'
    },
    system: '運行系統',
    version: '運行版本',
    operation: '快捷操作',
    shutdown: '終止運行',
    edit: {
        name: 'Agent名稱',
        highTemp: "高溫值",
        highTempTime: "高溫超時",
        rule: 'Agent名稱不能空白',
        namePlaceholder: '請輸入Agent名稱'
    }
}

const devices = {
    title: 'Sonic雲真機平台',
    list: '設備清單',
    form: {
        model: '設備型號',
        manufacturer: '製造商',
        system: '設備系統',
        battery: {
            level: '電池電量',
            temperature: '電池溫度'
        },
        agent: '所在位置'
    },
    detail: {
        image: '設備圖片',
        uploadImg: '點擊上傳',
        nickName: '設備備註',
        nickPlaceholder: '輸入裝置備註信息',
        name: '設備名稱',
        model: '設備型號',
        udId: '設備序號',
        size: '螢幕解析度',
        cpu: 'CPU類型',
        pwd: '安裝密碼',
        pwdPlaceholder: '默認為Sonic123456',
        operation: '快捷操作',
        reboot: '重啟',
        rebootTips: '確定重啟該設備嗎？',
        deleteTips: '確定刪除該設備嗎？'
    },
    useRightNow: '馬上使用',
    moreDetail: '更多資訊',
    deviceCenter: '設備中心',
    agentCenter: 'Agent中心',
    status: {
        ONLINE: '空閒中',
        DEBUGGING: '佔用中',
        TESTING: '測試中',
        DISCONNECTED: '已斷開',
        OFFLINE: '已離線',
        UNAUTHORIZED: '未授權',
        ERROR: '異常中'
    },
    filter: {
        all: '全選',
        platform: {
            ANDROID: '安卓系統',
            IOS: 'iOS系統',
            HARMONY: '鴻蒙系統'
        },
        manufacturer: '設備製造商',
        cpu: 'CPU處理器',
        size: '螢幕解析度',
        agent: '所在位置',
        status: '設備狀態',
        placeholder: '請輸入要篩選的型號、設備名稱或設備序號',
        button: '高級篩選'
    },
    refresh: '自動刷新',
    avgTem: '當前平均電池溫度：',
    hint: '設置提示'
    adTemperature: {
        temperature: "當設備溫度≥",
        height: "高溫值",
        onlyAd: "時（僅安卓），會通知機器人告警。",
        then: "當",
        timeout: "高溫超時",
        continuedTime: "時間內溫度持續≥",
        onlyAdNotice: "時（僅安卓），會通知機器人並",
        shutdown: "關機"
}

// 佈局相關
const layout = {
    // header
    theme: '當前主題：',
    languages: '多語言',
    deviceCenter: '設備中心',
    myInfo: '我的資訊',
    changePassword: '修改密碼',
    signOut: '登出',
    aboutSonic: '關於Sonic',
    backHome: '回到首頁',
    welcomeSpeech: "歡迎來到Sonic雲真機測試平台，請選擇項目進入",
    addProject: "新增項目",
    officialWebSite: 'Sonic官方網站',
    versionUpdateRecord: '版本更新記錄'
}
// 表單相關
const form = {
    save: '保存',
    unknown: '未知',
    notEmpty: "不能空白！",
    differentInput: "兩次輸入不一致！",
    username: "用戶名",
    role: "角色",
    testEngineer: "測試工程師",
    developmentEngineer: "開發工程師",
    oldPasswordNotEmpty: "舊密碼不能空白",
    oldPassword: "舊密碼",
    inputOldPassword: "請輸入舊密碼",
    newPasswordNotEmpty: "新密碼不能空白",
    newPassword: "新密碼",
    inputNewPassword: "請輸入新密碼",
    inputNewPasswordAgain: "請再次輸入新密碼",
    confirm: "確定",
    cancel: "取消"
}
// 彈出型視窗相關
const dialog = {
    permissionDenied: '暫不許可當前用戶！',
    suffixError: '檔案格式有誤！',
    projectInfo: "專案資訊",
    agentInfo: 'Agent資訊',
    myInfo: "我的資訊",
    changePassword: "修改密碼",
    copy: {
        success: '複製成功！',
        fail: '複製失敗！'
    }
}

//一般操作
const common = {
    null: '無',
    delete: '刪除',
    edit: '編輯',
    operate: "操作",
    copy: "複製",
}

// 路由
const routes = {
    login: "登入",
    home: "首頁",
    deviceCenter: "設備中心",
    remoteControl: "遠端控制",
    androidTestCase: "安卓測試案例",
    iosTestCase: 'iOS測試案例',
    operateSteps: "操作步驟",
    testSuite: "測試套件",
    testResult: "測試結果",
    reportDetails: "報告詳情",
    publicSteps: "公共步驟",
    controlElement: "控制項元素",
    globalParameter: "全域參數",
    moduleManage: "模組管理",
    versionIteration: "版本反覆運算",
    timedTask: "定時任務",
    projectSetting: "項目設定",
    projectPage: "項目首頁",
    resource: "",
    role: ""
}

const setting = {
    title: "Manage Center"
}

const androidTestCase = {
    addCase: "添加案例",
}

const elements = {
    eleInfo: "控制項元素資訊",
    stepInfo: "步驟資訊",
    warn: "警告",
    warnInfo: "該控制項已存在於以下步驟中,刪除該控制項將連同以下步驟一併刪除！請前往對應步驟修改控制項或確認對應步驟已廢棄！",
    stepList: {
        stepId: "步驟Id",
        useCaseId: "所屬案例Id",
        userCaseName:"所屬案例名稱",
        noCase: "無所屬案例"
    },
    sureDelete: "確認刪除",
    addElement: "添加控制項元素",
    controlId: "控制項id",
    inputNameSearch: "輸入元素控制項名稱搜索",
    moduleName: "模組名稱",
    targetingType: "定位類型",
    coordinate: "座標",
    picture: "圖片",
    notSpecified: "未指定",
    cEleValue: "控制項元素值",
    inputKeySearch: "輸入控制項元素值搜索",
    sureDelInfo: "確定刪除該控制項元素嗎?",

}
const globalParamsTs = {
    dialogVisible: {
        info: "全域參數資訊",
        specialUse: "特殊使用",
        messageInfo: "如有多個參數值可以用 '{'|'}' 號隔開，分配設備時會隨機分配，單次任務內參數值只會取同一個。【random】和【timestamp】參數已內置，可用作構造亂數據",
        keyName: "參數名",
        keyNameMessage: "參數名不能空白，建議使用英文",
        inputName: "請輸入參數名",
        valueName: "參數值",
        valueNameMessage: "參數值不能空白，多個可以用 '{'|'}' 號隔開",
        inputValue: "請輸入參數值，多個可以用 '{'|'}' 號隔開"
    },
    addGlobalParams: "添加全域參數",
    paramsList: {
        id: "參數id",
        name: "參數名",
        value: "參數值"
    },
    delMessage: "確定刪除該全域參數嗎?"
}

const homeTS = {
    projectOverview: "項目概況",
    testCaseManagement: "測試案例管理",
    testCase: {
        case: "測試案例",
        adCase: "安卓端測試案例",
        iosCase: "iOS端測試案例"
    },
    testSuite: "測試套件",
    testDataManagement: "測試資料管理",
    testResults: "測試結果分析",
    setting: "持續整合設置",
    package: {
        mange: "安裝包管理",
        bulk: "批次裝包",
    },
    crashReport: "Crash報告",
    projectSetting: {
        setting: "專案相關設置",
        mange: "模組管理",
        update: "版本反覆運算",
    }
}

const jobsTS = {
    dialogVisible: {
        message: "排程任務資訊",
        name: "任務名稱",
        nameIsNull: "任務名稱不能空白",
        inputName: "請輸入任務名稱",
        testSuiteIsNull: "測試套件不能空白",
        chooseTestSuite: "請選擇測試套件",
        cron: "Cron表達式",
        cronIsNull: "Cron表達式不能空白",
        inputCron: "請輸入Cron表達式"
    },
    addCron: "新增排程任務",
    whatCron: "什麼是Cron表達式？",
    cronInfo: {
        one: "* 第一位，表示秒，取值 0-59",
        two: "* 第二位，表示分，取值 0-59",
        three: "* 第三位，表示小時，取值 0-23",
        four: "* 第四位，日期，取值 1-31",
        five: "* 第五位，月份，取值 1-12",
        six: "* 第六位，星期幾，取值 1-7",
        seven: "* 第七位，年份，可以留空，取值 1970-2099",
        asterisk: "(*) 星號：可以理解為“每”的意思，每秒、每分",
        questionMark: "(?) 問號：只能出現在日期和星期這兩個位置，表示這個位置的值不確定",
        bar: "(-) 表達一個範圍，如在小時欄位中使用 10-12 ，表示從10點到12點",
        comma: "(,) 逗號，表達一個列表值，如在星期欄位中使用 1,2,4\n" +
            "，則表示星期一、星期二、星期四",
        slash: "(/) 斜線，如 x/y ，x是起始值，y是間隔時間，如在第一位(秒)使用\n" +
            "0/15，表示從0秒開始，每15秒",
        official: "官方解釋：",
        demoOne: "0 0 3 * * ? 每天 3 點執行",
        demoTwo: "0 5 3 * * ? 每天 3 點 5 分執行",
        demoThree: "0 5 3 ? * * 每天 3 點 5 分執行",
        demoFour: "0 5/10 3 * * ? 每天 3 點 5 分，15 分，25 分，35 分，45 分，55\n" +
            "分這幾個時間點執行",
        demoFive: "0 10 3 ? * 1 每週星期天的 3 點10 分執行，注：1 表示星期天",
        demoSix: "0 10 3 ? * 1#3 每個月的第三個星期的星期天執行，#號只能出現在星期的位置",
        hint: "注：第六位(星期幾)中的數位可能表達不太正確，可以使用英文縮寫來表示，如：Sun"
    },
    taskId: "任務id",
    run: "立即運行",
    del: "確定刪除該排程任務嗎？"
}

const loginTS = {
    testPlatform: "一站式雲真機測試平台",
    login: {
        message: "註冊帳號/LDAP網域帳號登入",
        register: "註冊帳號登錄",
        LDAPLogin: "LDAP網域帳號登入",
    },
    user: {
        inputUserName: "請輸入帳戶名",
        inputPassword: "請輸入密碼",
        longin: "登入",
        register: "註冊",
    }
}

const modulesTS = {
    info: "模組資訊",
    name: "模組名稱",
    isNotNull: "模組名稱不能空白",
    inputName: "請輸入模組名稱",
    sure: "確定",
    add: "添加模組",
    del: "確定刪除該模組嗎?",
}

const packagesTS = {
    accessGuide: "存取指南",
    buildLink: "建立連結",
    platform: "平台",
    no: "未指定",
    packageName: "安裝包名稱",
    branch: "分支",
    inputName: "輸入分支名稱",
    downloadLink: "下載連結",
    copyUrl: "複製url",
    creatTime: "創立時間",

}

const projectIndexTS = {
    code: {
        lastWeek: "最近一周",
        lastMonth: "最近一個月",
        lastThreeMonth: "最近三個月",
        day: "天",
        hour: "小時",
        minute: "分",
        second: "秒",
        runInfo: "運行情況總覽",
        unit: "單位(%)",
        passRate: "當天通過率",
        stateDis: "狀態分佈",
        other: "其他",
        pass: "通過",
        fail: "失敗",
    },
    page: {
        to: "至",
        startTime: "開始日期",
        endTime: "結束日期",
        caseTop5: "案例運行時長排行榜（Top 5）",
        caseId: "案例id",
        caseName: "案例名稱",
        timeLong: "時長",
        equipmentTop5: "設備運行時長排行榜（Top 5）",
        eqId: "設備型號",
        serialNumber: "序號",
    }
}


const publicStepTS = {
    info: "公共步驟資訊",
    add: "添加公共步驟",
    id: "公共步驟Id",
    name: "公共步驟名稱",
    platform: "平台",
    android: "安卓",
    list: "步驟清單",
    stepId: "步驟Id",
    useCase: "所屬案例",
    stepInfo: "步驟詳情",
    viewSteps: "查看步驟",
    sureDel: "確定刪除該公共步驟嗎?",
}

const resultDetailTS = {
    memoryInfo: "記憶體詳情",
    unit: "單位(KB)",
    battery: "電量詳情",
    memoryShort: "記憶體資料不足",
    batteryShort: "電量數據不足",
    performance: "性能資料不足",
    caseRun: "案例運行狀態分佈",
    noStart: "未開始",
    runIng: "運行中",
    caseStatus: "案例狀態",
    page: {
        reportInfo: "報告資訊",
        resultId: "結果Id",
        executeUser: "執行用戶",
        runStatus: "運行狀態",
        testPass: "測試通過",
        testFail: "測試失敗",
        testAlert: "測試警報",
        endTime: "結束時間",
        totalTime: "總耗時",
        runInfo: "運行資訊",
        total: "耗時",
        runLog: "運行日誌",
        performanceInfo: "性能資訊",
        runRecording: "運行錄影",
        onRecording: "暫無錄影"
    }
}

const ResultsTS = {
    name: "測試套件名稱",
    testReport: "測試報告",
    lookReport: "查看報告",
    interruptTest: "確定中斷本次測試嗎?",
    interrupt: "中斷",
    del: "確定刪除該測試報告嗎?",
}

const stepListViewTS = {
    caseInfo: "案例詳情",
    platformToBe: "所屬平台",
    module: "模組",
    versionName: "版本名稱",
    designer: "設計人",
    last: "最後修改日期",
    testMessage: "案例描述",
}
const testSuitesTS = {
    testStart: "測試已開始...",
    info: "測試套件資訊",
    add: "添加測試套件",
    id: "套件Id",
    searchMessage: "輸入測試套件名稱搜索",
    kitPlatform: "套件平台",
    coverType: "覆蓋類型",
    testCover: "案例覆蓋",
    deviceCover: "設備覆蓋",
    associated: "關聯設備",
    device: {
        id: "設備id",
    },
    viewList: "查看列表",
    associatedCase: "關聯案例",
    run: "運行",
    delMessage: "確定刪除該測試套件嗎？套件下的案例將移出該套件"
}

const versionsTS = {
    iteration: "版本反覆運算資訊",
    noNull: "版本名稱不能空白",
    inputName: "請輸入版本名稱",
    time: "時間",
    timeNoNull: "時間不能空白",
    selectTime: "選擇日期時間",
    addVersions: "添加版本反覆運算",
    delMessage: "確定刪除該版本嗎？",

}

const androidRemoteTS = {
    repairedSuccess: "修復成功",
    associationSuccess: "關聯成功",
    copySuccess: "複製成功",
    copyFail: "複製失敗",
    noWebSocket: "不支持WebSocket",
    connection: "連接成功",
    systemException: "系統出現異常！已斷開遠端控制！",
    messageOne: "檢測到螢幕旋轉！請稍後...",
    getPocoSuccess: "獲取Poco控制項成功！",
    getPocoFail: "獲取POCO控制項失敗！請確保已經打開對應遊戲引擎並接入Poco-SDK",
    pullFile: {
        success: "拉取檔成功",
        fail: "拉取檔失敗"
    },
    pushFile: {
        success: "上傳檔成功！",
        fail: "上傳檔失敗！上傳目錄需要補齊檔名"
    },
    getEle: {
        success: "獲取原生控制項元素成功！",
        fail: "獲取控制項元素失敗！請重新獲取"
    },
    install: {
        success: "安裝成功!",
        fail: "安裝失敗!",
    },
    uninstall: {
        success: "卸載成功！",
        fail: "卸載失敗!",
    },
    runOver: "運行完畢",
    getSuccess: "獲取成功!",
    getPsSuccess: "獲取快照成功!",
    loadIng: "載入應用列表中，請稍後...",
    messageTwo: "已取消自動全域代理，請手動設定代理",
    startUninstall: "開始卸載！請稍後...",
    failErr: "檔案格式有誤！",
    addOne: "只能新增一個檔案！請先移除舊檔案",
    startInstall: "開始安裝！請稍後...",
    high: "高",
    middle: "中",
    low: "低",
    deviceFail: "該設備暫時不可使用!",
    remoteAudio: "遠端音頻已開啟，請勿重複操作！",
    audio: "遠端音頻廣播已連接!",
    audioFail: "遠端音頻廣播已斷開！",
    audioSuccess: "遠端音頻同步成功！",
    code: {
        elementsSnapshot: "控制項元素快照",
        eleName: "控制項元素名稱",
        eleNullName: "控制項元素名稱不能空白",
        inputName: "請輸入控制項元素名稱",
        saveEle: "保存為圖片元素",
        preparingImager: "準備圖像中...",
        systemVersion: "系統版本",
        projectionMode: "投屏模式",
        frameNumber: "投屏幀數",
        manualRepair: "手動修復",
        fixBlackScreen: "修復黑屏",
        fixTouch: "修復觸控",
        fixScreen: "修復橫豎屏",
        remoteAudioTran: "遠端音頻廣播",
        batterySimulation: "電池模擬",
        simulatePowerOutage: "模擬斷電",
        reset: "重置",
        physicalLookup: "實體查詢",
        BV: "亮度/音量",
        dial: "撥號",
        photograph: "拍照",
        browser: "瀏覽器",
        LUS:"鎖定/解鎖螢幕",
        remoteControlPanel: "遠控面板",
        inputText: "輸入文本",
        pleaseText: "請輸入要發送的文字，支援繁體中文",
        send: "發送",
        remoteADB: "遠端ADB",
        noAgent: "所在Agent未開啟該功能！",
        UIAutomator2ServerInit: "初始化UIAutomator2Server",
        automaticInitialization: "下次進入自動初始化",
        scanQRCode:"掃描二維碼",
        errTitle: "OPPO、vivo部分機型上傳二維碼後不出現在相冊，需要重啟後生效",
        messageThree: "將二維碼圖片拖到此處，或",
        messageFour: "只能上傳jpg/png檔",
        fileTransfer: "文件互傳",
        upFile: "上傳文件",
        messageFive: "將文件拖到此處，或",
        pleaseFilePath: "請輸入上傳目標路徑（加上檔名）",
        filePath: "拉取文件",
        pullFilePath: "請輸入拉取目標路徑",
        installFile: "下載檔案",
        app: "應用程式",
        pushInstall: "上傳安裝",
        apkFile: "將APK文件拖到此處，或",
        onlyAPKFile: "只能上傳apk檔",
        URLInstall: "URL安裝",
        hint: "請輸入apk下載連結或本地路徑",
        refresh: "刷新",
        appName: "App名稱",
        packagesName: "Package名稱",
        version: "版本號",
        subversion: "子版本號",
        nameSearch: "輸入App名稱或Package名稱搜索",
        open: "打開",
        unInstall: "卸載",
        packet: "網路抓包",
        startPacket: "開始抓包",
        downloadCertificate: "下載證書",
        cancelGlobalProxy: "取消全域代理",
        proxyConnection: "代理連接",
        useTeaching: "使用教學",
        connectWifi: "連接Wifi",
        connectWifiText: "未連接Wifi的話，需前往Wifi列表連接你的Wifi。Wifi需要與Agent的網路互通，連接後點擊刷新重新獲取Wifi狀態",
        installCertificate: "安裝證書",
        installCertificateText: "首次抓包需要安裝證書，點擊下載按鈕後下載證書並安裝。如瀏覽器無法訪問，請確認Agent已關閉防火牆。",
        startCapturing: "開始抓包",
        startCapturingText: "點擊開始抓包後，就可以開始體驗啦！（預設自動全域代理，如果不需要可以點擊取消全域代理按鈕，然後自行前往Wifi頁面手動設定）",
        screenshotQuick: "快速截圖",
        screenshot: "截圖",
        clean: "清空",
        noScreenshots: "暫無截圖",
        savePicture: "保存圖片",
        precautions: "注意事項",
        precautionsText: "該功能仍處於Beta測試中，暫時屏蔽reboot、rm、su等危險指令",
        inputSend: "輸入指令後，點擊Send或Enter發送",
        enterInput: "請輸入輸入過濾文本",
        UIAutomation: {
            UIAutomationName: "UI自動化",
            testInfo: "案例資訊",
            clean: "取消關聯",
            fatherPlayed: "所屬項目",
        },
        associatedProject: "關聯項目",
        chooseProject: "請選擇關聯項目",
        addCase: "新增案例",
        hintText: "提示",
        hintMessage: "該功能需要先從上方關聯測試案例",
        nativeControls: "原生控制項",
        retrieveControlEle: "重新獲取控制項元素",
        activity: "當前Activity",
        webViewList: "WebView列表",
        classFilter: "輸入class或resource-id進行過濾",
        addControls: "添加控制項",
        controlSnapshot: "控制項快照",
        titleMessage: "關聯專案後即可保存控制項",
        xpath: "xpath推薦",
        xpathNull: "暫無xpath推薦語法",
        absolutePath: "絕對路徑",
        centerXY: "中心座標",
        label: {
            one : "是否可勾選",
            two: "是否勾選",
            three: "是否可點擊",
            four: "是否被選",
            five: "是否顯示",
            six: "是否可用",
            seven: "是否可聚焦",
            eight: "是否聚焦",
            nine: "是否支持長按",
            ten: "是否支持滾動"
        },
        subTitleText: "請先獲取控制項元素，該功能需要初始化Driver",
        getEle: "獲取控制項元素",
        poco: "Poco控制項",
        getPoco: "獲取Poco控制項",
        pocoSDK: "Poco-SDK 接入指南",
        moreFeaturesAdd: "更多功能正在加入...",
        getPocoSDKMessage: "請先獲取Poco控制項元素，該功能需要引擎已接入Poco-SDK",
        webView: {
            webDebug: "網頁除錯",
            err: "暫無webView進程",
            getWeb: "獲取webView進程",
            againGetWeb: "重新獲取webView進程",
            Untitled: "無標題",
            nowDebug: "馬上除錯",
            return: "返回",
            nowWeb: "目前頁面",
            messageInfo: "如果您的瀏覽器不相容該功能，請您及時反映到",
            here: "這裡"
        }
    }
}
const indexIOSTS = {
    contentText: "切換佈局",
    successText: "切換成功",

}
const settingIndexTS = {
    center: {
        background: "後台管理中心",
        rights: "許可權設定",
        resource: "資源管理",
        roleText: "角色管理",
        userCon: "使用者配置",
        systemCon: "系統組態",
        scheduled: "系統排程任務"
    }
}


const resourceTS = {
    syncSucceed: "同步成功!",
    syncResource: "同步資源",
    syncResourceInfo: "同步資源說明",
    syncResourceInfoMessage: "重新全量更新應用內所有請求資源資訊，一般版本更新需要同步",
    pageData: {
        idText: "資源id",
        message: "描述",
        path : "路徑",
        inputPathName: "輸入路徑名稱",
        callMethod: "調用方法",
        requiredText: "是否需要鑒權"
    }
}


const roleTS = {
    dialogVisible : {
        addOrEdit : "新增/編輯角色",
        roleName: "角色名稱",
        roleNoNull: "角色名稱不能空白",
        inputParam: "請輸入參數名",
        paramNoNull: "參數值不能空白",
        roleInfo: "請輸入角色描述",
        addRole: "新增角色"
    },
    pageData: {
        role : "角色",
        nameL: "名稱",
        delMessage: "確定刪除該角色嗎?"

    }
}


const sysJobsTS = {
    code: {
        cleanFile : "清理系統檔",
        cleanFileText: "清理測試過程產生的圖片、錄影或遠控期間臨時apk包等等檔，保留天數為 [前兩次排程任務到本次定時任務間隔] 天數。",
        cleanResult: "清理測試報告",
        cleanResultText: "清理測試報告，保留天數為 [前兩次排程任務到本次定時任務間隔] 天數。",
        sendDayReport: "發送日報",
        sendDayReportText: "發送測試日報到群機器人.",
        sendWeekReport: "發送週報",
        sendWeekReportText: "發送測試週報到群機器人."
    },
    page: {
        type: "類型",
        nextTriggerDate: "下次觸發日期",
        editTime: "編輯系統排程任務",
    }
}

const usersTS = {
    dialogVisible: {
        editUser: "編輯用戶角色",
        userName: "用戶名",
        chooseUserName: "請選擇用戶角色"
    },
    pageData: {
        userId: "用戶id",
        userName: "用戶名",
        inputName: "輸入用戶名",
        roleConfiguration: "角色配置"
    }
}

const IOSRemote = {
    startSimulating: "開始模擬定位...",
    positioningRestored: "已恢復定位",
    loadingAppList: "載入應用列表中，請稍後...",
    calibration: "校準完畢",
    clipboard: {
        SentSuccessfully: "發送剪貼簿成功!",
        text: "獲取剪貼簿文字成功!",
        operate: "剪貼簿操作",
        inputText: "請輸入你要發送到剪貼簿的內容",
        send: "發送到剪貼簿",
        getText: "獲取剪貼簿文字",
    },
    clarityAndFps: "清晰度與FPS",
    calibrationCoordinates: "校準座標",
    volume: "音量",
    siri: {
        command: "Siri指令",
        inputCommand: "請輸入siri指令，例：what day is it today?",
    },
    positioning: {
        mock: "模擬定位",
        x: "經度",
        y: "緯度",
        start: "開始模擬",
        end: "恢復定位",
    },
    remoteWDA: "遠端WDA",
    driverNotSuccess: "driver未初始化成功",
    errLog: "檔互傳與crash日誌",
    waitOpen: "該功能即將開放",
    moveIPA: "將ipa文件拖到此處，或",
    onlyIPAFile: "只能上傳ipa檔",
    installIPA: "安裝IPA",
    pleaseIPAFilePath: "請輸入ipa下載連結或本地路徑",
    openWeb: "打開瀏覽器",
    web: {
        openInput: "打開瀏覽器後輸入網址",
    },
    messageStep: "進入手機【設定】->【一般】->【VPN與裝置管理 / 描述檔與設備管理 / 設備管理 / 描述檔】->找到mitmproxy憑證安裝",
    trustCertificate: "信任憑證",
    certificateStep: "進入手機【設定】->【一般】->【關於本機】最下方->【憑證信任設定】信任對應憑證",
    startPacketMessage: "點擊開始抓包後，Wifi設置手動代理，連接右上角對應的ip與port，即可開啟抓包",
    filterClassOrName: "輸入class或name進行過濾",
    predicate: "Predicate推薦",
    noRecommend: "暫無推薦語法",
}

export default {
    message: {
        robot,
        agent,
        common,
        devices,
        layout,
        form,
        dialog,
        routes,
        setting,
        androidTestCase,
        elements,
        globalParamsTs,
        homeTS,
        jobsTS,
        loginTS,
        modulesTS,
        packagesTS,
        projectIndexTS,
        publicStepTS,
        resultDetailTS,
        ResultsTS,
        stepListViewTS,
        testSuitesTS,
        versionsTS,
        androidRemoteTS,
        indexIOSTS,
        settingIndexTS,
        resourceTS,
        roleTS,
        sysJobsTS,
        usersTS,
        IOSRemote
    }
}
