// if(Meteor.isClient){
// Accounts.onLogin(function () {
//     FlowRouter.go('connections');
//   });
  
// Accounts.onLogout(function(){
//     FlowRouter.go('home'); 
// });

// }

// FlowRouter.triggers.enter([function(context, redirect)
// {
//     if(!Meteor.userId()){
//         FlowRouter.go('home');
//     }
// }]);


// FlowRouter.route('/',{
//     name:'home',
//     action(){
//         if(Meteor.userId()){
//             FlowRouter.go('connections');
//         }
//         GAnalytics.pageview();
//         BlazeLayout.render('HomeLayout');
//     }
// });



FlowRouter.route('/wifi',{
    name:'wifi',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout',{main:'WIFI'});
    }
});


FlowRouter.route('/',{
    name:'bluetooth',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout',{main:'Bluetooth'});
    }
});

FlowRouter.route('/gps',{
    name:'gps',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout',{main:'GPS'});
    }
});
FlowRouter.route('/lte',{
    name:'gps',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout',{main:'LTE'});
    }
});



FlowRouter.route('/vpn',{
    name:'gps',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout',{main:'VPN'});
    }
});


FlowRouter.route('/mdm',{
    name:'mdm',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout',{main:'MDM'});
    }
});


FlowRouter.route('/NFC',{
    name:'nfc',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout',{main:'NFC'});
    }
});

FlowRouter.route('/antivirus',{
    name:'antivirus',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout',{main:'Antivirus'});
    }
});

FlowRouter.route('/recentwificonnections',{
    name:'recentwificonnections',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout',{main:'RecentWIFI'});
    }
});

FlowRouter.route('/recentbluetoothconnections',{
    name:'recentbluetoothconnections',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout',{main:'Recentbluetooth'});
    }
});

FlowRouter.route('/recentvpnconnections',{
    name:'recentwificonnections',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout',{main:'RecentVPN'});
    }
});

FlowRouter.route('/connectWifi/:id',{
    name:'connect',
    action(){
        var id=FlowRouter.getParam('id');
        console.log(id);
        Meteor.call("ConnectWifi", id);
       

        GAnalytics.pageview();
        BlazeLayout.render('MainLayout',{main:'WIFI'});
    }
});



FlowRouter.route('/connectVPN/:id',{
    name:'connectVPN',
    action(){
        var id=FlowRouter.getParam('id');
        console.log(id);
        Meteor.call("ConnectVPN", id);
       

        GAnalytics.pageview();
        BlazeLayout.render('MainLayout',{main:'WIFI'});
    }
});



FlowRouter.route('/connectBluetooth/:id',{
    name:'connectBluetooth',
    action(){
        var id=FlowRouter.getParam('id');
        console.log(id);
        Meteor.call("ConnectBluetooth", id);
       

        GAnalytics.pageview();
        BlazeLayout.render('MainLayout',{main:'WIFI'});
    }
});






