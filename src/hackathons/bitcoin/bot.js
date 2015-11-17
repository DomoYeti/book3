function decideWhetherOrNotToTrade(tweets){
	var bought = false
	var currency = bank.currency
	var game = _.includes(tweets, "game") //sell
	var news = _.includes(tweets, "news") //buy
	var money = _.includes(tweets, "money") //sell
	var fun = _.includes(tweets, "fun") //buy
	var actor = _.includes(tweets, "actor") //buy
	var good = _.includes(tweets, "good")
	var movies = _.includes(tweets, "movies") //buy
	var tech = _.includes(tweets, "tech") //sell
	var music = _.includes(tweets, "music") //sell
	var people = _.includes(tweets, "people") //buy
	var apple = _.includes(tweets, "apple") //buy
	var google = _.includes(tweets, "google") //buy
	if (news || fun || actor || movies || people || apple || google) 
	{
		if (currency == "USD") {
			bought = true
		}
		if (currency == "BITCOIN"){
			bought = false
		}
	}
	if (game || money || good || tech || music)
	{
		if (currency == "USD"){
			bought = false
		}
		if (currency == "BITCOIN"){
			bought = true
		}
	}
	return bought
	
}
