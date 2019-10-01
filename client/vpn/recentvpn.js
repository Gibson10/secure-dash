Template.RecentVPN.onCreated(function(){
    Meteor.call('getconnectedVPN', (err, connections) => {
        // console.log(connections);

        Session.set('connect11',connections);
	
        }); 
});
// var results = [];


Template.RecentVPN.helpers({
	connect(){
        
        var session=Session.get('connect11').content;
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