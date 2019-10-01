import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});



Meteor.methods({
  'getConnections':function(){  
    const result=HTTP.call('GET','https://connections123.herokuapp.com/bluetoothapi')
   
      return result;
  },

  'getGPS': function(){
    const result=HTTP.call('GET','https://connections123.herokuapp.com/gpsapi')
    return result;
  },
  'getLTE': function(){
    const result=HTTP.call('GET','https://connections123.herokuapp.com/lteapi')
    return result;
  },
  'getWIFI': function(){
    const result=HTTP.call('GET','https://connections123.herokuapp.com/wifiapi')
    return result;
  },
  'getNFC': function(){
    const result=HTTP.call('GET','https://connections123.herokuapp.com/nfcapi')
    return result;
  },
  'getMDM': function(){
    const result=HTTP.call('GET','https://connections123.herokuapp.com/mdmapi')
    return result;
  },
  'getAntivirus': function(){
    const result=HTTP.call('GET','https://connections123.herokuapp.com/antivirusapi')
    return result;
  },
  'getVPN': function(){
    const result=HTTP.call('GET','https://connections123.herokuapp.com/vpnapi')
    return result;
  },
  'getLHE': function(){
    const result=HTTP.call('GET','https://connections123.herokuapp.com/lheapi')
    return result;
  },

  'ConnectWifi':function(id){
    const result=HTTP.call('POST','https://connections123.herokuapp.com/updatewifi/'+id);
    return result;
  },

  'ConnectVPN':function(id){
    const result=HTTP.call('POST','https://connections123.herokuapp.com/updatewifi/'+id);
    return result;
  },

  'ConnectBluetooth':function(id){
    const result=HTTP.call('POST','https://connections123.herokuapp.com/updatewifi/'+id);
    return result;
  },
  'getconnectedWifi': function(){
    const result=HTTP.call('GET','https://connections123.herokuapp.com/connectedwifiapi')
    return result;
  },
  
  'getconnectedVPN': function(){
    const result=HTTP.call('GET','https://connections123.herokuapp.com/connectedvpnapi')
    return result;
  },
  
  'getconnectedBluetooth': function(){
    const result=HTTP.call('GET','https://connections123.herokuapp.com/connectedbluetoothapi')
    return result;
  },

})
