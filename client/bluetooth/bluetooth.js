
Template.Bluetooth.onCreated(function(){
    Meteor.call('getConnections', (err, connec) => {
        // console.log(connections);

        Session.set('connect1',connec);
	
        }); 
});
var results = [];

// Artist Helpers
Template.Bluetooth.helpers({
	connect(){
        
        var session=Session.get('connect1').content;
        session = JSON.parse(session);
        console.log(session);

        for (let i =0; i< session.length; i++){

        }
        // results.push(session)


        // console.log(results);
        // for(i=0;i<results.length; i++){
        //     console.log(results[i]);
        // }
        // console.log(results.length);

		return session;
	}
});
Template.Bluetooth.events({
    'click, #button': function(){
        
    }
})
