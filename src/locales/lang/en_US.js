/**
 * EN language
 */
const robot = {
    robotType: 'Robot Type',
    robotTypePlaceholder: '请选择机器人类型',
    robotToken: 'WebHook',
    robotTokenPlaceholder: '请输入群机器人的WebHook',
    robotSecret: 'Secret',
    robotSecretPlaceholder: '（可选）请输入群机器人的密钥'
}
const agent = {
    newAgent: "New Agent",
    clickToCopy: 'Copy Key',
    status: {
        name: 'Status',
        online: 'ONLINE',
        offline: 'OFFLINE',
        s2ae: 'S2AE'
    },
    system: 'System',
    version: 'Version',
    operation: 'Operation',
    shutdown: 'Shutdown',
    edit: {
        name: 'Name',
        highTemp: "高温值",
        highTempTime: "高温超时",
        rule: 'Agent name cannot be empty',
        namePlaceholder: 'Please enter the Agent name'
    }
}

const devices = {
    title: 'Sonic Cloud',
    list: 'Device List',
    form: {
        model: 'Model',
        manufacturer: 'MFR',
        system: 'System',
        battery: {
            level: 'Level',
            temperature: 'Temp'
        },
        agent: 'Agent'
    },
    detail: {
        image: 'Image',
        uploadImg: 'Click to Upload',
        nickName: 'NickName',
        nickPlaceholder: 'Enter device nickname',
        name: 'Name',
        model: 'Model',
        udId: 'UDID',
        size: 'Screen Size',
        cpu: 'CPU',
        pwd: 'Password',
        pwdPlaceholder: 'Default Sonic123456',
        operation: 'Operation',
        reboot: 'Reboot',
        rebootTips: 'Are you sure to reboot the device?',
        deleteTips: 'Are you sure to delete the device?'
    },
    useRightNow: 'Use Now',
    moreDetail: 'More',
    deviceCenter: 'Device Center',
    agentCenter: 'Agent Center',
    status: {
        ONLINE: 'ONLINE',
        DEBUGGING: 'DEBUGGING',
        TESTING: 'TESTING',
        DISCONNECTED: 'DISCONNECTED',
        OFFLINE: 'OFFLINE',
        UNAUTHORIZED: 'UNAUTHORIZED',
        ERROR: 'ERROR'
    },
    filter: {
        all: 'All',
        platform: {
            ANDROID: 'Android',
            IOS: 'iOS',
            HARMONY: 'Harmony'
        },
        manufacturer: 'Manufacturer',
        cpu: 'CPU',
        size: 'Screen Size',
        agent: 'Agent',
        status: 'Status',
        placeholder: 'Please enter the model, name, or serialNumber',
        button: 'Filter'
    },
    refresh: 'Auto refresh',
    avgTem: 'Current average battery temperature: ',
    hint: 'Set Prompt',
    adTemperature: {
        temperature: "当设备温度≥",
        height: "高温值",
        onlyAd: "时（仅安卓），会通知机器人告警。",
        then: "当",
        timeout: "高温超时",
        continuedTime: "时间内温度持续≥",
        onlyAdNotice: "时（仅安卓），会通知机器人并",
        shutdown: "关机"
    }

}

// 布局相关
const layout = {
    // header
    theme: 'Current theme: ',
    languages: 'Languages',
    deviceCenter: 'Device Center',
    myInfo: 'My Information',
    changePassword: 'Change Password',
    signOut: 'Sign Out',
    aboutSonic: 'About Sonic',
    backHome: 'Home',
    welcomeSpeech: "Welcome to Sonic cloud real machine testing platform. Please select the project to enter.",
    addProject: "New Project",
    officialWebSite: 'Sonic Official WebSite',
    versionUpdateRecord: 'Version Record'
}
// 表单相关
const form = {
    save: 'Save',
    unknown: 'Unknown',
    notEmpty: "Not Empty!",
    differentInput: "The twice inputs are inconsistent!",
    username: "User Name",
    role: "Role",
    testEngineer: "Test Engineer",
    developmentEngineer: "Development Engineer",
    oldPasswordNotEmpty: "Old password can't be empty",
    oldPassword: "Old Password",
    inputOldPassword: "Please enter your old password",
    newPasswordNotEmpty: "New password can't be empty",
    newPassword: "New Password",
    inputNewPassword: "Please enter your new password",
    inputNewPasswordAgain: "Please enter your new password again",
    confirm: "Confirm",
    cancel: "Cancel"
}
// 弹窗相关
const dialog = {
    permissionDenied: 'Permission denied!',
    suffixError: 'Incorrect file suffix!',
    projectInfo: "Project Information",
    agentInfo: 'Agent Information',
    myInfo: "My Information",
    changePassword: "Change Password",
    copy: {
        success: 'Copy Successful!',
        fail: 'Copy failed!'
    }
}

