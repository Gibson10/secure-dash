
Template.GPS.onCreated(function(){
    Meteor.call('getGPS', (err, connections) => {
        // console.log(connections);

        Session.set('connect2',connections);
	
        }); 
});
// var results = [];


Template.GPS.helpers({
	connect(){
        
        var session=Session.get('connect2').content;
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
