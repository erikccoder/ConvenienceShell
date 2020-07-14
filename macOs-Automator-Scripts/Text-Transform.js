function run(input, parameters) 
{
	function capitalize(s){
  		if (typeof s !== 'string') return ''
		return s.charAt(0).toUpperCase() + s.slice(1)
	}	
	const selectedText = input.map(function(i) {
		if(i === i.toUpperCase()){
			return capitalize(i)
		}
		else if(i === i.toLowerCase()){
			return i.toLowerCase()
		}
		else {
			return i.toUpperCase()
		}
	})
		
    return selectedText
}