//通用操作
const common = {
    null: 'Null',
    delete: 'Delete',
    edit: 'Edit',
    operate: "操作",
    copy: "复制",
}

// 路由
const routes = {
    login: "Login",
    home: "Home ",
    deviceCenter: "Device Center",
    remoteControl: "Remote Control",
    androidTestCase: "Android Test Case",
    iosTestCase: 'IOS Test Case',
    operateSteps: "Operating Steps",
    testSuite: "Test Suite",
    testResult: "Test Result",
    reportDetails: "Report Details",
    publicSteps: "Public Steps",
    controlElement: "Control Element",
    globalParameter: "Global Parameter",
    moduleManage: "Modules Management",
    versionIteration: "Version Iteration",
    timedTask: "Timed Task",
    projectSetting: "Project Setting",
    projectPage: "Project Home",
    resource: "",
    role: ""
}

const setting = {
    title: "Manage Center"
}
const androidTestCase = {
    addCase: "Add Test Case",
}

const elements = {
    eleInfo: "控件元素信息",
    stepInfo: "步骤信息",
    warn: "警告",
    warnInfo: "该控件已存在于以下步骤中,删除该控件将连同以下步骤一并删除！请前往对应步骤修改控件或确认对应步骤已废弃！",
    stepList: {
        stepId: "步骤Id",
        useCaseId: "所属用例Id",
        userCaseName:"所属用例名称",
        noCase: "无所属用例"
    },
    sureDelete: "确认删除",
    addElement: "添加控件元素",
    controlId: "控件id",
    inputNameSearch: "输入元素控件名称搜索",
    moduleName: "模块名称",
    targetingType: "定位类型",
    coordinate: "坐标",
    picture: "图片",
    notSpecified: "未指定",
    cEleValue: "控件元素值",
    inputKeySearch: "输入控件元素值搜索",
    sureDelInfo: "确定删除该控件元素吗?",

}

const globalParamsTs = {
    dialogVisible: {
        info: "全局参数信息",
        specialUse: "特殊使用",
        messageInfo: "如有多个参数值可以用 '{'|'}' 号隔开，分配设备时会随机分配，单次任务内参数值只会取同一个。【random】和【timestamp】参数已内置，可用作构造随机数据",
        keyName: "参数名",
        keyNameMessage: "参数名不能为空，建议使用英文",
        inputName: "请输入参数名",
        valueName: "参数值",
        valueNameMessage: "参数值不能为空，多个可以用 '{'|'}' 号隔开",
        inputValue: "请输入参数值，多个可以用 '{'|'}' 号隔开"
    },
    addGlobalParams: "添加全局参数",
    paramsList: {
        id: "参数id",
        name: "参数名",
        value: "参数值"
    },
    delMessage: "确定删除该全局参数吗?"
}

const homeTS = {
    projectOverview: "项目概况",
    testCaseManagement: "测试用例管理",
    testCase: {
        case: "测试用例",
        adCase: "安卓端测试用例",
        iosCase: "iOS端测试用例"
    },
    testSuite: "测试套件",
    testDataManagement: "测试数据管理",
    testResults: "测试结果分析",
    setting: "持续集成设置",
    package: {
        mange: "安装包管理",
        bulk: "批量装包",
    },
    crashReport: "崩溃上报",
    projectSetting: {
        setting: "项目相关设置",
        mange: "模块管理",
        update: "版本迭代",
    }
}

