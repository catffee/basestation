var app = getApp();
//********************************** */
var dice = [0,0,0,0,0,0]
var dice_counter = [0,0,0,0,0,0,0]
//********************************** */
//状元相关
var champion_level = 0
/*
6:状元插金花
5:六勃红
4:六勃黑
3:五红
2:五子登科
1:状元
*/
var champion_counter = [0,0,0,0,0,0,0]
var champion_id = 0
var champion_point = 0
var remain_prizes = [32,16,8,4,2]
// var remain_prizes = [1,1,0,0,0]
var prize_id = 0
/*三种改变：1：同级别点数相等或者更大，2：级别更高，3：自己博到更小的*/
//玩家相关
var ifSeat = [false,false,false,false,false,false,false,false]
var ifStart = false
//********************************** */
var player_list = ["","","","","","","",""]
var singlePlayer = {
  player_ID:"",
  player_index:0,
  player_lastChampion:[0,0,0,0,0,0],
  player_prize_counter:[0,0,0,0,0],
  player_champion_level : 0,
  lastChampion_name: "无"
}

for(var i=0;i<8;i++){
  player_list[i] = new Array(5);
  player_list[i] = null;
  player_list[i] = new Object;
  player_list[i]["player_ID"] = "座位"+(i+1)
  player_list[i]["player_index"] = i
  player_list[i]["player_lastChampion"] = [0,0,0,0,0,0]
  player_list[i]["player_prize_counter"] = [0,0,0,0,0]
  player_list[i]["player_champion_level"] = 0,
  player_list[i]["lastChampion_name"] = "无"
}

var now_index = 0

var ifShowPrize = ["none","none","none","none","none","none"]

// console.log(singlePlayer)
// console.log(player_list[0])

