export function createRangeDataList(element) {
	if (element.hasOwnProperty('list') && element.hasOwnProperty('min') && element.hasOwnProperty('max') && element.hasOwnProperty('step')) {	
	  const datalist = document.createElement('datalist');
	  const minimum = parseInt(element.getAttribute('min'));
	  const step = parseInt(element.getAttribute('step'));
	  const maximum = parseInt(element.getAttribute('max'));

	  datalist.id = element.getAttribute('list');
	  console.log(datalist.id)

	  for (let i = minimum; i < maximum+step; i = i + step) {
	    datalist.innerHTML +="<option value="+i+"></option>";
	  }

	  element.parentNode.insertBefore(datalist, element);
	}
}