const jobsTS = {
    dialogVisible: {
        message: "定时任务信息",
        name: "任务名称",
        nameIsNull: "任务名称不能为空",
        inputName: "请输入任务名称",
        testSuiteIsNull: "测试套件不能为空",
        chooseTestSuite: "请选择测试套件",
        cron: "Cron表达式",
        cronIsNull: "Cron表达式不能为空",
        inputCron: "请输入Cron表达式"
    },
    addCron: "添加定时任务",
    whatCron: "什么是Cron表达式？",
    cronInfo: {
        one: "* 第一位，表示秒，取值 0-59",
        two: "* 第二位，表示分，取值 0-59",
        three: "* 第三位，表示小时，取值 0-23",
        four: "* 第四位，日期，取值 1-31",
        five: "* 第五位，月份，取值 1-12",
        six: "* 第六位，星期几，取值 1-7",
        seven: "* 第七位，年份，可以留空，取值 1970-2099",
        asterisk: "(*) 星号：可以理解为“每”的意思，每秒、每分",
        questionMark: "(?) 问号：只能出现在日期和星期这两个位置，表示这个位置的值不确定",
        bar: "(-) 表达一个范围，如在小时字段中使用 10-12 ，表示从10点到12点",
        comma: "(,) 逗号，表达一个列表值，如在星期字段中使用 1,2,4\n" +
            "，则表示星期一、星期二、星期四",
        slash: "(/) 斜杠，如 x/y ，x是开始值，y是步长，如在第一位(秒)使用\n" +
            "0/15，表示从0秒开始，每15秒",
        official: "官方解释：",
        demoOne: "0 0 3 * * ? 每天 3 点执行",
        demoTwo: "0 5 3 * * ? 每天 3 点 5 分执行",
        demoThree: "0 5 3 ? * * 每天 3 点 5 分执行",
        demoFour: "0 5/10 3 * * ? 每天 3 点 5 分，15 分，25 分，35 分，45 分，55\n" +
            "分这几个点执行",
        demoFive: "0 10 3 ? * 1 每周星期天的 3 点10 分执行，注：1 表示星期天",
        demoSix: "0 10 3 ? * 1#3 每个月的第三个星期的星期天 执行，#号只能出现在星期的位置",
        hint: "注：第六位(星期几)中的数字可能表达不太正确，可以使用英文缩写来表示，如：Sun"
    },
    taskId: "任务id",
    run: "立即运行",
    del: "确定删除该定时任务吗？"
}

const loginTS = {
    testPlatform: "一站式云真机测试平台",
    login: {
        message: "注册账号/LDAP域账号登录",
        register: "注册账号登录",
        LDAPLogin: "LDAP域账号登录",
    },
    user: {
        inputUserName: "请输入账户名",
        inputPassword: "请输入密码",
        longin: "登 入",
        register: "注 册",
    }
}

const modulesTS = {
    info: "模块信息",
    name: "模块名称",
    isNotNull: "模块名称不能为空",
    inputName: "请输入模块名称",
    sure: "确 定",
    add: "添加模块",
    del: "确定删除该模块吗?",
}

const packagesTS = {
    accessGuide: "接入指南",
    buildLink: "构建链接",
    platform: "平台",
    no: "未指定",
    packageName: "安装包名称",
    branch: "分支",
    inputName: "输入分支名称",
    downloadLink: "下载地址",
    copyUrl: "复制url",
    creatTime: "创建时间",

}

const projectIndexTS = {
    code: {
        lastWeek: "最近一周",
        lastMonth: "最近一个月",
        lastThreeMonth: "最近三个月",
        day: "天",
        hour: "小时",
        minute: "分",
        second: "秒",
        runInfo: "运行情况总览",
        unit: "单位(%)",
        passRate: "当天通过率",
        stateDis: "状态分布",
        other: "其他",
        pass: "通过",
        fail: "失败",
    },
    page: {
        to: "至",
        startTime: "开始日期",
        endTime: "结束日期",
        caseTop5: "用例运行时长排行榜（Top 5）",
        caseId: "用例id",
        caseName: "用例名称",
        timeLong: "时长",
        equipmentTop5: "设备运行时长排行榜（Top 5）",
        eqId: "设备型号",
        serialNumber: "序列号",
    }
}

const publicStepTS = {
    info: "公共步骤信息",
    add: "添加公共步骤",
    id: "公共步骤Id",
    name: "公共步骤名称",
    platform: "平台",
    android: "安卓",
    list: "步骤列表",
    stepId: "步骤Id",
    useCase: "所属用例",
    stepInfo: "步骤详情",
    viewSteps: "查看步骤",
    sureDel: "确定删除该公共步骤吗?",
}

const resultDetailTS = {
    memoryInfo: "内存详情",
    unit: "单位(KB)",
    battery: "电量详情",
    memoryShort: "内存数据不足",
    batteryShort: "电量数据不足",
    performance: "性能数据不足",
    caseRun: "用例运行状态分布",
    noStart: "未开始",
    runIng: "运行中",
    caseStatus: "用例状态",
    page: {
        reportInfo: "报告信息",
        resultId: "结果Id",
        executeUser: "执行用户",
        runStatus: "运行状态",
        testPass: "测试通过",
        testFail: "测试失败",
        testAlert: "测试告警",
        endTime: "结束时间",
        totalTime: "总耗时",
        runInfo: "运行信息",
        total: "耗时",
        runLog: "运行日志",
        performanceInfo: "性能信息",
        runRecording: "运行录像",
        onRecording: "暂无录像"
    }
}