var ifShock = true
var ifShockToStart = true

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ifShowRules:"none",
    ifShowRecord1:"flex",
    ifShowRecord2:"none",
    ifShowSeat1:"flex",
    ifShowSeat2:"flex",
    ifShowSeat3:"flex",
    ifShowSeat4:"flex",
    ifShowSeat5:"flex",
    ifShowSeat6:"flex",
    ifShowSeat7:"flex",
    ifShowSeat8:"flex",
    ifShowUse1:"none",
    ifShowUse2:"none",
    ifShowUse3:"none",
    ifShowUse4:"none",
    ifShowUse5:"none",
    ifShowUse6:"none",
    ifShowUse7:"none",
    ifShowUse8:"none",
    playerShow:{
      player_ID:0,
      player_index:0,
      player_lastChampion:[0,0,0,0,0,0],
      player_prize_counter:[]
    },
    ifShowPrize:ifShowPrize,
    maxChampion:[],
    maxChampion_name : "无",
    ifShowDice:"none",
    ifNotUseButton:false,
    ifShowRecord:"none",
    ifShowCenterDice:"none",
    nowDice:[4,4,4,4,1,1],
    canNotChooseSeat:false,
    ifShowStartButton:"",
    remain_prizes : remain_prizes,
    isShowRemain_prizes : "none",
    ifShowSetting : "none",
    folderName: "game",
    userIconName : ["PlayerIcon","PlayerIcon","PlayerIcon","PlayerIcon","PlayerIcon","PlayerIcon","PlayerIcon","PlayerIcon"]
  },

  /** 
   * 玩家加入游戏
  */
  onuButton1: function () {
    if(this.data.ifShowSeat1=="flex"){
      this.setData({ifShowSeat1:"none"})
      this.setData({ifShowUse1:"flex"})
      ifSeat[0] = true
    }else{
      this.setData({ifShowSeat1:"flex"})
      this.setData({ifShowUse1:"none"})
      ifSeat[0] = false
    }
    console.log("加入或退出游戏1")
  },
  onuButton2: function () {
    if(this.data.ifShowSeat2=="flex"){
      this.setData({ifShowSeat2:"none"})
      this.setData({ifShowUse2:"flex"})
      ifSeat[4] = true
    }else{
      this.setData({ifShowSeat2:"flex"})
      this.setData({ifShowUse2:"none"})
      ifSeat[4] = false
    }
    console.log("加入或退出游戏5")
  },
  onuButton3: function () {
    if(this.data.ifShowSeat3=="flex"){
      this.setData({ifShowSeat3:"none"})
      this.setData({ifShowUse3:"flex"})
      ifSeat[6] = true
    }else{
      this.setData({ifShowSeat3:"flex"})
      this.setData({ifShowUse3:"none"})
      ifSeat[6] = false
    }
    console.log("加入或退出游戏7")
  },
  onuButton4: function () {
    if(this.data.ifShowSeat4=="flex"){
      this.setData({ifShowSeat4:"none"})
      this.setData({ifShowUse4:"flex"})
      ifSeat[2] = true
    }else{
      this.setData({ifShowSeat4:"flex"})
      this.setData({ifShowUse4:"none"})
      ifSeat[2] = false
    }
    console.log("加入或退出游戏3")
  },
  onuButton5: function () {
    if(this.data.ifShowSeat5=="flex"){
      this.setData({ifShowSeat5:"none"})
      this.setData({ifShowUse5:"flex"})
      ifSeat[7] = true
    }else{
      this.setData({ifShowSeat5:"flex"})
      this.setData({ifShowUse5:"none"})
      ifSeat[7] = false
    }
    console.log("加入或退出游戏8")
  },
  onuButton6: function () {
    if(this.data.ifShowSeat6=="flex"){
      this.setData({ifShowSeat6:"none"})
      this.setData({ifShowUse6:"flex"})
      ifSeat[1] = true
    }else{
      this.setData({ifShowSeat6:"flex"})
      this.setData({ifShowUse6:"none"})
      ifSeat[1] = false
    }
    console.log("加入或退出游戏2")
  },
  onuButton7: function () {
    if(this.data.ifShowSeat7=="flex"){
      this.setData({ifShowSeat7:"none"})
      this.setData({ifShowUse7:"flex"})
      ifSeat[5] = true
    }else{
      this.setData({ifShowSeat7:"flex"})
      this.setData({ifShowUse7:"none"})
      ifSeat[5] = false
    }
    console.log("加入或退出游戏6")
  },
  onuButton8: function () {
    if(this.data.ifShowSeat8=="flex"){
      this.setData({ifShowSeat8:"none"})
      this.setData({ifShowUse8:"flex"})
      ifSeat[3] = true
    }else{
      this.setData({ifShowSeat8:"flex"})
      this.setData({ifShowUse8:"none"})
      ifSeat[3] = false
    }
    console.log("加入或退出游戏4")
  },

  /**
   * 剩余奖励查看
   */
  rewardButton1: function () {
    if(this.data.ifShowRecord1=="flex"){
      this.setData({
        ifShowRecord1:"none",
        ifShowRecord2:"flex",
        isShowRemain_prizes : ""
      })
    }
    // console.log("查看剩余奖品")
  },
  rewardButton2: function () {
    this.setData({
      ifShowRecord1:"flex",
      ifShowRecord2:"none",
      isShowRemain_prizes : "none"
    })
    // console.log("查看剩余奖品")
  },

  /**
   * 界面控制相关
   */
  onReturn: function(){
    wx.redirectTo({
      url: "../index/index"
    })
    console.log("返回")
    ifSeat = [false,false,false,false,false,false,false,false]
    player_list = ["","","","","","","",""]
    for(var i=0;i<8;i++){
      player_list[i] = new Array(5);
      player_list[i] = null;
      player_list[i] = new Object;
      player_list[i]["player_ID"] = "座位"+(i+1)
      player_list[i]["player_index"] = i
      player_list[i]["player_lastChampion"] = [0,0,0,0,0,0]
      player_list[i]["player_prize_counter"] = [0,0,0,0,0]
      player_list[i]["player_champion_level"] = 0,
      player_list[i]["lastChampion_name"] = "无"
    }
    remain_prizes = [32,16,8,4,2]
  },

  onRules: function () {
    if(this.data.ifShowRules=="none"){
      this.setData({ifShowRules:"flex"})
    }
    console.log("显示或者隐藏rules")
  },

  onRules1: function () {
    if(this.data.ifShowRules=="flex"){
      this.setData({ifShowRules:"none"})
    }
    console.log("显示或者隐藏rules")
  },

  onSetting: function () {
    console.log("setting")
    if(this.data.ifShowSetting=="none"){
      this.setData({ifShowSetting:""})
    }else{
      this.setData({ifShowSetting:"none"})
    }
  },

  /**
   * 博饼逻辑相关
   */
  startGame:function(){
    this.setData({ifShowStartButton:"none"})
    this.getNextSeat()
      this.setData({
        ifShowSeat1:"none",
        ifShowSeat2:"none",
        ifShowSeat3:"none",
        ifShowSeat4:"none",
        ifShowSeat5:"none",
        ifShowSeat6:"none",
        ifShowSeat7:"none",
        ifShowSeat8:"none",
        userIconName : ["icon1","icon5","icon7","icon3","icon8","icon2","icon6","icon4"],
        folderName: "playerIcon"
      })
      app.globalData.ifSeat = [false,false,false,false,false,false,false,false]
      app.globalData.player_list = ["","","","","","","",""]
      app.globalData.maxChampion_name = "无"
      console.log("首次点击")
      ifStart = true
  },

  BoBing: function(){
    let that = this
    console.log("")
    console.log("当前玩家座位",now_index)
    this.GetRandom()
    if(ifShock){
      wx.vibrateLong("heavy")
    }
    this.setData({
      ifShowDice:"flex",
      ifNotUseButton:true,
      ifShowRecord:"",
      ifShowCenterDice:"none",
      nowDice:dice,
      canNotChooseSeat:true
    })
    this.updatePlay_list()
    setTimeout(function () {
      that.setData({
        ifShowDice:"none",
        ifNotUseButton:false,
        ifShowCenterDice:"",
        playerShow:{
          player_lastChampion : player_list[now_index].player_lastChampion
        }
      })
      if(that.ifIsChampion()){
        that.showChampion()
      }else{
        that.checkOthers() 
        that.showPrize()
      }
      that.updatePlay_list()
      that.getNextSeat()
    }, 600)
  },
  updatePlay_list: function(){
    app.globalData.player_list = player_list
    console.log(app.globalData.player_list)
    this.setData({
      playerShow:player_list[now_index]
    })
    var temp = ""
    switch(player_list[now_index].player_champion_level){
      case 0: this.setData({maxChampion_name:"无"}) ;break;
      case 1: this.setData({maxChampion_name:"状元"}) ;break;
      case 2: this.setData({maxChampion_name:"五子登科"}); break;
      case 3: this.setData({maxChampion_name:"五红"}) ;break;
      case 4: this.setData({maxChampion_name:"六勃黑"}) ;break;
      case 5: this.setData({maxChampion_name:"六勃红"}) ;break;
      case 6: this.setData({maxChampion_name:"状元插金花"}); break;
    }

    if(champion_level>0&&remain_prizes[4]==0&&remain_prizes[2]==0&&remain_prizes[3]==0&&remain_prizes[1]==0&&remain_prizes[0]==0){
      console.log("结束了啊!!!")
      console.log("结束了啊!!!")
      console.log("结束了啊!!!")
      
      app.globalData.ifSeat = ifSeat
      wx.redirectTo({
        url: "../end/end"
      })
    }
  },
  showPrize: function(){
    let that = this
    if(prize_id>0){
      ifShowPrize[prize_id-1] = ""
      this.setData({ifShowPrize: ifShowPrize})
      console.log(ifShowPrize)
      setTimeout(function () {
        ifShowPrize[prize_id-1] = "none"
        that.setData({ifShowPrize: ifShowPrize})
      }, 500)
    }
  },
  showChampion:function(){
    let that = this
    ifShowPrize[5] = ""
    this.setData({ifShowPrize: ifShowPrize})
    setTimeout(function () {
      ifShowPrize[5] = "none"
      that.setData({
        ifShowPrize: ifShowPrize
      })
    }, 500)
  },
  /**
   * 
   * 玩家相关
   * 
   */
  //获取下一个位置
  getNextSeat: function(){
    var hasPeople = false
    for(var i=0;i<8;i++){
      if (ifSeat[i]) {
        hasPeople = true
      }
    }
    if(hasPeople){
      now_index++
      while(!ifSeat[now_index]){
        now_index++
        if(now_index>8){
          now_index = 0
        }
      }
    }else{
      console.log("没人玩个der~ ?")
    }
  },
  //将奖项加到玩家列表
  printPrize: function(){
    console.log("------玩家",player_list[now_index].player_ID,"所有奖品------")
    console.log("一秀：",player_list[now_index].player_prize_counter[0])
    console.log("二举：",player_list[now_index].player_prize_counter[1])
    console.log("四进：",player_list[now_index].player_prize_counter[2])
    console.log("三红：",player_list[now_index].player_prize_counter[3])
    console.log("对堂：",player_list[now_index].player_prize_counter[4])
  },
  /*
    骰子相关
  */
  //调用该函数则生成骰子随机数
  GetRandom: function(){
    for(var i = 0; i < 6; i++){
      dice[i] = (Math.random()*5+1).toFixed(0)
    }
    for(var i = 0; i < 7; i++){
      dice_counter[i] = 0
    }
    for(var i = 0; i < 6; i++){
      dice_counter[dice[i]]++
    }
    // dice = dice.sort()
    console.log("骰子点数",dice)
    console.log("骰子计数",dice_counter)
  },
  //检测状元
  ifIsChampion: function(){
    var ifChampion = false
    var maxNumberOfDice = this.GetMaxNumberOfDice()
    var tempLevel = 0
    champion_counter = dice_counter
    if(dice_counter[4]==4&&dice_counter[1]==2){
      ifChampion = true
      tempLevel = 6
      this.setData({maxChampion_name:"状元插金花"})
      player_list[now_index].lastChampion_name = "状元插金花"
      console.log("状元插金花")
    }else if(dice_counter[4]==6){
      ifChampion = true
      tempLevel = 5
      this.setData({maxChampion_name:"六勃红"})
      player_list[now_index].lastChampion_name = "六勃红"
      console.log("六勃红")
    }else if(maxNumberOfDice==6){
      ifChampion = true
      tempLevel = 4
      this.setData({maxChampion_name:"六勃黑"})
      player_list[now_index].lastChampion_name = "六勃黑"
      console.log("六勃黑")
    }else if(dice_counter[4]==5){
        ifChampion = true
        tempLevel = 3
        this.setData({maxChampion_name:"红五"})
        player_list[now_index].lastChampion_name = "红五"
        console.log("红五")
    }else if(maxNumberOfDice==5){
      ifChampion = true
      tempLevel = 2
      this.setData({maxChampion_name:"五子登科"})
      player_list[now_index].lastChampion_name = "五子登科"
      console.log("五子登科")
    }else if(dice_counter[4]==4){
      ifChampion = true
      tempLevel = 1
      this.setData({maxChampion_name:"状元"})
      player_list[now_index].lastChampion_name = "状元"
      console.log("状元")
    }
    if(tempLevel>0){
      player_list[now_index].player_champion_level = tempLevel
      for(var i=0;i<6;i++){
        player_list[now_index].player_lastChampion[i] = dice[i]
      }
      console.log("******************当前状元点数",player_list[now_index].player_lastChampion)
      console.log()
    }
    if(tempLevel != 0){
      if(tempLevel > champion_level){
        //将上一次的等级和这一次的对比，大的话则直接变
        champion_level = tempLevel
        champion_counter = dice_counter
        champion_point = this.countOtherDice()
        console.log("状元等级更高：",champion_level)
        console.log("更新状元状态")
        //等级相等的话根据嵌套判断
      }else if(tempLevel == champion_level){
        console.log("状元等级相等")
        this.updateChampion()
        champion_counter = dice_counter
      }else{
        console.log("状元等级低，未改变")
      }
      console.log("状元点数",champion_point)
    }
    return ifChampion
  },
  //检测其他的奖项
  checkOthers: function(){
    var maxNumberOfDice = this.GetMaxNumberOfDice()
    if(maxNumberOfDice==1){
      prize_id = 5
      if(remain_prizes[4]==0){
        console.log("很遗憾，对堂博完了")
      }else{
        player_list[now_index].player_prize_counter[prize_id-1]++
        remain_prizes[4]--
        console.log("对堂")
      }
    }else if(dice_counter[4]==3){
      prize_id = 4
      if(remain_prizes[3]==0){
        console.log("很遗憾，三红博完了")
      }else{
        player_list[now_index].player_prize_counter[prize_id-1]++
        remain_prizes[3]--
        console.log("三红")
      }
    }else if(maxNumberOfDice==4){
      prize_id = 3
      if(remain_prizes[2]==0){
        console.log("很遗憾，四进博完了")
      }else{
        player_list[now_index].player_prize_counter[prize_id-1]++
        remain_prizes[2]--
        console.log("四进")
      }
    }else if(dice_counter[4]==2){
      prize_id = 2
      if(remain_prizes[1]==0){
        console.log("很遗憾，二举博完了")
      }else{
        player_list[now_index].player_prize_counter[prize_id-1]++
        remain_prizes[1]--
        console.log("二举")
      }
    }else if(dice_counter[4]==1){
      prize_id = 1
      if(remain_prizes[0]==0){
        console.log("很遗憾，一秀博完了")
      }else{
        player_list[now_index].player_prize_counter[prize_id-1]++
        remain_prizes[0]--
        console.log("一秀")
      }
    }else{
      prize_id = 0
      console.log("啥都没有")
    }
    this.setData({
      remain_prizes:remain_prizes
    })
    console.log("剩余奖项",remain_prizes)
  },
  updateChampion: function(){
    //champion_counter = dice_counter
    var otherDiceSum = this.countOtherDice()
    switch(champion_level){
      case 6:
      case 5:
      case 4:
        champion_counter = dice_counter
        console.log("最大状元改变！！！")
        //用户标识更改为最新的
      break;
      case 3:
      case 2:
      case 1:
        if(otherDiceSum>=champion_point){
          champion_point = otherDiceSum
          console.log("最大状元改变！！！")
          champion_counter = dice_counter
          champion_id = 1
        }else{
          console.log("最大状元未改变。。。")
        }
      break;
    }
  },
  //算状元时其他骰子点数和
  countOtherDice: function(){
    var maxNumberOfDice = this.GetMaxNumberOfDice()
    var sum = 0
    for(var i=0;i<7;i++){
      if(champion_counter[i]!=0&&champion_counter[i]<maxNumberOfDice){
        sum += i*champion_counter[i]
      }
    }
    return sum
  },
  //获取点数相同最多的数目
  GetMaxNumberOfDice: function(){
    var num = 0
    for(var i=1;i<7;i++){
      if(dice_counter[i]>num){
        num = dice_counter[i]
      }
    }
    return num
  },
  /**
   * 
   * 设置界面
   */
  settingIfShock: function(e){
    ifShock = e.detail.value
    if(ifShock){
      wx.vibrateShort("heavy")
    }
  },
  settingIfShockToStart: function(e){
    ifShockToStart = e.detail.value
    if(ifShock){
      wx.vibrateShort("heavy")
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    ifSeat = [false,false,false,false,false,false,false,false]
    player_list = ["","","","","","","",""]
    for(var i=0;i<8;i++){
      player_list[i] = new Array(5);
      player_list[i] = null;
      player_list[i] = new Object;
      player_list[i]["player_ID"] = "座位"+(i+1)
      player_list[i]["player_index"] = i
      player_list[i]["player_lastChampion"] = [0,0,0,0,0,0]
      player_list[i]["player_prize_counter"] = [0,0,0,0,0]
      player_list[i]["player_champion_level"] = 0,
      player_list[i]["lastChampion_name"] = "无"
    }
    //remain_prizes = [1,1,0,0,0]
    remain_prizes = [32,16,8,4,2]
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let that = this
    ifStart = false
    wx.onAccelerometerChange(function(res){
      console.log("x轴数据",res.x)
      console.log("y轴数据",res.y)
      console.log("z轴数据",res.z)
      if (ifShockToStart && ifStart && res.x > .55 && res.y > .55) {
        that.BoBing()
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})