const ResultsTS = {
    name: "测试套件名称",
    testReport: "测试报告",
    lookReport: "查看报告",
    interruptTest: "确定中断本次测试吗?",
    interrupt: "中断",
    del: "确定删除该测试报告吗?",
}

const stepListViewTS = {
    caseInfo: "用例详情",
    platformToBe: "所属平台",
    module: "模块",
    versionName: "版本名称",
    designer: "设计人",
    last: "最后修改日期",
    testMessage: "用例描述",
}
const testSuitesTS = {
    testStart: "测试已开始...",
    info: "测试套件信息",
    add: "添加测试套件",
    id: "套件Id",
    searchMessage: "输入测试套件名称搜索",
    kitPlatform: "套件平台",
    coverType: "覆盖类型",
    testCover: "用例覆盖",
    deviceCover: "设备覆盖",
    associated: "关联设备",
    device: {
        id: "设备id",
    },
    viewList: "查看列表",
    associatedCase: "关联用例",
    run: "运行",
    delMessage: "确定删除该测试套件吗？套件下的用例将移出该套件"
}

const versionsTS = {
    iteration: "版本迭代信息",
    noNull: "版本名称不能为空",
    inputName: "请输入版本名称",
    time: "时间",
    timeNoNull: "时间不能为空",
    selectTime: "选择日期时间",
    addVersions: "添加版本迭代",
    delMessage: "确定删除该版本吗？",

}

const androidRemoteTS = {
    repairedSuccess: "修复成功",
    associationSuccess: "关联成功",
    copySuccess: "复制成功",
    copyFail: "复制失败",
    noWebSocket: "不支持WebSocket",
    connection: "连接成功",
    systemException: "系统出现异常！已断开远程控制！",
    messageOne: "检测到屏幕旋转！请稍后...",
    getPocoSuccess: "获取Poco控件成功！",
    getPocoFail: "获取POCO控件失败！请确保已经打开对应游戏引擎并接入Poco-SDK",
    pullFile: {
        success: "拉取文件成功",
        fail: "拉去文件失败"
    },
    pushFile: {
        success: "上传文件成功！",
        fail: "上传文件失败！上传目录需要补齐文件名"
    },
    getEle: {
        success: "获取原生控件元素成功！",
        fail: "获取控件元素失败！请重新获取"
    },
    install: {
        success: "安装成功!",
        fail: "安装失败!",
    },
    uninstall: {
        success: "卸载成功！",
        fail: "卸载失败!",
    },
    runOver: "运行完毕",
    getSuccess: "获取成功!",
    getPsSuccess: "获取快照成功!",
    loadIng: "加载应用列表中，请稍后...",
    messageTwo: "已取消自动全局代理，请手动配置代理",
    startUninstall: "开始卸载！请稍后...",
    failErr: "文件格式有误！",
    addOne: "只能添加一个文件！请先移除旧文件",
    startInstall: "开始安装！请稍后...",
    high: "高",
    middle: "中",
    low: "低",
    deviceFail: "该设备暂时不可使用!",
    remoteAudio: "远程音频已开启，请勿重复操作！",
    audio: "远程音频传输已连接!",
    audioFail: "远程音频传输已断开！",
    audioSuccess: "远程音频同步成功！",
    code: {
        elementsSnapshot: "控件元素快照",
        eleName: "控件元素名称",
        eleNullName: "控件元素名称不能为空",
        inputName: "请输入控件元素名称",
        saveEle: "保存为图片元素",
        preparingImager: "准备图像中...",
        systemVersion: "系统版本",
        projectionMode: "投屏模式",
        frameNumber: "投屏帧数",
        manualRepair: "手动修复",
        fixBlackScreen: "修复黑屏",
        fixTouch: "修复触控",
        fixScreen: "修复横竖屏",
        remoteAudioTran: "远程音频传输",
        batterySimulation: "电池模拟",
        simulatePowerOutage: "模拟断电",
        reset: "重置",
        physicalLookup: "物理查找",
        BV: "亮度/音量",
        dial: "拨号",
        photograph: "拍照",
        browser: "浏览器",
        LUS:"锁定/解锁屏幕",
        remoteControlPanel: "远控面板",
        inputText: "输入文本",
        pleaseText: "请输入要发送的文本，支持简体中文",
        send: "发送",
        remoteADB: "远程ADB",
        noAgent: "所在Agent未开启该功能！",
        UIAutomator2ServerInit: "初始化UIAutomator2Server",
        automaticInitialization: "下次进入自动初始化",
        scanQRCode:"扫描二维码",
        errTitle: "OPPO、vivo部分机型上传二维码后不出现在相册，需要重启后生效",
        messageThree: "将二维码图片拖到此处，或",
        messageFour: "只能上传jpg/png文件",
        fileTransfer: "文件互传",
        upFile: "上传文件",
        messageFive: "将文件拖到此处，或",
        pleaseFilePath: "请输入上传目标路径（加上文件名）",
        filePath: "拉取文件",
        pullFilePath: "请输入拉取目标路径",
        installFile: "下载文件",
        app: "应用程序",
        pushInstall: "上传安装",
        apkFile: "将APK文件拖到此处，或",
        onlyAPKFile: "只能上传apk文件",
        URLInstall: "URL安装",
        hint: "请输入apk下载链接或本地路径",
        refresh: "刷新",
        appName: "应用名",
        packagesName: "包名",
        version: "版本号",
        subversion: "子版本号",
        nameSearch: "输入应用名或包名搜索",
        open: "打开",
        unInstall: "卸载",
        packet: "网络抓包",
        startPacket: "开始抓包",
        downloadCertificate: "下载证书",
        cancelGlobalProxy: "取消全局代理",
        proxyConnection: "代理连接",
        useTeaching: "使用教学",
        connectWifi: "连接Wifi",
        connectWifiText: "未连接Wifi的话，需前往Wifi列表连接你的Wifi。Wifi需要与Agent的网络互通，连接后点击刷新重新获取Wifi状态",
        installCertificate: "安装证书",
        installCertificateText: "首次抓包需要安装证书，点击下载按钮后下载证书并安装。如浏览器无法访问，请确认Agent已关闭防火墙。",
        startCapturing: "开始抓包",
        startCapturingText: "点击开始抓包后，就可以开始体验啦！（默认自动全局代理，如果不需要可以点击取消全局代理按钮，然后自行前往Wifi页面手动配置）",
        screenshotQuick: "快速截图",
        screenshot: "截图",
        clean: "清空",
        noScreenshots: "暂无截图",
        savePicture: "保存图片",
        precautions: "注意事项",
        precautionsText: "该功能仍处于Beta测试中，暂时屏蔽reboot、rm、su等风险指令",
        inputSend: "输入指令后，点击Send或回车发送",
        enterInput: "请输入输入过滤文本",
        UIAutomation: {
            UIAutomationName: "UI自动化",
            testInfo: "用例详情",
            clean: "取消关联",
            fatherPlayed: "所属项目",
        },
        associatedProject: "关联项目",
        chooseProject: "请选择关联项目",
        addCase: "新增用例",
        hintText: "提示",
        hintMessage: "该功能需要先从上方关联测试用例",
        nativeControls: "原生控件",
        retrieveControlEle: "重新获取控件元素",
        activity: "当前Activity",
        webViewList: "WebView列表",
        classFilter: "输入class或resource-id进行过滤",
        addControls: "添加控件",
        controlSnapshot: "控件快照",
        titleMessage: "关联项目后即可保存控件",
        xpath: "xpath推荐",
        xpathNull: "暂无xpath推荐语法",
        absolutePath: "绝对路径",
        centerXY: "中心坐标",
        label: {
            one : "是否可勾选",
            two: "是否勾选",
            three: "是否可点击",
            four: "是否被选",
            five: "是否显示",
            six: "是否可用",
            seven: "是否可聚焦",
            eight: "是否聚焦",
            nine: "是否支持长按",
            ten: "是否支持滚动"
        },
        subTitleText: "请先获取控件元素，该功能需要初始化Driver",
        getEle: "获取控件元素",
        poco: "Poco控件",
        getPoco: "获取Poco控件",
        pocoSDK: "Poco-SDK 接入指南",
        moreFeaturesAdd: "更多功能正在加入...",
        getPocoSDKMessage: "请先获取Poco控件元素，该功能需要引擎已接入Poco-SDK",
        webView: {
            webDebug: "网页调试",
            err: "暂无webView进程",
            getWeb: "获取webView进程",
            againGetWeb: "重新获取webView进程",
            Untitled: "无标题",
            nowDebug: "马上调试",
            return: "返回",
            nowWeb: "当前页面",
            messageInfo: "如果您的浏览器不兼容该功能，请您及时反馈到",
            here: "这里"
        }
    }
}

const indexIOSTS = {
    contentText: "切换布局",
    successText: "切换成功",
}
const settingIndexTS = {
    center: {
        background: "后台管理中心",
        rights: "权限配置",
        resource: "资源管理",
        roleText: "角色管理",
        userCon: "用户配置",
        systemCon: "系统配置",
        scheduled: "系统定时任务"
    }
}

const resourceTS = {
    syncSucceed: "同步成功!",
    syncResource: "同步资源",
    syncResourceInfo: "同步资源说明",
    syncResourceInfoMessage: "重新全量更新应用内所有请求资源信息，一般版本更新需要同步",
    pageData: {
        idText: "资源id",
        message: "描述",
        path : "路径",
        inputPathName: "输入路径名称",
        callMethod: "调用方法",
        requiredText: "是否需要鉴权"
    }
}


const roleTS = {
    dialogVisible : {
        addOrEdit : "添加/编辑角色",
        roleName: "角色名称",
        roleNoNull: "角色名称不能为空",
        inputParam: "请输入参数名",
        paramNoNull: "参数值不能为空",
        roleInfo: "请输入角色描述",
        addRole: "添加角色"
    },
    pageData: {
        role : "角色",
        nameL: "名称",
        delMessage: "确定删除该角色吗?"

    }
}

const sysJobsTS = {
    code: {
        cleanFile : "清理系统文件",
        cleanFileText: "清理测试过程产生的图片、录像或远控期间临时apk包等等文件，保留天数为 [前两次定时任务到本次定时任务间隔] 天数。",
        cleanResult: "清理测试报告",
        cleanResultText: "清理测试报告，保留天数为 [前两次定时任务到本次定时任务间隔] 天数。",
        sendDayReport: "发送日报",
        sendDayReportText: "发送测试日报到群机器人.",
        sendWeekReport: "发送周报",
        sendWeekReportText: "发送测试周报到群机器人."
    },
    page: {
        type: "类型",
        nextTriggerDate: "下次触发日期",
        editTime: "编辑系统定时任务",
    }
}

const usersTS = {
    dialogVisible: {
        editUser: "编辑用户角色",
        userName: "用户名",
        chooseUserName: "请选择用户角色"
    },
    pageData: {
        userId: "用户id",
        userName: "用户名",
        inputName: "输入用户名",
        roleConfiguration: "角色配置"
    }
}

const IOSRemote = {
    startSimulating: "开始模拟定位...",
    positioningRestored: "已恢复定位",
    loadingAppList: "加载应用列表中，请稍后...",
    calibration: "校准完毕",
    clipboard: {
        SentSuccessfully: "发送剪切板成功!",
        text: "获取剪切板文本成功!",
        operate: "剪切板操作",
        inputText: "请输入你要发送到剪切板的内容",
        send: "发送到剪切板",
        getText: "获取剪切板文本",
    },
    clarityAndFps: "清晰度与FPS",
    calibrationCoordinates: "校准坐标",
    volume: "音量",
    siri: {
        command: "Siri指令",
        inputCommand: "请输入siri指令，例：what day is it today?",
    },
    positioning: {
        mock: "模拟定位",
        x: "经度",
        y: "纬度",
        start: "开始模拟",
        end: "恢复定位",
    },
    remoteWDA: "远程WDA",
    driverNotSuccess: "driver未初始化成功",
    errLog: "文件互传与崩溃日志",
    waitOpen: "该功能即将开放",
    moveIPA: "将ipa文件拖到此处，或",
    onlyIPAFile: "只能上传ipa文件",
    installIPA: "安装IPA",
    pleaseIPAFilePath: "请输入ipa下载链接或本地路径",
    openWeb: "打开浏览器",
    web: {
        openInput: "打开浏览器后输入网址",
    },
    messageStep: "进入手机【设置】->【通用】->【VPN与设备管理 / 描述文件与设备管理 / 设备管理 / 描述文件】->找到mitmproxy证书安装",
    trustCertificate: "信任证书",
    certificateStep: "进入手机【设置】->【通用】->【关于本机】最下方->【证书信任设置】信任对应证书",
    startPacketMessage: "点击开始抓包后，Wifi设置手动代理，连接右上角对应的ip与端口，即可开启抓包",
    filterClassOrName: "输入class或name进行过滤",
    predicate: "Predicate推荐",
    noRecommend: "暂无推荐语法",
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
